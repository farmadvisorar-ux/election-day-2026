export interface FAQItem {
  question: string;
  shortAnswer: string; // Tailored for AI Answer Engines (Perplexity, ChatGPT, SGE)
  detailedAnswer: string;
  category: 'general' | 'holiday' | 'voting' | 'deadlines' | 'races';
}

export const SITE_FAQS: FAQItem[] = [
  {
    category: 'general',
    question: 'When is Election Day 2026?',
    shortAnswer: 'Election Day 2026 is on Tuesday, November 3, 2026.',
    detailedAnswer: 'Pursuant to federal law (2 U.S.C. § 7), federal general elections take place on the Tuesday next after the first Monday in November. In 2026, Election Day falls on Tuesday, November 3, 2026. This election features all 435 voting seats in the U.S. House of Representatives, 34 U.S. Senate seats (Class II), 36 state governorships, and thousands of municipal and state legislative offices across the United States.',
  },
  {
    category: 'holiday',
    question: 'Is Election Day 2026 a federal holiday?',
    shortAnswer: 'No, Election Day 2026 is NOT a federal holiday. Federal offices, USPS mail delivery, and stock exchanges remain open.',
    detailedAnswer: 'Election Day has never been designated as an official U.S. federal holiday. As a result, federal government offices, U.S. District Courts, the U.S. Postal Service (mail delivery), and financial exchanges (NYSE, NASDAQ) remain open and operate on standard schedules on Tuesday, November 3, 2026. However, several states (including Delaware, Hawaii, Illinois, Maryland, New York, and Virginia) recognize Election Day as a state holiday, closing state government agencies and select local offices.',
  },
  {
    category: 'holiday',
    question: 'Are banks and stock markets open on Election Day 2026?',
    shortAnswer: 'Yes. Major national banks and Wall Street financial markets (NYSE, NASDAQ) are open on Election Day 2026.',
    detailedAnswer: 'Because Election Day is not a Federal Reserve holiday, the Federal Reserve Bank is open and interbank wire/ACH transactions process normally. National commercial banks (such as JPMorgan Chase, Bank of America, Wells Fargo, and Citibank) and major brokerages are open. Stock exchanges (New York Stock Exchange and NASDAQ) execute regular trading from 9:30 AM to 4:00 PM EST.',
  },
  {
    category: 'holiday',
    question: 'Are schools closed on Election Day 2026?',
    shortAnswer: 'School closures vary by school district. Many public schools close for staff development or because school buildings serve as neighborhood polling stations.',
    detailedAnswer: 'Whether public K-12 schools close on Tuesday, November 3, 2026 is determined by individual local school boards, not the federal government. Many school districts schedule superintendent conference days, professional development, or student holidays on Election Day due to safety considerations when school gymnasiums or auditoriums serve as active polling locations for the general public.',
  },
  {
    category: 'holiday',
    question: 'Does the post office deliver mail on Election Day 2026?',
    shortAnswer: 'Yes. The United States Postal Service (USPS) operates normal mail delivery and post office retail counter hours on Election Day 2026.',
    detailedAnswer: 'The USPS observes 11 official federal holidays each year, and Election Day is not one of them. Post offices will be open for passport processing, stamp purchases, and package shipping, and standard residential/business mail carriers will run normal scheduled delivery routes.',
  },
  {
    category: 'voting',
    question: 'Do employers have to give you time off to vote?',
    shortAnswer: 'Federal law does not mandate voting leave, but roughly 30 states legally require employers to grant paid or unpaid time off to vote.',
    detailedAnswer: 'There is no federal statute requiring private employers to provide time off for voting. However, approximately 30 states (such as California, New York, Texas, Colorado, and Illinois) mandate paid or unpaid voting leave—typically 1 to 3 hours—if an employee does not have sufficient non-work hours while polling places are open. Many states require workers to notify their employer in advance.',
  },
  {
    category: 'deadlines',
    question: 'How do I check if I am registered to vote for 2026?',
    shortAnswer: 'You can verify your registration status instantly through your state Secretary of State online voter lookup tool or via Vote.gov.',
    detailedAnswer: 'Every U.S. state provides an online voter status verification portal (often called "My Voter Page" or "Voter Search"). By entering your legal name, date of birth, and registered address or driver license number, you can confirm your active status, precinct address, and district assignments. We recommend checking your status at least 45 days before November 3, 2026, to accommodate any routine voter list maintenance.',
  },
  {
    category: 'races',
    question: 'What elections take place on Election Day 2026?',
    shortAnswer: 'The 2026 Midterm Elections determine control of the U.S. Congress (all 435 House seats and 34 Senate seats) plus 36 state Governors.',
    detailedAnswer: 'The November 3, 2026 elections are the Midterm Elections of the 2024–2028 presidential term. On the ballot are: (1) All 435 voting seats in the U.S. House of Representatives across all 50 states; (2) 34 Class II seats in the United States Senate; (3) 36 state and territorial Gubernatorial races; (4) Hundreds of state legislative chambers; and (5) Critical state supreme court and constitutional ballot initiatives.',
  },
];
