export interface StudentStateRule {
  stateSlug: string;
  stateName: string;
  postalCode: string;
  studentIdAcceptedAtPolls: 'Accepted (Public & Private)' | 'Accepted (Public Colleges Only)' | 'Conditional / Strict Criteria' | 'Banned / Not Accepted';
  studentIdDetails: string;
  canRegisterAtDormAddress: boolean;
  residencyStatuteCitation: string;
  absenteeBallotOptionForHomeState: string;
  sameDayRegistrationAvailable: boolean;
  specialCampusRules: string;
}

export const STUDENT_CONSTITUTIONAL_FOUNDATION = {
  landmarkSupremeCourtCase: 'Symm v. United States, 439 U.S. 1105 (1979)',
  constitutionalRuling: 'The Supreme Court affirmed that college students have an equal constitutional right under the 26th Amendment to register and vote in the community where they attend school, without being subjected to special questionnaires or residency hurdles.',
  taxDependencyRule: 'Parents claiming a college student as a dependent on IRS federal income taxes (Form 1040) has ZERO legal impact on the student’s voting residency. Voting is an individual constitutional right, not an IRS tax status.',
  fafsaFinancialAidRule: 'Registering to vote in your college town does NOT affect your Federal Pell Grants, FAFSA eligibility, federal student loans, or parent PLUS loans.',
};

