export interface StateRightsRestorationRule {
  stateSlug: string;
  stateName: string;
  postalCode: string;
  restorationTier: 'Never Disenfranchised (Vote While Incarcerated)' | 'Automatic Upon Release from Prison (Even on Parole/Probation)' | 'Automatic Upon Completion of Probation and Parole' | 'Discretionary / Governor Pardon / Fines Traps';
  tierNumber: 1 | 2 | 3 | 4;
  statutorySummary: string;
  statuteCitation: string;
  probationVotingAllowed: boolean;
  paroleVotingAllowed: boolean;
  finesAndFeesMustBePaid: boolean;
  reRegistrationRequired: boolean;
  restorationProcessSteps: string[];
  misdemeanorRule: string;
  specialStateNotes: string;
}

export const RIGHTS_RESTORATION_TIERS_OVERVIEW = [
  {
    tier: 1,
    name: 'Never Disenfranchised',
    jurisdictions: 'Maine, Vermont, Washington D.C., Puerto Rico',
    description: 'Citizens never lose their voting rights due to a criminal conviction. Individuals may cast an absentee ballot while incarcerated in prison or jail.',
  },
  {
    tier: 2,
    name: 'Automatic Upon Release from Prison',
    jurisdictions: 'Over 25 States (CA, NY, MN, NM, WA, MI, IL, PA, CO, NJ, CT, NV, MA, RI, HI, NH, IN, ND, OH, UT, MT, OR)',
    description: 'Voting rights are restored automatically the moment an individual is released from physical prison confinement. You CAN vote while on probation, parole, or supervised release, and unpaid court debt does not block your vote.',
  },
  {
    tier: 3,
    name: 'Automatic Upon Completion of Sentence',
    jurisdictions: 'Texas, Georgia, North Carolina, Wisconsin, Missouri, Kansas, South Carolina, Alaska, Arkansas, Oklahoma, West Virginia',
    description: 'Voting rights are restored automatically after completing all prison time, probation, and parole ("off paper"). Once supervision ends, you simply re-register to vote.',
  },
  {
    tier: 4,
    name: 'Discretionary / Clemency / Financial Hurdles',
    jurisdictions: 'Florida, Mississippi, Virginia, Kentucky, Tennessee, Alabama',
    description: 'Requires payment of all legal financial obligations (fines/fees in FL), individual gubernatorial restoration (VA/KY), legislative action (MS), or Board of Pardons petition.',
  },
];

