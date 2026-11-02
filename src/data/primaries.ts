export interface StatePrimarySchedule {
  stateSlug: string;
  stateName: string;
  postalCode: string;
  primaryDate: string;
  runoffDate: string | null;
  primaryType:
    | 'Open Primary'
    | 'Closed Primary'
    | 'Semi-Closed / Partially Open Primary'
    | 'Top-Two Nonpartisan Blanket Primary'
    | 'Top-Four Nonpartisan Primary (RCV)'
    | 'All-Party / Jungle Primary';
  partyChangeRule: string;
}

export const STATE_PRIMARIES_2026: StatePrimarySchedule[] = [
  { stateSlug: 'arkansas', stateName: 'Arkansas', postalCode: 'AR', primaryDate: 'March 3, 2026', runoffDate: 'March 31, 2026', primaryType: 'Open Primary', partyChangeRule: 'Any registered voter may choose either party ballot at the polls.' },
  { stateSlug: 'northcarolina', stateName: 'North Carolina', postalCode: 'NC', primaryDate: 'March 3, 2026', runoffDate: 'May 12, 2026', primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unaffiliated voters may choose any one party primary ballot.' },
  { stateSlug: 'texas', stateName: 'Texas', postalCode: 'TX', primaryDate: 'March 3, 2026', runoffDate: 'May 26, 2026', primaryType: 'Open Primary', partyChangeRule: 'Voters select party primary at check-in; locked into that party for any May runoff.' },
  { stateSlug: 'illinois', stateName: 'Illinois', postalCode: 'IL', primaryDate: 'March 17, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Voters declare party ballot preference publicly at the polling place.' },
  { stateSlug: 'ohio', stateName: 'Ohio', postalCode: 'OH', primaryDate: 'May 5, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Voters affiliate by requesting a party ballot on Primary Election Day.' },
  { stateSlug: 'indiana', stateName: 'Indiana', postalCode: 'IN', primaryDate: 'May 5, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Any registered voter may request Democratic or Republican primary ballot.' },
  { stateSlug: 'nebraska', stateName: 'Nebraska', postalCode: 'NE', primaryDate: 'May 12, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Nonpartisan voters may request a partisan ballot for Congress and statewide offices.' },
  { stateSlug: 'westvirginia', stateName: 'West Virginia', postalCode: 'WV', primaryDate: 'May 12, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unaffiliated voters may choose a major party primary ballot.' },
  { stateSlug: 'idaho', stateName: 'Idaho', postalCode: 'ID', primaryDate: 'May 19, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unaffiliated voters may affiliate at the polls for open party primaries.' },
  { stateSlug: 'kentucky', stateName: 'Kentucky', postalCode: 'KY', primaryDate: 'May 19, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Party switches must be completed by December 31 of the preceding year.' },
  { stateSlug: 'oregon', stateName: 'Oregon', postalCode: 'OR', primaryDate: 'May 19, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Must be registered with the party at least 21 days prior to the primary.' },
  { stateSlug: 'pennsylvania', stateName: 'Pennsylvania', postalCode: 'PA', primaryDate: 'May 19, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Only voters registered with a party at least 15 days before May 19 may vote in partisan primaries.' },
  { stateSlug: 'georgia', stateName: 'Georgia', postalCode: 'GA', primaryDate: 'May 19, 2026', runoffDate: 'June 16, 2026', primaryType: 'Open Primary', partyChangeRule: 'Voters do not register by party; choose any party ballot on Primary Day.' },
  { stateSlug: 'alabama', stateName: 'Alabama', postalCode: 'AL', primaryDate: 'May 19, 2026', runoffDate: 'June 16, 2026', primaryType: 'Open Primary', partyChangeRule: 'Cross-over voting prohibited in runoffs if you voted in the other party primary.' },
  { stateSlug: 'california', stateName: 'California', postalCode: 'CA', primaryDate: 'June 2, 2026', runoffDate: null, primaryType: 'Top-Two Nonpartisan Blanket Primary', partyChangeRule: 'All candidates appear on a single primary ballot; top two advance to November 3.' },
  { stateSlug: 'iowa', stateName: 'Iowa', postalCode: 'IA', primaryDate: 'June 2, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Voters may change party affiliation at the polling place on Primary Election Day.' },
  { stateSlug: 'mississippi', stateName: 'Mississippi', postalCode: 'MS', primaryDate: 'June 2, 2026', runoffDate: 'June 23, 2026', primaryType: 'Open Primary', partyChangeRule: 'No party registration required to participate.' },
  { stateSlug: 'montana', stateName: 'Montana', postalCode: 'MT', primaryDate: 'June 2, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Voters receive all party ballots and cast one anonymously.' },
  { stateSlug: 'newjersey', stateName: 'New Jersey', postalCode: 'NJ', primaryDate: 'June 2, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unaffiliated voters may declare party affiliation at the polls; party switches due 55 days prior.' },
  { stateSlug: 'newmexico', stateName: 'New Mexico', postalCode: 'NM', primaryDate: 'June 2, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unaffiliated voters may affiliate with a major party at the primary polling place.' },
  { stateSlug: 'southdakota', stateName: 'South Dakota', postalCode: 'SD', primaryDate: 'June 2, 2026', runoffDate: 'August 11, 2026', primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Democratic primary open to independents; Republican primary closed to registered Republicans.' },
  { stateSlug: 'districtofcolumbia', stateName: 'District of Columbia', postalCode: 'DC', primaryDate: 'June 2, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Party affiliation changes due 21 days before the primary.' },
  { stateSlug: 'maine', stateName: 'Maine', postalCode: 'ME', primaryDate: 'June 9, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unenrolled voters may vote in any party primary without enrolling.' },
  { stateSlug: 'nevada', stateName: 'Nevada', postalCode: 'NV', primaryDate: 'June 9, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Same-day party registration and updates available during early voting and on Primary Day.' },
  { stateSlug: 'northdakota', stateName: 'North Dakota', postalCode: 'ND', primaryDate: 'June 9, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'No voter registration; voters select one party column on the consolidated ballot.' },
  { stateSlug: 'southcarolina', stateName: 'South Carolina', postalCode: 'SC', primaryDate: 'June 9, 2026', runoffDate: 'June 23, 2026', primaryType: 'Open Primary', partyChangeRule: 'No party registration; voters may choose either party primary.' },
  { stateSlug: 'virginia', stateName: 'Virginia', postalCode: 'VA', primaryDate: 'June 16, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Any registered voter may participate in any party primary.' },
  { stateSlug: 'oklahoma', stateName: 'Oklahoma', postalCode: 'OK', primaryDate: 'June 16, 2026', runoffDate: 'August 25, 2026', primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Party changes prohibited between April 1 and August 31.' },
  { stateSlug: 'colorado', stateName: 'Colorado', postalCode: 'CO', primaryDate: 'June 23, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unaffiliated voters receive both major party mail ballots and may return one.' },
  { stateSlug: 'maryland', stateName: 'Maryland', postalCode: 'MD', primaryDate: 'June 23, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Party affiliation updates due 21 days prior to the primary election.' },
  { stateSlug: 'newyork', stateName: 'New York', postalCode: 'NY', primaryDate: 'June 23, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Party enrollment changes must be submitted by February 14, 2026.' },
  { stateSlug: 'utah', stateName: 'Utah', postalCode: 'UT', primaryDate: 'June 23, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Party affiliation switches must be filed by March 31, 2026.' },
  { stateSlug: 'arizona', stateName: 'Arizona', postalCode: 'AZ', primaryDate: 'August 4, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Independent/PND voters may request any one partisan primary ballot.' },
  { stateSlug: 'kansas', stateName: 'Kansas', postalCode: 'KS', primaryDate: 'August 4, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unaffiliated voters may affiliate with a party at the polls on Primary Day.' },
  { stateSlug: 'michigan', stateName: 'Michigan', postalCode: 'MI', primaryDate: 'August 4, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Voters select one party column privately inside the voting booth.' },
  { stateSlug: 'missouri', stateName: 'Missouri', postalCode: 'MO', primaryDate: 'August 4, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Voters may choose any party primary ballot at check-in.' },
  { stateSlug: 'washington', stateName: 'Washington', postalCode: 'WA', primaryDate: 'August 4, 2026', runoffDate: null, primaryType: 'Top-Two Nonpartisan Blanket Primary', partyChangeRule: 'All candidates appear on one mail ballot; top two vote-getters advance to November 3.' },
  { stateSlug: 'tennessee', stateName: 'Tennessee', postalCode: 'TN', primaryDate: 'August 6, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Voters declare party allegiance or bona fide membership when requesting a primary ballot.' },
  { stateSlug: 'connecticut', stateName: 'Connecticut', postalCode: 'CT', primaryDate: 'August 11, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Unaffiliated voters may enroll up to noon the day before; party transfers require 3 months notice.' },
  { stateSlug: 'minnesota', stateName: 'Minnesota', postalCode: 'MN', primaryDate: 'August 11, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Voters select one major party column on a consolidated ballot.' },
  { stateSlug: 'vermont', stateName: 'Vermont', postalCode: 'VT', primaryDate: 'August 11, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Voters receive all major party ballots and submit one.' },
  { stateSlug: 'wisconsin', stateName: 'Wisconsin', postalCode: 'WI', primaryDate: 'August 11, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'Voters choose one party column privately on a single consolidated ballot.' },
  { stateSlug: 'hawaii', stateName: 'Hawaii', postalCode: 'HI', primaryDate: 'August 8, 2026', runoffDate: null, primaryType: 'Open Primary', partyChangeRule: 'All-mail open primary; voters complete one party section on the consolidated ballot.' },
  { stateSlug: 'alaska', stateName: 'Alaska', postalCode: 'AK', primaryDate: 'August 18, 2026', runoffDate: null, primaryType: 'Top-Four Nonpartisan Primary (RCV)', partyChangeRule: 'All candidates run on one ballot; top four advance to the November 3 Ranked-Choice general election.' },
  { stateSlug: 'florida', stateName: 'Florida', postalCode: 'FL', primaryDate: 'August 18, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Must be registered with the party at least 29 days prior to the August 18 primary.' },
  { stateSlug: 'wyoming', stateName: 'Wyoming', postalCode: 'WY', primaryDate: 'August 18, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Party switches must be completed in May prior to candidate filing.' },
  { stateSlug: 'massachusetts', stateName: 'Massachusetts', postalCode: 'MA', primaryDate: 'September 1, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unenrolled (independent) voters may request either major party ballot at the polls.' },
  { stateSlug: 'newhampshire', stateName: 'New Hampshire', postalCode: 'NH', primaryDate: 'September 8, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Undeclared voters may affiliate at the polls and return to undeclared status before leaving.' },
  { stateSlug: 'rhodeisland', stateName: 'Rhode Island', postalCode: 'RI', primaryDate: 'September 8, 2026', runoffDate: null, primaryType: 'Semi-Closed / Partially Open Primary', partyChangeRule: 'Unaffiliated voters may vote in any party primary and are affiliated until filing a disaffiliation form.' },
  { stateSlug: 'delaware', stateName: 'Delaware', postalCode: 'DE', primaryDate: 'September 15, 2026', runoffDate: null, primaryType: 'Closed Primary', partyChangeRule: 'Party affiliation changes must be submitted before May 2026.' },
  { stateSlug: 'louisiana', stateName: 'Louisiana', postalCode: 'LA', primaryDate: 'May 16, 2026', runoffDate: 'June 27, 2026', primaryType: 'Closed Primary', partyChangeRule: 'Closed congressional primaries with unaffiliated voters eligible to choose one party primary.' },
];
