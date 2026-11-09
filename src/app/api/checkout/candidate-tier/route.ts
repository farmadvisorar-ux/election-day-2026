import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const PACKAGES_CONFIG: Record<
  string,
  { name: string; amount: number; description: string }
> = {
  county: {
    name: 'County / Municipal Candidate Spotlight',
    amount: 29900, // $299.00
    description: 'Featured placement across selected county & sample ballot builder',
  },
  district: {
    name: 'U.S. House Congressional District Exclusive',
    amount: 89900, // $899.00
    description: 'Exclusive candidate spotlight on district hub & ZIP code resolver',
  },
  statewide: {
    name: 'Statewide U.S. Senate / Gubernatorial Takeover',
    amount: 249900, // $2,499.00
    description: 'Premier candidate takeover for statewide Senate & Governor races',
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      packageId,
      candidateName,
      campaignEmail,
      officeTitle,
      state,
      committeeFecId,
    } = body;

    const selectedPkg = PACKAGES_CONFIG[packageId] || PACKAGES_CONFIG.district;

    const origin = req.headers.get('origin') || 'https://election-day-2026.vercel.app';
    const successUrl = `${origin}/candidate-portal/success?package=${packageId}&name=${encodeURIComponent(
      candidateName || 'Candidate'
    )}&office=${encodeURIComponent(officeTitle || 'Office')}&fec=${encodeURIComponent(
      committeeFecId || 'Pending'
    )}`;
    const cancelUrl = `${origin}/candidate-portal`;

    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (stripeKey && !stripeKey.startsWith('mock_')) {
      const stripe = new Stripe(stripeKey, {
        apiVersion: '2025-01-27.acacia' as any,
      });

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: selectedPkg.name,
                description: `${selectedPkg.description} • FEC: ${committeeFecId || 'N/A'}`,
              },
              unit_amount: selectedPkg.amount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        customer_email: campaignEmail || undefined,
        metadata: {
          packageId,
          candidateName: candidateName || '',
          officeTitle: officeTitle || '',
          state: state || '',
          committeeFecId: committeeFecId || '',
        },
        success_url: `${successUrl}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl,
      } as any);

      return NextResponse.json({
        url: session.url,
        sessionId: session.id,
        isLiveStripe: true,
      });
    }

    // Sandbox / Test Mode fallback when API key is not configured in environment
    const mockSessionId = `cs_test_${Date.now()}`;
    return NextResponse.json({
      url: `${successUrl}&session_id=${mockSessionId}&mode=sandbox`,
      sessionId: mockSessionId,
      isLiveStripe: false,
    });
  } catch (error: any) {
    console.error('Stripe Checkout Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to initialize checkout session' },
      { status: 500 }
    );
  }
}
