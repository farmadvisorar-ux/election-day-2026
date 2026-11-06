import { NextResponse } from 'next/server';
import { STATES_DATA } from '../../../data/states';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body?.email || '').trim().toLowerCase();
    const stateSlug = (body?.stateSlug || 'california').trim().toLowerCase();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const state = STATES_DATA[stateSlug] || STATES_DATA['california'];

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ElectionDay2026.org//2026 Civic Deadlines//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:election-day-2026-${state.slug}@electionday2026.org`,
      'DTSTAMP:20260101T120000Z',
      'DTSTART;VALUE=DATE:20261103',
      'DTEND;VALUE=DATE:20261104',
      `SUMMARY:🇺🇸 2026 Midterm Election Day (${state.name} Polls: ${state.pollingHours})`,
      `DESCRIPTION:Vote in the 2026 U.S. Midterm General Election in ${state.name}!\\nPolling Hours: ${state.pollingHours}\\nVoter ID Rule: ${state.voterId.type}\\nRegistration Deadline: ${state.registrationDeadline.online}\\nEarly Voting: ${state.earlyVoting.starts} - ${state.earlyVoting.ends}\\nOfficial State Portal: ${state.officialPortal.url}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    return NextResponse.json({
      ok: true,
      subscriptionId: `ED2026-${state.postalCode}-${Date.now().toString(36).toUpperCase()}`,
      stateName: state.name,
      stateAbbr: state.postalCode,
      pollingHours: state.pollingHours,
      registrationDeadline: state.registrationDeadline.online,
      earlyVotingWindow: `${state.earlyVoting.starts} – ${state.earlyVoting.ends}`,
      icsContent,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Unable to process subscription request.' },
      { status: 500 }
    );
  }
}