export const STATE_RIGHTS_RESTORATION_DATA: Record<string, StateRightsRestorationRule> = {
  pennsylvania: {
    stateSlug: 'pennsylvania',
    stateName: 'Pennsylvania',
    postalCode: 'PA',
    restorationTier: 'Automatic Upon Release from Prison (Even on Parole/Probation)',
    tierNumber: 2,
    statutorySummary: 'In Pennsylvania, you only lose your voting right while physically serving time in a correctional facility on a felony conviction. The minute you are released, your right is restored immediately—even while on probation, parole, or living in a halfway house.',
    statuteCitation: '25 P.S. § 2602(w) & Mixon v. Commonwealth (2000)',
    probationVotingAllowed: true,
    paroleVotingAllowed: true,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Be released from physical prison confinement.',
      'Re-register to vote online at vote.pa.gov or via paper form at your current residential address.',
      'You do NOT need a certificate of discharge or court permission.',
    ],
    misdemeanorRule: 'Misdemeanor convictions NEVER disqualify you in Pennsylvania. You can even vote by absentee ballot from county jail while serving a misdemeanor sentence.',
    specialStateNotes: 'If you are in county jail awaiting trial or serving time for a misdemeanor, you are legally eligible to vote by mail in Pennsylvania.',
  },
  texas: {
    stateSlug: 'texas',
    stateName: 'Texas',
    postalCode: 'TX',
    restorationTier: 'Automatic Upon Completion of Probation and Parole',
    tierNumber: 3,
    statutorySummary: 'Under Texas Election Code § 11.002, a person convicted of a felony regains the right to vote automatically once they have "fully discharged" their sentence, including completing all incarceration, probation, parole, or receiving a pardon.',
    statuteCitation: 'Tex. Elec. Code § 11.002(a)(4)(A)',
    probationVotingAllowed: false,
    paroleVotingAllowed: false,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Complete all terms of your sentence: prison, parole, and community supervision/probation ("off paper").',
      'Obtain proof of discharge from the Texas Department of Criminal Justice (TDCJ) or supervising court.',
      'Submit a new Texas voter registration application at least 30 days before Election Day.',
    ],
    misdemeanorRule: 'A misdemeanor conviction NEVER disqualifies you from voting in Texas. Only felony convictions affect voting rights.',
    specialStateNotes: 'CRITICAL: In Texas, voting or submitting a voter registration form while still on active probation or parole can be prosecuted under Tex. Elec. Code § 64.012. Verify you are 100% off paper before registering.',
  },
  georgia: {
    stateSlug: 'georgia',
    stateName: 'Georgia',
    postalCode: 'GA',
    restorationTier: 'Automatic Upon Completion of Probation and Parole',
    tierNumber: 3,
    statutorySummary: 'Under the Georgia Constitution, voting rights are restored automatically upon completion of the full sentence for a felony involving moral turpitude, including prison, probation, parole, and any sentence-ordered court fines.',
    statuteCitation: 'Ga. Const. art. II, § 1, para. III & O.C.G.A. § 21-2-216',
    probationVotingAllowed: false,
    paroleVotingAllowed: false,
    finesAndFeesMustBePaid: true, // Only if part of criminal sentence itself
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Complete all prison time, probation, and parole.',
      'If sentenced under the Georgia First Offender Act and successfully completed, you never lost your voting rights.',
      'Submit a new voter registration application with your county registrar.',
    ],
    misdemeanorRule: 'Misdemeanor convictions NEVER revoke voting rights in Georgia.',
    specialStateNotes: 'Georgia First Offender Act and Conditional Discharge: If you were sentenced under these statutes and successfully discharged without adjudication of guilt, your voting rights were never revoked.',
  },
  florida: {
    stateSlug: 'florida',
    stateName: 'Florida',
    postalCode: 'FL',
    restorationTier: 'Discretionary / Governor Pardon / Fines Traps',
    tierNumber: 4,
    statutorySummary: 'Under Florida Amendment 4 (2018) and implementing statute SB 7066 (Fla. Stat. § 98.0751), voting rights are restored for non-murder/non-felony-sexual-offense convictions ONLY after completing all terms of sentence, INCLUDING full payment of all fines, fees, costs, and restitution.',
    statuteCitation: 'Fla. Stat. § 98.0751 & Fla. Const. art. VI, § 4',
    probationVotingAllowed: false,
    paroleVotingAllowed: false,
    finesAndFeesMustBePaid: true,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Complete all prison, probation, and parole time.',
      'Verify that all court fines, fees, surcharges, and victim restitution are fully paid or converted to civil liens by the court.',
      'Request an advisory opinion from the Florida Division of Elections to confirm your eligibility before registering.',
    ],
    misdemeanorRule: 'Misdemeanor convictions do NOT revoke voting rights in Florida.',
    specialStateNotes: 'WARNING: Registering or voting with unpaid court fines in Florida has led to criminal charges by the Florida Office of Election Crimes and Security. Always confirm your financial obligations are satisfied or request a formal advisory opinion from the Secretary of State.',
  },
  california: {
    stateSlug: 'california',
    stateName: 'California',
    postalCode: 'CA',
    restorationTier: 'Automatic Upon Release from Prison (Even on Parole/Probation)',
    tierNumber: 2,
    statutorySummary: 'Under California Proposition 17 (2020), voting rights are restored automatically to every person with a felony conviction immediately upon release from prison, including anyone on parole, probation, or mandatory supervision.',
    statuteCitation: 'Cal. Const. art. II, § 4 & Cal. Elec. Code § 2101',
    probationVotingAllowed: true,
    paroleVotingAllowed: true,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Be released from physical prison confinement.',
      'Register to vote online at registertovote.ca.gov or at any county election office.',
      'You are immediately eligible to vote while on parole or probation.',
    ],
    misdemeanorRule: 'Misdemeanor convictions never take away your voting rights in California.',
    specialStateNotes: 'Individuals serving a felony sentence in county jail under California realignment (AB 109) retain the right to vote if not in state or federal prison.',
  },
  newyork: {
    stateSlug: 'newyork',
    stateName: 'New York',
    postalCode: 'NY',
    restorationTier: 'Automatic Upon Release from Prison (Even on Parole/Probation)',
    tierNumber: 2,
    statutorySummary: 'Under New York legislation signed in 2021, voting rights are restored automatically to any person convicted of a felony immediately upon release from prison, even if serving a term of parole or post-release supervision.',
    statuteCitation: 'N.Y. Elec. Law § 5-106(2)',
    probationVotingAllowed: true,
    paroleVotingAllowed: true,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Be released from prison confinement.',
      'Re-register to vote with your county board of elections.',
      'Parole officers are legally required to provide voter registration forms upon release.',
    ],
    misdemeanorRule: 'Misdemeanors never disqualify a voter in New York.',
    specialStateNotes: 'You can vote in New York while on parole, probation, or under conditional discharge.',
  },
  michigan: {
    stateSlug: 'michigan',
    stateName: 'Michigan',
    postalCode: 'MI',
    restorationTier: 'Automatic Upon Release from Prison (Even on Parole/Probation)',
    tierNumber: 2,
    statutorySummary: 'In Michigan, you only lose your voting rights while physically serving a sentence in jail or prison. As soon as you are released, your right to vote is restored automatically, including while on probation or parole.',
    statuteCitation: 'Mich. Comp. Laws § 168.758b',
    probationVotingAllowed: true,
    paroleVotingAllowed: true,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Be released from physical jail or prison.',
      'Re-register to vote with your city or township clerk.',
      'Eligible immediately while on probation, parole, or house arrest.',
    ],
    misdemeanorRule: 'Misdemeanors do not disqualify voters in Michigan.',
    specialStateNotes: 'If you are in jail awaiting trial and have not been sentenced, you can vote by absentee ballot in Michigan.',
  },
  northcarolina: {
    stateSlug: 'northcarolina',
    stateName: 'North Carolina',
    postalCode: 'NC',
    restorationTier: 'Automatic Upon Completion of Probation and Parole',
    tierNumber: 3,
    statutorySummary: 'Under North Carolina General Statute § 13-1, voting rights are restored automatically upon the unconditional discharge of an individual who has completed all prison, probation, and post-release supervision.',
    statuteCitation: 'N.C. Gen. Stat. § 13-1 & CSI v. Moore (2023)',
    probationVotingAllowed: false,
    paroleVotingAllowed: false,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Complete all terms of sentence, probation, and post-release supervision.',
      'Obtain certificate of restoration of citizenship from court or probation officer.',
      'Re-register to vote online or at the county board of elections.',
    ],
    misdemeanorRule: 'Misdemeanors never disqualify voters in North Carolina.',
    specialStateNotes: 'In 2023, the NC Supreme Court in CSI v. Moore held that individuals on felony probation or post-release supervision are not eligible to vote until fully discharged.',
  },
  ohio: {
    stateSlug: 'ohio',
    stateName: 'Ohio',
    postalCode: 'OH',
    restorationTier: 'Automatic Upon Release from Prison (Even on Parole/Probation)',
    tierNumber: 2,
    statutorySummary: 'In Ohio, voting rights are restored automatically the moment you are released from prison confinement. You can legally vote while on probation, parole, community control, or post-release control.',
    statuteCitation: 'Ohio Rev. Code § 2961.01',
    probationVotingAllowed: true,
    paroleVotingAllowed: true,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Be released from physical prison or jail confinement.',
      'Re-register to vote with your county board of elections at least 30 days before Election Day.',
      'Bring approved government photo ID to the polls on Election Day.',
    ],
    misdemeanorRule: 'Misdemeanors do not affect voting rights in Ohio.',
    specialStateNotes: 'Ohio law explicitly permits voting while under community control or post-release control. You do not need to show proof of final discharge.',
  },
  wisconsin: {
    stateSlug: 'wisconsin',
    stateName: 'Wisconsin',
    postalCode: 'WI',
    restorationTier: 'Automatic Upon Completion of Probation and Parole',
    tierNumber: 3,
    statutorySummary: 'Under Wisconsin Statute § 6.03(1)(b), a person convicted of a felony regains their right to vote once they have completed the entire term of sentence, including all incarceration, probation, and extended supervision ("off paper").',
    statuteCitation: 'Wis. Stat. § 6.03(1)(b) & § 304.078',
    probationVotingAllowed: false,
    paroleVotingAllowed: false,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Complete all extended supervision, probation, and parole.',
      'Obtain a Certificate of Discharge from the Wisconsin Department of Corrections.',
      'Re-register to vote with your municipal clerk or at your polling place on Election Day (with proof of residence).',
    ],
    misdemeanorRule: 'Misdemeanor convictions never disenfranchise voters in Wisconsin.',
    specialStateNotes: 'Wisconsin offers same-day voter registration at the polling place once you are off paper. Bring proof of address and approved voter photo ID.',
  },
  minnesota: {
    stateSlug: 'minnesota',
    stateName: 'Minnesota',
    postalCode: 'MN',
    restorationTier: 'Automatic Upon Release from Prison (Even on Parole/Probation)',
    tierNumber: 2,
    statutorySummary: 'Under the landmark 2023 Restore the Vote Act (HF 28), voting rights are restored automatically to individuals with felony convictions immediately upon release from prison, allowing over 50,000 Minnesotans on probation or parole to vote.',
    statuteCitation: 'Minn. Stat. § 201.014, subd. 2a (2023)',
    probationVotingAllowed: true,
    paroleVotingAllowed: true,
    finesAndFeesMustBePaid: false,
    reRegistrationRequired: true,
    restorationProcessSteps: [
      'Be released from physical prison or correctional facility.',
      'Re-register to vote online at mnvotes.gov or at your polling place on Election Day with proof of residence.',
      'You are fully eligible while on probation or supervised release.',
    ],
    misdemeanorRule: 'Misdemeanors never affect voting eligibility in Minnesota.',
    specialStateNotes: 'Minnesota offers same-day voter registration. You can register at your polling place while on active felony probation.',
  },
};

