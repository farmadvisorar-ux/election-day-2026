export interface StateElectionData {
  slug: string;
  name: string;
  postalCode: string;
  wikidataId: string; // For Knowledge Graph Entity Disambiguation
  battleground: boolean;
  registrationDeadline: {
    online: string;
    mailPostmark: string;
    inPerson: string;
    sameDayRegistration: boolean;
    notes: string;
  };
  earlyVoting: {
    starts: string;
    ends: string;
    description: string;
    saturdayVoting: boolean;
    sundayVoting: boolean;
  };
  mailInVoting: {
    requestDeadline: string;
    returnDeadline: string;
    excuseRequired: boolean;
    postmarkMatters: boolean;
    details: string;
  };
  voterId: {
    type: 'Strict Photo ID' | 'Non-Strict Photo ID' | 'Non-Photo ID Required' | 'No Document Required (Signature Verification)';
    description: string;
    acceptableDocs: string[];
  };
  pollingHours: string;
  timezone: string;
  officialPortal: {
    name: string;
    url: string;
  };
  workLeaveLaw: {
    mandated: boolean;
    paid: boolean;
    hoursAllowed: string;
    statuteCitation: string;
    summary: string;
  };
  ballotSelfieLaw: {
    allowed: 'Allowed' | 'Prohibited' | 'Restricted (Mail Ballot Only)';
    details: string;
  };
  keyRaces2026: {
    senate: boolean;
    senateDescription?: string;
    governor: boolean;
    governorDescription?: string;
    competitiveHouseDistricts: string[];
    ballotMeasuresHighlight?: string;
  };
  isStateHoliday: boolean;
  holidayStatusNotes: string;
  faqs: { question: string; answer: string }[];
}

export const TOPIC_SPOKES = [
  {
    topicSlug: 'registration-deadline',
    label: 'Voter Registration Deadline',
    shortTitle: 'Registration Deadlines',
    searchIntent: 'Voter registration cutoff dates, online registration eligibility, and same-day registration rules',
  },
  {
    topicSlug: 'early-voting',
    label: 'Early Voting Dates & Schedule',
    shortTitle: 'Early Voting Calendar',
    searchIntent: 'In-person early voting start and end dates, weekend voting hours, and early voting locations',
  },
  {
    topicSlug: 'voter-id-rules',
    label: 'Voter ID Requirements & Laws',
    shortTitle: 'Voter ID Laws',
    searchIntent: 'Required identification at polling places, acceptable photo IDs, and provisional ballot cure rules',
  },
  {
    topicSlug: 'mail-in-ballot',
    label: 'Mail-In & Absentee Ballot Rules',
    shortTitle: 'Mail-In & Absentee Rules',
    searchIntent: 'Absentee ballot application deadlines, postmark rules, drop boxes, and postage requirements',
  },
  {
    topicSlug: 'polling-hours',
    label: 'Polling Place Hours & Locations',
    shortTitle: 'Poll Opening & Closing Hours',
    searchIntent: 'Official Election Day poll opening and closing times, line cutoff protections, and precinct lookup',
  },
  {
    topicSlug: 'holiday-work-laws',
    label: 'State Holiday & Paid Voting Leave Laws',
    shortTitle: 'Holiday & Work Time-Off Laws',
    searchIntent: 'State holiday closures, paid time off to vote statutes, employer notice requirements, and school schedules',
  },
] as const;

export type TopicSpokeSlug = (typeof TOPIC_SPOKES)[number]['topicSlug'];

