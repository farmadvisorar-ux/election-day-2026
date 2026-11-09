export interface SenateRace2028 {
  state: string;
  stateSlug: string;
  postalCode: string;
  incumbent: string;
  party: 'Democrat' | 'Republican' | 'Independent';
  class: 'Class III';
  rating2028: 'Battleground' | 'Lean D' | 'Lean R' | 'Safe D' | 'Safe R';
  keyIssues: string;
}

export const ELECTION_DAY_2028_DATE = 'Tuesday, November 7, 2028';
export const STATUTORY_CITATION_2028 = '2 U.S. Code § 7 & 3 U.S. Code § 1';

export const SENATE_RACES_2028: SenateRace2028[] = [
  {
    state: 'Arizona',
    stateSlug: 'arizona',
    postalCode: 'AZ',
    incumbent: 'Mark Kelly',
    party: 'Democrat',
    class: 'Class III',
    rating2028: 'Battleground',
    keyIssues: 'Marquee Sun Belt presidential battleground; border security, water rights, and economy.',
  },
  {
    state: 'Georgia',
    stateSlug: 'georgia',
    postalCode: 'GA',
    incumbent: 'Raphael Warnock',
    party: 'Democrat',
    class: 'Class III',
    rating2028: 'Battleground',
    keyIssues: 'Crucial presidential battleground; high-stakes re-election following his 2022 runoff victory.',
  },
  {
    state: 'Nevada',
    stateSlug: 'nevada',
    postalCode: 'NV',
    incumbent: 'Catherine Cortez Masto',
    party: 'Democrat',
    class: 'Class III',
    rating2028: 'Battleground',
    keyIssues: 'Perennial battleground decided by narrow margins in Clark and Washoe counties.',
  },
  {
    state: 'North Carolina',
    stateSlug: 'northcarolina',
    postalCode: 'NC',
    incumbent: 'Ted Budd',
    party: 'Republican',
    class: 'Class III',
    rating2028: 'Battleground',
    keyIssues: 'Fast-growing southern battleground with competitive suburban legislative trends.',
  },
  {
    state: 'Pennsylvania',
    stateSlug: 'pennsylvania',
    postalCode: 'PA',
    incumbent: 'John Fetterman',
    party: 'Democrat',
    class: 'Class III',
    rating2028: 'Battleground',
    keyIssues: 'Critical rust-belt battleground; working-class manufacturing, energy policy, and Philadelphia/Pittsburgh turnout.',
  },
  {
    state: 'Wisconsin',
    stateSlug: 'wisconsin',
    postalCode: 'WI',
    incumbent: 'Ron Johnson',
    party: 'Republican',
    class: 'Class III',
    rating2028: 'Battleground',
    keyIssues: 'Top-tier Midwest battleground seat won by less than 1 percentage point in 2022.',
  },
  {
    state: 'Florida',
    stateSlug: 'florida',
    postalCode: 'FL',
    incumbent: 'Marco Rubio (or Appointed Successor)',
    party: 'Republican',
    class: 'Class III',
    rating2028: 'Lean R',
    keyIssues: 'Statewide Florida seat following executive cabinet transitions.',
  },
  {
    state: 'Ohio',
    stateSlug: 'ohio',
    postalCode: 'OH',
    incumbent: 'JD Vance Successor',
    party: 'Republican',
    class: 'Class III',
    rating2028: 'Lean R',
    keyIssues: 'Regular 6-year election for Ohio Class III seat.',
  },
  {
    state: 'New Hampshire',
    stateSlug: 'newhampshire',
    postalCode: 'NH',
    incumbent: 'Maggie Hassan',
    party: 'Democrat',
    class: 'Class III',
    rating2028: 'Battleground',
    keyIssues: 'Key New England battleground contest alongside presidential primary kickoff.',
  },
];

export const PRESIDENTIAL_PRIMARY_CALENDAR_2028 = [
  {
    milestone: 'Iowa Caucuses (First-in-the-Nation Caucus)',
    expectedWindow: 'January 2028',
    description: 'Traditional kickoff for the presidential nomination contest.',
  },
  {
    milestone: 'New Hampshire Primary (First-in-the-Nation Primary)',
    expectedWindow: 'January / February 2028',
    description: 'Statutory first-in-the-nation primary under NH RSA 653:9.',
  },
  {
    milestone: 'Nevada Caucuses & South Carolina Primary',
    expectedWindow: 'February 2028',
    description: 'Early testing grounds for diverse Western and Southern electorates.',
  },
  {
    milestone: 'Super Tuesday (15+ States Simultaneous Primary)',
    expectedWindow: 'Tuesday, March 7, 2028',
    description: 'Over one-third of all convention delegates awarded in CA, TX, NC, VA, and more.',
  },
  {
    milestone: 'National Political Conventions (RNC & DNC)',
    expectedWindow: 'July / August 2028',
    description: 'Official formal nomination of major party Presidential and Vice Presidential tickets.',
  },
  {
    milestone: 'General Election Debates & Early Voting Window',
    expectedWindow: 'September – November 2028',
    description: '45-day advance voting period expands nationwide.',
  },
  {
    milestone: 'Election Day 2028',
    expectedWindow: 'Tuesday, November 7, 2028',
    description: 'General election across all 50 states and Washington D.C. for the 48th President and 121st Congress.',
  },
];

export const RUNOFFS_AND_OFFYEAR_2027 = [
  {
    jurisdiction: 'Georgia Decertification & Potential General Runoff',
    date: 'December 2026',
    description: 'Under O.C.G.A. § 21-2-501, if no candidate received 50% + 1 vote on Nov 3, 2026, the top two advance to the December runoff.',
  },
  {
    jurisdiction: 'Louisiana General Election Runoff',
    date: 'Saturday, December 5, 2026',
    description: 'Louisiana open primary system advances top two finishers if no majority on Nov 3.',
  },
  {
    jurisdiction: '120th U.S. Congress Convenes',
    date: 'Sunday, January 3, 2027',
    description: 'Pursuant to the 20th Amendment to the U.S. Constitution, all newly elected Senators and Representatives take oath of office at noon.',
  },
  {
    jurisdiction: '2027 Virginia General Assembly Elections',
    date: 'Tuesday, November 2, 2027',
    description: 'All 100 seats in the Virginia House of Delegates and 40 State Senate seats on the ballot.',
  },
  {
    jurisdiction: '2027 New Jersey Legislative Elections',
    date: 'Tuesday, November 2, 2027',
    description: 'All 80 seats in the New Jersey General Assembly and 40 Senate seats.',
  },
  {
    jurisdiction: '2027 Kentucky & Mississippi Gubernatorial Elections',
    date: 'Tuesday, November 2, 2027',
    description: 'Off-year gubernatorial executive contests.',
  },
];
