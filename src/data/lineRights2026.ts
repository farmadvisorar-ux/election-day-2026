export interface StateLineRightRule {
  stateSlug: string;
  stateName: string;
  postalCode: string;
  statuteCitation: string;
  pollClosingHour: string;
  lineGuaranteeText: string;
  endOfLineMarkingMethod: string;
  bufferZoneFeet: number;
  cellPhoneInBoothPolicy: 'Permitted' | 'Prohibited' | 'Restricted (No Photography/Calls)';
  emergencyHotlineNote: string;
}

export const NATIONAL_LEGAL_HOTLINES = [
  {
    name: 'Election Protection Coalition (English)',
    phone: '866-687-8683',
    tollFreeDisplay: '866-OUR-VOTE',
    sponsor: "Lawyers' Committee for Civil Rights Under Law",
    languages: 'English',
    hours: 'Open 6:00 AM ET through close of polls in Alaska (1:00 AM ET)',
  },
  {
    name: 'Ve Y Vota (Spanish / Español)',
    phone: '888-839-8682',
    tollFreeDisplay: '888-VE-Y-VOTA',
    sponsor: 'NALEO Educational Fund',
    languages: 'Spanish / Bilingual English',
    hours: 'Bilingual legal assistance throughout early voting and Election Day',
  },
  {
    name: 'APIAVote Legal Hotline (Asian Multilingual)',
    phone: '888-274-8683',
    tollFreeDisplay: '888-API-VOTE',
    sponsor: 'Asian and Pacific Islander American Vote & Asian Americans Advancing Justice',
    languages: 'English, Mandarin, Cantonese, Korean, Vietnamese, Tagalog, Hindi, Bengali, Punjabi, Urdu',
    hours: 'Multilingual language assistance and poll observer reporting',
  },
  {
    name: 'Yalla Vote (Arabic / العربية)',
    phone: '844-925-5287',
    tollFreeDisplay: '844-YALLA-US',
    sponsor: 'Arab American Institute (AAI)',
    languages: 'Arabic and English',
    hours: 'Live assistance for Arab American voters',
  },
  {
    name: 'U.S. Department of Justice (DOJ Civil Rights Division)',
    phone: '800-253-3931',
    tollFreeDisplay: '1-800-253-3931',
    sponsor: 'Federal Civil Rights Division Voting Section (52 U.S.C. § 10307)',
    languages: 'Federal reporting line for voter intimidation, physical obstruction, or federal violations',
    hours: 'Federal investigators on duty across all jurisdictions on Nov 3, 2026',
  },
];

