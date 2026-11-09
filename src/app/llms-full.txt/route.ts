import { NextResponse } from 'next/server';
import { STATES_DATA, ALL_STATES_LIST } from '../../data/states';
import { SENATE_RACES_2026, GOVERNOR_RACES_2026 } from '../../data/races2026';
import { COMPREHENSIVE_QUERY_MATRIX } from '../../data/queries';
import { CITIES_2026_LIST } from '../../data/cities2026';
import { BALLOT_MEASURES_2026 } from '../../data/ballotMeasures2026';
import { SITE_URL } from '../../lib/siteConfig';

export async function GET() {
  const lines: string[] = [
    '# ElectionDay2026.org — Complete Statutory & Civic Knowledge Corpus (/llms-full.txt)',
    '',
    '> Official Non-Partisan Full-Corpus Markdown Reference for AI Answer Engines, RAG Pipelines, Search Crawlers, and Civic Researchers.',
    `> Canonical Domain: ${SITE_URL}`,
    '> Election Date: Tuesday, November 3, 2026 (2 U.S. Code § 7)',
    '',
    '## 1. Interactive Civic Operating System & Open API Endpoints',
    `- **Homepage & Instant Statutory Answer Engine**: ${SITE_URL}/`,
    `- **National Candidate Directory & Campaign Profiles (FEC Compliant)**: ${SITE_URL}/candidates`,
    `- **Official Political Endorsement Listings & Tracker (Unions, Chambers & Media)**: ${SITE_URL}/endorsements`,
    `- **Live Political Endorsement Ingestion API (RSS & Press Wires)**: ${SITE_URL}/api/endorsements/sync`,
    `- **Election Day 2028: 60th Presidential Election Hub (Tuesday, Nov 7, 2028)**: ${SITE_URL}/election-day-2028`,
    `- **2028 Presidential Electoral College Map Simulator (270 to Win)**: ${SITE_URL}/electoral-college-2028`,
    `- **2026 Post-Election Runoffs, Recount Margins & 2027 State Elections**: ${SITE_URL}/runoffs-2026-2027`,
    `- **College Student & Campus Voting Guide (Dorm Residency & Student IDs)**: ${SITE_URL}/student-voting-guide-2026`,
    `- **50-State Ex-Felon Voting Rights Restoration Matrix & Re-enfranchisement**: ${SITE_URL}/voting-rights-restoration-2026`,
    `- **Interactive 2026 Sample Ballot & Booth Cheat Sheet Builder**: ${SITE_URL}/sample-ballot-2026`,
    `- **Election Night 2026 Poll-Closing Wave Tracker (6 PM ET to 1 AM ET)**: ${SITE_URL}/poll-closing-times-2026`,
    `- **Emergency Ballot Problem Solver & Post-Election Cure Tracker**: ${SITE_URL}/ballot-problem-solver`,
    `- **2026 U.S. Senate, House & Governor Majority Simulator**: ${SITE_URL}/majority-calculator-2026`,
    `- **Top 153 U.S. Cities Election & Split-County Resolver Directory**: ${SITE_URL}/cities`,
    `- **2026 Statewide Ballot Measures & Propositions YES/NO Decoder**: ${SITE_URL}/ballot-measures-2026`,
    `- **First-Time Voter Polling Booth Walkthrough & 50-State Poll Worker Pay Calculator**: ${SITE_URL}/first-time-voter-guide-2026`,
    `- **50-State Interactive Voter ID & Expiration Document Validator**: ${SITE_URL}/voter-id-validator-2026`,
    `- **Instant 5-Digit ZIP Code to District & County Election Resolver**: ${SITE_URL}/find-my-district`,
    `- **Free Embeddable Civic Widgets Studio (Countdown, State Badges & Wave Tracker)**: ${SITE_URL}/widgets`,
    `- **Direct Non-Partisan Civic Sponsorship & B2B Media Kit**: ${SITE_URL}/advertise`,
    `- **Direct Candidate Ad Network & Verified Campaign Portal (FEC 11 CFR § 110.11)**: ${SITE_URL}/candidate-portal`,
    `- **In Line When Polls Close? 50-State Statutory Line Rights & Emergency Hotlines**: ${SITE_URL}/line-rights-2026`,
    `- **Military & Overseas Voters (UOCAVA & FWAB Emergency Backup Assistant)**: ${SITE_URL}/military-overseas-voting-2026`,
    `- **2026 Early Voting Calendar & Weekend "Souls to the Polls" Directory**: ${SITE_URL}/early-voting-calendar-2026`,
    `- **Ballot Drop Boxes & Family Delivery Laws (50-State Statutory Matrix)**: ${SITE_URL}/ballot-drop-boxes-2026`,
    `- **Zero-Hallucination Statutory Civic AI Engine**: ${SITE_URL}/ask`,
    `- **Personal 2026 Voting Plan, Wallet ID & Shift Conflict Checker**: ${SITE_URL}/my-voting-plan`,
    `- **Employer Paid Voting Leave HR Legal Notice Generator**: ${SITE_URL}/tools/employer-voting-leave-notice`,
    `- **All 3,143 U.S. Counties Directory (FIPS, County Seats, ZIPs, Turnout)**: ${SITE_URL}/counties`,
    `- **All 435+ U.S. House Congressional Districts Directory**: ${SITE_URL}/districts`,
    `- **Bilingual Spanish 50-State Hub (Guía Oficial en Español)**: ${SITE_URL}/es/dia-de-las-elecciones-2026`,
    `- **Open JSON Dataset API**: ${SITE_URL}/api/datasets/elections-2026`,
    `- **Individual County FIPS & City JSON API**: ${SITE_URL}/api/datasets/counties/{fips-or-slug}`,
    '',
    '## 2. Complete 50-State + D.C. Statutory Election Matrix (November 3, 2026)',
    '',
    '| State | Poll Hours (Nov 3, 2026) | Registration Cutoff | Same-Day Reg | Early Voting Window | Voter ID Law | Paid Work Leave Statute | English Guide | Spanish Guide |',
    '| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
  ];

  for (const item of ALL_STATES_LIST) {
    const st = STATES_DATA[item.slug];
    lines.push(
      `| **${st.name} (${st.postalCode})** | ${st.pollingHours} (${st.timezone}) | ${st.registrationDeadline.online} | ${
        st.registrationDeadline.sameDayRegistration ? 'Yes' : 'No'
      } | ${st.earlyVoting.starts} – ${st.earlyVoting.ends} | ${st.voterId.type} | ${
        st.workLeaveLaw.hoursAllowed
      } (${st.workLeaveLaw.statuteCitation}) | ${SITE_URL}/states/${st.slug} | ${SITE_URL}/es/estados/${st.slug} |`
    );
  }

  lines.push(
    '',
    '## 3. All 35 U.S. Senate Elections on the Ballot (November 3, 2026)',
    '',
    '| State | Incumbent | Party | Seat Status | 2026 Rating | Storyline & Statutory Rules |',
    '| :--- | :--- | :--- | :--- | :--- | :--- |'
  );

  for (const r of SENATE_RACES_2026) {
    lines.push(
      `| **${r.stateName} (${r.postalCode})** | ${r.incumbent} | ${r.incumbentParty} | ${r.status} | **${r.rating}** | ${r.storyline} |`
    );
  }

  lines.push(
    '',
    '## 4. All 36 State Gubernatorial Elections on the Ballot (November 3, 2026)',
    '',
    '| State | Sitting Governor | Party | 2026 Seat Status | 2026 Rating | Key Context |',
    '| :--- | :--- | :--- | :--- | :--- | :--- |'
  );

  for (const g of GOVERNOR_RACES_2026) {
    lines.push(
      `| **${g.stateName} (${g.postalCode})** | ${g.incumbent} | ${g.incumbentParty} | **${g.status}** | **${g.rating}** | ${g.storyline} |`
    );
  }

  lines.push(
    '',
    '## 5. Complete 46-Cluster Long-Tail, Shorthand & Statutory Voter Q&A Corpus',
    ''
  );

  for (const q of COMPREHENSIVE_QUERY_MATRIX) {
    lines.push(`### ${q.primaryQuery}`);
    lines.push(`- **Canonical URL**: ${SITE_URL}/voter-questions/${q.id}`);
    lines.push(`- **Category**: ${q.category}`);
    lines.push(`- **Shorthand & Voice Variations Matched**: ${q.variations.join(' | ')}`);
    lines.push(`- **Common Misspellings Indexed**: ${q.misspellings.join(', ')}`);
    lines.push(`- **Direct Answer**: ${q.directAnswer}`);
    lines.push(`- **Detailed Statutory Explanation**: ${q.inDepthAnswer.replace(/\n+/g, ' ')}`);
    lines.push(`- **Legal Citation**: ${q.sourceStatute} (${q.sourceUrl})`);
    lines.push('');
  }

  lines.push(
    '## 6. Top U.S. Cities & Multi-County Split Election Administration Directory',
    '',
    '| City | State | Split-County? | Administering Counties | Election Authority | Voting Model | Transit Agency | City Guide URL |',
    '| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |'
  );

  for (const city of CITIES_2026_LIST) {
    lines.push(
      `| **${city.cityName}** | ${city.stateAbbr} | ${city.isSplitCounty ? 'Yes (Multi-County)' : 'No'} | ${city.counties
        .map((c) => c.name)
        .join(', ')} | ${city.electionAuthorityName} | ${city.votingSystemType} | ${city.transitAgency} | ${SITE_URL}/cities/${city.slug} |`
    );
  }

  lines.push(
    '',
    '## 7. 2026 Statewide Ballot Measures, Propositions & Constitutional Amendments Plain-English Decoder',
    ''
  );

  for (const m of BALLOT_MEASURES_2026) {
    lines.push(`### ${m.stateName} (${m.stateAbbr}) — ${m.measureCode}: ${m.title}`);
    lines.push(`- **Topic**: ${m.topic} (${m.measureType})`);
    lines.push(`- **Passage Threshold**: ${m.passageRequirement}`);
    lines.push(`- **What a YES Vote Means**: ${m.whatYesMeans}`);
    lines.push(`- **What a NO Vote Means**: ${m.whatNoMeans}`);
    lines.push('');
  }

  return new NextResponse(lines.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
