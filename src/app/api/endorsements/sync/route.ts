import { NextResponse } from 'next/server';
import {
  ENDORSEMENT_WIRE_SOURCES,
  LIVE_PARSED_WIRE_ITEMS,
  fetchAggregatedWireEndorsements,
} from '../../../../data/endorsementFeeds';

export async function GET() {
  try {
    const data = await fetchAggregatedWireEndorsements();
    return NextResponse.json({
      status: 'success',
      timestamp: new Date().toISOString(),
      sourcesPolled: data.sourcesChecked,
      feeds: ENDORSEMENT_WIRE_SOURCES.map((s) => ({
        id: s.id,
        name: s.name,
        category: s.category,
        status: s.status,
      })),
      newEndorsementsFound: data.items.filter((i) => i.isNew).length,
      endorsements: data.items,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to poll endorsement wire feeds',
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const data = await fetchAggregatedWireEndorsements();

    return NextResponse.json({
      status: 'success',
      action: 'sync_completed',
      timestamp: new Date().toISOString(),
      sourcesChecked: data.sourcesChecked,
      itemsIngested: data.items.length,
      newItems: data.items.filter((i) => i.isNew),
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Sync failed' },
      { status: 500 }
    );
  }
}
