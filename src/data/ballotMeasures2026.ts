export interface BallotMeasure2026 {
  id: string;
  stateSlug: string;
  stateName: string;
  stateAbbr: string;
  measureCode: string;
  title: string;
  topic:
    | 'Voting & Election Rules'
    | 'Tax, Fiscal & Property Tax'
    | 'Healthcare & Reproductive Rights'
    | 'Minimum Wage, Paid Leave & Labor'
    | 'Education & School Funding'
    | 'Housing, Infrastructure & Bonds'
    | 'Government & Constitutional Reform';
  measureType:
    | 'Legislative Constitutional Amendment'
    | 'Citizen-Initiated Constitutional Amendment'
    | 'Citizen-Initiated Statute'
    | 'Automatic Constitutional Convention Question'
    | 'Statewide Bond & Veto Referendum';
  officialBallotLanguage: string;
  whatYesMeans: string;
  whatNoMeans: string;
  passageRequirement: string;
}

export interface StateMeasureThresholdRule {
  stateSlug: string;
  stateName: string;
  hasCitizenInitiative: boolean;
  constitutionalThreshold: string;
  statutoryThreshold: string;
  specialRuleNote: string;
}

export const STATE_MEASURE_THRESHOLDS: StateMeasureThresholdRule[] = [
  {
    stateSlug: 'florida',
    stateName: 'Florida',
    hasCitizenInitiative: true,
    constitutionalThreshold: '60% Supermajority Required (FL Const. Art. XI, § 5)',
    statutoryThreshold: 'N/A (Constitutional Amendments Only)',
    specialRuleNote: 'Florida requires at least 60.0% YES votes for any constitutional amendment to pass—even if 57% or 59% of voters vote YES, the measure fails.',
  },
  {
    stateSlug: 'colorado',
    stateName: 'Colorado',
    hasCitizenInitiative: true,
    constitutionalThreshold: '55% Supermajority Required (Amendment 71) — or 50%+1 to repeal an existing provision',
    statutoryThreshold: 'Simple Majority (50% + 1 vote)',
    specialRuleNote: 'In Colorado, "Amendments" change the state constitution and require 55% to pass, while "Propositions" change state statutes and require a simple 50%+1 majority.',
  },
  {
    stateSlug: 'california',
    stateName: 'California',
    hasCitizenInitiative: true,
    constitutionalThreshold: 'Simple Majority (50% + 1 vote of votes cast on the measure)',
    statutoryThreshold: 'Simple Majority (50% + 1 vote)',
    specialRuleNote: 'California voters decide citizen-initiated statutes, constitutional amendments, legislative bond acts, and veto referendums by simple majority (50% + 1).',
  },
  {
    stateSlug: 'nevada',
    stateName: 'Nevada',
    hasCitizenInitiative: true,
    constitutionalThreshold: 'Double Majority: 50% + 1 in TWO Consecutive General Elections (e.g., 2024 AND 2026) for Citizen Amendments',
    statutoryThreshold: 'Simple Majority (50% + 1 vote)',
    specialRuleNote: 'Unique to Nevada: Citizen-initiated constitutional amendments that passed in November 2024 must pass a SECOND time on the November 3, 2026 ballot to take effect!',
  },
  {
    stateSlug: 'newhampshire',
    stateName: 'New Hampshire',
    hasCitizenInitiative: false,
    constitutionalThreshold: '66.67% (Two-Thirds Supermajority of votes cast on the amendment)',
    statutoryThreshold: 'N/A',
    specialRuleNote: 'New Hampshire has the highest constitutional amendment threshold in the United States: a legislative amendment requires a 2/3 (66.67%) supermajority of voters.',
  },
  {
    stateSlug: 'illinois',
    stateName: 'Illinois',
    hasCitizenInitiative: true,
    constitutionalThreshold: '60% of votes cast on the amendment OR 50%+1 of all ballots cast in the election',
    statutoryThreshold: 'N/A',
    specialRuleNote: 'Blank ballots (undervotes) count against the 50%-of-all-ballots path in Illinois, making the 60%-on-the-question threshold the primary benchmark.',
  },
  {
    stateSlug: 'minnesota',
    stateName: 'Minnesota',
    hasCitizenInitiative: false,
    constitutionalThreshold: 'Majority (50% + 1) of ALL voters casting a ballot in the election (not just on the measure!)',
    statutoryThreshold: 'N/A',
    specialRuleNote: 'CRITICAL MINNESOTA RULE: Leaving a constitutional amendment blank on your Minnesota ballot has the exact same mathematical effect as voting NO!',
  },
  {
    stateSlug: 'wyoming',
    stateName: 'Wyoming',
    hasCitizenInitiative: true,
    constitutionalThreshold: 'Majority (50% + 1) of ALL voters casting a ballot in the general election',
    statutoryThreshold: 'Simple Majority (>50% of votes on measure, must equal >15% of total election turnout)',
    specialRuleNote: 'Like Minnesota, leaving a Wyoming constitutional amendment blank on your ballot counts mathematically as a NO vote.',
  },
  {
    stateSlug: 'ohio',
    stateName: 'Ohio',
    hasCitizenInitiative: true,
    constitutionalThreshold: 'Simple Majority (50% + 1 vote on the issue)',
    statutoryThreshold: 'Simple Majority (50% + 1 vote on the issue)',
    specialRuleNote: 'Ohio voters rejected Issue 1 in August 2023, preserving the 50% + 1 simple majority rule for both citizen-initiated and legislative constitutional amendments.',
  },
  {
    stateSlug: 'michigan',
    stateName: 'Michigan',
    hasCitizenInitiative: true,
    constitutionalThreshold: 'Simple Majority (50% + 1 vote)',
    statutoryThreshold: 'Simple Majority (50% + 1 vote)',
    specialRuleNote: 'Under Art. XII, § 3 of the Michigan Constitution, the November 3, 2026 ballot automatically includes Proposal 1: the mandatory 16-year question on calling a Constitutional Convention.',
  },
  {
    stateSlug: 'arizona',
    stateName: 'Arizona',
    hasCitizenInitiative: true,
    constitutionalThreshold: 'Simple Majority (50% + 1) — OR 60% Supermajority if the measure approves a tax increase (Prop 132)',
    statutoryThreshold: 'Simple Majority (50% + 1) — OR 60% if approving a new tax',
    specialRuleNote: 'Under Arizona Proposition 132 (2022), any ballot measure that enacts or increases a tax requires a 60% supermajority, while non-tax measures require 50% + 1.',
  },
];