// Detailed priority states + programmatic generator for all 50 states & DC
const PRIORITY_STATES: Record<string, StateElectionData> = {
  pennsylvania: {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    postalCode: 'PA',
    wikidataId: 'Q1400',
    battleground: true,
    registrationDeadline: {
      online: 'October 19, 2026 (11:59 PM EST)',
      mailPostmark: 'October 19, 2026',
      inPerson: 'October 19, 2026 (5:00 PM EST)',
      sameDayRegistration: false,
      notes: 'Must be registered at least 15 days prior to Election Day under 25 Pa.C.S. § 1326.',
    },
    earlyVoting: {
      starts: 'September 22, 2026',
      ends: 'October 27, 2026 (5:00 PM EST)',
      description: 'Pennsylvania offers In-Person Mail-in Ballot On Demand voting at County Boards of Elections and satellite election offices.',
      saturdayVoting: true,
      sundayVoting: false,
    },
    mailInVoting: {
      requestDeadline: 'October 27, 2026 (5:00 PM EST)',
      returnDeadline: 'November 3, 2026 (8:00 PM EST Physical Receipt)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Act 77 permits no-excuse mail-in voting. Postmarks do NOT count; ballots must arrive by 8:00 PM Election Night.',
    },
    voterId: {
      type: 'No Document Required (Signature Verification)',
      description: 'Only first-time voters in an election district must show an approved photo or non-photo ID. Returning voters sign the poll book.',
      acceptableDocs: ['PA Driver License or PennDOT ID', 'U.S. Passport', 'Student or Employee ID', 'Current Utility Bill or Bank Statement (with name and address)'],
    },
    pollingHours: '7:00 AM – 8:00 PM EST',
    timezone: 'Eastern (EST)',
    officialPortal: {
      name: 'Pennsylvania Department of State - Vote.pa.gov',
      url: 'https://www.vote.pa.gov',
    },
    workLeaveLaw: {
      mandated: false,
      paid: false,
      hoursAllowed: 'No statutory mandate (Employer policy governs)',
      statuteCitation: '25 P.S. § 3547 (Anti-intimidation protection)',
      summary: 'Pennsylvania does not mandate paid voting leave for private employees, though employers are strictly barred from coercing or penalizing voter participation.',
    },
    ballotSelfieLaw: {
      allowed: 'Allowed',
      details: 'Permitted so long as you do not photograph other voters or disrupt polling place operations.',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: '2026 Pennsylvania Gubernatorial Election (Incumbent Josh Shapiro eligible for re-election).',
      competitiveHouseDistricts: ['PA-01 (Bucks County)', 'PA-07 (Lehigh Valley)', 'PA-08 (Scranton/Poconos)', 'PA-10 (Harrisburg/York)'],
      ballotMeasuresHighlight: 'Potential constitutional amendments on voter identification and judicial retirement.',
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a paid state holiday; county courts and municipal offices in select jurisdictions operate on election schedules.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Pennsylvania?',
        answer: 'Election Day 2026 in Pennsylvania is Tuesday, November 3, 2026. Polling places open statewide at 7:00 AM and close at 8:00 PM EST.',
      },
      {
        question: 'What is the voter registration deadline in Pennsylvania for 2026?',
        answer: 'The voter registration cutoff in Pennsylvania is Monday, October 19, 2026 (15 days before Election Day). Online applications must be submitted by 11:59 PM EST at vote.pa.gov.',
      },
      {
        question: 'Do I need a photo ID to vote in Pennsylvania in 2026?',
        answer: 'No photo ID is required for returning voters voting at their familiar polling precinct. Only first-time voters in a precinct must display an approved photo or non-photo ID.',
      },
    ],
  },
  texas: {
    slug: 'texas',
    name: 'Texas',
    postalCode: 'TX',
    wikidataId: 'Q1439',
    battleground: true,
    registrationDeadline: {
      online: 'Not Available (Paper Mail or In-Person Only)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026',
      sameDayRegistration: false,
      notes: 'Texas requires paper registration applications postmarked or delivered to the county voter registrar at least 30 days before Election Day.',
    },
    earlyVoting: {
      starts: 'October 19, 2026',
      ends: 'October 30, 2026',
      description: 'Mandatory two-week in-person early voting period across all 254 Texas counties.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 23, 2026 (Received by Early Voting Clerk)',
      returnDeadline: 'November 3, 2026 (7:00 PM) or November 4 (5:00 PM if postmarked by Election Day)',
      excuseRequired: true,
      postmarkMatters: true,
      details: 'Restricted to voters aged 65+, voters with sickness/physical disability, expected absence from county, or maternity/childbirth within 3 weeks.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Voters must present one of 7 state-approved photo IDs (expired up to 4 years for voters 18-69, or expired any duration for voters 70+).',
      acceptableDocs: ['Texas Driver License (DPS)', 'Texas Election Identification Certificate (EIC)', 'Texas Personal ID Card', 'Texas Handgun License (LTC)', 'U.S. Military Photo ID', 'U.S. Citizenship Certificate with Photo', 'U.S. Passport'],
    },
    pollingHours: '7:00 AM – 7:00 PM Local Time',
    timezone: 'Central (CST) & Mountain (MST in El Paso/Hudspeth)',
    officialPortal: {
      name: 'Texas Secretary of State - VoteTexas.gov',
      url: 'https://www.votetexas.gov',
    },
    workLeaveLaw: {
      mandated: true,
      paid: true,
      hoursAllowed: 'Up to 2 hours paid leave (unless employee has 2 consecutive non-work hours while polls are open)',
      statuteCitation: 'Texas Election Code § 276.004',
      summary: 'Employers must grant paid time off to vote on Election Day or during Early Voting unless the employee has 2 consecutive hours outside working hours while polls are open. Violation is a Class C misdemeanor.',
    },
    ballotSelfieLaw: {
      allowed: 'Prohibited',
      details: 'Texas Election Code § 61.014 prohibits operating wireless communications devices or photography equipment within 100 feet of voting stations.',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Class II U.S. Senate Seat (Incumbent John Cornyn seat; major statewide contest).',
      governor: true,
      governorDescription: '2026 Texas Gubernatorial Election & Lieutenant Governor / Attorney General contests.',
      competitiveHouseDistricts: ['TX-15 (South Texas)', 'TX-28 (Laredo/Rio Grande)', 'TX-34 (Brownsville/Corpus Christi)'],
      ballotMeasuresHighlight: 'Statewide constitutional amendments on property tax compression and infrastructure.',
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday for general elections, but Texas Election Code § 276.004 guarantees paid employee voting time.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Texas?',
        answer: 'Election Day 2026 in Texas is Tuesday, November 3, 2026. Polls are open from 7:00 AM to 7:00 PM local time.',
      },
      {
        question: 'Can I register to vote online in Texas for 2026?',
        answer: 'No, Texas does not allow standalone online voter registration. You must mail a signed paper application postmarked by October 5, 2026, or register when renewing your driver license.',
      },
      {
        question: 'Does my Texas employer have to give me paid time off to vote?',
        answer: 'Yes, under Texas Election Code § 276.004, your employer must give you paid time off to vote unless you already have two consecutive non-working hours while polls are open.',
      },
    ],
  },
  georgia: {
    slug: 'georgia',
    name: 'Georgia',
    postalCode: 'GA',
    wikidataId: 'Q1428',
    battleground: true,
    registrationDeadline: {
      online: 'October 5, 2026 (11:59 PM EST)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026',
      sameDayRegistration: false,
      notes: 'Registration closes on the fifth Monday prior to the general election under O.C.G.A. § 21-2-224.',
    },
    earlyVoting: {
      starts: 'October 12, 2026',
      ends: 'October 30, 2026',
      description: 'Three weeks of mandatory in-person advance voting across all 159 counties, including two mandatory Saturdays and optional Sundays.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 23, 2026 (11 days prior to Election Day)',
      returnDeadline: 'November 3, 2026 (7:00 PM EST Physical Receipt)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'No-excuse absentee voting requires providing your GA Driver License number or State ID number on the ballot envelope.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Valid state or federal government-issued photo ID is mandatory for both in-person and absentee voting.',
      acceptableDocs: ['Georgia Driver License (even if expired)', 'Valid State or Federal Govt Employee Photo ID', 'U.S. Passport', 'U.S. Military Photo ID', 'Tribal Photo ID', 'Free Georgia Voter ID Card'],
    },
    pollingHours: '7:00 AM – 7:00 PM EST',
    timezone: 'Eastern (EST)',
    officialPortal: {
      name: 'Georgia Secretary of State - My Voter Page (MVP)',
      url: 'https://mvp.sos.ga.gov',
    },
    workLeaveLaw: {
      mandated: true,
      paid: false,
      hoursAllowed: 'Up to 2 hours leave (unless employee shift begins 2 hours after polls open or ends 2 hours before polls close)',
      statuteCitation: 'O.C.G.A. § 21-2-404',
      summary: 'Georgia employers must grant up to two hours of time off to vote upon reasonable advance notice if the employee does not have 2 hours outside work hours.',
    },
    ballotSelfieLaw: {
      allowed: 'Prohibited',
      details: 'O.C.G.A. § 21-2-579 prohibits photographing a voted ballot at an in-person polling place.',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Class II U.S. Senate Seat (Incumbent Jon Ossoff up for re-election; #1 national Senate battleground).',
      governor: true,
      governorDescription: 'Open Georgia Gubernatorial Election (Incumbent Brian Kemp term-limited).',
      competitiveHouseDistricts: ['GA-02 (Macon/Columbus)', 'GA-06 (Metro Atlanta)'],
      ballotMeasuresHighlight: 'Constitutional tax homestead caps and conservation initiatives.',
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a paid state holiday; O.C.G.A. § 21-2-404 guarantees up to two hours voting time off for employees.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Georgia?',
        answer: 'Election Day 2026 in Georgia is Tuesday, November 3, 2026. Polls open at 7:00 AM and close at 7:00 PM EST.',
      },
      {
        question: 'Can you vote with an expired driver license in Georgia?',
        answer: 'Yes! Under O.C.G.A. § 21-2-417, a Georgia driver license is acceptable for voting even if it has expired.',
      },
      {
        question: 'What major races are on the Georgia ballot in 2026?',
        answer: 'Georgia features both a marquee Class II U.S. Senate race and an open-seat Gubernatorial election on November 3, 2026.',
      },
    ],
  },
  arizona: {
    slug: 'arizona',
    name: 'Arizona',
    postalCode: 'AZ',
    wikidataId: 'Q816',
    battleground: true,
    registrationDeadline: {
      online: 'October 5, 2026 (11:59 PM MST)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026',
      sameDayRegistration: false,
      notes: 'Must register 29 days before the election under A.R.S. § 16-120. Documentary proof of citizenship required for full state/local ballots.',
    },
    earlyVoting: {
      starts: 'October 7, 2026',
      ends: 'October 30, 2026 (5:00 PM MST)',
      description: 'Early ballots mailed out starting October 7; in-person early voting sites open statewide for 27 days prior to Election Day.',
      saturdayVoting: true,
      sundayVoting: false,
    },
    mailInVoting: {
      requestDeadline: 'October 23, 2026 (5:00 PM MST)',
      returnDeadline: 'November 3, 2026 (7:00 PM MST Physical Receipt)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Voters on the Active Early Voting List (AEVL) automatically receive a ballot by mail for every election.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Present 1 valid photo ID with current address, OR 2 non-photo documents with name and current address.',
      acceptableDocs: ['Arizona Driver License or Non-Operating ID', 'Tribal Enrollment Card or ID', 'U.S. Passport + Utility Bill', 'Two Non-Photo IDs (Utility bill, bank statement, vehicle registration, property tax statement)'],
    },
    pollingHours: '6:00 AM – 7:00 PM MST',
    timezone: 'Mountain Standard Time (MST - No Daylight Saving Time)',
    officialPortal: {
      name: 'Arizona Secretary of State - Arizona.Vote',
      url: 'https://my.arizona.vote',
    },
    workLeaveLaw: {
      mandated: true,
      paid: true,
      hoursAllowed: 'Up to 3 consecutive hours paid leave (if fewer than 3 consecutive non-work hours exist while polls are open)',
      statuteCitation: 'A.R.S. § 16-402',
      summary: 'Employers must provide enough paid time off to give the employee 3 consecutive hours to vote if their work shift starts within 3 hours of poll opening and ends within 3 hours of poll closing. Must apply before Election Day.',
    },
    ballotSelfieLaw: {
      allowed: 'Restricted (Mail Ballot Only)',
      details: 'A.R.S. § 16-515 prohibits taking photographs or videos within the 75-foot limit of an in-person polling place, but photographing your own mail-in ballot at home is legal.',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: '2026 Arizona Gubernatorial Election (Incumbent Katie Hobbs re-election contest).',
      competitiveHouseDistricts: ['AZ-01 (Phoenix/Scottsdale)', 'AZ-06 (Tucson/Southeastern AZ)'],
      ballotMeasuresHighlight: 'Citizen ballot propositions on water rights, education funding, and election administration.',
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday, though A.R.S. § 16-402 guarantees up to 3 consecutive hours paid voting leave.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Arizona?',
        answer: 'Election Day 2026 in Arizona is Tuesday, November 3, 2026. Polling places open early at 6:00 AM and close at 7:00 PM MST.',
      },
      {
        question: 'Does Arizona get 3 hours of paid time off to vote?',
        answer: 'Yes! Under A.R.S. § 16-402, if there are fewer than three consecutive hours between the opening of polls and the beginning of your shift (or between the end of your shift and poll closing), you may take paid time off to secure three consecutive hours, provided you notify your employer before Election Day.',
      },
    ],
  },
  ohio: {
    slug: 'ohio',
    name: 'Ohio',
    postalCode: 'OH',
    wikidataId: 'Q1397',
    battleground: true,
    registrationDeadline: {
      online: 'October 5, 2026 (11:59 PM EST)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026 (9:00 PM EST at County Boards of Elections)',
      sameDayRegistration: false,
      notes: 'Ohio Constitution Art. V, § 1 requires voter registration at least 30 days before an election.',
    },
    earlyVoting: {
      starts: 'October 6, 2026',
      ends: 'November 1, 2026 (5:00 PM EST)',
      description: 'In-person absentee early voting begins the day after the registration deadline at each County Board of Elections early vote center.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 27, 2026 (8:30 PM EST)',
      returnDeadline: 'November 3, 2026 (7:30 PM in-person) or postmarked by Nov 2 and received by Nov 7',
      excuseRequired: false,
      postmarkMatters: true,
      details: 'Universal no-excuse absentee voting by mail; requires a paper application sent to the County Board of Elections.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Following HB 458, Ohio requires an unexpired state or federal photo ID for all in-person voting.',
      acceptableDocs: ['Unexpired Ohio Driver License or State ID Card', 'Interim ID Form issued by Ohio BMV', 'U.S. Passport or Passport Card', 'U.S. Military ID Card, Ohio National Guard ID, or U.S. VA ID'],
    },
    pollingHours: '6:30 AM – 7:30 PM EST',
    timezone: 'Eastern (EST)',
    officialPortal: {
      name: 'Ohio Secretary of State - VoteOhio.gov',
      url: 'https://www.voteohio.gov',
    },
    workLeaveLaw: {
      mandated: true,
      paid: false,
      hoursAllowed: 'Reasonable time off to vote (Paid for salaried employees under Attorney General interpretation)',
      statuteCitation: 'Ohio Revised Code § 3599.06',
      summary: 'Ohio law prohibits any employer from discharging or threatening to discharge an employee for taking a reasonable amount of time to vote on Election Day.',
    },
    ballotSelfieLaw: {
      allowed: 'Prohibited',
      details: 'Ohio Revised Code § 3599.20 prohibits exhibiting a marked ballot or allowing it to be seen with apparent intention of letting how you voted be known.',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Special U.S. Senate Election to complete the remainder of the term vacated in 2025.',
      governor: true,
      governorDescription: 'Open Ohio Gubernatorial Election (Incumbent Mike DeWine term-limited).',
      competitiveHouseDistricts: ['OH-01 (Cincinnati)', 'OH-09 (Toledo/Northwest OH)', 'OH-13 (Akron/Summit County)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday; Ohio Revised Code § 3599.06 protects employees taking reasonable time off to vote.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Ohio?',
        answer: 'Election Day 2026 in Ohio is Tuesday, November 3, 2026. Polling places open at 6:30 AM and close at 7:30 PM EST.',
      },
      {
        question: 'Can I still use a utility bill as Voter ID in Ohio?',
        answer: 'No. Under Ohio House Bill 458, utility bills, bank statements, and paychecks are no longer acceptable for in-person voting. You must present an unexpired photo ID.',
      },
    ],
  },
  florida: {
    slug: 'florida',
    name: 'Florida',
    postalCode: 'FL',
    wikidataId: 'Q812',
    battleground: true,
    registrationDeadline: {
      online: 'October 5, 2026 (11:59 PM Local Time)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026',
      sameDayRegistration: false,
      notes: 'Book closing is 29 days before the election under Fla. Stat. § 97.055.',
    },
    earlyVoting: {
      starts: 'October 24, 2026',
      ends: 'October 31, 2026 (Some counties extend through Nov 1)',
      description: 'Mandatory 8-day early voting period (minimum 8 hours/day) across all 67 county Supervisors of Elections.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 22, 2026 (5:00 PM Local Time)',
      returnDeadline: 'November 3, 2026 (7:00 PM Local Time Physical Receipt)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'All vote-by-mail requests expire after each general election cycle and must be renewed with your county Supervisor of Elections.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Requires current and valid photo ID with signature (or two separate IDs if the photo ID lacks a signature).',
      acceptableDocs: ['Florida Driver License', 'Florida DHSMV ID Card', 'U.S. Passport', 'Debit or Credit Card with Photo', 'Military ID', 'Student ID', 'Concealed Weapon License'],
    },
    pollingHours: '7:00 AM – 7:00 PM Local Time',
    timezone: 'Eastern (EST) & Central (CST in Panhandle west of Apalachicola River)',
    officialPortal: {
      name: 'Florida Division of Elections - RegisterToVoteFlorida.gov',
      url: 'https://dos.fl.gov/elections',
    },
    workLeaveLaw: {
      mandated: false,
      paid: false,
      hoursAllowed: 'No statutory hour quota (Coercion/firing strictly felony prohibited)',
      statuteCitation: 'Fla. Stat. § 104.081',
      summary: 'Florida does not specify paid leave hours, but Fla. Stat. § 104.081 makes it a third-degree felony for an employer to discharge or threaten to discharge an employee for voting or not voting.',
    },
    ballotSelfieLaw: {
      allowed: 'Restricted (Mail Ballot Only)',
      details: 'Fla. Stat. § 102.031 prohibits photography inside a polling room or early voting area, except that you may photograph your own mail ballot.',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Special U.S. Senate Election in Florida on the November 2026 ballot.',
      governor: true,
      governorDescription: 'Open Florida Gubernatorial Election (Incumbent Ron DeSantis term-limited).',
      competitiveHouseDistricts: ['FL-09 (Kissimmee/Central FL)', 'FL-13 (Pinellas)', 'FL-27 (Miami)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday in Florida; Fla. Stat. § 104.081 makes firing an employee for voting a felony.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Florida?',
        answer: 'Election Day 2026 in Florida is Tuesday, November 3, 2026. Polls are open from 7:00 AM to 7:00 PM local time (EST and CST).',
      },
      {
        question: 'Did my Florida Vote-by-Mail request expire?',
        answer: 'Yes. Under Florida law (SB 90), all standing Vote-by-Mail requests expired after the previous general election. You must submit a fresh request to your county Supervisor of Elections by October 22, 2026.',
      },
    ],
  },
  michigan: {
    slug: 'michigan',
    name: 'Michigan',
    postalCode: 'MI',
    wikidataId: 'Q1166',
    battleground: true,
    registrationDeadline: {
      online: 'October 19, 2026 (11:59 PM EST)',
      mailPostmark: 'October 19, 2026',
      inPerson: 'November 3, 2026 (8:00 PM EST via Same-Day Registration at Clerk Office)',
      sameDayRegistration: true,
      notes: 'Voters can register in person through 8:00 PM on Election Day at their city or township clerk office with proof of residency.',
    },
    earlyVoting: {
      starts: 'October 24, 2026',
      ends: 'November 1, 2026',
      description: 'Constitutional guarantee (Proposal 22-2) of at least 9 consecutive days of early in-person voting for 8 hours per day.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 30, 2026 (5:00 PM EST by mail) or Nov 2 (4:00 PM in person)',
      returnDeadline: 'November 3, 2026 (8:00 PM EST) or 6 days post-election for military/overseas',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Constitutional right to no-excuse absentee voting and permanent mail ballot list enrollment with prepaid return postage.',
    },
    voterId: {
      type: 'Non-Strict Photo ID',
      description: 'Voters are asked to show photo ID, or they may sign a standard Affidavit of Identity Not in Possession of Picture ID to vote a regular ballot.',
      acceptableDocs: ['Michigan Driver License or State ID', 'U.S. Passport', 'Military Photo ID', 'High School or College Student Photo ID', 'Tribal Photo ID'],
    },
    pollingHours: '7:00 AM – 8:00 PM Local Time',
    timezone: 'Eastern (EST) & Central (CST in 4 Upper Peninsula counties)',
    officialPortal: {
      name: 'Michigan Voter Information Center - Michigan.gov/Vote',
      url: 'https://mvic.sos.state.mi.us',
    },
    workLeaveLaw: {
      mandated: false,
      paid: false,
      hoursAllowed: 'No statutory leave mandate (Employer coercion prohibited)',
      statuteCitation: 'MCL § 168.931(1)(d)',
      summary: 'Michigan does not require paid voting leave, but MCL § 168.931 makes it a misdemeanor for an employer to threaten to discharge or penalize an employee to influence their vote.',
    },
    ballotSelfieLaw: {
      allowed: 'Allowed',
      details: 'Permitted in Michigan to photograph your own ballot inside the voting booth, provided you do not photograph anyone else in the polling place.',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Open Class II U.S. Senate Seat in Michigan (Premier national battleground).',
      governor: true,
      governorDescription: 'Open Michigan Gubernatorial Election (Incumbent Gretchen Whitmer term-limited).',
      competitiveHouseDistricts: ['MI-03 (Grand Rapids)', 'MI-07 (Lansing)', 'MI-08 (Flint/Saginaw/Bay City)', 'MI-10 (Macomb County)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a general state holiday, though union contracts (including UAW) and municipal offices frequently observe Election Day as a paid holiday.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Michigan?',
        answer: 'Election Day 2026 in Michigan is Tuesday, November 3, 2026. Polls are open from 7:00 AM to 8:00 PM local time.',
      },
      {
        question: 'Can I register and vote on Election Day in Michigan?',
        answer: 'Yes! Michigan offers Same-Day Voter Registration until 8:00 PM on November 3, 2026, at your city or township clerk office. Bring a document showing your name and current address (such as a utility bill, lease, or bank statement).',
      },
    ],
  },
  nevada: {
    slug: 'nevada',
    name: 'Nevada',
    postalCode: 'NV',
    wikidataId: 'Q1227',
    battleground: true,
    registrationDeadline: {
      online: 'November 3, 2026 (Same-Day Registration Available Online & In-Person)',
      mailPostmark: 'October 6, 2026',
      inPerson: 'November 3, 2026',
      sameDayRegistration: true,
      notes: 'Nevada allows voters to register or update registration online or in person right through Election Day with a valid NV Driver License or ID.',
    },
    earlyVoting: {
      starts: 'October 17, 2026',
      ends: 'October 30, 2026',
      description: '14 consecutive days of early in-person voting at county vote centers across Clark, Washoe, and rural counties.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'Automatic (Universal Mail-In Ballot State)',
      returnDeadline: 'Postmarked on or before Nov 3, 2026, and received by Nov 7, 2026 (5:00 PM)',
      excuseRequired: false,
      postmarkMatters: true,
      details: 'Under AB 321, every active registered voter in Nevada is automatically mailed an official ballot with prepaid return postage.',
    },
    voterId: {
      type: 'No Document Required (Signature Verification)',
      description: 'Nevada verifies voter identity via digital or physical signature comparison. Photo ID is only required for Same-Day Registration.',
      acceptableDocs: ['Nevada Driver License or DMV ID (required only for Same-Day Registration)'],
    },
    pollingHours: '7:00 AM – 7:00 PM PST',
    timezone: 'Pacific (PST)',
    officialPortal: {
      name: 'Nevada Secretary of State - Vote.NV.gov',
      url: 'https://www.nvsos.gov/sos/elections',
    },
    workLeaveLaw: {
      mandated: true,
      paid: true,
      hoursAllowed: '1 to 3 hours paid leave (based on distance from workplace to polling place)',
      statuteCitation: 'NRS § 293.463',
      summary: 'Nevada law guarantees paid time off to vote if it is impracticable to vote before or after work: 1 hour (if within 2 miles), 2 hours (2 to 10 miles), or 3 hours (over 10 miles).',
    },
    ballotSelfieLaw: {
      allowed: 'Prohibited',
      details: 'NRS § 293.274 prohibits members of the general public from taking photographs or recording inside a polling place.',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: '2026 Nevada Gubernatorial Election (Incumbent Joe Lombardo re-election contest).',
      competitiveHouseDistricts: ['NV-01 (Las Vegas)', 'NV-03 (Henderson/South Vegas)', 'NV-04 (North Las Vegas)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday, but NRS § 293.463 mandates 1 to 3 hours of paid voting leave for all employees.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Nevada?',
        answer: 'Election Day 2026 in Nevada is Tuesday, November 3, 2026. Polling centers are open from 7:00 AM to 7:00 PM PST.',
      },
      {
        question: 'Will Nevada mail me a ballot automatically in 2026?',
        answer: 'Yes. All active registered voters in Nevada automatically receive a mail-in ballot approximately three weeks before Election Day unless they explicitly opted out.',
      },
    ],
  },
  northcarolina: {
    slug: 'northcarolina',
    name: 'North Carolina',
    postalCode: 'NC',
    wikidataId: 'Q1454',
    battleground: true,
    registrationDeadline: {
      online: 'October 9, 2026 (5:00 PM EST via NCDMV)',
      mailPostmark: 'October 9, 2026',
      inPerson: 'October 31, 2026 (3:00 PM EST via Same-Day Registration during Early Voting)',
      sameDayRegistration: true,
      notes: 'Regular registration ends 25 days before Election Day, but voters can register and vote at the same time during Early Voting (Oct 15 – Oct 31). Same-day registration is NOT available on Election Day.',
    },
    earlyVoting: {
      starts: 'October 15, 2026',
      ends: 'October 31, 2026 (3:00 PM EST)',
      description: '17-day early in-person voting window across all 100 counties with Same-Day Voter Registration available at every site.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 27, 2026 (5:00 PM EST)',
      returnDeadline: 'November 3, 2026 (7:30 PM EST Physical Receipt)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Requires two witness signatures (or one notary signature) AND a photocopy of acceptable photo ID (or Photo ID Exception Form). Must be received by 7:30 PM Election Day.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'North Carolina requires voters to show an acceptable photo ID when voting in person or by mail. Free Voter Photo IDs are available at every County Board of Elections.',
      acceptableDocs: ['NC Driver License or DMV ID', 'U.S. Passport', 'Approved NC College/University Student ID', 'State/Local Government Charter Employee ID', 'Military or Veterans ID', 'Free County Board of Elections Voter Photo ID'],
    },
    pollingHours: '6:30 AM – 7:30 PM EST',
    timezone: 'Eastern (EST)',
    officialPortal: {
      name: 'North Carolina State Board of Elections - NCSBE.gov',
      url: 'https://www.ncsbe.gov',
    },
    workLeaveLaw: {
      mandated: false,
      paid: false,
      hoursAllowed: 'No statutory mandate (Retaliation prohibited under N.C.G.S. § 163-274)',
      statuteCitation: 'N.C.G.S. § 163-274(a)(7)',
      summary: 'North Carolina does not require paid voting leave, but N.C.G.S. § 163-274 makes it a Class 2 misdemeanor for an employer to discharge or threaten to discharge an employee because of how they vote.',
    },
    ballotSelfieLaw: {
      allowed: 'Prohibited',
      details: 'N.C.G.S. § 163-166.3 prohibits photographing or videotaping a voted ballot or any voter within the voting enclosure.',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Class II U.S. Senate Seat (Incumbent Thom Tillis seat; premier national Senate toss-up).',
      governor: false,
      competitiveHouseDistricts: ['NC-01 (Rocky Mount/Eastern NC)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday; state offices and banks operate regular hours.',
    faqs: [
      {
        question: 'When is Election Day 2026 in North Carolina?',
        answer: 'Election Day 2026 in North Carolina is Tuesday, November 3, 2026. Polling places open at 6:30 AM and close at 7:30 PM EST.',
      },
      {
        question: 'Can I register to vote on Election Day in North Carolina?',
        answer: 'No. In North Carolina, Same-Day Voter Registration is ONLY available during the Early Voting period (October 15 through October 31, 2026), not on Election Day itself.',
      },
    ],
  },
  wisconsin: {
    slug: 'wisconsin',
    name: 'Wisconsin',
    postalCode: 'WI',
    wikidataId: 'Q1537',
    battleground: true,
    registrationDeadline: {
      online: 'October 14, 2026 (11:59 PM CST)',
      mailPostmark: 'October 14, 2026',
      inPerson: 'November 3, 2026 (8:00 PM CST via Election Day Registration at Polling Place)',
      sameDayRegistration: true,
      notes: 'Online and mail registration closes 20 days prior, but voters can register in person at their municipal clerk office through Oct 30 or at their polling place on Election Day.',
    },
    earlyVoting: {
      starts: 'October 20, 2026',
      ends: 'November 1, 2026',
      description: 'Two weeks of in-person absentee voting at municipal clerk offices and satellite locations.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 29, 2026 (5:00 PM CST)',
      returnDeadline: 'November 3, 2026 (8:00 PM CST Physical Receipt)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Absentee ballot certificate envelopes must be signed by the voter AND signed by one adult U.S. citizen witness who includes their full street address.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Acceptable photo ID is required. Note: The address on your photo ID does NOT have to be your current voting address.',
      acceptableDocs: ['Wisconsin DOT Driver License', 'Wisconsin DOT ID Card', 'U.S. Passport', 'Military ID Card', 'Certificate of Naturalization (issued within 2 years)', 'Compliant Wisconsin College/University Student Photo ID'],
    },
    pollingHours: '7:00 AM – 8:00 PM CST',
    timezone: 'Central (CST)',
    officialPortal: {
      name: 'Wisconsin Elections Commission - MyVote.wi.gov',
      url: 'https://myvote.wi.gov',
    },
    workLeaveLaw: {
      mandated: true,
      paid: false,
      hoursAllowed: 'Up to 3 consecutive hours unpaid leave',
      statuteCitation: 'Wis. Stat. § 6.76',
      summary: 'Any employee is entitled to up to 3 successive hours off work while polls are open to vote, provided they notify their employer before Election Day. Employers may specify the hours taken.',
    },
    ballotSelfieLaw: {
      allowed: 'Prohibited',
      details: 'Wis. Stat. § 12.13(1)(f) prohibits intentionally showing your marked ballot to any person.',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: '2026 Wisconsin Gubernatorial Election (Marquee Upper Midwest contest).',
      competitiveHouseDistricts: ['WI-01 (Racine/Kenosha)', 'WI-03 (La Crosse/Eau Claire/Stevens Point)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday, but Wis. Stat. § 6.76 guarantees up to 3 consecutive hours off work to vote.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Wisconsin?',
        answer: 'Election Day 2026 in Wisconsin is Tuesday, November 3, 2026. Polls are open statewide from 7:00 AM to 8:00 PM CST.',
      },
      {
        question: 'Does the address on my Wisconsin Driver License need to match my current address to vote?',
        answer: 'No! For Voter ID purposes in Wisconsin, the address on your driver license does not need to be current. You only need a proof-of-residency document if you are registering to vote for the first time at your current address.',
      },
    ],
  },
};

// Remaining 41 jurisdictions (40 states + DC) to guarantee 100% 51-Jurisdiction coverage with zero 404s
interface CompactStateSeed {
  slug: string;
  name: string;
  postalCode: string;
  wikidataId: string;
  battleground: boolean;
  regCutoff: string;
  sameDay: boolean;
  earlyWindow: string;
  idType: StateElectionData['voterId']['type'];
  hours: string;
  tz: string;
  portalUrl: string;
  isHoliday: boolean;
  paidLeave: boolean;
  leaveHours: string;
  leaveStatute: string;
  senate2026: boolean;
  gov2026: boolean;
}

const REMAINING_STATES_SEED: CompactStateSeed[] = [
  { slug: 'alabama', name: 'Alabama', postalCode: 'AL', wikidataId: 'Q173', battleground: false, regCutoff: 'October 19, 2026 (15 days prior)', sameDay: false, earlyWindow: 'No In-Person Early Voting (Absentee Only)', idType: 'Non-Strict Photo ID', hours: '7:00 AM – 7:00 PM CST', tz: 'Central', portalUrl: 'https://www.sos.alabama.gov/alabama-votes', isHoliday: false, paidLeave: false, leaveHours: 'Up to 1 hour unpaid leave', leaveStatute: 'Ala. Code § 17-1-5', senate2026: true, gov2026: true },
  { slug: 'alaska', name: 'Alaska', postalCode: 'AK', wikidataId: 'Q797', battleground: false, regCutoff: 'October 4, 2026 (30 days prior)', sameDay: false, earlyWindow: 'October 19 – November 2, 2026', idType: 'Non-Photo ID Required', hours: '7:00 AM – 8:00 PM AKST', tz: 'Alaska', portalUrl: 'https://www.elections.alaska.gov', isHoliday: false, paidLeave: true, leaveHours: 'Sufficient paid time off (unless 2 non-work hours exist)', leaveStatute: 'AS § 15.15.100', senate2026: true, gov2026: true },
  { slug: 'arkansas', name: 'Arkansas', postalCode: 'AR', wikidataId: 'Q1612', battleground: false, regCutoff: 'October 5, 2026 (30 days prior)', sameDay: false, earlyWindow: 'October 19 – November 2, 2026', idType: 'Strict Photo ID', hours: '7:30 AM – 7:30 PM CST', tz: 'Central', portalUrl: 'https://www.sos.arkansas.gov/elections', isHoliday: false, paidLeave: false, leaveHours: 'Schedule must allow time to vote', leaveStatute: 'Ark. Code § 7-1-102', senate2026: true, gov2026: true },
  { slug: 'california', name: 'California', postalCode: 'CA', wikidataId: 'Q99', battleground: false, regCutoff: 'October 19, 2026 (Same-Day Registration through Nov 3)', sameDay: true, earlyWindow: 'October 5 – November 2, 2026 (All Voters Mailed Ballot)', idType: 'No Document Required (Signature Verification)', hours: '7:00 AM – 8:00 PM PST', tz: 'Pacific', portalUrl: 'https://www.sos.ca.gov/elections', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 hours paid time off', leaveStatute: 'Cal. Elec. Code § 14000', senate2026: false, gov2026: true },
  { slug: 'colorado', name: 'Colorado', postalCode: 'CO', wikidataId: 'Q1261', battleground: false, regCutoff: 'November 3, 2026 (Same-Day Registration through 7 PM)', sameDay: true, earlyWindow: 'October 19 – November 2, 2026 (Universal Mail Ballot State)', idType: 'Non-Photo ID Required', hours: '7:00 AM – 7:00 PM MST', tz: 'Mountain', portalUrl: 'https://www.govotecolorado.gov', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 hours paid leave', leaveStatute: 'C.R.S. § 1-7-102', senate2026: true, gov2026: true },
  { slug: 'connecticut', name: 'Connecticut', postalCode: 'CT', wikidataId: 'Q779', battleground: false, regCutoff: 'October 16, 2026 (Same-Day Registration Available)', sameDay: true, earlyWindow: 'October 19 – November 1, 2026 (14 Days Early Voting)', idType: 'Non-Photo ID Required', hours: '6:00 AM – 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://portal.ct.gov/sots', isHoliday: false, paidLeave: false, leaveHours: 'Up to 2 hours unpaid leave upon request', leaveStatute: 'Conn. Gen. Stat. § 31-57y', senate2026: false, gov2026: true },
  { slug: 'delaware', name: 'Delaware', postalCode: 'DE', wikidataId: 'Q1393', battleground: false, regCutoff: 'October 10, 2026 (24 days prior)', sameDay: false, earlyWindow: 'October 23 – November 1, 2026', idType: 'Non-Photo ID Required', hours: '7:00 AM – 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://elections.delaware.gov', isHoliday: true, paidLeave: false, leaveHours: 'Official Legal State Holiday', leaveStatute: '1 Del. C. § 501', senate2026: true, gov2026: false },
  { slug: 'districtofcolumbia', name: 'District of Columbia', postalCode: 'DC', wikidataId: 'Q3551781', battleground: false, regCutoff: 'November 3, 2026 (Same-Day Registration Available)', sameDay: true, earlyWindow: 'October 20 – October 30, 2026 (Universal Mail Ballot)', idType: 'No Document Required (Signature Verification)', hours: '7:00 AM – 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://www.dcboe.org', isHoliday: false, paidLeave: true, leaveHours: 'At least 2 hours paid voting leave', leaveStatute: 'D.C. Code § 1-1001.07a', senate2026: false, gov2026: false },
  { slug: 'hawaii', name: 'Hawaii', postalCode: 'HI', wikidataId: 'Q782', battleground: false, regCutoff: 'November 3, 2026 (Same-Day Registration Available)', sameDay: true, earlyWindow: 'October 20 – November 3, 2026 (All-Mail Voting State)', idType: 'No Document Required (Signature Verification)', hours: '7:00 AM – 7:00 PM HST', tz: 'Hawaii-Aleutian', portalUrl: 'https://elections.hawaii.gov', isHoliday: true, paidLeave: false, leaveHours: 'Official State Holiday across Hawaii', leaveStatute: 'HRS § 8-1', senate2026: false, gov2026: true },
  { slug: 'idaho', name: 'Idaho', postalCode: 'ID', wikidataId: 'Q1221', battleground: false, regCutoff: 'October 9, 2026 (Same-Day Registration at Polls)', sameDay: true, earlyWindow: 'October 19 – October 30, 2026', idType: 'Strict Photo ID', hours: '8:00 AM – 8:00 PM Local Time', tz: 'Mountain & Pacific', portalUrl: 'https://voteidaho.gov', isHoliday: false, paidLeave: false, leaveHours: 'No statutory leave mandate', leaveStatute: 'Idaho Code § 18-2319', senate2026: true, gov2026: true },
  { slug: 'illinois', name: 'Illinois', postalCode: 'IL', wikidataId: 'Q1204', battleground: false, regCutoff: 'October 18, 2026 (Same-Day Grace Registration through Nov 3)', sameDay: true, earlyWindow: 'September 24 – November 2, 2026', idType: 'No Document Required (Signature Verification)', hours: '6:00 AM – 7:00 PM CST', tz: 'Central', portalUrl: 'https://www.elections.il.gov', isHoliday: true, paidLeave: true, leaveHours: 'Up to 2 hours paid voting leave', leaveStatute: '10 ILCS 5/17-15', senate2026: true, gov2026: true },
  { slug: 'indiana', name: 'Indiana', postalCode: 'IN', wikidataId: 'Q1415', battleground: false, regCutoff: 'October 5, 2026 (29 days prior)', sameDay: false, earlyWindow: 'October 6 – November 2, 2026 (12:00 PM)', idType: 'Strict Photo ID', hours: '6:00 AM – 6:00 PM Local Time', tz: 'Eastern & Central', portalUrl: 'https://indianavoters.in.gov', isHoliday: false, paidLeave: false, leaveHours: 'No statutory private leave mandate', leaveStatute: 'Ind. Code § 3-14-3-18', senate2026: false, gov2026: false },
  { slug: 'iowa', name: 'Iowa', postalCode: 'IA', wikidataId: 'Q1546', battleground: true, regCutoff: 'October 19, 2026 (Same-Day Registration at Polls)', sameDay: true, earlyWindow: 'October 14 – November 2, 2026', idType: 'Strict Photo ID', hours: '7:00 AM – 8:00 PM CST', tz: 'Central', portalUrl: 'https://sos.iowa.gov/elections', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 consecutive hours paid time off', leaveStatute: 'Iowa Code § 49.109', senate2026: true, gov2026: true },
  { slug: 'kansas', name: 'Kansas', postalCode: 'KS', wikidataId: 'Q1558', battleground: false, regCutoff: 'October 13, 2026 (21 days prior)', sameDay: false, earlyWindow: 'October 14 – November 2, 2026 (12:00 PM)', idType: 'Strict Photo ID', hours: '7:00 AM – 7:00 PM Local Time', tz: 'Central & Mountain', portalUrl: 'https://sos.ks.gov/elections', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 consecutive hours paid leave', leaveStatute: 'K.S.A. § 25-418', senate2026: true, gov2026: true },
  { slug: 'kentucky', name: 'Kentucky', postalCode: 'KY', wikidataId: 'Q1603', battleground: false, regCutoff: 'October 5, 2026 (29 days prior)', sameDay: false, earlyWindow: 'October 29 – October 31, 2026 (3 Days No-Excuse)', idType: 'Non-Strict Photo ID', hours: '6:00 AM – 6:00 PM Local Time', tz: 'Eastern & Central', portalUrl: 'https://elect.ky.gov', isHoliday: false, paidLeave: false, leaveHours: 'At least 4 hours unpaid leave', leaveStatute: 'Ky. Const. § 148 & KRS § 118.035', senate2026: true, gov2026: false },
  { slug: 'louisiana', name: 'Louisiana', postalCode: 'LA', wikidataId: 'Q1588', battleground: false, regCutoff: 'October 13, 2026 (Online) / Oct 5 (Mail)', sameDay: false, earlyWindow: 'October 20 – October 27, 2026', idType: 'Non-Strict Photo ID', hours: '6:00 AM – 8:00 PM CST', tz: 'Central', portalUrl: 'https://www.sos.la.gov/ElectionsAndVoting', isHoliday: true, paidLeave: false, leaveHours: 'General Election Day is a Legal State Holiday', leaveStatute: 'La. R.S. § 1:55', senate2026: true, gov2026: false },
  { slug: 'maine', name: 'Maine', postalCode: 'ME', wikidataId: 'Q724', battleground: true, regCutoff: 'November 3, 2026 (Same-Day Registration at Polls)', sameDay: true, earlyWindow: 'October 5 – October 29, 2026', idType: 'No Document Required (Signature Verification)', hours: '6:00 AM / 8:00 AM – 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://www.maine.gov/sos/cec/elec', isHoliday: false, paidLeave: false, leaveHours: 'No statutory leave mandate', leaveStatute: '21-A M.R.S. § 674', senate2026: true, gov2026: true },
  { slug: 'maryland', name: 'Maryland', postalCode: 'MD', wikidataId: 'Q1391', battleground: false, regCutoff: 'October 13, 2026 (Same-Day Registration at Polls)', sameDay: true, earlyWindow: 'October 22 – October 29, 2026', idType: 'No Document Required (Signature Verification)', hours: '7:00 AM – 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://elections.maryland.gov', isHoliday: true, paidLeave: true, leaveHours: 'Up to 2 hours paid voting leave (plus State Holiday)', leaveStatute: 'Md. Code, Elec. Law § 10-315', senate2026: false, gov2026: true },
  { slug: 'massachusetts', name: 'Massachusetts', postalCode: 'MA', wikidataId: 'Q771', battleground: false, regCutoff: 'October 24, 2026 (10 days prior)', sameDay: false, earlyWindow: 'October 17 – October 30, 2026', idType: 'No Document Required (Signature Verification)', hours: '7:00 AM – 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://www.sec.state.ma.us/ele', isHoliday: false, paidLeave: false, leaveHours: 'First 2 hours after polls open (Manufacturing/Retail/Mechanical)', leaveStatute: 'M.G.L. c. 149, § 178', senate2026: true, gov2026: true },
  { slug: 'minnesota', name: 'Minnesota', postalCode: 'MN', wikidataId: 'Q1527', battleground: true, regCutoff: 'October 13, 2026 (Same-Day Registration at Polls)', sameDay: true, earlyWindow: 'September 18 – November 2, 2026 (46 Days Early Voting)', idType: 'No Document Required (Signature Verification)', hours: '7:00 AM – 8:00 PM CST', tz: 'Central', portalUrl: 'https://www.sos.state.mn.us/elections-voting', isHoliday: false, paidLeave: true, leaveHours: 'Paid time off to vote during election day', leaveStatute: 'Minn. Stat. § 204C.04', senate2026: true, gov2026: true },
  { slug: 'mississippi', name: 'Mississippi', postalCode: 'MS', wikidataId: 'Q1494', battleground: false, regCutoff: 'October 5, 2026 (30 days prior - Mail/In-Person Only)', sameDay: false, earlyWindow: 'No In-Person Early Voting (Excuse Absentee Only)', idType: 'Strict Photo ID', hours: '7:00 AM – 7:00 PM CST', tz: 'Central', portalUrl: 'https://www.sos.ms.gov/elections-voting', isHoliday: false, paidLeave: false, leaveHours: 'Employees prohibited from vacation/leave interference', leaveStatute: 'Miss. Code § 23-15-871', senate2026: true, gov2026: false },
  { slug: 'missouri', name: 'Missouri', postalCode: 'MO', wikidataId: 'Q1581', battleground: false, regCutoff: 'October 7, 2026 (4th Wednesday prior)', sameDay: false, earlyWindow: 'October 20 – November 2, 2026 (2 Weeks No-Excuse Absentee)', idType: 'Strict Photo ID', hours: '6:00 AM – 7:00 PM CST', tz: 'Central', portalUrl: 'https://www.sos.mo.gov/elections', isHoliday: false, paidLeave: true, leaveHours: 'Up to 3 hours paid leave (unless 3 non-work hours exist)', leaveStatute: 'RSMo § 115.639', senate2026: false, gov2026: false },
  { slug: 'montana', name: 'Montana', postalCode: 'MT', wikidataId: 'Q1212', battleground: false, regCutoff: 'October 5, 2026 (Late Registration until Nov 2 at Noon)', sameDay: false, earlyWindow: 'October 5 – November 2, 2026 (12:00 PM)', idType: 'Non-Photo ID Required', hours: '7:00 AM – 8:00 PM MST', tz: 'Mountain', portalUrl: 'https://sosmt.gov/elections', isHoliday: true, paidLeave: false, leaveHours: 'General Election Day is a Legal State Holiday', leaveStatute: 'MCA § 1-1-216', senate2026: true, gov2026: false },
  { slug: 'nebraska', name: 'Nebraska', postalCode: 'NE', wikidataId: 'Q1553', battleground: false, regCutoff: 'October 16, 2026 (Online/Mail) / Oct 23 (In-Person)', sameDay: false, earlyWindow: 'October 5 – November 2, 2026', idType: 'Strict Photo ID', hours: '8:00 AM – 8:00 PM CST (7 AM – 7 PM MST)', tz: 'Central & Mountain', portalUrl: 'https://sos.nebraska.gov/elections', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 consecutive hours paid leave', leaveStatute: 'Neb. Rev. Stat. § 32-922', senate2026: true, gov2026: true },
  { slug: 'newhampshire', name: 'New Hampshire', postalCode: 'NH', wikidataId: 'Q759', battleground: true, regCutoff: 'November 3, 2026 (Same-Day Registration with Proof of Citizenship)', sameDay: true, earlyWindow: 'No Early Voting (Excuse Absentee Only)', idType: 'Strict Photo ID', hours: '6:00 AM / 11:00 AM – 7:00 PM / 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://www.sos.nh.gov/elections', isHoliday: false, paidLeave: false, leaveHours: 'No statutory private leave mandate', leaveStatute: 'RSA 659:13', senate2026: true, gov2026: true },
  { slug: 'newjersey', name: 'New Jersey', postalCode: 'NJ', wikidataId: 'Q1408', battleground: false, regCutoff: 'October 13, 2026 (21 days prior)', sameDay: false, earlyWindow: 'October 24 – November 1, 2026 (9 Days Early Voting)', idType: 'No Document Required (Signature Verification)', hours: '6:00 AM – 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://nj.gov/state/elections', isHoliday: true, paidLeave: false, leaveHours: 'General Election Day is a Legal Public Holiday', leaveStatute: 'N.J.S.A. 36:1-1', senate2026: true, gov2026: false },
  { slug: 'newmexico', name: 'New Mexico', postalCode: 'NM', wikidataId: 'Q1522', battleground: false, regCutoff: 'October 6, 2026 (Same-Day Registration through Nov 3)', sameDay: true, earlyWindow: 'October 6 – October 31, 2026', idType: 'No Document Required (Signature Verification)', hours: '7:00 AM – 7:00 PM MST', tz: 'Mountain', portalUrl: 'https://www.sos.nm.gov/voting-and-elections', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 hours paid voting leave', leaveStatute: 'NMSA 1978, § 1-12-42', senate2026: true, gov2026: true },
  { slug: 'newyork', name: 'New York', postalCode: 'NY', wikidataId: 'Q1384', battleground: false, regCutoff: 'October 24, 2026 (10 days prior)', sameDay: false, earlyWindow: 'October 24 – November 1, 2026 (9 Days Early Voting)', idType: 'No Document Required (Signature Verification)', hours: '6:00 AM – 9:00 PM EST', tz: 'Eastern', portalUrl: 'https://elections.ny.gov', isHoliday: true, paidLeave: true, leaveHours: 'Up to 2 hours paid voting leave', leaveStatute: 'N.Y. Elec. Law § 3-110', senate2026: false, gov2026: true },
  { slug: 'northdakota', name: 'North Dakota', postalCode: 'ND', wikidataId: 'Q1207', battleground: false, regCutoff: 'No Voter Registration Required (Only State in U.S.)', sameDay: true, earlyWindow: 'October 19 – November 2, 2026', idType: 'Strict Photo ID', hours: '7:00 AM – 7:00 PM Local Time', tz: 'Central & Mountain', portalUrl: 'https://vip.sos.nd.gov', isHoliday: false, paidLeave: false, leaveHours: 'Employers encouraged to grant time off', leaveStatute: 'N.D.C.C. § 16.1-01-02.1', senate2026: false, gov2026: false },
  { slug: 'oklahoma', name: 'Oklahoma', postalCode: 'OK', wikidataId: 'Q1649', battleground: false, regCutoff: 'October 9, 2026 (25 days prior)', sameDay: false, earlyWindow: 'October 28 – October 31, 2026', idType: 'Non-Photo ID Required', hours: '7:00 AM – 7:00 PM CST', tz: 'Central', portalUrl: 'https://oklahoma.gov/elections.html', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 hours paid leave (with 3 days prior notice)', leaveStatute: '26 O.S. § 7-101', senate2026: true, gov2026: true },
  { slug: 'oregon', name: 'Oregon', postalCode: 'OR', wikidataId: 'Q824', battleground: false, regCutoff: 'October 13, 2026 (21 days prior)', sameDay: false, earlyWindow: 'October 14 – November 3, 2026 (Universal Vote-By-Mail State)', idType: 'No Document Required (Signature Verification)', hours: 'Ballot Drop Boxes Open until 8:00 PM PST', tz: 'Pacific & Mountain', portalUrl: 'https://sos.oregon.gov/voting', isHoliday: false, paidLeave: false, leaveHours: 'All-Mail Voting eliminates polling shift conflicts', leaveStatute: 'ORS § 254.470', senate2026: true, gov2026: true },
  { slug: 'rhodeisland', name: 'Rhode Island', postalCode: 'RI', wikidataId: 'Q1387', battleground: false, regCutoff: 'October 4, 2026 (30 days prior)', sameDay: false, earlyWindow: 'October 14 – November 2, 2026 (4:00 PM)', idType: 'Non-Strict Photo ID', hours: '7:00 AM – 8:00 PM EST', tz: 'Eastern', portalUrl: 'https://vote.sos.ri.gov', isHoliday: true, paidLeave: false, leaveHours: 'General Election Day is a Legal State Holiday', leaveStatute: 'R.I. Gen. Laws § 25-1-1', senate2026: true, gov2026: true },
  { slug: 'southcarolina', name: 'South Carolina', postalCode: 'SC', wikidataId: 'Q1456', battleground: false, regCutoff: 'October 4, 2026 (30 days prior)', sameDay: false, earlyWindow: 'October 19 – October 31, 2026 (2 Weeks No-Excuse Early Voting)', idType: 'Non-Strict Photo ID', hours: '7:00 AM – 7:00 PM EST', tz: 'Eastern', portalUrl: 'https://scvotes.gov', isHoliday: true, paidLeave: false, leaveHours: 'General Election Day is a Legal State Holiday', leaveStatute: 'S.C. Code § 53-5-10', senate2026: true, gov2026: true },
  { slug: 'southdakota', name: 'South Dakota', postalCode: 'SD', wikidataId: 'Q1211', battleground: false, regCutoff: 'October 19, 2026 (15 days prior)', sameDay: false, earlyWindow: 'September 18 – November 2, 2026 (46 Days Early Voting)', idType: 'Non-Strict Photo ID', hours: '7:00 AM – 7:00 PM Local Time', tz: 'Central & Mountain', portalUrl: 'https://sdsos.gov/elections-voting', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 consecutive hours paid voting leave', leaveStatute: 'SDCL § 12-3-5', senate2026: true, gov2026: true },
  { slug: 'tennessee', name: 'Tennessee', postalCode: 'TN', wikidataId: 'Q1509', battleground: false, regCutoff: 'October 5, 2026 (30 days prior)', sameDay: false, earlyWindow: 'October 14 – October 29, 2026', idType: 'Strict Photo ID', hours: '7:00 AM / 8:00 AM – 8:00 PM EST (7:00 PM CST)', tz: 'Eastern & Central', portalUrl: 'https://sos.tn.gov/elections', isHoliday: false, paidLeave: true, leaveHours: 'Up to 3 hours paid leave (must apply by noon day prior)', leaveStatute: 'Tenn. Code Ann. § 2-1-106', senate2026: true, gov2026: true },
  { slug: 'utah', name: 'Utah', postalCode: 'UT', wikidataId: 'Q829', battleground: false, regCutoff: 'October 23, 2026 (Same-Day Registration at Polls)', sameDay: true, earlyWindow: 'October 20 – October 30, 2026 (Universal Mail Ballot State)', idType: 'Non-Photo ID Required', hours: '7:00 AM – 8:00 PM MST', tz: 'Mountain', portalUrl: 'https://vote.utah.gov', isHoliday: false, paidLeave: true, leaveHours: 'Up to 2 hours paid voting leave', leaveStatute: 'Utah Code § 20A-3a-105', senate2026: false, gov2026: false },
  { slug: 'vermont', name: 'Vermont', postalCode: 'VT', wikidataId: 'Q16551', battleground: false, regCutoff: 'November 3, 2026 (Same-Day Registration at Polls)', sameDay: true, earlyWindow: 'September 21 – November 2, 2026 (Universal Mail Ballot State)', idType: 'No Document Required (Signature Verification)', hours: '5:00 AM / 10:00 AM – 7:00 PM EST', tz: 'Eastern', portalUrl: 'https://sos.vermont.gov/elections', isHoliday: false, paidLeave: false, leaveHours: 'Right to attend Town Meeting; universal mail voting', leaveStatute: '21 V.S.A. § 472b', senate2026: false, gov2026: true },
  { slug: 'virginia', name: 'Virginia', postalCode: 'VA', wikidataId: 'Q1370', battleground: false, regCutoff: 'October 13, 2026 (Same-Day Registration through Nov 3)', sameDay: true, earlyWindow: 'September 18 – October 31, 2026 (45 Days Early Voting)', idType: 'Non-Photo ID Required', hours: '6:00 AM – 7:00 PM EST', tz: 'Eastern', portalUrl: 'https://www.elections.virginia.gov', isHoliday: true, paidLeave: false, leaveHours: 'Election Day is an Official Legal State Holiday', leaveStatute: 'Va. Code § 2.2-3300', senate2026: true, gov2026: false },
  { slug: 'washington', name: 'Washington', postalCode: 'WA', wikidataId: 'Q1223', battleground: false, regCutoff: 'October 26, 2026 (Online/Mail) / Nov 3 (In-Person until 8 PM)', sameDay: true, earlyWindow: 'October 16 – November 3, 2026 (Universal Vote-By-Mail State)', idType: 'No Document Required (Signature Verification)', hours: 'Vote Centers & Drop Boxes Open until 8:00 PM PST', tz: 'Pacific', portalUrl: 'https://www.sos.wa.gov/elections', isHoliday: false, paidLeave: false, leaveHours: 'Universal 18-day mail voting period eliminates conflict', leaveStatute: 'RCW 49.28.120', senate2026: false, gov2026: false },
  { slug: 'westvirginia', name: 'West Virginia', postalCode: 'WV', wikidataId: 'Q1371', battleground: false, regCutoff: 'October 13, 2026 (21 days prior)', sameDay: false, earlyWindow: 'October 21 – October 31, 2026', idType: 'Non-Photo ID Required', hours: '6:30 AM – 7:30 PM EST', tz: 'Eastern', portalUrl: 'https://ovr.sos.wv.gov', isHoliday: true, paidLeave: true, leaveHours: 'Up to 3 hours paid leave (with 3 days written notice)', leaveStatute: 'W. Va. Code § 3-1-42', senate2026: true, gov2026: false },
  { slug: 'wyoming', name: 'Wyoming', postalCode: 'WY', wikidataId: 'Q1214', battleground: false, regCutoff: 'October 19, 2026 (Same-Day Registration at Polls)', sameDay: true, earlyWindow: 'October 6 – November 2, 2026 (28 Days Early Voting)', idType: 'Strict Photo ID', hours: '7:00 AM – 7:00 PM MST', tz: 'Mountain', portalUrl: 'https://sos.wyo.gov/Elections', isHoliday: false, paidLeave: true, leaveHours: '1 hour paid voting leave (if fewer than 3 non-work hours exist)', leaveStatute: 'Wyo. Stat. § 22-2-111', senate2026: true, gov2026: true },
];

function buildFullStatesDictionary(): Record<string, StateElectionData> {
  const dict: Record<string, StateElectionData> = { ...PRIORITY_STATES };

  for (const seed of REMAINING_STATES_SEED) {
    dict[seed.slug] = {
      slug: seed.slug,
      name: seed.name,
      postalCode: seed.postalCode,
      wikidataId: seed.wikidataId,
      battleground: seed.battleground,
      registrationDeadline: {
        online: seed.regCutoff,
        mailPostmark: seed.regCutoff,
        inPerson: seed.sameDay ? 'November 3, 2026 (Same-Day Registration at Polling Place)' : seed.regCutoff,
        sameDayRegistration: seed.sameDay,
        notes: seed.sameDay
          ? `${seed.name} permits eligible residents to register and vote on the same day during early voting or on Election Day with proof of residency.`
          : `Voters in ${seed.name} must complete registration before the statutory book-closing deadline (${seed.regCutoff}).`,
      },
      earlyVoting: {
        starts: seed.earlyWindow.split('–')[0]?.trim() || seed.earlyWindow,
        ends: seed.earlyWindow.split('–')[1]?.trim() || 'November 2, 2026',
        description: `${seed.name} early voting schedule: ${seed.earlyWindow}. Check your county election office for satellite center hours.`,
        saturdayVoting: true,
        sundayVoting: false,
      },
      mailInVoting: {
        requestDeadline: '7 to 14 days before Election Day (Verify with local county clerk)',
        returnDeadline: 'November 3, 2026 (By Poll Closing Time)',
        excuseRequired: seed.earlyWindow.includes('Excuse'),
        postmarkMatters: true,
        details: `Official mail-in and absentee ballots in ${seed.name} must be signed on the outer certificate envelope and returned via USPS or official county drop box.`,
      },
      voterId: {
        type: seed.idType,
        description:
          seed.idType === 'Strict Photo ID'
            ? `${seed.name} enforces a strict photo ID requirement. Voters must display a valid government-issued photo ID to cast a regular ballot.`
            : seed.idType === 'Non-Strict Photo ID'
            ? `${seed.name} requests a photo ID at the polls, but voters without ID may sign a statutory identity affidavit or cast a provisional ballot.`
            : seed.idType === 'Non-Photo ID Required'
            ? `${seed.name} accepts either a government photo ID or an approved non-photo document (such as a utility bill, bank statement, or government check showing name and address).`
            : `${seed.name} verifies voter identity via signature matching or poll book verification; no physical ID document is required for returning registered voters.`,
        acceptableDocs: [
          `${seed.name} Driver License or State ID Card`,
          'U.S. Passport or Passport Card',
          'U.S. Military or Veterans ID Card',
          'Tribal Enrollment or Government Employee ID',
        ],
      },
      pollingHours: seed.hours,
      timezone: seed.tz,
      officialPortal: {
        name: `${seed.name} Official State Elections Portal (${seed.postalCode}.gov)`,
        url: seed.portalUrl,
      },
      workLeaveLaw: {
        mandated: seed.paidLeave || seed.leaveHours.includes('unpaid'),
        paid: seed.paidLeave,
        hoursAllowed: seed.leaveHours,
        statuteCitation: seed.leaveStatute,
        summary: seed.paidLeave
          ? `Under ${seed.leaveStatute}, employers in ${seed.name} must grant ${seed.leaveHours.toLowerCase()} for employees to vote on Election Day.`
          : `Under ${seed.leaveStatute}, ${seed.name} law governs voting leave and protects workers from employer retaliation (${seed.leaveHours}).`,
      },
      ballotSelfieLaw: {
        allowed: 'Restricted (Mail Ballot Only)',
        details: `Check local precinct signage in ${seed.name}; photographing other voters inside a polling location is universally prohibited.`,
      },
      keyRaces2026: {
        senate: seed.senate2026,
        senateDescription: seed.senate2026
          ? `2026 Class II United States Senate Election in ${seed.name}.`
          : undefined,
        governor: seed.gov2026,
        governorDescription: seed.gov2026
          ? `2026 ${seed.name} Gubernatorial Election for Governor and statewide executive offices.`
          : undefined,
        competitiveHouseDistricts: [`All ${seed.postalCode} U.S. House Congressional Districts`],
      },
      isStateHoliday: seed.isHoliday,
      holidayStatusNotes: seed.isHoliday
        ? `General Election Day is designated as an official legal state holiday in ${seed.name} under ${seed.leaveStatute}.`
        : `Election Day is not a statewide government holiday in ${seed.name}, though ${seed.leaveStatute} regulates employee voting time.`,
      faqs: [
        {
          question: `When is Election Day 2026 in ${seed.name}?`,
          answer: `Election Day 2026 in ${seed.name} is Tuesday, November 3, 2026. Official polling hours are ${seed.hours}.`,
        },
        {
          question: `What is the voter registration deadline in ${seed.name} for 2026?`,
          answer: `The voter registration cutoff in ${seed.name} is ${seed.regCutoff}. You can verify your status at ${seed.portalUrl}.`,
        },
        {
          question: `Does ${seed.name} give paid time off work to vote in 2026?`,
          answer: `Under ${seed.leaveStatute}, ${seed.name} provides: ${seed.leaveHours}.`,
        },
      ],
    };
  }

  return dict;
}

const RAW_STATES_DATA: Record<string, StateElectionData> = buildFullStatesDictionary();

export const normalizeStateSlug = (slug: string): string => {
  if (!slug) return '';
  const s = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (s === 'dc' || s === 'washingtondc' || s === 'district-of-columbia') return 'districtofcolumbia';
  return s;
};

export const STATES_DATA: Record<string, StateElectionData> = new Proxy(RAW_STATES_DATA, {
  get(target, prop: string) {
    if (typeof prop === 'string') {
      if (prop in target) return target[prop];
      const norm = normalizeStateSlug(prop);
      if (norm in target) return target[norm];
    }
    return (target as any)[prop];
  },
});

export const ALL_STATES_LIST = Object.values(RAW_STATES_DATA)
  .map((st) => ({
    slug: st.slug,
    name: st.name,
    postalCode: st.postalCode,
    battleground: st.battleground,
    isStateHoliday: st.isStateHoliday,
    paidLeave: st.workLeaveLaw.paid,
    sameDay: st.registrationDeadline.sameDayRegistration,
    idType: st.voterId.type,
    pollingHours: st.pollingHours,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
