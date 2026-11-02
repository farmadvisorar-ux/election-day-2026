export interface StateElectionData {
  slug: string;
  name: string;
  postalCode: string;
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

export const STATES_DATA: Record<string, StateElectionData> = {
  pennsylvania: {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    postalCode: 'PA',
    registrationDeadline: {
      online: 'October 19, 2026 (11:59 PM EST)',
      mailPostmark: 'October 19, 2026',
      inPerson: 'October 19, 2026 (5:00 PM EST)',
      sameDayRegistration: false,
      notes: 'Must be registered at least 15 days prior to Election Day.',
    },
    earlyVoting: {
      starts: 'September 22, 2026',
      ends: 'October 27, 2026',
      description: 'Pennsylvania allows "Mail-in Ballot In-Person On Demand" voting at county election offices as soon as ballots are printed.',
      saturdayVoting: true,
      sundayVoting: false,
    },
    mailInVoting: {
      requestDeadline: 'October 27, 2026 (5:00 PM EST)',
      returnDeadline: 'November 3, 2026 (8:00 PM EST at County Board of Elections)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Postmarks do NOT count; ballots must be physically received by 8:00 PM on Election Night.',
    },
    voterId: {
      type: 'No Document Required (Signature Verification)',
      description: 'First-time voters at a polling precinct must show an approved photo or non-photo ID. Returning voters do not need ID.',
      acceptableDocs: ['PA Driver License or PennDOT ID', 'U.S. Passport', 'Student ID', 'Recent Utility Bill or Bank Statement (for first-time precinct voters)'],
    },
    pollingHours: '7:00 AM – 8:00 PM EST',
    timezone: 'Eastern',
    officialPortal: {
      name: 'PA Department of State - Vote.pa.gov',
      url: 'https://www.vote.pa.gov',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: '2026 PA Gubernatorial Election (Incumbent term expiration / open contest).',
      competitiveHouseDistricts: ['PA-07 (Lehigh Valley)', 'PA-08 (Scranton/Pocono)', 'PA-10 (Harrisburg/York)'],
      ballotMeasuresHighlight: 'Potential constitutional amendments on voter identification and regulatory reform.',
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Election Day is not an official paid state holiday in PA, but municipal and county court operations in select counties operate on modified hours.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Pennsylvania?',
        answer: 'Election Day 2026 in Pennsylvania is Tuesday, November 3, 2026. Polls open statewide at 7:00 AM and close at 8:00 PM EST.',
      },
      {
        question: 'What is the voter registration deadline in Pennsylvania for 2026?',
        answer: 'The voter registration deadline in Pennsylvania is Monday, October 19, 2026 (15 days before Election Day). You can register online at vote.pa.gov.',
      },
      {
        question: 'Do I need a photo ID to vote in Pennsylvania?',
        answer: 'No photo ID is required for returning voters voting at their designated precinct. Only first-time voters in an election district must show an approved ID.',
      },
    ],
  },
  texas: {
    slug: 'texas',
    name: 'Texas',
    postalCode: 'TX',
    registrationDeadline: {
      online: 'Not Available (In-Person or Mail Only)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026',
      sameDayRegistration: false,
      notes: 'Texas does not offer universal online voter registration. Applications must be postmarked or submitted 30 days prior.',
    },
    earlyVoting: {
      starts: 'October 19, 2026',
      ends: 'October 30, 2026',
      description: 'Texas provides mandatory in-person early voting for two full weeks preceding Election Day.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 23, 2026 (Received by Early Voting Clerk)',
      returnDeadline: 'November 3, 2026 (7:00 PM if unpostmarked) or November 4 (5:00 PM if postmarked by 7:00 PM on Election Day)',
      excuseRequired: true,
      postmarkMatters: true,
      details: 'Strict eligibility: Age 65+, disability, expected absence from county, or confinement in jail.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Texas law requires one of seven approved photo IDs. If unable to reasonably obtain one, voters can file a Reasonable Impediment Declaration.',
      acceptableDocs: ['Texas Driver License', 'Texas Election Identification Certificate (EIC)', 'Texas Personal ID Card', 'Texas Handgun License', 'U.S. Military Photo ID', 'U.S. Citizenship Certificate with Photo', 'U.S. Passport'],
    },
    pollingHours: '7:00 AM – 7:00 PM Local Time',
    timezone: 'Central & Mountain',
    officialPortal: {
      name: 'Texas Secretary of State - VoteTexas.gov',
      url: 'https://www.votetexas.gov',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Class II U.S. Senate Seat (High profile nationwide battleground).',
      governor: true,
      governorDescription: '2026 Texas Gubernatorial Race.',
      competitiveHouseDistricts: ['TX-15 (South Texas)', 'TX-28 (Laredo/Rio Grande)', 'TX-34 (Brownsville)'],
      ballotMeasuresHighlight: 'Statewide constitutional amendments and local transit bonds.',
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not an official paid state holiday in Texas; state offices and banks remain open. Employers must provide up to two hours paid time off to vote unless polls are open 2 consecutive non-work hours.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Texas?',
        answer: 'Election Day 2026 in Texas is Tuesday, November 3, 2026. Polls open at 7:00 AM and close at 7:00 PM local time.',
      },
      {
        question: 'What is the voter registration deadline in Texas for 2026?',
        answer: 'The Texas voter registration deadline is Monday, October 5, 2026. Online registration is not available; paper forms must be postmarked by this date.',
      },
      {
        question: 'What ID is required to vote in Texas?',
        answer: 'Texas requires one of 7 state-approved photo IDs (e.g., Texas Driver License, U.S. Passport, or Texas Handgun License) that is current or expired no more than 4 years.',
      },
    ],
  },
  georgia: {
    slug: 'georgia',
    name: 'Georgia',
    postalCode: 'GA',
    registrationDeadline: {
      online: 'October 5, 2026 (11:59 PM EST)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026',
      sameDayRegistration: false,
      notes: 'Georgia requires registration at least the fifth Monday prior to Election Day.',
    },
    earlyVoting: {
      starts: 'October 12, 2026',
      ends: 'October 30, 2026',
      description: 'Mandatory 3 weeks of early in-person voting across all 159 Georgia counties, including two mandatory Saturdays.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 23, 2026 (Received 11 days before Election Day)',
      returnDeadline: 'November 3, 2026 (7:00 PM EST)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'No-excuse absentee voting. Ballots must be received by 7:00 PM on Election Night regardless of postmark.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Georgia requires government-issued photo ID for both in-person voting and absentee ballot verification.',
      acceptableDocs: ['Georgia Driver License', 'Valid State or Federal Government Employee ID', 'U.S. Passport', 'Valid Military ID', 'Valid Tribal ID', 'Georgia Voter ID Card'],
    },
    pollingHours: '7:00 AM – 7:00 PM EST',
    timezone: 'Eastern',
    officialPortal: {
      name: 'Georgia Secretary of State - My Voter Page (MVP)',
      url: 'https://mvp.sos.ga.gov',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Class II U.S. Senate Seat (Jon Ossoff seat up for re-election; top-tier tier 1 battleground).',
      governor: true,
      governorDescription: 'Open Georgia Gubernatorial Election (Brian Kemp term-limited).',
      competitiveHouseDistricts: ['GA-02 (Southwest GA)', 'GA-06 (Atlanta Metro)'],
      ballotMeasuresHighlight: 'Statewide tax exemptions and constitutional judicial rules.',
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday. Georgia law requires employers to grant employees up to two hours off to vote upon reasonable notice.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Georgia?',
        answer: 'Election Day 2026 in Georgia is Tuesday, November 3, 2026. Polls open at 7:00 AM and close at 7:00 PM EST.',
      },
      {
        question: 'Is Georgia having a U.S. Senate election in 2026?',
        answer: 'Yes! Georgia has a critical Class II U.S. Senate seat on the ballot in 2026 along with an open Gubernatorial race due to term limits.',
      },
      {
        question: 'How do I check my voting status in Georgia?',
        answer: 'You can verify your voter registration, polling precinct, and sample ballot at the official Georgia Secretary of State My Voter Page (mvp.sos.ga.gov).',
      },
    ],
  },
  arizona: {
    slug: 'arizona',
    name: 'Arizona',
    postalCode: 'AZ',
    registrationDeadline: {
      online: 'October 5, 2026 (11:59 PM MST)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026',
      sameDayRegistration: false,
      notes: 'Proof of citizenship is required for full-ballot registration (federal-only ballot otherwise).',
    },
    earlyVoting: {
      starts: 'October 7, 2026',
      ends: 'October 30, 2026 (7:00 PM MST)',
      description: 'Active Early Voting List (AEVL) ballots mailed out beginning October 7, 2026; early voting centers open statewide.',
      saturdayVoting: true,
      sundayVoting: false,
    },
    mailInVoting: {
      requestDeadline: 'October 23, 2026 (5:00 PM MST)',
      returnDeadline: 'November 3, 2026 (7:00 PM MST)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Ballots must be received by 7:00 PM on Election Day. Voters on the Active Early Voting List receive ballots automatically.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'One valid photo ID with current address OR two non-photo IDs showing name and matching address.',
      acceptableDocs: ['Valid AZ Driver License / Non-Driver ID', 'U.S. Passport with matching utility bill', 'Tribal Enrollment Card', 'Utility Bill & Voter Registration Card'],
    },
    pollingHours: '6:00 AM – 7:00 PM MST',
    timezone: 'Mountain (No DST)',
    officialPortal: {
      name: 'Arizona Secretary of State - Arizona.Vote',
      url: 'https://azsos.gov/elections',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: '2026 Arizona Gubernatorial Election.',
      competitiveHouseDistricts: ['AZ-01 (Scottsdale/Phoenix)', 'AZ-06 (Tucson/Southeast AZ)'],
      ballotMeasuresHighlight: 'High-profile citizen initiatives on election laws and water conservation.',
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not a state holiday. Arizona law permits up to three consecutive hours of paid leave to vote if there are fewer than 3 consecutive non-work hours between poll opening and closing.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Arizona?',
        answer: 'Election Day in Arizona is Tuesday, November 3, 2026. Polls open early at 6:00 AM and close at 7:00 PM MST.',
      },
      {
        question: 'Does Arizona require ID to vote?',
        answer: 'Yes. Voters must present either one government-issued photo ID showing their current address or two alternative non-photo documents showing matching names and addresses.',
      },
    ],
  },
  ohio: {
    slug: 'ohio',
    name: 'Ohio',
    postalCode: 'OH',
    registrationDeadline: {
      online: 'October 5, 2026 (11:59 PM EST)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026 (9:00 PM EST at County Board of Elections)',
      sameDayRegistration: false,
      notes: 'Must be registered 30 days prior to election.',
    },
    earlyVoting: {
      starts: 'October 6, 2026',
      ends: 'November 1, 2026 (5:00 PM EST)',
      description: 'In-person early voting at county board of elections office includes extended evening and weekend hours.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 27, 2026 (Close of business)',
      returnDeadline: 'November 3, 2026 (7:30 PM in-person) or postmarked by Nov 2 and received within 4 days',
      excuseRequired: false,
      postmarkMatters: true,
      details: 'All registered Ohio voters may request a no-excuse absentee ballot by mail.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Ohio law requires an unexpired government-issued photo ID for in-person voting.',
      acceptableDocs: ['Ohio Driver License or State ID Card', 'U.S. Passport or Passport Card', 'U.S. Military ID Card', 'Ohio National Guard ID'],
    },
    pollingHours: '6:30 AM – 7:30 PM EST',
    timezone: 'Eastern',
    officialPortal: {
      name: 'Ohio Secretary of State - VoteOhio.gov',
      url: 'https://www.voteohio.gov',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: 'Open Ohio Gubernatorial Election (Mike DeWine term-limited).',
      competitiveHouseDistricts: ['OH-01 (Cincinnati)', 'OH-09 (Toledo)', 'OH-13 (Akron/Canton)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not an official paid state holiday in Ohio. Public schools in many counties close if campus facilities host voting precincts.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Ohio?',
        answer: 'Election Day 2026 in Ohio is Tuesday, November 3, 2026. Polls open at 6:30 AM and close at 7:30 PM EST.',
      },
      {
        question: 'Can you vote with a utility bill in Ohio?',
        answer: 'No. Following recent state election law updates, utility bills, bank statements, and non-photo documents are no longer accepted for regular in-person voting in Ohio. You must show a valid photo ID.',
      },
    ],
  },
  florida: {
    slug: 'florida',
    name: 'Florida',
    postalCode: 'FL',
    registrationDeadline: {
      online: 'October 5, 2026 (11:59 PM EST)',
      mailPostmark: 'October 5, 2026',
      inPerson: 'October 5, 2026',
      sameDayRegistration: false,
      notes: 'Florida book-closing deadline is 29 days before election.',
    },
    earlyVoting: {
      starts: 'October 24, 2026',
      ends: 'October 31, 2026 (or Nov 1 at county discretion)',
      description: 'Mandatory minimum 8 days of early voting for 8-12 hours per day across designated county voting sites.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 22, 2026 (5:00 PM local time)',
      returnDeadline: 'November 3, 2026 (7:00 PM local time at Supervisor of Elections)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Vote-by-mail requests expire after every general election cycle and must be renewed.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Voters must show a current and valid photo ID with signature, or a photo ID plus a secondary signature ID.',
      acceptableDocs: ['Florida Driver License', 'Florida ID Card issued by DHSMV', 'U.S. Passport', 'Debit/Credit Card with Photo', 'Military ID', 'Student ID'],
    },
    pollingHours: '7:00 AM – 7:00 PM Local Time',
    timezone: 'Eastern & Central',
    officialPortal: {
      name: 'Florida Division of Elections - VoteFlorida.gov',
      url: 'https://dos.fl.gov/elections',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: 'Open Florida Gubernatorial Election (Ron DeSantis term-limited; major national spotlight).',
      competitiveHouseDistricts: ['FL-13 (Pinellas County)', 'FL-27 (Miami-Dade)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not an official paid state holiday in Florida; banks, supermarkets, and state offices remain open.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Florida?',
        answer: 'Election Day 2026 in Florida is Tuesday, November 3, 2026. Polls open at 7:00 AM and close at 7:00 PM local time.',
      },
      {
        question: 'Is Florida having a Governor election in 2026?',
        answer: 'Yes! Florida will hold a major open gubernatorial election in November 2026 due to gubernatorial term limits.',
      },
    ],
  },
  michigan: {
    slug: 'michigan',
    name: 'Michigan',
    postalCode: 'MI',
    registrationDeadline: {
      online: 'October 19, 2026 (11:59 PM EST)',
      mailPostmark: 'October 19, 2026',
      inPerson: 'November 3, 2026 (8:00 PM EST with Same-Day Registration)',
      sameDayRegistration: true,
      notes: 'Michigan allows in-person same-day voter registration with proof of residency through 8:00 PM on Election Day at the clerk office.',
    },
    earlyVoting: {
      starts: 'October 24, 2026',
      ends: 'November 1, 2026',
      description: 'Constitutional guarantee of at least 9 consecutive days of early in-person voting across all communities.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 30, 2026 (5:00 PM EST by mail)',
      returnDeadline: 'November 3, 2026 (8:00 PM EST)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'Constitutional right to no-excuse absentee voting; voters can join the permanent absentee ballot list.',
    },
    voterId: {
      type: 'Non-Strict Photo ID',
      description: 'Photo ID is requested. If you do not have an ID or forgot it, you can sign a simple affidavit and vote a regular ballot.',
      acceptableDocs: ['Michigan Driver License or State ID', 'U.S. Passport', 'Military ID', 'Student ID with photo', 'Tribal ID'],
    },
    pollingHours: '7:00 AM – 8:00 PM Local Time',
    timezone: 'Eastern & Central (Western UP)',
    officialPortal: {
      name: 'Michigan Secretary of State - Michigan.gov/Vote',
      url: 'https://mvic.sos.state.mi.us',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Class II U.S. Senate Seat battleground race.',
      governor: true,
      governorDescription: 'Open Michigan Gubernatorial contest (Gretchen Whitmer term-limited).',
      competitiveHouseDistricts: ['MI-03 (Grand Rapids)', 'MI-07 (Lansing/Mid-MI)', 'MI-08 (Flint/Saginaw)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not an official paid state holiday in Michigan. Public buildings and courts remain open.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Michigan?',
        answer: 'Election Day 2026 in Michigan is Tuesday, November 3, 2026. Polls open at 7:00 AM and close at 8:00 PM local time.',
      },
      {
        question: 'Can you register to vote on Election Day in Michigan?',
        answer: 'Yes! Michigan voters can register in person on Election Day at their city or township clerk office with proof of residency until 8:00 PM.',
      },
    ],
  },
  nevada: {
    slug: 'nevada',
    name: 'Nevada',
    postalCode: 'NV',
    registrationDeadline: {
      online: 'November 3, 2026 (Same-Day Online & In-Person)',
      mailPostmark: 'October 6, 2026',
      inPerson: 'November 3, 2026',
      sameDayRegistration: true,
      notes: 'Nevada provides same-day registration online and at all early voting and Election Day polling places.',
    },
    earlyVoting: {
      starts: 'October 17, 2026',
      ends: 'October 30, 2026',
      description: 'Two full weeks of early in-person voting across vote centers in Clark, Washoe, and rural counties.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'Automatic (All active voters mailed a ballot)',
      returnDeadline: 'Postmarked on or before Nov 3, 2026, and received by Nov 7, 2026',
      excuseRequired: false,
      postmarkMatters: true,
      details: 'Universal mail voting: All registered active voters receive a ballot in the mail automatically unless they opt out.',
    },
    voterId: {
      type: 'No Document Required (Signature Verification)',
      description: 'Signature is matched against signature on record. ID only required if registering same-day.',
      acceptableDocs: ['NV Driver License / Non-Driver ID (for same-day registrants)'],
    },
    pollingHours: '7:00 AM – 7:00 PM PST',
    timezone: 'Pacific',
    officialPortal: {
      name: 'Nevada Secretary of State - VotENV.gov',
      url: 'https://www.nvsos.gov/sos/elections',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: '2026 Nevada Gubernatorial Race (Joe Lombardo re-election contest).',
      competitiveHouseDistricts: ['NV-01 (Las Vegas)', 'NV-03 (Henderson/Summerlin)', 'NV-04 (North Las Vegas)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not an official state holiday. Nevada observes Nevada Day on the last Friday of October instead.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Nevada?',
        answer: 'Election Day 2026 in Nevada is Tuesday, November 3, 2026. Polls open at 7:00 AM and close at 7:00 PM PST.',
      },
      {
        question: 'Does everyone get a mail ballot in Nevada?',
        answer: 'Yes! Nevada law sends a mail-in ballot to all active registered voters automatically unless the voter submits an opt-out request.',
      },
    ],
  },
  northcarolina: {
    slug: 'northcarolina',
    name: 'North Carolina',
    postalCode: 'NC',
    registrationDeadline: {
      online: 'October 9, 2026 (5:00 PM EST via DMV)',
      mailPostmark: 'October 9, 2026',
      inPerson: 'October 9, 2026 (or during Early Voting via One-Stop Registration)',
      sameDayRegistration: true,
      notes: 'Same-day registration is permitted during the early voting period only (not on Election Day).',
    },
    earlyVoting: {
      starts: 'October 15, 2026',
      ends: 'October 31, 2026 (3:00 PM EST)',
      description: 'One-stop early in-person voting across all 100 counties allows eligible residents to register and vote simultaneously.',
      saturdayVoting: true,
      sundayVoting: true,
    },
    mailInVoting: {
      requestDeadline: 'October 27, 2026 (5:00 PM EST)',
      returnDeadline: 'November 3, 2026 (7:30 PM EST)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'All absentee ballots must be physically in the county board office by 7:30 PM on Election Day regardless of postmark.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'North Carolina voters must show an acceptable photo ID to vote in person and include a copy with absentee ballots.',
      acceptableDocs: ['NC Driver License', 'U.S. Passport', 'Approved NC College/University Student ID', 'NC State/Local Govt Employee ID', 'Free County Board of Elections Photo ID'],
    },
    pollingHours: '6:30 AM – 7:30 PM EST',
    timezone: 'Eastern',
    officialPortal: {
      name: 'North Carolina State Board of Elections - NCSBE.gov',
      url: 'https://www.ncsbe.gov',
    },
    keyRaces2026: {
      senate: true,
      senateDescription: 'Class II U.S. Senate Seat (Thom Tillis seat; premier marquee national Senate race).',
      governor: false,
      competitiveHouseDistricts: ['NC-01 (Northeastern NC)', 'NC-09 (Sandhills/Piedmont)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not an official paid state holiday in North Carolina.',
    faqs: [
      {
        question: 'When is Election Day 2026 in North Carolina?',
        answer: 'Election Day 2026 in North Carolina is Tuesday, November 3, 2026. Polls open at 6:30 AM and close at 7:30 PM EST.',
      },
      {
        question: 'Does North Carolina have a U.S. Senate race in 2026?',
        answer: 'Yes! North Carolina hosts one of the most competitive Class II U.S. Senate races in the country in November 2026.',
      },
      {
        question: 'Do I need a photo ID to vote in North Carolina?',
        answer: 'Yes. Photo ID is mandatory for in-person voting in North Carolina. If you lack an ID, you can obtain a free voter photo ID from your county board of elections.',
      },
    ],
  },
  wisconsin: {
    slug: 'wisconsin',
    name: 'Wisconsin',
    postalCode: 'WI',
    registrationDeadline: {
      online: 'October 14, 2026 (11:59 PM CST)',
      mailPostmark: 'October 14, 2026',
      inPerson: 'November 3, 2026 (8:00 PM CST with Same-Day Registration at Polling Place)',
      sameDayRegistration: true,
      notes: 'Wisconsin allows Election Day registration at your polling place with proof of residency.',
    },
    earlyVoting: {
      starts: 'October 20, 2026',
      ends: 'November 1, 2026',
      description: 'In-person absentee voting occurs at municipal clerk offices and designated satellite sites.',
      saturdayVoting: true,
      sundayVoting: false,
    },
    mailInVoting: {
      requestDeadline: 'October 29, 2026 (5:00 PM CST for regular voters)',
      returnDeadline: 'November 3, 2026 (8:00 PM CST)',
      excuseRequired: false,
      postmarkMatters: false,
      details: 'All absentee ballots require a witness signature and address on the certificate envelope to be counted.',
    },
    voterId: {
      type: 'Strict Photo ID',
      description: 'Wisconsin requires an acceptable photo ID for voting. Address on the ID card does not need to be current.',
      acceptableDocs: ['Wisconsin Driver License', 'Wisconsin DOT Identification Card', 'U.S. Passport', 'Military ID', 'Approved Wisconsin College/University Student ID with enrollment proof'],
    },
    pollingHours: '7:00 AM – 8:00 PM CST',
    timezone: 'Central',
    officialPortal: {
      name: 'Wisconsin Elections Commission - MyVote WI',
      url: 'https://myvote.wi.gov',
    },
    keyRaces2026: {
      senate: false,
      governor: true,
      governorDescription: '2026 Wisconsin Gubernatorial Election (Marquee Midwestern battleground).',
      competitiveHouseDistricts: ['WI-01 (Kenosha/Racine)', 'WI-03 (Western WI)'],
    },
    isStateHoliday: false,
    holidayStatusNotes: 'Not an official paid state holiday in Wisconsin. Employees are entitled to up to three hours off to vote upon prior notification.',
    faqs: [
      {
        question: 'When is Election Day 2026 in Wisconsin?',
        answer: 'Election Day 2026 in Wisconsin is Tuesday, November 3, 2026. Polls open at 7:00 AM and close at 8:00 PM CST.',
      },
      {
        question: 'Can you register to vote on Election Day in Wisconsin?',
        answer: 'Yes! Wisconsin offers same-day voter registration at your assigned neighborhood polling place on Election Day. You must bring proof of residency and a photo ID.',
      },
    ],
  },
};

export const ALL_STATES_LIST = [
  { slug: 'pennsylvania', name: 'Pennsylvania', postalCode: 'PA', battleground: true },
  { slug: 'texas', name: 'Texas', postalCode: 'TX', battleground: true },
  { slug: 'georgia', name: 'Georgia', postalCode: 'GA', battleground: true },
  { slug: 'arizona', name: 'Arizona', postalCode: 'AZ', battleground: true },
  { slug: 'ohio', name: 'Ohio', postalCode: 'OH', battleground: true },
  { slug: 'florida', name: 'Florida', postalCode: 'FL', battleground: true },
  { slug: 'michigan', name: 'Michigan', postalCode: 'MI', battleground: true },
  { slug: 'nevada', name: 'Nevada', postalCode: 'NV', battleground: true },
  { slug: 'northcarolina', name: 'North Carolina', postalCode: 'NC', battleground: true },
  { slug: 'wisconsin', name: 'Wisconsin', postalCode: 'WI', battleground: true },
  { slug: 'california', name: 'California', postalCode: 'CA', battleground: false },
  { slug: 'newyork', name: 'New York', postalCode: 'NY', battleground: false },
  { slug: 'illinois', name: 'Illinois', postalCode: 'IL', battleground: false },
  { slug: 'virginia', name: 'Virginia', postalCode: 'VA', battleground: false },
  { slug: 'colorado', name: 'Colorado', postalCode: 'CO', battleground: false },
];