export const BALLOT_MEASURES_2026: BallotMeasure2026[] = [
  {
    id: 'ca-2026-two-thirds-tax-threshold',
    stateSlug: 'california',
    stateName: 'California',
    stateAbbr: 'CA',
    measureCode: 'CA 2026 Constitutional Amendment',
    title: 'Local Special Tax & Infrastructure Bond Voter Approval Threshold Measure',
    topic: 'Tax, Fiscal & Property Tax',
    measureType: 'Legislative Constitutional Amendment',
    officialBallotLanguage:
      'Amends the California Constitution to revise the voter approval threshold required for local jurisdictions to enact special taxes or issue general obligation bonds for affordable housing and public infrastructure.',
    whatYesMeans:
      'A YES vote changes the constitutional voter threshold rule for specified local housing and public infrastructure bond/special tax measures as detailed in the ballot text.',
    whatNoMeans:
      'A NO vote keeps California’s existing Proposition 13 / Proposition 218 two-thirds (66.67%) local special tax voter approval rules unchanged.',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the measure)',
  },
  {
    id: 'ca-2026-voter-id-and-citizenship-verification',
    stateSlug: 'california',
    stateName: 'California',
    stateAbbr: 'CA',
    measureCode: 'CA 2026 Citizen Initiative',
    title: 'Voter Identification & Citizenship Roll Verification Initiative',
    topic: 'Voting & Election Rules',
    measureType: 'Citizen-Initiated Constitutional Amendment',
    officialBallotLanguage:
      'Amends Article II of the California Constitution regarding presentation of government-issued identification for in-person voting and verification of last four digits of government ID on mail-in ballot envelopes.',
    whatYesMeans:
      'A YES vote amends the California Constitution to require specified government identification for in-person voting and ID number verification on Vote-by-Mail envelopes.',
    whatNoMeans:
      'A NO vote keeps California’s current voting system where registered voters sign the pollbook or mail envelope under penalty of perjury (with signature verification) without presenting photo ID (except certain first-time HAVA voters).',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the measure)',
  },
  {
    id: 'mi-2026-constitutional-convention-question',
    stateSlug: 'michigan',
    stateName: 'Michigan',
    stateAbbr: 'MI',
    measureCode: 'Michigan 2026 Proposal 1 (Mandatory 16-Year Question)',
    title: 'Mandatory 2026 Question on Calling a General Revision Constitutional Convention',
    topic: 'Government & Constitutional Reform',
    measureType: 'Automatic Constitutional Convention Question',
    officialBallotLanguage:
      '"Shall a convention of elected delegates be convened to revise and amend the Constitution of the State of Michigan?" (Mandated every 16 years under Mich. Const. Art. XII, § 3: 1978, 1994, 2010, 2026).',
    whatYesMeans:
      'A YES vote authorizes calling a statewide Michigan Constitutional Convention where elected delegates can propose a revised Michigan Constitution for subsequent voter ratification.',
    whatNoMeans:
      'A NO vote rejects calling a Constitutional Convention, keeping the current 1963 Michigan Constitution in place (which can still be amended via individual ballot proposals).',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the question)',
  },
  {
    id: 'nv-2026-voter-id-question-second-vote',
    stateSlug: 'nevada',
    stateName: 'Nevada',
    stateAbbr: 'NV',
    measureCode: 'Nevada 2026 Question (Required 2nd Consecutive Election Vote)',
    title: 'Constitutional Voter Photo ID & Mail Ballot Verification Amendment (2nd Vote)',
    topic: 'Voting & Election Rules',
    measureType: 'Citizen-Initiated Constitutional Amendment',
    officialBallotLanguage:
      'Shall Article 2 of the Nevada Constitution be amended to require voters to present valid photo identification when voting in person and provide the last four digits of their driver’s license or Social Security number when voting by mail? (Passed 1st vote in Nov 2024; requires 2nd approval in Nov 2026).',
    whatYesMeans:
      'A YES vote provides the final second approval needed to amend the Nevada Constitution to require Photo ID for in-person voting and last-4 ID digits on mail ballots.',
    whatNoMeans:
      'A NO vote blocks the constitutional amendment from taking effect, maintaining Nevada’s current signature-verification system for in-person and mail voting.',
    passageRequirement: 'Simple Majority (50% + 1) on Nov 3, 2026 (completing Nevada’s 2-election requirement)',
  },
  {
    id: 'nv-2026-reproductive-rights-equal-rights',
    stateSlug: 'nevada',
    stateName: 'Nevada',
    stateAbbr: 'NV',
    measureCode: 'Nevada 2026 Question (Required 2nd Consecutive Election Vote)',
    title: 'Constitutional Right to Reproductive Freedom Amendment (2nd Vote)',
    topic: 'Healthcare & Reproductive Rights',
    measureType: 'Citizen-Initiated Constitutional Amendment',
    officialBallotLanguage:
      'Shall the Nevada Constitution be amended to establish a fundamental individual right to reproductive freedom, including prenatal care, childbirth, postpartum care, contraception, and abortion care up to fetal viability? (Passed 1st vote in Nov 2024; requires 2nd approval in Nov 2026).',
    whatYesMeans:
      'A YES vote ratifies the constitutional amendment (which already exists in Nevada state statute) into the Nevada Constitution so it cannot be repealed by statute alone.',
    whatNoMeans:
      'A NO vote leaves reproductive rights governed by existing 1990 voter-approved Nevada state statute (NRS 442.250) rather than adding a new constitutional section.',
    passageRequirement: 'Simple Majority (50% + 1) on Nov 3, 2026 (completing Nevada’s 2-election requirement)',
  },
  {
    id: 'fl-2026-property-tax-homestead-amendment',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    measureCode: 'Florida 2026 Constitutional Amendment',
    title: 'Homestead Property Tax Assessment & Municipal Exemption Amendment',
    topic: 'Tax, Fiscal & Property Tax',
    measureType: 'Legislative Constitutional Amendment',
    officialBallotLanguage:
      'Proposes an amendment to Article VII of the Florida Constitution adjusting homestead property tax exemptions and non-school levy protections for primary Florida residents.',
    whatYesMeans:
      'A YES vote approves expanding the specified constitutional homestead property tax protection for qualifying Florida primary homeowners.',
    whatNoMeans:
      'A NO vote keeps Florida’s existing Save Our Homes and homestead exemption formulas unchanged.',
    passageRequirement: '60% Supermajority Required (FL Const. Art. XI, § 5)',
  },
  {
    id: 'oh-2026-minimum-wage-and-labor-standards',
    stateSlug: 'ohio',
    stateName: 'Ohio',
    stateAbbr: 'OH',
    measureCode: 'Ohio 2026 Statewide Issue',
    title: 'Statewide Minimum Wage, Tipped Wage & Local Home-Rule Labor Measure',
    topic: 'Minimum Wage, Paid Leave & Labor',
    measureType: 'Citizen-Initiated Constitutional Amendment',
    officialBallotLanguage:
      'Amends Article II, Section 34a of the Ohio Constitution regarding the state minimum wage schedule, annual inflation indexing, and treatment of tipped employee base wages.',
    whatYesMeans:
      'A YES vote enacts the proposed constitutional wage schedule and annual CPI indexing adjustments across Ohio.',
    whatNoMeans:
      'A NO vote maintains Ohio’s existing constitutional inflation-adjusted minimum wage formula (where tipped employees earn 50% of the base minimum wage plus tips).',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the issue)',
  },
  {
    id: 'az-2026-legislative-referendum-election-administration',
    stateSlug: 'arizona',
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    measureCode: 'Arizona 2026 Proposition (HCR Referendum)',
    title: 'Early Mail Ballot Drop-Off Deadlines & Signature Verification Measure',
    topic: 'Voting & Election Rules',
    measureType: 'Legislative Constitutional Amendment',
    officialBallotLanguage:
      'Referred to the ballot by the Arizona Legislature: amends Arizona election rules regarding the deadline for returning early mail ballots in person versus presenting ID at a Vote Center on Election Day.',
    whatYesMeans:
      'A YES vote adopts the legislatively referred changes to early mail-ballot drop-off deadlines and verification procedures.',
    whatNoMeans:
      'A NO vote preserves Arizona’s existing Active Early Voting List (AEVL) rule allowing voters to drop off their signed green affidavit mail ballot at any Vote Center until 7:00 PM on Election Day.',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the proposition)',
  },
  {
    id: 'co-2026-property-tax-and-tabor-measure',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    measureCode: 'Colorado 2026 Proposition / Amendment',
    title: 'Residential Property Tax Assessment Cap & TABOR Revenue Retention Measure',
    topic: 'Tax, Fiscal & Property Tax',
    measureType: 'Citizen-Initiated Statute',
    officialBallotLanguage:
      'Shall there be a change to the Colorado Revised Statutes concerning limits on residential and commercial property tax revenue growth and local school district backfill funding under the Taxpayer’s Bill of Rights (TABOR)?',
    whatYesMeans:
      'A YES vote enacts the statutory property tax growth cap and state reimbursement mechanism described in the Blue Book fiscal impact statement.',
    whatNoMeans:
      'A NO vote leaves current bipartisan legislative property tax assessment rates and TABOR refund rules in effect.',
    passageRequirement: 'Simple Majority (50% + 1 for statutory Proposition; 55% for Constitutional Amendment)',
  },
  {
    id: 'ny-2026-proposal-1-environmental-and-voting-amendment',
    stateSlug: 'newyork',
    stateName: 'New York',
    stateAbbr: 'NY',
    measureCode: 'New York 2026 Proposal 1 (On the Back of Your Ballot!)',
    title: 'Statewide Constitutional Amendment & Infrastructure Authorization (Flip Over Your Ballot!)',
    topic: 'Housing, Infrastructure & Bonds',
    measureType: 'Legislative Constitutional Amendment',
    officialBallotLanguage:
      'Amends the New York State Constitution as passed by two consecutive sessions of the New York State Legislature (2023–2024 and 2025–2026). REMINDER: In New York, statewide ballot proposals are printed on the BACK/REVERSE side of your paper ballot.',
    whatYesMeans:
      'A YES vote approves the constitutional amendment passed by two consecutive sessions of the NY State Senate and Assembly.',
    whatNoMeans:
      'A NO vote rejects the proposed constitutional amendment, leaving the existing New York Constitution unchanged.',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the proposal)',
  },
  {
    id: 'mo-2026-initiative-petition-threshold-amendment',
    stateSlug: 'missouri',
    stateName: 'Missouri',
    stateAbbr: 'MO',
    measureCode: 'Missouri 2026 Constitutional Amendment',
    title: 'Concurrent Congressional District Majority Requirement for Future Constitutional Amendments',
    topic: 'Government & Constitutional Reform',
    measureType: 'Legislative Constitutional Amendment',
    officialBallotLanguage:
      'Shall the Missouri Constitution be amended to require future constitutional amendments proposed by citizen initiative to receive both a statewide majority AND a majority in a specified number of Missouri’s 8 congressional districts?',
    whatYesMeans:
      'A YES vote makes it harder to pass future constitutional amendments in Missouri by requiring concurrent congressional-district majorities in addition to a statewide majority.',
    whatNoMeans:
      'A NO vote keeps Missouri’s century-old rule where citizen-initiated constitutional amendments pass with a simple statewide majority (50% + 1).',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the measure)',
  },
  {
    id: 'wa-2026-initiatives-to-the-legislature',
    stateSlug: 'washington',
    stateName: 'Washington',
    stateAbbr: 'WA',
    measureCode: 'Washington 2026 Initiative Measure',
    title: 'Tax Repeal, Public Safety & Fiscal Advisory Ballot Measures',
    topic: 'Tax, Fiscal & Property Tax',
    measureType: 'Citizen-Initiated Statute',
    officialBallotLanguage:
      'Initiative Measure to the People / Legislature concerning state revenue programs, payroll/excise assessments, and public safety funding allocations.',
    whatYesMeans:
      'A YES vote enacts the citizen-initiated statute into the Revised Code of Washington (RCW).',
    whatNoMeans:
      'A NO vote rejects the initiative and leaves current Washington state law in place.',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the initiative)',
  },
  {
    id: 'or-2026-campaign-finance-and-healthcare-governance',
    stateSlug: 'oregon',
    stateName: 'Oregon',
    stateAbbr: 'OR',
    measureCode: 'Oregon 2026 Measure',
    title: 'Campaign Finance Contribution Disclosure & Healthcare Cost Governance Measure',
    topic: 'Government & Constitutional Reform',
    measureType: 'Legislative Constitutional Amendment',
    officialBallotLanguage:
      'Referred to voters by the Oregon Legislative Assembly: amends the Oregon Constitution regarding transparency of political campaign contributions and public program administration.',
    whatYesMeans:
      'A YES vote adopts the constitutional or statutory changes detailed in the Oregon Voters’ Pamphlet.',
    whatNoMeans:
      'A NO vote retains existing Oregon law.',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the measure)',
  },
  {
    id: 'wi-2026-legislative-constitutional-referendum',
    stateSlug: 'wisconsin',
    stateName: 'Wisconsin',
    stateAbbr: 'WI',
    measureCode: 'Wisconsin 2026 Constitutional Question',
    title: 'Election Administration, Veto Authority & Appropriations Constitutional Referendum',
    topic: 'Government & Constitutional Reform',
    measureType: 'Legislative Constitutional Amendment',
    officialBallotLanguage:
      'Proposed constitutional amendment passed by two consecutive Wisconsin Legislatures (since Wisconsin does not have citizen-initiated ballot measures, all statewide ballot questions are referred by the Legislature).',
    whatYesMeans:
      'A YES vote amends the Wisconsin Constitution as proposed by two consecutive sessions of the Wisconsin Legislature.',
    whatNoMeans:
      'A NO vote rejects the legislative amendment and keeps the current Wisconsin Constitution unchanged.',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the question)',
  },
  {
    id: 'ga-2026-property-tax-and-tax-court-amendments',
    stateSlug: 'georgia',
    stateName: 'Georgia',
    stateAbbr: 'GA',
    measureCode: 'Georgia 2026 Constitutional Amendment & Statewide Referendum',
    title: 'Local Homestead Property Tax Assessment Cap & Tangible Property Exemption Referendum',
    topic: 'Tax, Fiscal & Property Tax',
    measureType: 'Legislative Constitutional Amendment',
    officialBallotLanguage:
      'Proposed by a two-thirds vote of the Georgia General Assembly: amends the Georgia Constitution regarding local property tax assessment caps and statewide ad valorem tax exemptions.',
    whatYesMeans:
      'A YES vote approves the constitutional amendment and accompanying statewide tax referendum.',
    whatNoMeans:
      'A NO vote leaves existing Georgia property tax assessment rules in effect.',
    passageRequirement: 'Simple Majority (50% + 1 of votes cast on the amendment)',
  },
];
