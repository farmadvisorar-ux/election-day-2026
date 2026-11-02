export interface QueryCluster {
  id: string;
  category: 'logistics' | 'work-rights' | 'deadlines' | 'identification' | 'misspellings' | 'ballot';
  primaryQuery: string;
  variations: string[]; // How people ask it in Google, Perplexity, Voice Search
  misspellings: string[]; // Common typos, phonetic spellings
  directAnswer: string; // 35-55 words optimized for Google AI Overviews & Answer Engines
  inDepthAnswer: string;
  sourceStatute: string;
  sourceUrl: string;
}

export const COMPREHENSIVE_QUERY_MATRIX: QueryCluster[] = [
  {
    id: 'date-time-polls',
    category: 'logistics',
    primaryQuery: 'When is Election Day 2026 and what time do polls open and close?',
    variations: [
      'what date is the 2026 election',
      'what tuesday is election day 2026',
      'what time do polls open election day 2026',
      'what time do voting booths close 2026',
      'when do polls close on election night 2026',
      'is election day always the first tuesday in november',
      'when is vote day 2026',
      'mid term voting date 2026',
    ],
    misspellings: [
      'when is eleciton day 2026',
      'what date is electon day',
      'when is electoin day 2026',
      'voting day 2026 calender',
      'midterm electoins 2026 date',
      'elction day 2026',
    ],
    directAnswer:
      'Election Day 2026 is on Tuesday, November 3, 2026. Polling stations across the East Coast generally open between 6:00 AM and 7:00 AM EST and close between 7:00 PM and 8:00 PM local time. Voters waiting in line before poll closing time are legally entitled to cast their ballot.',
    inDepthAnswer:
      'Pursuant to 2 U.S. Code § 7, federal elections always occur on the Tuesday following the first Monday in November. Standard poll closing hours are 7:00 PM in states like Georgia, Florida, and Arizona; 7:30 PM in North Carolina and Ohio; and 8:00 PM in Pennsylvania, Michigan, and Wisconsin. Under federal and state voting statutes, as long as you are physically in line by the official closing time, poll workers are required to let you vote.',
    sourceStatute: '2 U.S. Code § 7 & State Election Codes',
    sourceUrl: 'https://www.law.cornell.edu/uscode/text/2/7',
  },
  {
    id: 'workplace-time-off',
    category: 'work-rights',
    primaryQuery: 'Can your job fire you for voting or do employers have to give you paid time off?',
    variations: [
      'do employers have to pay you to vote',
      'can i leave work to vote on election day',
      'can my boss fire me for going to vote',
      'how many hours do you get off work to vote',
      'voting leave laws by state 2026',
      'do you get time off to vote in texas california new york',
    ],
    misspellings: [
      'can job fire you for voteing',
      'paid time off to voat',
      'employers let you vote law',
    ],
    directAnswer:
      'No federal law guarantees time off to vote, but roughly 30 states legally require employers to grant 1 to 3 hours of paid or unpaid voting leave. Furthermore, almost all states prohibit employers from retaliating, penalizing, or terminating employees for exercising their constitutional right to vote.',
    inDepthAnswer:
      'In states such as California, New York, Colorado, and Illinois, employers must provide up to two hours of paid time off to vote if an employee lacks sufficient non-working time while polls are open. Most state statutes require employees to give prior notice (typically 2 working days before Election Day). Employers who fire or threaten workers for voting face misdemeanor criminal charges and severe labor department sanctions in most jurisdictions.',
    sourceStatute: 'State Labor & Election Codes (e.g., Cal. Elec. Code § 14000; NY Elec. Law § 3-110)',
    sourceUrl: 'https://www.law.cornell.edu/wex/voting_rights',
  },
  {
    id: 'mail-in-stamps-postage',
    category: 'logistics',
    primaryQuery: 'Do you need a postage stamp for a mail-in absentee ballot in 2026?',
    variations: [
      'does an absentee ballot require a stamp',
      'can i mail a ballot without a stamp',
      'will usps deliver a mail in ballot with no stamp',
      'how many stamps do i need for my mail ballot',
      'is return postage prepaid on mail ballots 2026',
    ],
    misspellings: [
      'do i need stamp for absentie ballot',
      'mail ballot postage reqired',
      'mailin ballot stamp',
    ],
    directAnswer:
      'Roughly 20 states and numerous counties provide prepaid return postage envelopes for mail-in ballots. Even if your ballot requires a stamp and you forget one, official USPS policy dictates that mail-in ballots must never be delayed or rejected for insufficient postage; USPS delivers them and bills the local election board.',
    inDepthAnswer:
      'Under United States Postal Service domestic mail guidelines (POM § 171), ballots from registered voters are expedited and delivered to election officials regardless of whether postage is affixed or deficient. However, to avoid municipal billing delays or potential disputes, election officials advise placing a standard First-Class Forever stamp on envelopes that are not explicitly marked "Official Election Mail - Postage Prepaid". Alternatively, voters can deposit their ballot into an official county drop box.',
    sourceStatute: 'USPS Postal Operations Manual (POM) § 171 & DMM 703',
    sourceUrl: 'https://about.usps.com/gov-services/election-mail/',
  },
  {
    id: 'voter-id-lost-wallet',
    category: 'identification',
    primaryQuery: 'What happens if you do not have an ID on Election Day or lost your wallet?',
    variations: [
      'can i vote without an id 2026',
      'what if i lost my drivers license before election day',
      'can you vote with an expired id',
      'provisional ballot rules if you have no id',
      'can i use a college student id to vote',
    ],
    misspellings: [
      'can i voat without id',
      'vote with expirred license',
      'provisonal ballot no id',
    ],
    directAnswer:
      'Under the federal Help America Vote Act (HAVA), any registered voter whose identity is questioned is legally entitled to cast a provisional ballot. In strict photo ID states, you typically have 3 to 6 days after the election to present approved ID to your county election board to have your vote counted.',
    inDepthAnswer:
      'Requirements depend on state law: 16 states require strict photo ID (such as Texas, Georgia, Ohio, and Wisconsin), where voters without ID must cast a provisional ballot and "cure" it by bringing ID to the election office within a statutory grace period (often by Friday following Election Day). In non-strict ID states (such as Michigan, Pennsylvania, and Florida), voters can either sign a sworn identity affidavit, present a non-photo document (utility bill or bank statement), or vote normally if they have previously voted at that precinct.',
    sourceStatute: 'Help America Vote Act (HAVA) 52 U.S. Code § 21082',
    sourceUrl: 'https://www.eac.gov/about/help-america-vote-act',
  },
  {
    id: 'moved-recently-voting',
    category: 'deadlines',
    primaryQuery: 'Can you vote if you recently moved to a new address or new state before the 2026 election?',
    variations: [
      'what happens if i moved right before election day',
      'can i vote in my old town if i moved',
      'how long do you have to live in a state before you can vote',
      'voting after moving states within 30 days of election',
    ],
    misspellings: [
      'vote if i moved resently',
      'voting in new adress without updating',
    ],
    directAnswer:
      'If you moved within the same county or state close to Election Day, you can generally vote at your former precinct or cast an updated provisional ballot at your new precinct. If you moved to a new state within 30 days of the election, federal law permits voting for federal offices from your previous state.',
    inDepthAnswer:
      'The federal Voting Rights Act (52 U.S.C. § 10502) guarantees that if you move to a new state within 30 days prior to a federal presidential election, you may vote in person or by absentee ballot in your former state of residence. For midterm congressional elections, many states have 30-day residency rules. If you moved within the same state, most state laws allow you to return to your old precinct or visit your new county elections office on Election Day to execute a change of address transfer.',
    sourceStatute: '52 U.S. Code § 10502 - Residence requirements for voting',
    sourceUrl: 'https://www.law.cornell.edu/uscode/text/52/10502',
  },
  {
    id: 'college-students-voting',
    category: 'deadlines',
    primaryQuery: 'Can college students vote at their university dorm or do they have to vote in their hometown?',
    variations: [
      'where should college students register to vote',
      'can college students vote in two states',
      'can out of state students vote in state they go to school',
      'do college student ids work at polling places',
    ],
    misspellings: [
      'collage students voting dorm',
      'can uni students vote in campus',
    ],
    directAnswer:
      'Under the landmark U.S. Supreme Court ruling Symm v. United States (1979), college students have the constitutional right to register and vote in their college town or in their permanent hometown, but voting in both locations is a federal felony.',
    inDepthAnswer:
      'College students may choose their voting residence: either their campus address (dorm or off-campus apartment) or their parent/guardian home address. However, casting ballots in both jurisdictions in the same election constitutes dual voting and carries federal penalties of up to 5 years imprisonment under 52 U.S.C. § 10307(e). Out-of-state students voting in their college state should verify whether their state accepts student IDs or requires a state driver license.',
    sourceStatute: 'Symm v. United States, 439 U.S. 1105 (1979) & 52 U.S.C. § 10307(e)',
    sourceUrl: 'https://supreme.justia.com/cases/federal/us/439/1105/',
  },
  {
    id: 'banking-stock-market-closures',
    category: 'logistics',
    primaryQuery: 'Are banks, credit unions, ATMs, and Wall Street stock markets open on Election Day 2026?',
    variations: [
      'do banks close for voting day 2026',
      'is chase wells fargo bank of america closed on election day',
      'does the stock market trade on election day 2026',
      'are wires and ach transfers delayed on election day',
    ],
    misspellings: [
      'are bansk closed election day',
      'bank holidays electon day',
    ],
    directAnswer:
      'Yes, all major banks, credit unions, and financial markets (NYSE and NASDAQ) are 100% open and operating on standard schedules on Election Day, Tuesday, November 3, 2026. Automated teller machines (ATMs) and ACH wire clearings function normally.',
    inDepthAnswer:
      'The Federal Reserve System maintains an explicit schedule of 11 statutory bank holidays. Election Day is not recognized on the Federal Reserve holiday calendar. Consequently, national commercial institutions (JPMorgan Chase, Bank of America, Wells Fargo, Citi, US Bank) operate normal retail branches and wire settlement services. The New York Stock Exchange and NASDAQ execute normal trading from 9:30 AM to 4:00 PM EST.',
    sourceStatute: 'Federal Reserve Board Holiday Schedule (5 U.S.C. § 6103)',
    sourceUrl: 'https://www.federalreserve.gov/aboutthefed/k8.htm',
  },
  {
    id: 'schools-childcare-closures',
    category: 'logistics',
    primaryQuery: 'Why are some schools closed on Election Day while other schools stay open?',
    variations: [
      'are schools closed on election day 2026',
      'why do public schools close on voting day',
      'do colleges have classes on election day',
      'is daycare open on election day 2026',
    ],
    misspellings: [
      'are scools closed election day',
      'shcool closed electon day',
    ],
    directAnswer:
      'School closures on Election Day are decided locally by county and district school boards. Many public schools close for student safety and logistics because their gymnasiums, cafeterias, and lobbies serve as public polling stations, bringing thousands of outside visitors through school doors.',
    inDepthAnswer:
      'Federal and state departments of education do not mandate school closures on Election Day. Instead, local superintendents and school boards frequently schedule teacher professional development, conference days, or student recess on general election Tuesdays to prevent security issues when unvetted members of the public enter school facilities to vote. Private schools and universities typically remain open unless located in states with designated state civic holidays.',
    sourceStatute: 'Local School District Policies & County Board Agreements',
    sourceUrl: 'https://www.ed.gov',
  },
];
