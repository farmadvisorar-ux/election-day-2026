export type ElectoralStatus = 'democrat' | 'republican' | 'tossup';

export interface StateElectoralData {
  id: string; // state postal code or district, e.g. "PA", "NE-02"
  name: string;
  votes: number;
  initialStatus: ElectoralStatus;
  isBattleground: boolean;
  history2024: 'R' | 'D';
  history2020: 'R' | 'D';
  margin2024?: string;
  keyCounties?: string[];
}

export const ELECTORAL_VOTES_TO_WIN = 270;
export const TOTAL_ELECTORAL_VOTES = 538;

export const STATES_ELECTORAL_2028: StateElectoralData[] = [
  // --- THE 7 MARQUEE BATTLEGROUNDS (93 Electoral Votes) ---
  {
    id: 'PA',
    name: 'Pennsylvania',
    votes: 19,
    initialStatus: 'tossup',
    isBattleground: true,
    history2024: 'R',
    history2020: 'D',
    margin2024: 'R +1.8%',
    keyCounties: ['Philadelphia', 'Allegheny (Pittsburgh)', 'Bucks', 'Erie', 'Northampton'],
  },
  {
    id: 'GA',
    name: 'Georgia',
    votes: 16,
    initialStatus: 'tossup',
    isBattleground: true,
    history2024: 'R',
    history2020: 'D',
    margin2024: 'R +2.2%',
    keyCounties: ['Fulton (Atlanta)', 'Gwinnett', 'Cobb', 'DeKalb', 'Chatham (Savannah)'],
  },
  {
    id: 'NC',
    name: 'North Carolina',
    votes: 16,
    initialStatus: 'tossup',
    isBattleground: true,
    history2024: 'R',
    history2020: 'R',
    margin2024: 'R +3.2%',
    keyCounties: ['Wake (Raleigh)', 'Mecklenburg (Charlotte)', 'Guilford', 'Cumberland'],
  },
  {
    id: 'MI',
    name: 'Michigan',
    votes: 15,
    initialStatus: 'tossup',
    isBattleground: true,
    history2024: 'R',
    history2020: 'D',
    margin2024: 'R +1.4%',
    keyCounties: ['Wayne (Detroit)', 'Oakland', 'Macomb', 'Kent (Grand Rapids)', 'Washtenaw'],
  },
  {
    id: 'AZ',
    name: 'Arizona',
    votes: 11,
    initialStatus: 'tossup',
    isBattleground: true,
    history2024: 'R',
    history2020: 'D',
    margin2024: 'R +5.5%',
    keyCounties: ['Maricopa (Phoenix Metro - 60% of vote)', 'Pima (Tucson)', 'Pinal'],
  },
  {
    id: 'WI',
    name: 'Wisconsin',
    votes: 10,
    initialStatus: 'tossup',
    isBattleground: true,
    history2024: 'R',
    history2020: 'D',
    margin2024: 'R +0.9%',
    keyCounties: ['Milwaukee', 'Dane (Madison)', 'Waukesha (WOW counties)', 'Brown (Green Bay)'],
  },
  {
    id: 'NV',
    name: 'Nevada',
    votes: 6,
    initialStatus: 'tossup',
    isBattleground: true,
    history2024: 'R',
    history2020: 'D',
    margin2024: 'R +3.1%',
    keyCounties: ['Clark (Las Vegas - 70% of vote)', 'Washoe (Reno)'],
  },
  {
    id: 'NE-02',
    name: 'Nebraska 2nd District (Omaha)',
    votes: 1,
    initialStatus: 'tossup',
    isBattleground: true,
    history2024: 'D',
    history2020: 'D',
    margin2024: 'D +4.2%',
    keyCounties: ['Douglas (Omaha)', 'Sarpy'],
  },

  // --- SOLID & LEAN DEMOCRATIC STATES (226 Electoral Votes) ---
  { id: 'CA', name: 'California', votes: 54, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'NY', name: 'New York', votes: 28, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'IL', name: 'Illinois', votes: 19, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'NJ', name: 'New Jersey', votes: 14, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'VA', name: 'Virginia', votes: 13, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'WA', name: 'Washington', votes: 12, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'MA', name: 'Massachusetts', votes: 11, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'CO', name: 'Colorado', votes: 10, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'MD', name: 'Maryland', votes: 10, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'MN', name: 'Minnesota', votes: 10, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'OR', name: 'Oregon', votes: 8, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'CT', name: 'Connecticut', votes: 7, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'NM', name: 'New Mexico', votes: 5, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'HI', name: 'Hawaii', votes: 4, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'NH', name: 'New Hampshire', votes: 4, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'ME-AL', name: 'Maine Statewide', votes: 2, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'ME-01', name: 'Maine 1st District', votes: 1, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'RI', name: 'Rhode Island', votes: 4, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'DE', name: 'Delaware', votes: 3, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'VT', name: 'Vermont', votes: 3, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },
  { id: 'DC', name: 'District of Columbia', votes: 3, initialStatus: 'democrat', isBattleground: false, history2024: 'D', history2020: 'D' },

  // --- SOLID & LEAN REPUBLICAN STATES (219 Electoral Votes) ---
  { id: 'TX', name: 'Texas', votes: 40, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'FL', name: 'Florida', votes: 30, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'OH', name: 'Ohio', votes: 17, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'IN', name: 'Indiana', votes: 11, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'TN', name: 'Tennessee', votes: 11, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'MO', name: 'Missouri', votes: 10, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'AL', name: 'Alabama', votes: 9, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'SC', name: 'South Carolina', votes: 9, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'KY', name: 'Kentucky', votes: 8, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'LA', name: 'Louisiana', votes: 8, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'OK', name: 'Oklahoma', votes: 7, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'AR', name: 'Arkansas', votes: 6, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'IA', name: 'Iowa', votes: 6, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'KS', name: 'Kansas', votes: 6, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'MS', name: 'Mississippi', votes: 6, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'UT', name: 'Utah', votes: 6, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'NE-AL', name: 'Nebraska Statewide', votes: 2, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'NE-01', name: 'Nebraska 1st District', votes: 1, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'NE-03', name: 'Nebraska 3rd District', votes: 1, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'ID', name: 'Idaho', votes: 4, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'MT', name: 'Montana', votes: 4, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'WV', name: 'West Virginia', votes: 4, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'ME-02', name: 'Maine 2nd District', votes: 1, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'AK', name: 'Alaska', votes: 3, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'ND', name: 'North Dakota', votes: 3, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'SD', name: 'South Dakota', votes: 3, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
  { id: 'WY', name: 'Wyoming', votes: 3, initialStatus: 'republican', isBattleground: false, history2024: 'R', history2020: 'R' },
];