export const STUDENT_STATE_RULES: Record<string, StudentStateRule> = {
  ohio: {
    stateSlug: 'ohio',
    stateName: 'Ohio',
    postalCode: 'OH',
    studentIdAcceptedAtPolls: 'Banned / Not Accepted',
    studentIdDetails: 'Under Ohio HB 458, college student IDs (even from state universities like Ohio State, Cincinnati, or Kent State) are strictly PROHIBITED as voter identification at the polls.',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'Ohio Rev. Code § 3503.02 & § 3505.18 (HB 458)',
    absenteeBallotOptionForHomeState: 'If registering with dorm address without Ohio driver’s license, vote by mail with last 4 digits of SSN to bypass strict photo ID requirement.',
    sameDayRegistrationAvailable: false,
    specialCampusRules: 'College students who register at their Ohio campus must present an unexpired Ohio driver’s license, state ID, U.S. passport, or military ID to vote in person. Out-of-state driver’s licenses and student IDs are NOT accepted in person.',
  },
  wisconsin: {
    stateSlug: 'wisconsin',
    stateName: 'Wisconsin',
    postalCode: 'WI',
    studentIdAcceptedAtPolls: 'Conditional / Strict Criteria',
    studentIdDetails: 'Student IDs are accepted ONLY if they contain: issuance date, expiration date not more than 2 years from issuance, student signature, and voter presents a separate document proving current enrollment (such as a tuition fee receipt or enrollment verification letter).',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'Wis. Stat. § 5.02(6m)(f)',
    absenteeBallotOptionForHomeState: 'Students from other states can request an absentee ballot from their home state or vote in Wisconsin.',
    sameDayRegistrationAvailable: true,
    specialCampusRules: 'Most Wisconsin universities (UW-Madison, UW-Milwaukee, Marquette) print a special dedicated "Voter ID" card upon request at the campus card office that meets the statutory 2-year expiration requirement.',
  },
  texas: {
    stateSlug: 'texas',
    stateName: 'Texas',
    postalCode: 'TX',
    studentIdAcceptedAtPolls: 'Banned / Not Accepted',
    studentIdDetails: 'Student IDs from Texas universities (UT Austin, Texas A&M, etc.) are NOT on the list of approved photo IDs under Texas Election Code § 63.0101.',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'Tex. Elec. Code § 1.015 & Symm v. United States (originated in Waller County, TX)',
    absenteeBallotOptionForHomeState: 'Out-of-state students can vote using a U.S. Passport or apply for an absentee ballot from their home state.',
    sameDayRegistrationAvailable: false,
    specialCampusRules: 'Students who do not possess an approved Texas ID (DL, Election ID, Passport, Handgun License) can fill out a Reasonable Impediment Declaration and show a utility bill or campus fee statement.',
  },
  georgia: {
    stateSlug: 'georgia',
    stateName: 'Georgia',
    postalCode: 'GA',
    studentIdAcceptedAtPolls: 'Accepted (Public Colleges Only)',
    studentIdDetails: 'Student photo IDs from Georgia PUBLIC universities, colleges, and technical colleges (UGA, Georgia Tech, Georgia State) ARE valid voter IDs. Private college IDs (Emory, Morehouse, Spelman) are NOT accepted unless explicitly approved by the Secretary of State.',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'O.C.G.A. § 21-2-417(a)(6)',
    absenteeBallotOptionForHomeState: 'Out-of-state students can request an absentee ballot from their home jurisdiction or register in Georgia.',
    sameDayRegistrationAvailable: false,
    specialCampusRules: 'Check the official Georgia Secretary of State approved college ID list. If attending a private institution, use a driver’s license, U.S. passport, or free county voter ID card.',
  },
  pennsylvania: {
    stateSlug: 'pennsylvania',
    stateName: 'Pennsylvania',
    postalCode: 'PA',
    studentIdAcceptedAtPolls: 'Accepted (Public & Private)',
    studentIdDetails: 'Any photo or non-photo ID issued by any accredited Pennsylvania college or university is fully accepted for first-time precinct voters.',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: '25 P.S. § 3050(a.3)',
    absenteeBallotOptionForHomeState: 'Out-of-state students in PA can vote in PA or request an absentee ballot from their home state by mail.',
    sameDayRegistrationAvailable: false,
    specialCampusRules: 'In Pennsylvania, voter ID is only required the very first time you vote at a new precinct. A university student ID, current utility bill, or campus pay stub is 100% compliant.',
  },
  northcarolina: {
    stateSlug: 'northcarolina',
    stateName: 'North Carolina',
    postalCode: 'NC',
    studentIdAcceptedAtPolls: 'Conditional / Strict Criteria',
    studentIdDetails: 'Student IDs from UNC system schools, community colleges, and approved private universities are accepted ONLY if the institution submitted an approval application to the State Board of Elections.',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'N.C. Gen. Stat. § 163-166.16',
    absenteeBallotOptionForHomeState: 'College students can register during early voting using One-Stop Early Voting with proof of campus residence.',
    sameDayRegistrationAvailable: true, // During early voting only
    specialCampusRules: 'Verify that your university is on the NCSBE Approved Student ID list. Duke, UNC Chapel Hill, NC State, and Wake Forest IDs are approved.',
  },
  michigan: {
    stateSlug: 'michigan',
    stateName: 'Michigan',
    postalCode: 'MI',
    studentIdAcceptedAtPolls: 'Accepted (Public & Private)',
    studentIdDetails: 'Current student IDs with photo from any high school or accredited college or university in Michigan or out of state are fully accepted.',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'Mich. Comp. Laws § 168.523',
    absenteeBallotOptionForHomeState: 'Students can register in their campus municipality or vote absentee in their hometown.',
    sameDayRegistrationAvailable: true,
    specialCampusRules: 'Under Michigan law, if you do not have your student ID or driver’s license with you at the polls, you can simply sign an Affidavit of Identity and cast a standard ballot.',
  },
  california: {
    stateSlug: 'california',
    stateName: 'California',
    postalCode: 'CA',
    studentIdAcceptedAtPolls: 'Accepted (Public & Private)',
    studentIdDetails: 'No photo ID is required to vote in person for registered voters. If required to show ID as a first-time voter, a student ID with photo or campus fee bill is accepted.',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'Cal. Elec. Code § 2021 & § 2022',
    absenteeBallotOptionForHomeState: 'Every registered voter in California automatically receives a ballot by mail at their dorm or apartment address.',
    sameDayRegistrationAvailable: true,
    specialCampusRules: 'California offers Conditional Voter Registration (same-day registration) at all campus Vote Centers through 8:00 PM on Election Day.',
  },
  arizona: {
    stateSlug: 'arizona',
    stateName: 'Arizona',
    postalCode: 'AZ',
    studentIdAcceptedAtPolls: 'Conditional / Strict Criteria',
    studentIdDetails: 'Student IDs alone are NOT sufficient for in-person voting unless paired with proof of address (utility bill, bank statement, or university dorm housing agreement).',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'Ariz. Rev. Stat. § 16-579',
    absenteeBallotOptionForHomeState: 'Out-of-state students can register in Arizona or request a home-state absentee ballot.',
    sameDayRegistrationAvailable: false,
    specialCampusRules: 'Arizona requires documented proof of citizenship (DPOC) to vote in state and local races. Without DPOC, students can register as "Federal-Only" voters to vote for U.S. Senate and U.S. House.',
  },
  florida: {
    stateSlug: 'florida',
    stateName: 'Florida',
    postalCode: 'FL',
    studentIdAcceptedAtPolls: 'Accepted (Public & Private)',
    studentIdDetails: 'Student IDs from any accredited college or university are approved photo IDs under Florida Statute § 101.043. If the student ID lacks a signature, voter can present a secondary card with signature (debit card).',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'Fla. Stat. § 101.043',
    absenteeBallotOptionForHomeState: 'Students may choose to vote in their university county or absentee from home county.',
    sameDayRegistrationAvailable: false,
    specialCampusRules: 'Florida allows early voting sites on college campuses (UF, FSU, UCF, USF, FIU). Student IDs are accepted at all early voting and Election Day polling places.',
  },
  newyork: {
    stateSlug: 'newyork',
    stateName: 'New York',
    postalCode: 'NY',
    studentIdAcceptedAtPolls: 'Accepted (Public & Private)',
    studentIdDetails: 'No ID required at polling places for registered voters unless first-time voter without SSN match. Student photo IDs and college tuition statements are accepted for first-time verification.',
    canRegisterAtDormAddress: true,
    residencyStatuteCitation: 'N.Y. Elec. Law § 5-104',
    absenteeBallotOptionForHomeState: 'Students can vote in NY or request home-state ballot.',
    sameDayRegistrationAvailable: false,
    specialCampusRules: 'New York law requires polling places on college campuses that have 300 or more registered student voters living on campus.',
  },
};

export const STUDENT_VOTING_MYTHS = [
  {
    myth: 'Myth: "My parents claim me on their taxes, so I can’t vote where I go to college."',
    fact: 'Fact: False. Under federal law, IRS tax dependency has zero legal connection to voting residency. A student can be claimed on their parents’ federal tax return and legally register and vote in their campus community.',
  },
  {
    myth: 'Myth: "Registering to vote in my college town will affect my financial aid or FAFSA."',
    fact: 'Fact: False. Voting registration does not affect Title IV federal financial aid, Pell Grants, Stafford loans, or merit scholarships. In-state vs. out-of-state tuition status is determined by separate state residency statutes, not voter registration.',
  },
  {
    myth: 'Myth: "I can be registered in both my hometown and my college town and choose where to vote on Election Day."',
    fact: 'Fact: You can only cast ONE ballot per election. While students may have ties to two locations, voting in more than one jurisdiction in the same election is a federal felony (52 U.S.C. § 10307(e)). Pick one address and vote once.',
  },
  {
    myth: 'Myth: "I live in a dorm without a traditional street mailbox, so I cannot register."',
    fact: 'Fact: You can register using your dorm building’s physical street address as your residential voting address, and specify your campus student mail center or PO Box as your mailing address.',
  },
];