export const COMMON_RESTORATION_FAQS = [
  {
    q: 'Does a misdemeanor conviction take away my right to vote?',
    a: 'NO. In all 50 states and Washington D.C., a misdemeanor conviction NEVER revokes your voting rights. Even if you are currently in jail serving a misdemeanor sentence or awaiting trial, you remain legally eligible to vote by mail or absentee ballot.',
  },
  {
    q: 'Can I vote if I am currently on probation or parole?',
    a: 'It depends on your state. In over 25 states (including PA, CA, NY, MI, OH, MN, NM, WA, IL, CO, NJ), voting rights are restored immediately upon release from prison, meaning you CAN vote while on probation or parole. In states like TX, GA, NC, and WI, you must complete all probation and parole ("off paper") before you can vote.',
  },
  {
    q: 'Do I have to pay all court fines and restitution before I can vote?',
    a: 'In most states, no—voting rights are not conditioned on debt. However, in Florida (SB 7066) and Georgia, all court-ordered fines and restitution that were part of the criminal sentence must be satisfied. In Arkansas and Tennessee, financial obligations also apply.',
  },
  {
    q: 'Does my voting right restore automatically, or do I have to apply for a governor pardon?',
    a: 'In the vast majority of U.S. states, restoration is 100% AUTOMATIC once you meet the statutory milestone (either release from prison or completion of supervision). Only a small number of states (Virginia, Mississippi, Kentucky for certain offenses) require an individual pardon or executive clemency application.',
  },
  {
    q: 'Once my rights are restored, can I just show up at the polls, or do I have to re-register?',
    a: 'You MUST re-register to vote. When you were convicted, the state removed your name from the voter rolls. Even though your eligibility is restored, election officials do not automatically reactivate your registration. You must submit a standard voter registration form before your state’s deadline.',
  },
];
