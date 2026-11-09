export type EndorserCategory =
  | 'Labor Unions'
  | 'Business & Industry'
  | 'Law Enforcement & Military'
  | 'Civil Rights & Democracy'
  | 'Environmental & Climate'
  | 'Gun Rights & Safety'
  | 'Newspapers & Press'
  | 'Healthcare & Family';

export interface EndorsementListing {
  id: string; // e.g. 'end-aflcio-ossoff'
  endorserName: string;
  endorserSlug: string;
  category: EndorserCategory;
  candidateId: string;
  candidateName: string;
  candidateOffice: string;
  candidateParty: 'Democrat' | 'Republican' | 'Independent';
  state: string;
  stateSlug: string;
  endorsementDate: string;
  headline: string;
  quote: string;
  fecDisclaimer: string;
  organizationUrl: string;
  verified: boolean;
}

export const ENDORSEMENTS_LISTINGS: EndorsementListing[] = [
  // -------------------------------------------------------------
  // LABOR UNIONS
  // -------------------------------------------------------------
  {
    id: 'end-aflcio-ossoff',
    endorserName: 'AFL-CIO (Georgia State Chapter)',
    endorserSlug: 'afl-cio',
    category: 'Labor Unions',
    candidateId: 'jon-ossoff-ga-sen',
    candidateName: 'Jon Ossoff',
    candidateOffice: 'U.S. Senate (Georgia)',
    candidateParty: 'Democrat',
    state: 'Georgia',
    stateSlug: 'georgia',
    endorsementDate: 'October 14, 2026',
    headline: 'Georgia AFL-CIO Unanimously Endorses Jon Ossoff for U.S. Senate',
    quote:
      'Senator Ossoff has stood shoulder-to-shoulder with Georgia electricians, machinists, and transportation workers. His relentless push to expand advanced manufacturing jobs and defend collective bargaining makes him the champion working families need in Washington.',
    fecDisclaimer: 'Paid for by AFL-CIO COPE (C00003806) and not authorized by any candidate or candidate’s committee.',
    organizationUrl: 'https://aflcio.org',
    verified: true,
  },
  {
    id: 'end-uaw-jeffries',
    endorserName: 'United Auto Workers (UAW)',
    endorserSlug: 'uaw',
    category: 'Labor Unions',
    candidateId: 'hakeem-jeffries-ny-08',
    candidateName: 'Hakeem Jeffries',
    candidateOffice: 'U.S. House (NY-08)',
    candidateParty: 'Democrat',
    state: 'New York',
    stateSlug: 'newyork',
    endorsementDate: 'September 22, 2026',
    headline: 'UAW Endorses House Democratic Leader Hakeem Jeffries',
    quote:
      'Leader Jeffries has been an unwavering voice for union contracts, fair overtime pay, and fighting against anti-worker corporate monopolies. We are proud to mobilize our members for his re-election.',
    fecDisclaimer: 'Paid for by UAW V-CAP (C00002840) and not authorized by any candidate or candidate’s committee.',
    organizationUrl: 'https://uaw.org',
    verified: true,
  },
  {
    id: 'end-nea-cooper',
    endorserName: 'National Education Association (NEA Fund)',
    endorserSlug: 'nea',
    category: 'Labor Unions',
    candidateId: 'roy-cooper-nc-sen',
    candidateName: 'Roy Cooper',
    candidateOffice: 'U.S. Senate (North Carolina)',
    candidateParty: 'Democrat',
    state: 'North Carolina',
    stateSlug: 'northcarolina',
    endorsementDate: 'October 2, 2026',
    headline: 'NEA Fund Endorses Roy Cooper for U.S. Senate',
    quote:
      'Roy Cooper has proven as Governor that public education is the cornerstone of economic mobility. In the U.S. Senate, he will defend public schools against private voucher schemes and fight for competitive teacher pay.',
    fecDisclaimer: 'Paid for by the NEA Fund for Children and Public Education and not authorized by any candidate.',
    organizationUrl: 'https://neafund.org',
    verified: true,
  },
  {
    id: 'end-uaw-whitmer',
    endorserName: 'United Auto Workers (UAW Region 1 & 1D)',
    endorserSlug: 'uaw',
    category: 'Labor Unions',
    candidateId: 'gretchen-whitmer-pres-2028',
    candidateName: 'Gretchen Whitmer',
    candidateOffice: 'President 2028',
    candidateParty: 'Democrat',
    state: 'Michigan',
    stateSlug: 'michigan',
    endorsementDate: 'November 4, 2026',
    headline: 'Auto Workers Stand with Governor Gretchen Whitmer',
    quote:
      'Governor Whitmer repealed Michigan’s right-to-work law, restored prevailing wages, and brought EV battery factories to our state with strong union protections.',
    fecDisclaimer: 'Paid for by UAW International Union and not authorized by any candidate.',
    organizationUrl: 'https://uaw.org',
    verified: true,
  },
  {
    id: 'end-seiu-perez',
    endorserName: 'SEIU Local 49 & 1199NW',
    endorserSlug: 'seiu',
    category: 'Labor Unions',
    candidateId: 'marie-gluesenkamp-perez-wa-03',
    candidateName: 'Marie Gluesenkamp Perez',
    candidateOffice: 'U.S. House (WA-03)',
    candidateParty: 'Democrat',
    state: 'Washington',
    stateSlug: 'washington',
    endorsementDate: 'September 18, 2026',
    headline: 'Service Employees Endorse Rep. Marie Gluesenkamp Perez',
    quote:
      'Representative Gluesenkamp Perez brings a blue-collar work ethic to Congress that healthcare workers and trade technicians trust every single day.',
    fecDisclaimer: 'Paid for by SEIU COPE and not authorized by any candidate.',
    organizationUrl: 'https://seiu.org',
    verified: true,
  },

  // -------------------------------------------------------------
  // BUSINESS & INDUSTRY
  // -------------------------------------------------------------
  {
    id: 'end-chamber-tillis',
    endorserName: 'U.S. Chamber of Commerce',
    endorserSlug: 'us-chamber',
    category: 'Business & Industry',
    candidateId: 'thom-tillis-nc-sen',
    candidateName: 'Thom Tillis',
    candidateOffice: 'U.S. Senate (North Carolina)',
    candidateParty: 'Republican',
    state: 'North Carolina',
    stateSlug: 'northcarolina',
    endorsementDate: 'September 28, 2026',
    headline: 'U.S. Chamber Awards "Spirit of Enterprise" & Endorsement to Thom Tillis',
    quote:
      'Senator Tillis understands that tax competitiveness, regulatory certainty, and supply chain resilience are what empower North Carolina employers to hire and innovate.',
    fecDisclaimer: 'Paid for by the U.S. Chamber PAC (C00082040) and not authorized by any candidate.',
    organizationUrl: 'https://uschamber.com',
    verified: true,
  },
  {
    id: 'end-chamber-johnson',
    endorserName: 'U.S. Chamber of Commerce',
    endorserSlug: 'us-chamber',
    category: 'Business & Industry',
    candidateId: 'mike-johnson-la-04',
    candidateName: 'Mike Johnson',
    candidateOffice: 'U.S. House (LA-04)',
    candidateParty: 'Republican',
    state: 'Louisiana',
    stateSlug: 'louisiana',
    endorsementDate: 'October 5, 2026',
    headline: 'Speaker Mike Johnson Endorsed for Re-Election by U.S. Chamber',
    quote:
      'Speaker Johnson’s principled defense of the free enterprise system, domestic energy production, and judicial restraint safeguards American prosperity.',
    fecDisclaimer: 'Paid for by the U.S. Chamber of Commerce and not authorized by any candidate.',
    organizationUrl: 'https://uschamber.com',
    verified: true,
  },
  {
    id: 'end-nfib-johnson',
    endorserName: 'National Federation of Independent Business (NFIB)',
    endorserSlug: 'nfib',
    category: 'Business & Industry',
    candidateId: 'ron-johnson-wi-sen-2028',
    candidateName: 'Ron Johnson',
    candidateOffice: 'U.S. Senate (Wisconsin)',
    candidateParty: 'Republican',
    state: 'Wisconsin',
    stateSlug: 'wisconsin',
    endorsementDate: 'August 12, 2026',
    headline: 'NFIB FedPAC Endorses Small Business Champion Sen. Ron Johnson',
    quote:
      'As a former manufacturer who built a business from the ground up, Senator Johnson votes 100% with Main Street job creators to curb overbearing mandates.',
    fecDisclaimer: 'Paid for by NFIB FedPAC (C00075564) and not authorized by any candidate.',
    organizationUrl: 'https://nfib.com',
    verified: true,
  },
  {
    id: 'end-chamber-collins',
    endorserName: 'Maine State Chamber of Commerce',
    endorserSlug: 'maine-chamber',
    category: 'Business & Industry',
    candidateId: 'susan-collins-me-sen',
    candidateName: 'Susan Collins',
    candidateOffice: 'U.S. Senate (Maine)',
    candidateParty: 'Republican',
    state: 'Maine',
    stateSlug: 'maine',
    endorsementDate: 'September 15, 2026',
    headline: 'Maine State Chamber Backs Sen. Collins for Appropriations Leadership',
    quote:
      'Senator Collins’ seniority on the Appropriations Committee ensures that Maine’s boatbuilders, loggers, and tourism operators have a powerhouse advocate in Washington.',
    fecDisclaimer: 'Paid for by Maine Chamber PAC and not authorized by any candidate.',
    organizationUrl: 'https://mainechamber.org',
    verified: true,
  },

  // -------------------------------------------------------------
  // LAW ENFORCEMENT & MILITARY
  // -------------------------------------------------------------
  {
    id: 'end-fop-jones',
    endorserName: 'Georgia Fraternal Order of Police (FOP)',
    endorserSlug: 'fop',
    category: 'Law Enforcement & Military',
    candidateId: 'burt-jones-ga-sen',
    candidateName: 'Burt Jones',
    candidateOffice: 'U.S. Senate (Georgia)',
    candidateParty: 'Republican',
    state: 'Georgia',
    stateSlug: 'georgia',
    endorsementDate: 'October 11, 2026',
    headline: 'Georgia FOP Backs Burt Jones for Senate',
    quote:
      'Lieutenant Governor Burt Jones has consistently championed increased funding, mental health resources, and equipment grants for Georgia’s men and women in uniform.',
    fecDisclaimer: 'Paid for by Georgia FOP PAC and not authorized by any candidate.',
    organizationUrl: 'https://fop.net',
    verified: true,
  },
  {
    id: 'end-fop-vance',
    endorserName: 'National Fraternal Order of Police',
    endorserSlug: 'fop',
    category: 'Law Enforcement & Military',
    candidateId: 'jd-vance-pres-2028',
    candidateName: 'JD Vance',
    candidateOffice: 'President 2028',
    candidateParty: 'Republican',
    state: 'Ohio',
    stateSlug: 'ohio',
    endorsementDate: 'October 25, 2026',
    headline: 'National FOP Backs JD Vance',
    quote:
      'Vice President Vance understands the daily sacrifice of our nation’s 375,000 sworn police officers and stands firmly against policies that undermine community safety.',
    fecDisclaimer: 'Paid for by Grand Lodge FOP PAC and not authorized by any candidate.',
    organizationUrl: 'https://fop.net',
    verified: true,
  },
  {
    id: 'end-votevets-kelly',
    endorserName: 'VoteVets Action Fund',
    endorserSlug: 'votevets',
    category: 'Law Enforcement & Military',
    candidateId: 'mark-kelly-az-sen-2028',
    candidateName: 'Mark Kelly',
    candidateOffice: 'U.S. Senate (Arizona)',
    candidateParty: 'Democrat',
    state: 'Arizona',
    stateSlug: 'arizona',
    endorsementDate: 'September 14, 2026',
    headline: 'VoteVets Endorses Combat Veteran & Astronaut Mark Kelly',
    quote:
      'Captain Mark Kelly flew 39 combat missions in Operation Desert Storm. In the Senate, he has led the fight for modernizing VA hospitals and veterans mental healthcare.',
    fecDisclaimer: 'Paid for by VoteVets Action Fund (C00418475) and not authorized by any candidate.',
    organizationUrl: 'https://votevets.org',
    verified: true,
  },
  {
    id: 'end-vfw-bacon',
    endorserName: 'Veterans of Foreign Wars PAC',
    endorserSlug: 'vfw-pac',
    category: 'Law Enforcement & Military',
    candidateId: 'don-bacon-ne-02',
    candidateName: 'Don Bacon',
    candidateOffice: 'U.S. House (NE-02)',
    candidateParty: 'Republican',
    state: 'Nebraska',
    stateSlug: 'nebraska',
    endorsementDate: 'October 1, 2026',
    headline: 'VFW PAC Endorses Retired Brigadier General Don Bacon',
    quote:
      'Don Bacon served 29.5 years in the U.S. Air Force, deployed four times to the Middle East, and continues to champion military family housing and PACT Act benefits.',
    fecDisclaimer: 'Paid for by VFW PAC and not authorized by any candidate.',
    organizationUrl: 'https://vfw.org',
    verified: true,
  },

  // -------------------------------------------------------------
  // CIVIL RIGHTS, DEMOCRACY & FREEDOM
  // -------------------------------------------------------------
  {
    id: 'end-hrc-jeffries',
    endorserName: 'Human Rights Campaign (HRC Equality Votes)',
    endorserSlug: 'hrc',
    category: 'Civil Rights & Democracy',
    candidateId: 'hakeem-jeffries-ny-08',
    candidateName: 'Hakeem Jeffries',
    candidateOffice: 'U.S. House (NY-08)',
    candidateParty: 'Democrat',
    state: 'New York',
    stateSlug: 'newyork',
    endorsementDate: 'September 19, 2026',
    headline: 'Human Rights Campaign Endorses Leader Hakeem Jeffries',
    quote:
      'Hakeem Jeffries has been a steadfast champion for the Equality Act, nondiscrimination protections in housing, and equality under law for every American.',
    fecDisclaimer: 'Paid for by Human Rights Campaign PAC (C00235853) and not authorized by any candidate.',
    organizationUrl: 'https://hrc.org',
    verified: true,
  },
  {
    id: 'end-emily-harris',
    endorserName: 'EMILY’s List',
    endorserSlug: 'emilys-list',
    category: 'Civil Rights & Democracy',
    candidateId: 'kamala-harris-pres-2028',
    candidateName: 'Kamala Harris',
    candidateOffice: 'President 2028',
    candidateParty: 'Democrat',
    state: 'California',
    stateSlug: 'california',
    endorsementDate: 'November 6, 2026',
    headline: 'EMILY’s List Endorses Kamala Harris for 2028',
    quote:
      'Vice President Harris is the fearless champion women across America need to restore bodily autonomy, expand affordable childcare, and build an opportunity economy.',
    fecDisclaimer: 'Paid for by EMILY’s List (C00193433) and not authorized by any candidate.',
    organizationUrl: 'https://emilyslist.org',
    verified: true,
  },

  // -------------------------------------------------------------
  // ENVIRONMENTAL & CLIMATE
  // -------------------------------------------------------------
  {
    id: 'end-sierra-ossoff',
    endorserName: 'Sierra Club (Georgia Chapter)',
    endorserSlug: 'sierra-club',
    category: 'Environmental & Climate',
    candidateId: 'jon-ossoff-ga-sen',
    candidateName: 'Jon Ossoff',
    candidateOffice: 'U.S. Senate (Georgia)',
    candidateParty: 'Democrat',
    state: 'Georgia',
    stateSlug: 'georgia',
    endorsementDate: 'September 25, 2026',
    headline: 'Sierra Club Endorses Jon Ossoff for U.S. Senate',
    quote:
      'Jon Ossoff’s leadership in safeguarding Georgia’s Okefenokee Swamp and securing clean solar energy investments makes him an environmental champion.',
    fecDisclaimer: 'Paid for by Sierra Club Political Committee and not authorized by any candidate.',
    organizationUrl: 'https://sierraclub.org',
    verified: true,
  },
  {
    id: 'end-lcv-cooper',
    endorserName: 'League of Conservation Voters (LCV Action Fund)',
    endorserSlug: 'lcv',
    category: 'Environmental & Climate',
    candidateId: 'roy-cooper-nc-sen',
    candidateName: 'Roy Cooper',
    candidateOffice: 'U.S. Senate (North Carolina)',
    candidateParty: 'Democrat',
    state: 'North Carolina',
    stateSlug: 'northcarolina',
    endorsementDate: 'October 8, 2026',
    headline: 'LCV Action Fund Endorses Roy Cooper for Senate',
    quote:
      'Governor Cooper’s historic Clean Energy Plan committed North Carolina to carbon reduction while creating tens of thousands of coastal wind and battery manufacturing jobs.',
    fecDisclaimer: 'Paid for by LCV Action Fund and not authorized by any candidate.',
    organizationUrl: 'https://lcv.org',
    verified: true,
  },

  // -------------------------------------------------------------
  // GUN RIGHTS & SAFETY
  // -------------------------------------------------------------
  {
    id: 'end-nra-jones',
    endorserName: 'National Rifle Association (NRA Political Victory Fund)',
    endorserSlug: 'nra-pvf',
    category: 'Gun Rights & Safety',
    candidateId: 'burt-jones-ga-sen',
    candidateName: 'Burt Jones',
    candidateOffice: 'U.S. Senate (Georgia)',
    candidateParty: 'Republican',
    state: 'Georgia',
    stateSlug: 'georgia',
    endorsementDate: 'September 30, 2026',
    headline: 'NRA-PVF Awards "A+" Rating & Endorsement to Burt Jones',
    quote:
      'Burt Jones has a flawless record defending Second Amendment constitutional carry rights for law-abiding Georgia citizens against federal gun control overreach.',
    fecDisclaimer: 'Paid for by NRA Political Victory Fund (C00053553) and not authorized by any candidate.',
    organizationUrl: 'https://nrapvf.org',
    verified: true,
  },
  {
    id: 'end-nra-johnson',
    endorserName: 'National Rifle Association (NRA-PVF)',
    endorserSlug: 'nra-pvf',
    category: 'Gun Rights & Safety',
    candidateId: 'mike-johnson-la-04',
    candidateName: 'Mike Johnson',
    candidateOffice: 'U.S. House (LA-04)',
    candidateParty: 'Republican',
    state: 'Louisiana',
    stateSlug: 'louisiana',
    endorsementDate: 'October 12, 2026',
    headline: 'NRA-PVF Endorses Speaker Mike Johnson',
    quote:
      'Speaker Johnson stands as a bulwark in the House against unconstitutional firearm bans and pistol brace restrictions.',
    fecDisclaimer: 'Paid for by NRA Political Victory Fund and not authorized by any candidate.',
    organizationUrl: 'https://nrapvf.org',
    verified: true,
  },

  // -------------------------------------------------------------
  // NEWSPAPERS & PRESS EDITORIAL BOARDS
  // -------------------------------------------------------------
  {
    id: 'end-ajc-ossoff',
    endorserName: 'The Atlanta Journal-Constitution Editorial Board',
    endorserSlug: 'ajc',
    category: 'Newspapers & Press',
    candidateId: 'jon-ossoff-ga-sen',
    candidateName: 'Jon Ossoff',
    candidateOffice: 'U.S. Senate (Georgia)',
    candidateParty: 'Democrat',
    state: 'Georgia',
    stateSlug: 'georgia',
    endorsementDate: 'October 27, 2026',
    headline: 'AJC Editorial: Why Jon Ossoff Has Earned a Second Term for Georgia',
    quote:
      'In a deeply polarized Capitol, Jon Ossoff has brought home transformative federal infrastructure funds for the Port of Savannah, metro transit, and rural healthcare clinics.',
    fecDisclaimer: 'Editorial endorsement published by The Atlanta Journal-Constitution. Independent editorial opinion.',
    organizationUrl: 'https://ajc.com',
    verified: true,
  },
  {
    id: 'end-inquirer-shapiro',
    endorserName: 'The Philadelphia Inquirer Editorial Board',
    endorserSlug: 'philadelphia-inquirer',
    category: 'Newspapers & Press',
    candidateId: 'josh-shapiro-pres-2028',
    candidateName: 'Josh Shapiro',
    candidateOffice: 'President 2028',
    candidateParty: 'Democrat',
    state: 'Pennsylvania',
    stateSlug: 'pennsylvania',
    endorsementDate: 'November 2, 2026',
    headline: 'Inquirer Editorial: Josh Shapiro Represents Pragmatic American Governance',
    quote:
      'Governor Shapiro has demonstrated an extraordinary ability to unite divided state legislatures and deliver concrete public works projects on time and under budget.',
    fecDisclaimer: 'Editorial endorsement published by The Philadelphia Inquirer. Independent editorial opinion.',
    organizationUrl: 'https://inquirer.com',
    verified: true,
  },
  {
    id: 'end-freepress-whitmer',
    endorserName: 'Detroit Free Press Editorial Board',
    endorserSlug: 'detroit-free-press',
    category: 'Newspapers & Press',
    candidateId: 'gretchen-whitmer-pres-2028',
    candidateName: 'Gretchen Whitmer',
    candidateOffice: 'President 2028',
    candidateParty: 'Democrat',
    state: 'Michigan',
    stateSlug: 'michigan',
    endorsementDate: 'October 29, 2026',
    headline: 'Free Press Editorial: Gretchen Whitmer’s Track Record Speaks for Itself',
    quote:
      'Whitmer has steered Michigan through turbulent waters with tenacity, pragmatism, and unyielding dedication to public schools and manufacturing infrastructure.',
    fecDisclaimer: 'Editorial endorsement published by the Detroit Free Press.',
    organizationUrl: 'https://freep.com',
    verified: true,
  },
];