export const STATE_LINE_RIGHTS: Record<string, StateLineRightRule> = {
  pennsylvania: {
    stateSlug: 'pennsylvania',
    stateName: 'Pennsylvania',
    postalCode: 'PA',
    statuteCitation: '25 P.S. § 3045',
    pollClosingHour: '8:00 PM ET',
    lineGuaranteeText: 'All electors who are in line at or before 8:00 PM must be permitted to vote. No elector who arrives after 8:00 PM may vote.',
    endOfLineMarkingMethod: 'The judge of election or an appointed police officer/constable stands at the end of the line at exactly 8:00 PM.',
    bufferZoneFeet: 25,
    cellPhoneInBoothPolicy: 'Restricted (No Photography/Calls)',
    emergencyHotlineNote: 'Under 25 P.S. § 3045, if you are in line at 8:00 PM, stay in line. The judge of election cannot dismiss voters.',
  },
  texas: {
    stateSlug: 'texas',
    stateName: 'Texas',
    postalCode: 'TX',
    statuteCitation: 'Tex. Elec. Code § 41.032',
    pollClosingHour: '7:00 PM Local Time (CT / MT in El Paso)',
    lineGuaranteeText: 'A voter who is inside or in line at the polling place at 7:00 PM must be allowed to vote.',
    endOfLineMarkingMethod: 'The presiding election judge or deputy positions themselves behind the last voter in line at 7:00 PM and announces the line is closed to new arrivals.',
    bufferZoneFeet: 100,
    cellPhoneInBoothPolicy: 'Prohibited',
    emergencyHotlineNote: 'Texas law strictly forbids cell phone use within 100 feet of voting stations (Tex. Elec. Code § 61.014). Write your notes on paper.',
  },
  california: {
    stateSlug: 'california',
    stateName: 'California',
    postalCode: 'CA',
    statuteCitation: 'Cal. Elec. Code § 14401',
    pollClosingHour: '8:00 PM PT',
    lineGuaranteeText: 'When the polls are closed, any qualified voter who is in line at the polling place or vote center shall be allowed to vote.',
    endOfLineMarkingMethod: 'A precinct board member stands at the end of the line at 8:00 PM, or precinct staff issues numbered line passes.',
    bufferZoneFeet: 100,
    cellPhoneInBoothPolicy: 'Permitted',
    emergencyHotlineNote: 'California explicitly allows ballot selfies under Cal. Elec. Code § 14291 provided you do not disrupt other voters.',
  },
  florida: {
    stateSlug: 'florida',
    stateName: 'Florida',
    postalCode: 'FL',
    statuteCitation: 'Fla. Stat. § 100.011(3)',
    pollClosingHour: '7:00 PM Local Time (ET / CT in Panhandle)',
    lineGuaranteeText: 'Any elector waiting to vote at 7:00 PM shall be permitted to vote.',
    endOfLineMarkingMethod: 'The clerk or a designated deputy stands behind the last person in line at 7:00 PM.',
    bufferZoneFeet: 150,
    cellPhoneInBoothPolicy: 'Restricted (No Photography/Calls)',
    emergencyHotlineNote: 'Florida enforces a 150-foot non-solicitation buffer zone around polling entrance doors (Fla. Stat. § 102.031).',
  },
  georgia: {
    stateSlug: 'georgia',
    stateName: 'Georgia',
    postalCode: 'GA',
    statuteCitation: 'O.C.G.A. § 21-2-403',
    pollClosingHour: '7:00 PM ET',
    lineGuaranteeText: 'Any voter who has presented himself or herself at the polling place to vote at 7:00 PM shall be entitled to vote.',
    endOfLineMarkingMethod: 'The poll manager or a law enforcement officer appointed by the manager stands at the end of the queue at 7:00 PM.',
    bufferZoneFeet: 150,
    cellPhoneInBoothPolicy: 'Prohibited',
    emergencyHotlineNote: 'Georgia law prohibits photography or video recording inside the polling room (O.C.G.A. § 21-2-413).',
  },
  northcarolina: {
    stateSlug: 'northcarolina',
    stateName: 'North Carolina',
    postalCode: 'NC',
    statuteCitation: 'N.C. Gen. Stat. § 163-166.01',
    pollClosingHour: '7:30 PM ET',
    lineGuaranteeText: 'Any person in line at 7:30 PM shall be permitted to vote.',
    endOfLineMarkingMethod: 'A precinct official stands at the end of the line at 7:30 PM or hands numbered cards to remaining voters.',
    bufferZoneFeet: 50,
    cellPhoneInBoothPolicy: 'Restricted (No Photography/Calls)',
    emergencyHotlineNote: 'If you are in line at 7:30 PM in North Carolina, poll workers must process every voter before sealing the machines.',
  },
  michigan: {
    stateSlug: 'michigan',
    stateName: 'Michigan',
    postalCode: 'MI',
    statuteCitation: 'Mich. Comp. Laws § 168.720',
    pollClosingHour: '8:00 PM Local Time (ET / CT in Upper Peninsula)',
    lineGuaranteeText: 'Every qualified elector present and in line at the polling place at 8:00 PM shall be allowed to vote.',
    endOfLineMarkingMethod: 'An election inspector stands at the end of the line at 8:00 PM.',
    bufferZoneFeet: 100,
    cellPhoneInBoothPolicy: 'Restricted (No Photography/Calls)',
    emergencyHotlineNote: 'Michigan voters may take a photograph of their own marked ballot inside the voting booth, but cannot photograph other voters.',
  },
  ohio: {
    stateSlug: 'ohio',
    stateName: 'Ohio',
    postalCode: 'OH',
    statuteCitation: 'Ohio Rev. Code § 3501.32',
    pollClosingHour: '7:30 PM ET',
    lineGuaranteeText: 'If there are any electors in line at 7:30 PM waiting to vote, the precinct election officers shall allow all such electors to vote.',
    endOfLineMarkingMethod: 'A precinct officer is stationed at the end of the line at 7:30 PM.',
    bufferZoneFeet: 100,
    cellPhoneInBoothPolicy: 'Restricted (No Photography/Calls)',
    emergencyHotlineNote: 'Ohio requires unexpired government photo ID. If you forgot your photo ID, cast a provisional ballot and bring ID to county BOE within 4 days.',
  },
  arizona: {
    stateSlug: 'arizona',
    stateName: 'Arizona',
    postalCode: 'AZ',
    statuteCitation: 'Ariz. Rev. Stat. § 16-565',
    pollClosingHour: '7:00 PM MST',
    lineGuaranteeText: 'All electors who are in line at or within the polling place at 7:00 PM shall be allowed to vote.',
    endOfLineMarkingMethod: 'A designated marshal or election officer positions themselves at the end of the queue at 7:00 PM.',
    bufferZoneFeet: 75,
    cellPhoneInBoothPolicy: 'Prohibited',
    emergencyHotlineNote: 'Arizona enforces a 75-foot electioneering buffer zone (A.R.S. § 16-515). Taking photos within 75 feet is a misdemeanor.',
  },
  wisconsin: {
    stateSlug: 'wisconsin',
    stateName: 'Wisconsin',
    postalCode: 'WI',
    statuteCitation: 'Wis. Stat. § 6.78',
    pollClosingHour: '8:00 PM CT',
    lineGuaranteeText: 'Any elector who has arrived at the polling place on or before 8:00 PM shall be permitted to vote.',
    endOfLineMarkingMethod: 'The chief inspector or police officer positions themselves at the end of the line at 8:00 PM.',
    bufferZoneFeet: 100,
    cellPhoneInBoothPolicy: 'Restricted (No Photography/Calls)',
    emergencyHotlineNote: 'Wisconsin offers same-day voter registration at your polling place. If in line by 8:00 PM, you can register and vote.',
  },
  nevada: {
    stateSlug: 'nevada',
    stateName: 'Nevada',
    postalCode: 'NV',
    statuteCitation: 'Nev. Rev. Stat. § 293.305',
    pollClosingHour: '7:00 PM PT',
    lineGuaranteeText: 'All persons inside the polling place or in line at the closing hour shall be given an opportunity to vote.',
    endOfLineMarkingMethod: 'A vote center manager stands behind the last voter in line at 7:00 PM.',
    bufferZoneFeet: 100,
    cellPhoneInBoothPolicy: 'Restricted (No Photography/Calls)',
    emergencyHotlineNote: 'Under Nevada law, vote centers cannot release preliminary election results until the final voter in line statewide has cast their ballot.',
  },
};

export const UNIVERSAL_LINE_RIGHTS_RULES = [
  {
    title: 'Rule 1: If You Are in Line When Polls Close, Stay in Line',
    description: 'Federal and state statutes uniformly mandate that every eligible voter in line at the statutory closing time has an absolute legal right to cast their ballot. Polling place workers are not legally permitted to turn away anyone who joined the queue before closing time.',
  },
  {
    title: 'Rule 2: How Poll Workers Mark the Line',
    description: 'At the exact minute polls close (e.g. 7:00 PM, 7:30 PM, or 8:00 PM), a designated election official or municipal officer will stand directly behind the last person in line, hand out numbered queue tickets, or close the outer facility gate. As long as you are ahead of that officer, you will vote.',
  },
  {
    title: 'Rule 3: Protection from Voter Intimidation',
    description: 'Under 18 U.S.C. § 594 and 52 U.S.C. § 10307, voter intimidation is a federal crime punishable by fines and imprisonment. Poll watchers and partisan observers are prohibited from challenging voters based on language, race, or appearance, aggressively photographing voters, or approaching voters inside buffer zones.',
  },
  {
    title: 'Rule 4: Line Extensions by Court Order',
    description: 'If a polling place opens late, experiences power failures, or suffers electronic pollbook equipment malfunctions, civil rights attorneys frequently obtain an emergency state court order extending polling hours. If hours are extended by court order, all voters casting ballots during extended hours vote by provisional ballot pursuant to 52 U.S.C. § 21082 (HAVA).',
  },
  {
    title: 'Rule 5: Water and Food in Line Restrictions',
    description: 'Be aware of state-specific line warming laws. In states like Georgia (O.C.G.A. § 21-2-414), giving food or water to voters within 150 feet of a building or within 25 feet of any voter in line is restricted to designated self-service hydration stations provided by poll workers. Bring your own water bottle and snacks.',
  },
];
