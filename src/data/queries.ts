export interface QueryCluster {
  id: string;
  category: 'logistics' | 'work-rights' | 'deadlines' | 'identification' | 'misspellings' | 'ballot';
  primaryQuery: string;
  variations: string[];
  misspellings: string[];
  directAnswer: string;
  inDepthAnswer: string;
  sourceStatute: string;
  sourceUrl: string;
}

export const COMPREHENSIVE_QUERY_MATRIX: QueryCluster[] = [
  {
    "id": "date-time-polls",
    "category": "logistics",
    "primaryQuery": "When is Election Day 2026 and what time do polls open and close?",
    "variations": [
      "when election day 2026",
      "what day election 2026",
      "2026 election what day is it",
      "what date is the 2026 election",
      "what tuesday is election day 2026",
      "what time do polls open election day 2026",
      "what time voting close today",
      "how late are polls open nov 3 2026",
      "polls open close time 2026",
      "when do voting booths close 2026",
      "time to vote november 3 2026",
      "is election day always first tuesday november",
      "when is vote day 2026",
      "mid term voting date 2026",
      "what day do we go vote in 2026",
      "nov 3 2026 election hours"
    ],
    "misspellings": [
      "when is eleciton day 2026",
      "what date is electon day 2026",
      "electoin day 2026",
      "elction day 2026",
      "election dya 2026",
      "voteing day 2026",
      "votting day 2026",
      "midturm election date 2026",
      "midtrem election 2026",
      "novemeber 3 2026 election",
      "novmber 3 election day",
      "tuseday nov 3 2026"
    ],
    "directAnswer": "Election Day in 2026 is Tuesday, November 3, 2026. By federal statute (2 U.S.C. § 7), it falls on the Tuesday next after the first Monday in November. Across the 50 states, polling places open between 6:00 AM and 8:00 AM and close between 7:00 PM and 9:00 PM local time.",
    "inDepthAnswer": "Under 2 U.S. Code § 7, federal general elections are standardized nationwide on the first Tuesday after the first Monday in November of even-numbered years. In 2026, November 1 falls on a Sunday and the first Monday is November 2, placing Election Day on Tuesday, November 3, 2026. While the date is federal, polling place opening and closing hours are set by state statute—for example, New York polls run 6:00 AM to 9:00 PM ET, Texas and Florida polls run 7:00 AM to 7:00 PM local time, California and Pennsylvania run 7:00 AM to 8:00 PM, and North Carolina and Ohio run 6:30 AM to 7:30 PM.",
    "sourceStatute": "2 U.S. Code § 7 (Time of Election)",
    "sourceUrl": "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title2-section7&num=0&edition=prelim"
  },
  {
    "id": "federal-holiday-closures",
    "category": "logistics",
    "primaryQuery": "Is Election Day 2026 a federal holiday? Are banks, post offices, and schools open?",
    "variations": [
      "is election day a holiday 2026",
      "do we get off work on election day",
      "are banks open on election day 2026",
      "is post office open election day",
      "does mail run on election day 2026",
      "does usps deliver on election day",
      "are schools closed on election day 2026",
      "is there school on nov 3 2026",
      "is the stock market open on election day",
      "is dmv open on election day",
      "are courts open on election day",
      "does ups and fedex run on election day",
      "what is closed on election day 2026",
      "why is election day not a federal holiday"
    ],
    "misspellings": [
      "is eleciton day a fedral holiday",
      "are banks open on electon day",
      "is the post ofice open on election day",
      "does usps mail run on voteing day",
      "are skools closed on election day 2026",
      "fedral holiday election day 2026"
    ],
    "directAnswer": "No, Election Day (Tuesday, November 3, 2026) is NOT a federal holiday under 5 U.S.C. § 6103. National banks, the U.S. Postal Service (normal mail delivery), the NYSE/NASDAQ stock markets, FedEx, UPS, and federal agencies remain open. However, 12 states observe it as a state holiday.",
    "inDepthAnswer": "Because Election Day is not listed among the 11 federal public holidays in 5 U.S.C. § 6103, the Federal Reserve banking system, commercial banks (Chase, Bank of America, Wells Fargo), Wall Street financial markets, and USPS post offices operate normal Tuesday business hours on November 3, 2026. However, Delaware, Hawaii, Illinois, Louisiana, Maryland, Montana, New Jersey, New York, Rhode Island, South Carolina, Virginia, and West Virginia observe General Election Day as an official state government holiday, closing state DMVs and state courts. Many local public K-12 school districts also close or hold teacher in-service days because school gymnasiums serve as high-traffic neighborhood polling places.",
    "sourceStatute": "5 U.S. Code § 6103 (Federal Holidays)",
    "sourceUrl": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/"
  },
  {
    "id": "in-line-when-polls-close",
    "category": "logistics",
    "primaryQuery": "What happens if I am still in line when the polls close on Election Day?",
    "variations": [
      "in line when polls close can i vote",
      "what if polls close while im in line",
      "can they kick me out of line at 7pm",
      "polls closing still waiting in line",
      "do i get to vote if i get in line before closing",
      "cutoff time for standing in voting line",
      "poll worker said polls are closed but i was in line",
      "how late do polls stay open if there is a line"
    ],
    "misspellings": [
      "in line when pols close can i vote",
      "what if voteing closes while in line",
      "stading in line when polls close",
      "eleciton line closing time rule"
    ],
    "directAnswer": "Stay in line! In all 50 states and Washington, D.C., if you are physically standing in line at your assigned polling place by the exact minute polls are scheduled to close, you have the absolute legal right to cast your ballot—even if it takes hours for the line to finish.",
    "inDepthAnswer": "Election laws across every U.S. jurisdiction protect voters who arrive before the poll-closing deadline. At the exact closing minute (e.g., 7:00 PM or 8:00 PM), a precinct election judge or police officer will typically stand at the back of the existing queue to mark the final eligible voter. Anyone already in line ahead of that marker must be permitted to check in and vote a regular ballot. Note: if a court orders polling hours extended in your county due to earlier machine delays, voters arriving during the court-ordered extension vote by provisional ballot under 52 U.S.C. § 21082(c).",
    "sourceStatute": "52 U.S. Code § 21082 & 50-State Election Codes",
    "sourceUrl": "https://www.eac.gov/voters/election-day-contact-information"
  },
  {
    "id": "wrong-polling-place-precinct",
    "category": "logistics",
    "primaryQuery": "Can I vote at any polling place in my county, or do I have to go to my assigned precinct?",
    "variations": [
      "can i vote at any polling place",
      "went to wrong polling place can i still vote",
      "do i have to vote at my assigned precinct",
      "what is a county vote center state",
      "vote anywhere in my county on election day",
      "can i vote near my job instead of my house",
      "does provisional ballot count if wrong precinct",
      "how to find my exact polling place address"
    ],
    "misspellings": [
      "can i vote at any poling place",
      "wrong precint on election day",
      "vote at diffrent polling location",
      "assigned precent voting rule"
    ],
    "directAnswer": "It depends on whether your county uses Countywide Vote Centers or Assigned Neighborhood Precincts. In Vote Center counties (common in CA, CO, AZ, TX, NV, UT, IN), you can vote at any center in your county. In traditional precinct states, you must vote at your assigned neighborhood precinct.",
    "inDepthAnswer": "Over 19 states authorize counties to operate Election Day Vote Centers, where electronic poll books are networked countywide so any registered voter in that county can walk into any Vote Center (near work, school, or home) and print their exact precinct ballot style. However, in traditional precinct-based states (such as PA, NY, OH, WI, FL, GA, NC), Election Day voting is restricted to your single assigned neighborhood precinct. In many precinct states, casting a provisional ballot at the wrong precinct will result in your ballot being rejected or only counted for statewide races—so always travel to your assigned precinct if possible.",
    "sourceStatute": "NCSL Vote Centers & State Precinct Administration Statutes",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/vote-centers"
  },
  {
    "id": "bring-phone-cheat-sheet-voting-booth",
    "category": "logistics",
    "primaryQuery": "Can I look at my phone or bring a written cheat sheet into the voting booth?",
    "variations": [
      "can i use my phone in the voting booth",
      "can i bring notes into the voting booth",
      "can i bring a sample ballot with me to vote",
      "am i allowed to look at my phone while voting",
      "can i write down who i want to vote for on paper",
      "are phones allowed inside polling place",
      "is it illegal to take a picture of my ballot",
      "ballot selfie laws by state 2026"
    ],
    "misspellings": [
      "can i take my fone in the voting booth",
      "balot selfie legal or illegal",
      "bring sample balot to polls",
      "cheet sheet in voting booth"
    ],
    "directAnswer": "In all 50 states, you are 100% legally permitted to bring a printed sample ballot or handwritten paper notes into the voting booth. Looking at notes on your silenced smartphone is also allowed in nearly every state, though taking photos (\"ballot selfies\") or phone calls is restricted in ~14 states.",
    "inDepthAnswer": "Because midterm ballots often contain 20 to 50 federal, state, judicial, and municipal contests plus complex constitutional amendments, election officials strongly encourage voters to bring a marked paper sample ballot or written checklist into the booth. While consulting a silenced phone screen for your personal notes is permitted almost everywhere, states like New York, Texas, Florida, Georgia, Illinois, North Carolina, New Jersey, Ohio, and Nevada prohibit photographing a marked ballot (\"ballot selfies\") under secret-ballot anti-coercion statutes.",
    "sourceStatute": "State Secret Ballot & Polling Place Conduct Codes",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/secrecy-of-the-ballot-and-ballot-selfies"
  },
  {
    "id": "campaign-clothing-hats-electioneering",
    "category": "logistics",
    "primaryQuery": "Can I wear a political shirt, campaign hat, or button to the polling place?",
    "variations": [
      "can i wear a campaign hat to vote",
      "can i wear a political shirt to the polls",
      "what are the rules on what to wear to vote",
      "will they turn me away for wearing a candidate shirt",
      "what is electioneering at a polling place",
      "how many feet away from polls can people campaign",
      "100 foot rule polling place",
      "can i wear a party shirt when voting"
    ],
    "misspellings": [
      "wear campain shirt to vote",
      "poltical hat at polling place",
      "electoneering distance polling place",
      "wear slogan shirt to voteing booth"
    ],
    "directAnswer": "No. Nearly all 50 states prohibit wearing clothing, hats, buttons, or stickers displaying a candidate’s name, political party, or ballot measure slogan inside the polling place (\"electioneeringfree zone,\" typically 50 to 150 feet from the entrance). You will be asked to cover or remove the item before entering.",
    "inDepthAnswer": "Every state enforces a statutory buffer zone around polling place entrances—most commonly 100 feet (e.g., Texas, California, New York, Florida) or 150 feet (e.g., Georgia)—where campaigning and displaying political apparel are strictly banned. Under the U.S. Supreme Court ruling in Minnesota Voters Alliance v. Mansky (2018), states may ban candidate names, party logos, and campaign slogans inside polling places. If you arrive wearing a campaign hat or shirt, poll workers will ask you to take the hat off or turn/zip a jacket over the shirt so you can vote without delay.",
    "sourceStatute": "Minnesota Voters Alliance v. Mansky, 585 U.S. ___ (2018) & State Buffer Zone Laws",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/electioneering-prohibitions"
  },
  {
    "id": "bring-children-kids-to-voting-booth",
    "category": "logistics",
    "primaryQuery": "Can I bring my children or baby with me into the voting booth on Election Day?",
    "variations": [
      "can i bring my kids with me to vote",
      "are children allowed in the voting booth",
      "can my toddler come with me to vote",
      "age limit for bringing kids into polling place",
      "can a single parent bring kids to vote",
      "can my teenager go into the voting booth with me"
    ],
    "misspellings": [
      "bring childern to voting booth",
      "are kids alowed at polling place",
      "take my kid to go vote"
    ],
    "directAnswer": "Yes! All 50 states and Washington, D.C. allow parents and guardians to bring minor children (typically under age 18, or under age 16–17 in a few states) with them into the polling place and voting booth so childcare is never a barrier to voting.",
    "inDepthAnswer": "State election statutes explicitly exempt minor children accompanying a parent or legal guardian from polling-booth occupancy limits. Whether you have an infant in a stroller, a toddler, or school-age children, they may accompany you while you check in and mark your ballot, provided they do not disrupt other voters or touch voting equipment.",
    "sourceStatute": "50-State Polling Booth Accompaniment Statutes",
    "sourceUrl": "https://www.vote.gov"
  },
  {
    "id": "spoiled-ballot-mistake-replacement",
    "category": "logistics",
    "primaryQuery": "What happens if I make a mistake, bubble the wrong candidate, or rip my paper ballot?",
    "variations": [
      "i messed up my ballot what do i do",
      "what if i fill in the wrong bubble on my ballot",
      "can i get a new ballot if i make a mistake",
      "what is a spoiled ballot",
      "crossed out a name on my ballot will it count",
      "scanner rejected my ballot overvote",
      "how many replacement ballots can i get"
    ],
    "misspellings": [
      "messed up my balot can i get a new one",
      "spoled ballot replacement rule",
      "filled wrong circle on voteing ballot"
    ],
    "directAnswer": "Do NOT put the ballot into the scanner or try to cross out your mistake! Ask a poll worker for a replacement ballot before casting it. Every state allows voters to surrender a \"spoiled\" paper ballot and receive a fresh replacement ballot (typically up to 2 or 3 replacements).",
    "inDepthAnswer": "If you mark two candidates for the same office (an \"overvote\") or accidentally fill in the wrong oval on a paper ballot, crossing it out or writing \"void\" next to the bubble will confuse optical ballot scanners and may invalidate your vote for that contest. As long as you have not yet fed the ballot into the tabulator box, simply fold your ballot for privacy, hand it to an election official, and request a fresh ballot. The official will mark your old sheet \"Spoiled,\" seal it in a secure envelope, and issue you a clean ballot.",
    "sourceStatute": "State Election Administration & Spoiled Ballot Procedures",
    "sourceUrl": "https://www.eac.gov/voters"
  },
  {
    "id": "alcohol-liquor-sales-election-day",
    "category": "logistics",
    "primaryQuery": "Can you buy alcohol or go to bars on Election Day 2026?",
    "variations": [
      "can you buy alcohol on election day",
      "are liquor stores open on election day 2026",
      "is it illegal to sell alcohol on election day",
      "can bars serve alcohol while polls are open",
      "blue laws election day alcohol sales"
    ],
    "misspellings": [
      "buy alchohol on election day",
      "liqour stores open election day",
      "alchol sales nov 3 2026"
    ],
    "directAnswer": "Yes. Selling and purchasing alcohol in restaurants, bars, grocery stores, and liquor stores is legal in all 50 states on Election Day 2026. Historic 19th-century bans on Election Day alcohol sales have been repealed nationwide.",
    "inDepthAnswer": "In the 1800s, saloons frequently served as polling places and political machines used free whiskey to influence voters, leading nearly every state to ban alcohol sales while polls were open. Kentucky (2013) and South Carolina (2014) were the final states to repeal statewide Election Day alcohol prohibitions, meaning bars and package stores operate normal Tuesday hours nationwide on November 3, 2026.",
    "sourceStatute": "Repealed State Election Day Liquor Prohibitions",
    "sourceUrl": "https://www.usa.gov/election-day"
  },
  {
    "id": "moved-didnt-change-address-can-i-vote",
    "category": "deadlines",
    "primaryQuery": "I moved recently and didn’t update my voter registration address—can I still vote?",
    "variations": [
      "i moved and didnt change my address can i still vote",
      "moved to a new apartment where do i vote",
      "moved within the same county can i vote",
      "moved to a different county in the same state voting rule",
      "moved to a new state right before election day",
      "haven t updated my address on voter registration",
      "can i vote at my old polling place if i moved",
      "change address at polling place on election day"
    ],
    "misspellings": [
      "moved didnt change adress can i vote",
      "new adress voter regestration",
      "moved to diffrent county where to vote"
    ],
    "directAnswer": "In most cases, yes—especially if you moved within the same county or live in one of the 23 Same-Day Registration jurisdictions. Under the National Voter Registration Act (52 U.S.C. § 20507(e)), voters who moved within the same county or congressional district can update their address and vote.",
    "inDepthAnswer": "What you should do depends on where you moved:\n1. Moved Within the Same County: Under federal law (NVRA Section 8(e)), if you moved within the same county and same congressional district, you are legally entitled to update your address and vote (either at your new precinct, a central county election office, or your old precinct depending on state law).\n2. Moved to a New County or State in a Same-Day Registration State (23 Jurisdictions): In CA, CO, CT, DC, HI, ID, IL, IA, ME, MD, MI, MN, NV, NH, NM, ND, UT, VT, VA, WA, WI, and WY, you can register or update your address at the polls on Election Day using a utility bill, lease, or bank statement showing your new address.\n3. Moved in a 30-Day Cutoff State (e.g., TX, FL, GA, PA, OH, NY): Update your address online at your Secretary of State portal before the October 2026 cutoff, or request a \"Limited / Fail-Safe Ballot\" at your county election board.",
    "sourceStatute": "52 U.S. Code § 20507(e) (National Voter Registration Act Fail-Safe Voting)",
    "sourceUrl": "https://www.justice.gov/crt/national-voter-registration-act-1993-nvra"
  },
  {
    "id": "forgot-voter-registration-card",
    "category": "identification",
    "primaryQuery": "Do I need to bring my paper voter registration card to the polls to vote?",
    "variations": [
      "do i need my voter registration card to vote",
      "i lost my voter registration card can i still vote",
      "never got my voter card in the mail am i registered",
      "forgot voter card at home can i vote with driver license",
      "is a voter registration card required at polling place",
      "what is the paper voter card used for"
    ],
    "misspellings": [
      "lost voter regestration card can i vote",
      "need voter card to go vote",
      "forgot my voteing card"
    ],
    "directAnswer": "No! You do NOT need to bring your paper voter registration card to vote in any of the 50 states. As long as your name is on the official voter roll and you bring an accepted form of Voter ID (if required by your state), your paper voter card is completely optional.",
    "inDepthAnswer": "Your paper voter registration card (mailed to you by your county clerk or board of elections after registering) is primarily an informational receipt showing your assigned polling precinct and legislative districts. Poll workers look up your name electronically or in the printed precinct poll book. Simply bring your state-accepted photo or non-photo ID. (Note: in non-strict ID states, a voter registration card can optionally serve as a secondary form of non-photo identification if you do not have a driver’s license.)",
    "sourceStatute": "50-State Poll Book & Voter Check-In Procedures",
    "sourceUrl": "https://www.vote.gov"
  },
  {
    "id": "turn-18-before-election-day",
    "category": "deadlines",
    "primaryQuery": "Can I register to vote at age 17 if I will turn 18 on or before November 3, 2026?",
    "variations": [
      "can a 17 year old register to vote if turning 18 before election day",
      "i turn 18 on november 3 2026 can i vote",
      "how old to pre register to vote",
      "can 17 year olds vote in the 2026 primary if 18 by general election",
      "first time voter turning 18 in 2026",
      "when can high school seniors register to vote"
    ],
    "misspellings": [
      "17 yr old regester to vote turning 18",
      "turn 18 before eleciton day can i vote",
      "pre regestration age to vote"
    ],
    "directAnswer": "Yes! In all 50 states and D.C., if you will turn 18 years old on or before Tuesday, November 3, 2026, you can register to vote right now in advance of the registration deadline. Additionally, ~19 states allow 17-year-olds to vote in the 2026 primary election if they will be 18 by November 3.",
    "inDepthAnswer": "Under the 26th Amendment to the U.S. Constitution, every citizen who reaches age 18 by General Election Day (November 3, 2026) has the constitutional right to vote in that election. Because registration deadlines occur 15 to 30 days before Election Day, every state allows 17-year-olds who will be 18 by November 3 to submit their voter registration application ahead of the cutoff. Furthermore, states including California, Colorado, Delaware, Hawaii, Illinois, Indiana, Kentucky, Maine, Maryland, Mississippi, Nebraska, Nevada, New Mexico, North Carolina, Ohio, South Carolina, Utah, Vermont, Virginia, and West Virginia allow 16- and 17-year-olds to pre-register or vote in primary elections if they will be 18 by November 3, 2026.",
    "sourceStatute": "U.S. Constitution 26th Amendment & State Youth Pre-Registration Laws",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/preregistration-for-young-voters"
  },
  {
    "id": "same-day-voter-registration-states",
    "category": "deadlines",
    "primaryQuery": "Which states allow Same-Day Voter Registration on Election Day 2026?",
    "variations": [
      "can i register to vote on election day 2026",
      "missed voter registration deadline can i still vote",
      "same day voter registration states 2026",
      "what states let you register and vote the same day",
      "what do i need to bring for same day registration",
      "forgot to register to vote am i too late"
    ],
    "misspellings": [
      "same day voter regestration states",
      "register on eleciton day 2026",
      "missed deadline to regester to vote"
    ],
    "directAnswer": "22 states plus Washington, D.C. allow eligible citizens to register to vote and cast a ballot on the exact same day on Tuesday, November 3, 2026 (and during early voting). North Dakota requires no voter registration at all.",
    "inDepthAnswer": "The jurisdictions offering Same-Day Voter Registration (SDR) on Election Day 2026 are: California, Colorado, Connecticut, District of Columbia, Hawaii, Idaho, Illinois, Iowa, Maine, Maryland, Michigan, Minnesota, Montana, Nevada, New Hampshire, New Mexico, Utah, Vermont, Virginia, Washington, Wisconsin, and Wyoming (plus North Carolina during the early voting period only). To use Same-Day Registration, bring a photo ID and proof of current residency in the precinct (such as a utility bill, lease agreement, paycheck, or bank statement showing your name and current street address).",
    "sourceStatute": "NCSL Same-Day Voter Registration Statutory Summary",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/same-day-voter-registration"
  },
  {
    "id": "check-if-registered-inactive-voter-purge",
    "category": "deadlines",
    "primaryQuery": "How do I check if I am registered to vote or if my name was removed (\"purged\") as an inactive voter?",
    "variations": [
      "am i registered to vote lookup",
      "how to check my voter registration status",
      "why does my voter status say inactive",
      "can an inactive voter still vote on election day",
      "did i get purged from the voter rolls",
      "haven t voted in years am i still registered",
      "check voter status by name and birthday"
    ],
    "misspellings": [
      "check if im regestered to vote",
      "inactive voter status can i vote",
      "voter regestration check online"
    ],
    "directAnswer": "Yes, an \"Inactive\" voter is still a registered voter and CAN vote on Election Day 2026! You are marked inactive only if election mail bounced or you missed several elections. Check your status in 30 seconds on your state Secretary of State (.gov) portal and re-confirm your address.",
    "inDepthAnswer": "Under Section 8 of the National Voter Registration Act (NVRA, 52 U.S.C. § 20507), states cannot remove a voter from the rolls solely for failing to vote. Instead, if official mail is returned undeliverable, the county places the voter on an \"Inactive\" list. An inactive voter remains legally registered and can vote a regular ballot at the polls after confirming their current residential address. Only if an inactive voter fails to vote or respond across two consecutive federal general election cycles (4 years) can their registration be canceled.",
    "sourceStatute": "52 U.S. Code § 20507 (NVRA List Maintenance Protections)",
    "sourceUrl": "https://www.vote.gov"
  },
  {
    "id": "expired-id-or-wrong-address-on-license",
    "category": "identification",
    "primaryQuery": "Can I vote if my driver’s license is expired or has my old address on it?",
    "variations": [
      "my driver license has my old address can i vote",
      "does address on id have to match voter registration",
      "can i vote with an expired driver license",
      "can i use an expired passport to vote",
      "lost my wallet on election day can i vote",
      "no photo id what can i use to vote",
      "does my id address need to match my polling place"
    ],
    "misspellings": [
      "drivers licnese has old adress can i vote",
      "expired id to vote on eleciton day",
      "adress on id doesnt match voter roll"
    ],
    "directAnswer": "In the vast majority of states, the street address printed on your photo ID (such as your driver’s license or U.S. Passport, which has no address at all) does NOT need to match your current residential address on the voter roll—because photo ID is used to verify your identity, not your address.",
    "inDepthAnswer": "1. Old Address on Driver’s License: In almost every photo-ID state (including TX, FL, GA, PA, MI, NC, IN), poll workers check your photo ID to confirm *who you are* (name and photo), while you confirm your current registered address verbally or in the poll book. Indeed, a U.S. Passport, Military ID, or Tribal ID is accepted in every photo-ID state despite having no residential address printed on it.\n2. Expired IDs: Many strict photo-ID states still accept recently expired IDs—for example, Texas accepts IDs expired up to 4 years (or indefinitely for voters 70+), Georgia and Indiana accept IDs expired since the last general election, and Wisconsin accepts IDs expired after the previous November election. If your ID is not accepted, always cast a HAVA Provisional Ballot (52 U.S.C. § 21082).",
    "sourceStatute": "State Voter ID Statutes & 52 U.S.C. § 21082",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/voter-id"
  },
  {
    "id": "lost-wallet-no-id-provisional-ballot",
    "category": "identification",
    "primaryQuery": "What if I lost my wallet or forgot my ID on Election Day—can I still vote?",
    "variations": [
      "forgot my id can i still vote",
      "lost my license yesterday how do i vote today",
      "what is a provisional ballot and does it count",
      "poll worker said i cant vote without id",
      "reasonable impediment declaration voter id",
      "how to cure a provisional ballot",
      "can i sign an affidavit if i dont have photo id"
    ],
    "misspellings": [
      "provisonal ballot how does it work",
      "pervisional ballot no id",
      "lost walet on election day can i vote"
    ],
    "directAnswer": "Never walk away from a polling place without voting! Even if you lost your wallet in a Strict Photo ID state, federal law (52 U.S.C. § 21082 HAVA) guarantees your right to cast a Provisional Ballot, and many states allow you to sign a \"Reasonable Impediment Affidavit\" on the spot.",
    "inDepthAnswer": "If you arrive at the polls without an accepted ID, you have three layers of protection depending on your state:\n1. 14 States + D.C. Require No ID: (CA, NY, IL, PA*, NJ, MA, MD, MN, NV, OR, WA, VT, ME, NM, HI—*PA only requires ID for first-time voters in a precinct).\n2. Non-Strict ID States (Sign an Affidavit at the Booth): In states like MI, NC, VA, AZ, CO, IA, ID, LA, NH, SC, SD, TX (with Reasonable Impediment Declaration + utility bill), and UT, you can sign a sworn affidavit or reasonable impediment form and cast a ballot.\n3. Strict Photo ID States (Provisional Ballot + Curing): Under the federal Help America Vote Act (52 U.S.C. § 21082), you can cast a Provisional Ballot and present or email your ID to the County Election Board within 3 to 7 days after November 3 so your ballot is counted.",
    "sourceStatute": "52 U.S. Code § 21082 (Help America Vote Act Provisional Voting)",
    "sourceUrl": "https://www.eac.gov/voters/provisional-voting"
  },
  {
    "id": "requested-mail-ballot-vote-in-person",
    "category": "deadlines",
    "primaryQuery": "I requested a mail-in ballot (or received one in the mail), but now I want to vote in person—can I?",
    "variations": [
      "i got a mail ballot can i vote in person instead",
      "requested absentee ballot but never got it can i vote at polls",
      "forgot to mail my absentee ballot in time what do i do",
      "how to surrender mail ballot at polling place",
      "can i drop off my mail ballot on election day",
      "switch from mail in ballot to in person voting"
    ],
    "misspellings": [
      "got absentie ballot want to vote in person",
      "surrender mail in balot at polls",
      "didnt mail my ballot in time"
    ],
    "directAnswer": "Yes! As long as you have not already mailed or dropped off your absentee ballot, you can vote in person on Election Day in all 50 states. Bring your unvoted mail-in ballot packet with you to the polling place to surrender it to the poll worker so you can vote a regular ballot.",
    "inDepthAnswer": "If you decide you prefer to vote in person—or if it is November 2 or November 3 and it is too late to trust the mail—you have two options:\n1. Drop Off Your Completed Mail Ballot: You can hand-deliver your signed and sealed mail-in ballot to an official County Election Office or official County Drop Box before polls close on Tuesday, November 3, 2026.\n2. Vote In Person at the Booth: Bring your unvoted mail-in ballot and return envelope to your polling place. In states like PA, NY, TX, FL, and GA, surrendering your unvoted mail ballot lets the poll worker void it on the spot and issue you a regular in-person ballot. If you lost or never received your mail ballot, you can still vote in person by casting a Provisional Ballot (which is counted once the county confirms your mail ballot was never returned).",
    "sourceStatute": "State Absentee Surrender & Provisional Ballot Statutes",
    "sourceUrl": "https://www.vote.gov"
  },
  {
    "id": "mail-in-ballot-postage-stamps-postmark",
    "category": "logistics",
    "primaryQuery": "Does my mail-in ballot need a stamp, and what if I forget to put postage on it?",
    "variations": [
      "do i need a stamp for my mail in ballot",
      "how many stamps does an absentee ballot take",
      "what happens if i mail my ballot without a stamp",
      "will usps deliver a ballot with no stamp",
      "is mail in ballot postage free",
      "does postmark on election day count for mail ballot"
    ],
    "misspellings": [
      "absentie ballot need a stamp",
      "mail in balot no postage",
      "postmark deadline mail ballot 2026"
    ],
    "directAnswer": "Nearly 20 states provide prepaid \"Business Reply Mail\" ballot return envelopes that require no stamp. However, even in states where a Forever Stamp ($0.73) is required, Official USPS Policy (Postal Operations Manual § 171) mandates that the Postal Service NEVER delays or returns an election ballot for missing or insufficient postage.",
    "inDepthAnswer": "Under United States Postal Service policy, official absentee and mail-in ballots are treated as high-priority civic mail. If a voter drops a ballot return envelope into a USPS mailbox without a stamp (or with insufficient postage for a heavy two-page ballot), USPS delivers the ballot to the County Board of Elections on time and bills the local election board for the postage due. Additionally, remember that in ~32 states (such as PA, FL, GA, MI, WI, AZ, TX*), your ballot must be physically RECEIVED by Election Day—not merely postmarked—so use an official county drop box if mailing within 5 days of November 3.",
    "sourceStatute": "USPS Postal Operations Manual (POM) § 171 & Domestic Mail Manual § 703.8",
    "sourceUrl": "https://about.usps.com/what/government-services/election-mail/"
  },
  {
    "id": "signature-mismatch-ballot-curing",
    "category": "deadlines",
    "primaryQuery": "What happens if my signature on my mail-in ballot doesn’t match or I forgot to sign the envelope?",
    "variations": [
      "forgot to sign my mail in ballot envelope",
      "what is ballot curing signature mismatch",
      "my handwriting changed will my mail ballot be rejected",
      "how do i track my mail in ballot status",
      "county rejected my absentee ballot signature",
      "do i sign the inner secrecy envelope or outer envelope"
    ],
    "misspellings": [
      "signiture mismatch mail ballot",
      "forgot to sign absentie envelope",
      "cure my mail in balot"
    ],
    "directAnswer": "Over 30 states enforce mandatory \"Ballot Curing\" laws that require your County Board of Elections to notify you by phone, email, or mail if your return envelope is missing a signature or has a signature mismatch—giving you several days after Election Day to sign a cure affidavit.",
    "inDepthAnswer": "Signature verification is the #1 reason mail-in ballots are flagged. Always sign and date the outer Voter Declaration Envelope (and in states like Pennsylvania, always seal your ballot inside the inner \"Secrecy Envelope\" first so it is not rejected as a \"naked ballot\"). You can track your mail ballot status online via your state Secretary of State portal or BallotTrax. If your status shows \"Signature Issue\" or \"Challenged,\" contact your County Election Office immediately to submit a one-page Signature Cure Affidavit.",
    "sourceStatute": "NCSL Ballot Curing & Signature Verification Statutes",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/table-15-states-with-signature-cure-processes"
  },
  {
    "id": "paid-time-off-work-to-vote",
    "category": "work-rights",
    "primaryQuery": "Does my boss have to give me paid time off work to vote on Election Day 2026?",
    "variations": [
      "do i get paid time off to vote",
      "can my boss fire me for going to vote",
      "is my employer required to let me leave work to vote",
      "how many hours off work to vote by state",
      "paid voting leave laws 2026",
      "do part time workers get time off to vote",
      "how much notice do i have to give my boss to vote"
    ],
    "misspellings": [
      "paid time of to vote law",
      "boss let me off work to vote",
      "employer voting leeve statute"
    ],
    "directAnswer": "In 29 states and Washington, D.C., state labor and election statutes legally require employers to provide employees with time off to vote (typically 2 to 3 hours), and in 22 of those states the time off must be PAID—provided your work shift does not leave enough non-working hours while polls are open.",
    "inDepthAnswer": "While there is no federal law mandating voting leave for private-sector employees, 29 states enforce strict workplace voting leave statutes that make it a criminal misdemeanor or civil violation for an employer to deduct pay, penalize, or threaten an employee who takes statutory voting leave. For example: California (Cal. Elec. Code § 14000), New York (N.Y. Elec. Law § 3-110), Texas (Tex. Elec. Code § 276.004), Illinois (10 ILCS 5/17-15), Arizona (A.R.S. § 16-402), Colorado, Maryland, Minnesota, Missouri, Nevada, Utah, and Washington D.C. mandate paid voting leave. Many states require you to notify your supervisor 1 to 2 working days before November 3—use our free HR Leave Notice Generator to create a legally cited notice.",
    "sourceStatute": "State Election & Labor Code Voting Leave Statutes (29 States)",
    "sourceUrl": "https://election-day-2026.vercel.app/tools/employer-voting-leave-notice"
  },
  {
    "id": "do-we-vote-for-president-in-2026",
    "category": "ballot",
    "primaryQuery": "Do we vote for President in 2026, or what is on the November 3, 2026 ballot?",
    "variations": [
      "is 2026 a presidential election year",
      "who are we voting for in november 2026",
      "what is a midterm election and why does it matter",
      "what offices are up for election in 2026",
      "who all is on the ballot 2026",
      "when is the next presidential election after 2024"
    ],
    "misspellings": [
      "presidental election 2026",
      "what is on the balot in 2026",
      "midturm election what do we vote for"
    ],
    "directAnswer": "No, the U.S. President is not on the 2026 ballot (the next presidential election is November 7, 2028). The November 3, 2026 election is the U.S. Midterm General Election, deciding control of Congress (all 435 U.S. House seats and 35 U.S. Senate seats) plus 36 State Governors.",
    "inDepthAnswer": "Midterm elections occur at the exact two-year midpoint of a President’s four-year term. Even though the presidency is not on the ballot, the 2026 midterms determine which party controls the U.S. House of Representatives (all 435 seats up) and the U.S. Senate (35 seats up), which decides whether federal legislation, budgets, taxes, and Supreme Court/judicial confirmations pass or stall during 2027–2029. Voters also elect 36 Governors, 30 State Attorneys General, 26 Secretaries of State, over 6,000 state legislators, county sheriffs/judges, and statewide ballot propositions.",
    "sourceStatute": "U.S. Constitution Art. I, §§ 2–3 & Art. II, § 1",
    "sourceUrl": "https://election-day-2026.vercel.app/news-and-pulse-2026"
  },
  {
    "id": "vote-other-party-general-election",
    "category": "ballot",
    "primaryQuery": "Do I have to vote for my registered political party on Election Day, or can I split my ticket?",
    "variations": [
      "can a registered republican vote for a democrat in november",
      "can a democrat vote for a republican in the general election",
      "can an independent vote in the november general election",
      "do i have to vote straight party ticket",
      "does my party registration matter on november 3",
      "can i leave some races blank on my ballot"
    ],
    "misspellings": [
      "vote for diffrent party in general election",
      "can independants vote on november 3",
      "split tiket voting 2026"
    ],
    "directAnswer": "In the Tuesday, November 3, 2026 General Election, your party registration does NOT restrict who you can vote for! Every voter in your precinct—Democrat, Republican, Independent, or Libertarian—receives the exact same General Election ballot, and you can vote for any candidate of any party (\"split-ticket voting\").",
    "inDepthAnswer": "Many voters confuse Primary Elections (held March–September 2026 to nominate each party’s candidate) with the General Election (Tuesday, November 3, 2026). While Closed Primaries restrict you to your registered party’s ballot in the spring/summer, the November 3 General Election is 100% open to all registered voters regardless of party affiliation. You may vote for a Republican for one office, a Democrat for another, and an Independent for a third—and you may also skip (\"undervote\") any individual race on the ballot without invalidating the rest of your choices.",
    "sourceStatute": "50-State General Election Consolidated Ballot Laws",
    "sourceUrl": "https://election-day-2026.vercel.app/primary-calendar-2026"
  },
  {
    "id": "college-student-dorm-out-of-state-voting",
    "category": "deadlines",
    "primaryQuery": "Can college students vote at school using their dorm address or at their parents’ home address?",
    "variations": [
      "college student where to vote",
      "vote at college or home state",
      "can i use dorm address to register to vote",
      "out of state college student voting rules",
      "does student id count as voter id",
      "away at college how do i vote 2026",
      "can i register to vote in my college town",
      "will voting at college affect my financial aid or parents taxes"
    ],
    "misspellings": [
      "colege student voting rules",
      "studnet id to vote",
      "dorm adress voter regestration",
      "vote at colledge or home"
    ],
    "directAnswer": "Under the U.S. Supreme Court ruling in Symm v. United States (1979), college students living away from home have the constitutional right to choose whether to register and vote at their campus/dorm address OR keep their registration at their parents’ home address (and vote by absentee mail ballot).",
    "inDepthAnswer": "You may only be registered and vote in one location, so pick whichever is most convenient or meaningful to you:\n1. Vote at Your Campus/Dorm Address: You can register in your college town using your residence hall or off-campus apartment street address. Registering to vote at college does NOT affect your federal financial aid (FAFSA), Pell Grants, or your parents’ ability to claim you as a dependent on their IRS tax return.\n2. Vote at Your Parents’ Home Address: Keep your hometown registration active and request an absentee mail-in ballot to be mailed directly to your campus mailbox.",
    "sourceStatute": "Symm v. United States, 439 U.S. 1105 (1979)",
    "sourceUrl": "https://election-day-2026.vercel.app/voter-eligibility-guide"
  },
  {
    "id": "felony-conviction-criminal-record-voting-rights",
    "category": "identification",
    "primaryQuery": "Can I vote in 2026 if I have a felony conviction, criminal record, or am on probation or parole?",
    "variations": [
      "can a felon vote in 2026",
      "have a felony can i vote",
      "voting on probation or parole",
      "can you vote with a misdemeanor",
      "in jail awaiting trial can i vote",
      "felon voting rights by state 2026",
      "how to restore voting rights after felony",
      "can i vote with a criminal record"
    ],
    "misspellings": [
      "can fellons vote in 2026",
      "felony record voteing rights",
      "probation can i still vote",
      "convicted felon voteing laws"
    ],
    "directAnswer": "In 48 states and D.C., citizens with a past felony conviction regain their right to vote! In 23 states, your right to vote is restored the moment you leave prison (even while on parole or probation), and in 15 more states upon completing parole/probation. Misdemeanor convictions never permanently remove voting rights.",
    "inDepthAnswer": "1. Misdemeanors & Pre-Trial Detention: In all 50 states, if you are in county jail awaiting trial (not convicted of a felony) or serving a misdemeanor sentence, you retain your full right to vote via absentee ballot.\n2. Never Lose Right to Vote (3 Jurisdictions): Maine, Vermont, and Washington D.C.\n3. Restored Immediately Upon Release from Prison (23 States): CA, CO, CT, HI, IL, IN, IA*, MD, MA, MI, MN, MT, NV, NH, NJ, NM, NY, ND, OH, OR, PA, RI, UT, WA.\n4. Restored After Completing Parole/Probation (15 States): AK, AR, GA, ID, KS, LA, MO, NE, NC, OK, SC, SD, TX, WV, WI. Simply re-register to vote once eligible!",
    "sourceStatute": "State Constitutional & Statutory Felony Enfranchisement Codes",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/felon-voting-rights"
  },
  {
    "id": "military-overseas-expat-fpca-voting",
    "category": "deadlines",
    "primaryQuery": "How do active-duty military members, military spouses, and U.S. citizens living overseas vote in 2026?",
    "variations": [
      "living abroad how to vote in us election",
      "military absentee ballot fpca 2026",
      "us citizen living in another country can i vote",
      "how to vote while deployed military",
      "fvap federal write in absentee ballot fwab",
      "expat voting last state lived in",
      "when do military ballots get sent out"
    ],
    "misspellings": [
      "miltary absentee ballot 2026",
      "overseas citezen how to vote",
      "abroad voting us eleciton",
      "deployed military voteing"
    ],
    "directAnswer": "Active-duty Uniformed Services members, eligible family members, and U.S. citizens living abroad vote under the Uniformed and Overseas Citizens Absentee Voting Act (UOCAVA, 52 U.S.C. § 20301) by submitting a single Federal Post Card Application (FPCA) at FVAP.gov.",
    "inDepthAnswer": "1. Submit the FPCA at FVAP.gov: The Federal Post Card Application acts as both your voter registration and your absentee ballot request for the 2026 calendar year. You vote in the last U.S. state and county where you were domiciled before moving overseas (even if you no longer own property there).\n2. 45-Day Ballot Transmission Rule: Under the MOVE Act (52 U.S.C. § 20302(a)(8)), states must transmit your ballot at least 45 days before Election Day (by Saturday, September 19, 2026) via email/online portal or mail.\n3. Emergency Backup Ballot: If your regular ballot hasn’t arrived by October, submit the Federal Write-In Absentee Ballot (FWAB) at FVAP.gov.",
    "sourceStatute": "52 U.S. Code § 20301 et seq. (UOCAVA)",
    "sourceUrl": "https://www.fvap.gov"
  },
  {
    "id": "homeless-unhoused-no-permanent-address-voting",
    "category": "identification",
    "primaryQuery": "Can I register and vote if I am homeless, unhoused, living in a shelter, or traveling in an RV?",
    "variations": [
      "no address how to register to vote",
      "can homeless people vote",
      "living in shelter or hotel can i vote",
      "full time rv traveler where to register to vote",
      "po box only no street address voter registration",
      "couch surfing where do i vote",
      "do you have to own a home or pay rent to vote"
    ],
    "misspellings": [
      "homless voter registration",
      "no permenant address can i vote",
      "living in car how to vote"
    ],
    "directAnswer": "Yes! You do NOT need a fixed house or apartment address to register and vote in any of the 50 states. Unhoused citizens can register using the address of a shelter, transitional housing, or a description/cross-street map of where they regularly sleep, plus a mailing address (like a shelter, post office General Delivery, or soup kitchen) to receive mail.",
    "inDepthAnswer": "Federal courts have repeatedly affirmed (e.g., Pitts v. Black, Collier v. Menzel) that lacking a traditional residential street address cannot strip an American citizen of the constitutional right to vote. On the National Mail Voter Registration Form (and state forms), there is a specific box to draw or describe the cross-streets, park, or location where you reside so the county can assign your voting precinct. Full-time RV travelers (\"workcampers\") may maintain domicile in their home county or establish domicile via a residential campground/mail-forwarding domicile in states like SD, TX, or FL.",
    "sourceStatute": "U.S. Constitution 14th Amendment & National Voter Registration Form Instructions",
    "sourceUrl": "https://www.eac.gov/voters/national-mail-voter-registration-form"
  },
  {
    "id": "curbside-voting-disabled-accessibility-assistance",
    "category": "logistics",
    "primaryQuery": "Can I vote from my car (Curbside Voting) or bring someone to help me in the voting booth if I have a disability?",
    "variations": [
      "vote from my car curbside voting",
      "cant walk or stand in line to vote",
      "can someone help me in the voting booth",
      "disabled voter assistance rules",
      "blind or low vision voting machine",
      "can my spouse go in the voting booth with me to help",
      "wheelchair accessible polling place rights"
    ],
    "misspellings": [
      "curb side voteing from car",
      "disabiled voter help at polls",
      "cant stand in line to vote"
    ],
    "directAnswer": "Yes! Under Section 208 of the Voting Rights Act (52 U.S.C. § 10508), any voter who needs assistance due to blindness, disability, or inability to read/write has the federal right to bring a person of their choice into the voting booth (anyone except their employer or union agent). Over 30 states also offer Curbside Voting directly at your car.",
    "inDepthAnswer": "1. Bringing a Helper into the Booth (52 U.S.C. § 10508): You may bring a family member, caregiver, or friend inside the voting booth to read or mark the ballot at your direction, or ask two bipartisan poll workers to assist you.\n2. Accessible Ballot-Marking Devices (HAVA § 301): Every polling place in America is required by federal law to have at least one ADA-accessible voting terminal equipped with audio headphones, tactile keypad/braille, and high-contrast zoom.\n3. Curbside Voting & Line-Skip Priority: If you cannot physically enter the building or stand in a long line due to mobility or medical needs, poll workers can bring your ballot out to your parked car or seat you at the front of the check-in table.",
    "sourceStatute": "52 U.S. Code § 10508 (VRA § 208) & 52 U.S. Code § 21081 (HAVA)",
    "sourceUrl": "https://www.ada.gov/topics/voting/"
  },
  {
    "id": "hospitalized-medical-emergency-election-day-ballot",
    "category": "logistics",
    "primaryQuery": "What if I am hospitalized or have a sudden medical emergency right before or on Election Day 2026?",
    "variations": [
      "in hospital on election day how to vote",
      "emergency absentee ballot medical emergency",
      "broke my leg cant go to polls today",
      "went into labor on election day can i vote",
      "family member in hospital how to get them a ballot",
      "sick with flu or covid on election day how to vote"
    ],
    "misspellings": [
      "hospitilized on election day vote",
      "emergancy absentee ballot 2026",
      "sick on election day how to vote"
    ],
    "directAnswer": "Over 40 states provide \"Emergency Absentee Ballot\" procedures for voters who experience an unexpected hospitalization, childbirth, or medical emergency after the standard absentee deadline—including on Election Day itself!",
    "inDepthAnswer": "If you are unexpectedly admitted to a hospital or confined to bed between Late October and November 3, 2026, call your County Board of Elections (or ask your hospital’s patient social worker/chaplain, as major hospitals coordinate Election Day ballot delivery). In most states, you can sign an Emergency Absentee Application authorizing a family member, spouse, or bipartisan county election team to hand-carry an emergency ballot from the county clerk’s office to your hospital bed and return it before polls close on November 3.",
    "sourceStatute": "State Emergency Absentee Voting Statutes (40+ States)",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/emergency-absentee-voting"
  },
  {
    "id": "write-in-candidate-rules-2026",
    "category": "ballot",
    "primaryQuery": "Can I write in any name on my ballot in 2026, and do write-in votes actually get counted?",
    "variations": [
      "how to write in a candidate on ballot",
      "do write in votes count",
      "can i write in anyone for congress or governor",
      "do i have to bubble the oval next to write in",
      "what states ban write in candidates",
      "certified write in candidate list 2026"
    ],
    "misspellings": [
      "rite in candidate on balot",
      "write in vote does it count",
      "how to write in name on ballot"
    ],
    "directAnswer": "In 33 states, a write-in candidate MUST file formal declaration paperwork with the Secretary of State before the election for their write-in votes to be tallied; in ~8 states (like PA, NJ, VT, WY, NH, OR, IA, AL) any eligible person written in is counted; and ~9 states (like NV, NM, OK, SD, SC, HI, LA) do not allow write-ins on general election ballots.",
    "inDepthAnswer": "If you cast a write-in vote in a state that permits them, follow two critical rules so the scanner reads your vote:\n1. Always fill in the bubble/oval or connect the arrow next to the \"Write-In\" line in addition to writing the candidate’s first and last name.\n2. Writing in fictional characters or uncertified names in states requiring pre-registration (like CA, TX, FL, NY, OH, GA, MI, AZ, NC) will simply be ignored for that specific contest—though the rest of your ballot will still count normally.",
    "sourceStatute": "State Write-In Candidate Filing & Tabulation Codes",
    "sourceUrl": "https://www.usa.gov/election-day"
  },
  {
    "id": "leave-ballot-blank-undervote-skip-races",
    "category": "ballot",
    "primaryQuery": "Do I have to vote for every single race on the ballot, or does my ballot still count if I skip some?",
    "variations": [
      "do i have to fill out the whole ballot",
      "if i leave a race blank does my ballot still count",
      "can i skip judges on my ballot",
      "what is an undervote",
      "only vote for governor and senate leave rest blank",
      "will scanner reject ballot if i skip a question"
    ],
    "misspellings": [
      "leave part of balot blank",
      "skip questions on voting ballot",
      "dont know who judges are can i skip"
    ],
    "directAnswer": "No, you do NOT have to vote in every race! Leaving a contest or ballot question blank (called an \"undervote\") is 100% legal in all 50 states, and every race you DO mark on your ballot will be counted normally.",
    "inDepthAnswer": "Voters frequently worry that if they don’t recognize the candidates for County Soil & Water Commissioner or local judicial retention, leaving those boxes blank might invalidate their entire ballot. In reality, optical scanners tabulate each contest independently. If you vote for U.S. Senator, U.S. House, and Governor and leave 10 other local races blank, your votes for Senator, House, and Governor are counted in full.",
    "sourceStatute": "Federal & State Voting System Tabulation Standards (HAVA § 301)",
    "sourceUrl": "https://www.eac.gov/voters"
  },
  {
    "id": "who-are-the-judges-on-my-ballot-retention",
    "category": "ballot",
    "primaryQuery": "What does \"Shall Judge [Name] be retained in office?\" mean on my ballot, and why is there no opponent?",
    "variations": [
      "what is a judicial retention election",
      "vote yes or no to retain judge meaning",
      "why do judges have no opponent on ballot",
      "how to know which judges to vote for",
      "nonpartisan judicial ballot races 2026",
      "what happens if a judge is not retained"
    ],
    "misspellings": [
      "judical retention vote yes or no",
      "retain judge on balot meaning",
      "who are the juges on my ballot"
    ],
    "directAnswer": "In 19 states (using the \"Missouri Plan\" merit-selection system), appellate and state supreme court judges do not run against an opponent. Instead, voters vote YES (keep the judge for another term) or NO (remove the judge and create a vacancy) in a Judicial Retention Election.",
    "inDepthAnswer": "States including California, Florida, Arizona, Colorado, Illinois, Indiana, Iowa, Kansas, Maryland, Missouri, Montana, Nebraska, New Mexico, Oklahoma, Pennsylvania, South Dakota, Tennessee, Utah, and Wyoming hold YES/NO retention votes so voters can hold appointed judges accountable without partisan campaigning. Before Election Day, you can look up nonpartisan State Bar Association Judicial Performance Evaluations (which rate each judge on integrity, legal knowledge, and courtroom temperament) on your state court or bar association website.",
    "sourceStatute": "State Constitutional Judicial Merit Selection & Retention Provisions",
    "sourceUrl": "https://www.ncsl.org/civil-and-criminal-justice/judicial-selection-an-interactive-map"
  },
  {
    "id": "ballot-measures-yes-or-no-confusing-wording",
    "category": "ballot",
    "primaryQuery": "Why are ballot propositions and constitutional amendments worded so confusingly, and what does YES vs. NO mean?",
    "variations": [
      "what does yes mean on ballot measure",
      "ballot proposition wording confusing",
      "what happens if i leave ballot measure blank",
      "constitutional amendment on ballot 2026",
      "citizen initiative vs legislative referendum",
      "does a blank vote on a constitutional amendment count as no"
    ],
    "misspellings": [
      "balot proposition yes or no",
      "confusing amendment on ballot",
      "propisition voting guide 2026"
    ],
    "directAnswer": "On almost all ballot measures, voting YES means you want to change current state law (or adopt the new constitutional amendment/bond), while voting NO means you want to keep the existing law exactly as it is (\"status quo\"). Look for the official \"Fiscal Impact Statement\" and \"Yes/No Summary\" in your State Voter Information Guide.",
    "inDepthAnswer": "The one exception to watch for is a \"Veto Referendum\" (common in CA, WA, OR, MA, OH, AZ), where citizens petition to overturn a law recently passed by the Legislature—on those questions, a YES vote often means \"Yes, keep the new law\" and NO means \"No, repeal the new law.\" Also note: in states like Illinois, Minnesota, and Wyoming, constitutional amendments require a majority of *all voters casting a ballot in the election* to pass, meaning leaving an amendment blank has the same mathematical effect as voting NO.",
    "sourceStatute": "State Initiative & Referendum Constitutional Provisions",
    "sourceUrl": "https://election-day-2026.vercel.app/news-and-pulse-2026"
  },
  {
    "id": "early-voting-vs-election-day-how-it-works",
    "category": "logistics",
    "primaryQuery": "How does Early In-Person Voting work in 2026, and do I need an excuse or appointment to vote early?",
    "variations": [
      "can anyone vote early in person",
      "do i need a reason to vote early",
      "when does early voting start and end 2026",
      "where do i go for early voting",
      "can i vote on saturday or sunday before election day",
      "is early voting the same as absentee",
      "states without early voting 2026"
    ],
    "misspellings": [
      "erly voting dates 2026",
      "vote erly in person near me",
      "early voteing hours weekend"
    ],
    "directAnswer": "In 47 states and Washington, D.C., ANY registered voter can vote early in person before Election Day with no excuse and no appointment required! Only 3 states (Alabama, Mississippi, and New Hampshire) do not offer no-excuse early in-person voting.",
    "inDepthAnswer": "Early in-person voting works just like voting on Election Day, except lines are usually much shorter and counties often allow you to vote at any County Early Voting Center (including weekend Saturday/Sunday hours in many states). Early voting windows start as early as 45 days before the election (September 18, 2026 in MN, SD, VA) to 10–17 days before the election (Mid-October 2026 in TX, FL, GA, NC, NY, CA) and typically conclude on the Friday, Saturday, or Monday right before Tuesday, November 3, 2026.",
    "sourceStatute": "NCSL Early In-Person Voting State Statutes",
    "sourceUrl": "https://election-day-2026.vercel.app/early-voting-2026"
  },
  {
    "id": "drop-off-someone-elses-mail-ballot-rules",
    "category": "deadlines",
    "primaryQuery": "Can I drop off or mail my spouse’s, parent’s, or neighbor’s absentee ballot for them?",
    "variations": [
      "can i put my wifes ballot in the drop box",
      "can i drop off my moms mail in ballot",
      "who is allowed to return my absentee ballot",
      "ballot collection laws by state",
      "can a caregiver return a mail ballot",
      "how many mail ballots can one person drop off"
    ],
    "misspellings": [
      "drop off someone elses balot",
      "turn in my husbands mail ballot",
      "absentie ballot drop off rules"
    ],
    "directAnswer": "In most states, an immediate family member (spouse, parent, child, sibling) or person living in the same household IS legally permitted to mail or drop off your sealed ballot, though several states require the helper to sign an authorization line on the outer return envelope.",
    "inDepthAnswer": "Over 30 states allow a designated family member, household member, or caregiver to return a voter’s sealed absentee ballot. However, states like Alabama (voter must mail or hand-deliver their own ballot except in medical emergencies), Texas, Florida, Georgia, Arizona, Ohio, Indiana, and North Carolina strictly limit ballot return to the voter or an immediate family/household caregiver and prohibit returning ballots for neighbors, friends, or co-workers. Always check the back of the outer return envelope—if there is a \"Designated Agent / Bearer Certification\" box, the family member dropping it off must print and sign their name there.",
    "sourceStatute": "NCSL Table 10: Ballot Collection & Return Laws",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/table-10-who-can-collect-and-return-an-absentee-ballot-other-than-the-voter"
  },
  {
    "id": "name-changed-marriage-divorce-voter-registration",
    "category": "identification",
    "primaryQuery": "I got married or divorced and changed my last name, but my voter registration still has my old name—can I vote?",
    "variations": [
      "changed last name marriage can i vote",
      "voter registration has maiden name id has married name",
      "hyphenated last name doesnt match poll book",
      "forgot to update name on voter registration",
      "bring marriage certificate to polls",
      "how to change name on voter registration"
    ],
    "misspellings": [
      "maiden name on voter regestration",
      "married name change can i vote",
      "diffrent last name on id to vote"
    ],
    "directAnswer": "Yes! Almost every state allows a registered voter whose legal name changed due to marriage, divorce, or court order to update their name at the polling place on Election Day by signing a Name Change Affidavit—especially if you bring your ID and marriage/name-change document.",
    "inDepthAnswer": "Even in strict Voter ID states (like Texas, Georgia, Wisconsin, and Indiana), state election rules include \"Substantially Similar Name\" provisions for voters whose maiden name, married name, or hyphenated surname differs between their driver’s license and the poll book. Poll workers will have you check a box or sign a Name Change Affidavit at the check-in table so your registration record is updated for future elections and you can cast a regular ballot immediately.",
    "sourceStatute": "State Voter Roll Name-Change & Substantially Similar Name Rules",
    "sourceUrl": "https://www.vote.gov"
  },
  {
    "id": "naturalized-us-citizen-first-time-voter",
    "category": "identification",
    "primaryQuery": "I recently became a naturalized U.S. citizen—how do I register and vote for the first time in 2026?",
    "variations": [
      "just became us citizen how to register to vote",
      "naturalization ceremony after registration deadline",
      "do i need to bring naturalization certificate to vote",
      "can green card holders or permanent residents vote",
      "first time voting as new citizen"
    ],
    "misspellings": [
      "new us citezen register to vote",
      "naturlized citizen voting rules",
      "can permenant resident vote"
    ],
    "directAnswer": "Congratulations! Once you take the Oath of Allegiance at your USCIS naturalization ceremony and receive your Certificate of Naturalization (Form N-550), you have the exact same constitutional right to register and vote as a native-born citizen. (Note: Green Card / Lawful Permanent Residents cannot vote in federal or state elections under 18 U.S.C. § 611).",
    "inDepthAnswer": "If your naturalization ceremony takes place before your state’s registration deadline, register online or via paper form right away (if your DMV records haven’t updated your citizenship status with the Secretary of State yet, you may register by paper form or in person at your County Clerk’s office). Furthermore, if you become a naturalized citizen AFTER your state’s normal October registration cutoff—even up to Election Day—many states (plus all 23 Same-Day Registration jurisdictions) have special statutory provisions allowing newly naturalized citizens to register in person at the County Board of Elections by presenting their Certificate of Naturalization.",
    "sourceStatute": "U.S. Constitution 14th & 15th Amendments & 18 U.S.C. § 611",
    "sourceUrl": "https://www.uscis.gov/citizenship/learners/important-information-for-new-citizens/register-to-vote"
  },
  {
    "id": "poll-worker-paid-how-to-apply-2026",
    "category": "work-rights",
    "primaryQuery": "Can I get paid to work at the polls as an Election Day Poll Worker in 2026, and how much does it pay?",
    "variations": [
      "how much do poll workers get paid 2026",
      "how to sign up to be a poll worker",
      "can high school students be poll workers",
      "do you get paid for election worker training",
      "election judge pay by county",
      "are poll workers volunteers or paid"
    ],
    "misspellings": [
      "apply to be a pol worker 2026",
      "election day worker pay",
      "paid to work at polling place"
    ],
    "directAnswer": "Yes! Poll workers (also called Election Judges, Clerks, or Inspectors) are PAID in all 50 states—typically earning between $150 and $350+ for working Election Day (plus paid training). Over 40 states also allow 16- and 17-year-old high school students to serve as paid Student Poll Workers.",
    "inDepthAnswer": "Local counties need over 700,000 poll workers nationwide for the November 3, 2026 Midterm Election, especially bilingual speakers and tech-comfortable workers to manage electronic poll books. Depending on your county, daily stipends or hourly wages range from $15/hour to $350 flat for Election Day (and many counties also hire for 1–2 weeks of paid Early Voting shifts). You can apply directly through your County Clerk/Board of Elections or the U.S. Election Assistance Commission portal at HelpAmericaVote.gov.",
    "sourceStatute": "U.S. Election Assistance Commission (HelpAmericaVote.gov)",
    "sourceUrl": "https://www.eac.gov/help-america-vote"
  },
  {
    "id": "voter-intimidation-harassment-hotline-866-our-vote",
    "category": "logistics",
    "primaryQuery": "What should I do if someone is harassing voters, blocking the polling place, or challenging my right to vote?",
    "variations": [
      "someone harassing people at polling place",
      "voter intimidation hotline number",
      "poll watcher vs poll worker rules",
      "who to call if turned away from voting",
      "866 our vote election protection phone number",
      "is it illegal to intimidate voters"
    ],
    "misspellings": [
      "voter intmidation at polls",
      "harasment at voting booth",
      "election protecion hotline"
    ],
    "directAnswer": "Voter intimidation is a serious federal felony under 18 U.S.C. § 594 and 52 U.S.C. § 10307(b). Report any harassment, aggressive questioning, or interference immediately to the Chief Precinct Election Judge inside the polling place and call the nonpartisan Election Protection Hotline at 1-866-OUR-VOTE (1-866-687-8683).",
    "inDepthAnswer": "Under federal law, no private citizen or partisan \"poll watcher\" is permitted to talk to voters inside the polling place, ask you for your ID, photograph your license plate, block the entrance, or aggressively challenge your eligibility. Only sworn, badged County Poll Workers may check you in. Bilingual legal hotlines are available on November 3, 2026:\n• English: 1-866-OUR-VOTE (1-866-687-8683)\n• Spanish: 1-888-VE-Y-VOTA (1-888-839-8682)\n• Asian Languages: 1-888-API-VOTE (1-888-274-8683)\n• Arabic: 1-844-YALLA-US (1-844-925-5287)",
    "sourceStatute": "18 U.S. Code § 594 & 52 U.S. Code § 10307(b) (Federal Voter Intimidation Ban)",
    "sourceUrl": "https://www.justice.gov/crt/voting-section"
  },
  {
    "id": "voter-roll-public-record-who-i-voted-for-secret",
    "category": "identification",
    "primaryQuery": "Is my vote secret? Can anyone look up who I voted for or see if I voted in 2026?",
    "variations": [
      "can people see who i voted for",
      "is who you vote for public record",
      "can my boss or spouse see who i voted for",
      "why does it show if i voted online",
      "does the barcode on my ballot track who i voted for",
      "is party registration public record"
    ],
    "misspellings": [
      "can someone look up who i voted for",
      "is my balot secret",
      "public record voting history"
    ],
    "directAnswer": "Who you vote for is 100% SECRET in all 50 states—it is physically and legally impossible for anyone (your spouse, boss, political campaigns, or the government) to look up which candidates you marked on your ballot!",
    "inDepthAnswer": "Here is the exact distinction between your public voter file and your secret ballot:\n1. What IS Recorded: Whether you checked in to vote in an election (e.g., \"Voted in Nov 2026 General: Yes\") and, in 31 states, which party primary ballot you requested in spring primaries.\n2. What is 100% SECRET Forever: Once your paper ballot leaves your hand (or is separated from your outer absentee declaration envelope during opening), your ballot contains ZERO link to your name or voter ID number. The barcode on a paper ballot only tells the optical scanner the *precinct layout/ballot style* (e.g., \"Precinct 14 layout\"), never the identity of the voter.",
    "sourceStatute": "50-State Constitutional Secret Ballot Guarantees",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/secrecy-of-the-ballot-and-ballot-selfies"
  },
  {
    "id": "us-territories-puerto-rico-guam-dc-voting-2026",
    "category": "ballot",
    "primaryQuery": "Do residents of Washington D.C., Puerto Rico, Guam, or the U.S. Virgin Islands vote in the 2026 Midterm Elections?",
    "variations": [
      "does puerto rico vote in us elections 2026",
      "does washington dc have a senator or representative",
      "can guam and us virgin islands vote for congress",
      "puerto rico resident living in florida or new york can i vote",
      "american samoa and northern mariana islands election 2026"
    ],
    "misspellings": [
      "porto rico vote in 2026 election",
      "washinton dc voting in midterms",
      "us teritories voting rules"
    ],
    "directAnswer": "Yes! On Tuesday, November 3, 2026, voters in Washington D.C., Guam, the U.S. Virgin Islands, American Samoa, and the Northern Mariana Islands elect their U.S. House Delegate, plus Governors (in Guam, USVI, CNMI) and Mayor/Council (in D.C.). Additionally, any U.S. citizen from Puerto Rico or a U.S. territory who moves to one of the 50 states can immediately register and vote for all federal and state offices!",
    "inDepthAnswer": "Because residents of Puerto Rico, Guam, the U.S. Virgin Islands, and the Northern Mariana Islands are U.S. citizens by birth, if they reside in any of the 50 states (for example, Florida, New York, Pennsylvania, or Texas), they have the full right to register and vote for U.S. Senate, U.S. House, and Governor in their state of residence. Residents living on the island/territory vote for their territorial Governor, Legislature, and non-voting U.S. House Delegate (or Resident Commissioner in Puerto Rico, elected to a 4-year term in 2024/2028).",
    "sourceStatute": "U.S. Constitution Art. IV, § 3 & Territorial Organic Acts",
    "sourceUrl": "https://www.usa.gov/voting-political-party"
  },
  {
    "id": "when-will-we-know-who-won-2026-election-results",
    "category": "logistics",
    "primaryQuery": "What time will 2026 election results be called on Election Night, and why do some states take days to count?",
    "variations": [
      "when will we know who won the 2026 election",
      "what time do election results start coming in",
      "why does california and arizona take so long to count votes",
      "why cant states count mail ballots before election day",
      "when are 2026 election results officially certified",
      "what is a red mirage or blue shift election night"
    ],
    "misspellings": [
      "when do eleciton results come out",
      "who won the 2026 midturm election",
      "counting mail in balots time"
    ],
    "directAnswer": "First results begin reporting at 7:00 PM ET (6:00 PM CT) on Tuesday, November 3, 2026 as polls close in Georgia, Indiana, Kentucky, South Carolina, Vermont, and Virginia. However, close U.S. House and Senate races in states like PA, WI, AZ, NV, and CA can take 2 to 7 days because state laws govern when mail-in ballots can be opened (\"pre-canvassed\") and when postmarked ballots arrive.",
    "inDepthAnswer": "Why do some states report 95% of results by 10:00 PM on Election Night while others take several days?\n1. Pre-Processing (\"Pre-Canvassing\") Laws: States like Florida and North Carolina allow county boards to verify signatures, open envelopes, and scan mail ballots weeks before Election Day (hitting \"tabulate\" at 7:00 PM on Nov 3). In contrast, Pennsylvania and Wisconsin prohibit election workers from even opening a single mail ballot envelope until 7:00 AM on Election Day morning.\n2. Late-Arriving Mail Drops & Postmarks: In Arizona and Nevada, hundreds of thousands of voters drop off mail ballots at polling places on Election Day itself, which must undergo signature verification on Wednesday/Thursday. In California and Washington, ballots postmarked by Nov 3 are legally counted if they arrive up to 7 days later.",
    "sourceStatute": "NCSL Table 16: When Absentee/Mail Ballot Processing and Counting Can Begin",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/table-16-when-absentee-mail-ballot-processing-and-counting-can-begin"
  },
  {
    "id": "recount-laws-automatic-margin-runoff-election",
    "category": "ballot",
    "primaryQuery": "What triggers an automatic election recount or a December runoff election in 2026?",
    "variations": [
      "how close does an election have to be for a recount",
      "which states have runoff elections if nobody gets 50 percent",
      "georgia and louisiana runoff election dates 2026",
      "who pays for an election recount",
      "what is ranked choice voting in maine and alaska"
    ],
    "misspellings": [
      "automatic recunt margin election",
      "run off election 2026 georgia",
      "less than 50 percent vote runoff"
    ],
    "directAnswer": "In 21 states, an automatic taxpayer-funded recount is triggered when the margin between the top two candidates is ≤ 0.5% (or ≤ 0.25% to 1.0% depending on the state). Furthermore, in Georgia (and Louisiana for applicable races), if no candidate wins at least 50% + 1 vote on November 3, 2026, the top two candidates advance to a December 2026 General Election Runoff.",
    "inDepthAnswer": "1. Georgia General Election Runoff (Tuesday, December 1, 2026): Under Georgia Code § 21-2-501, a candidate for U.S. Senate, U.S. House, or Governor must win an absolute majority (>50.0%) of the vote on November 3. If a third-party candidate holds both major-party nominees under 50%, a statewide runoff is held 4 weeks later on December 1, 2026.\n2. Automatic Recounts: Key battleground recount thresholds include Pennsylvania (≤ 0.5% statewide), Arizona (≤ 0.5%), Michigan (≤ 2,000 votes statewide), Florida (≤ 0.5% machine recount / ≤ 0.25% manual recount), and Georgia (≤ 0.5% upon candidate request).",
    "sourceStatute": "O.C.G.A. § 21-2-501 & NCSL Automatic Recount Threshold Statutes",
    "sourceUrl": "https://www.ncsl.org/elections-and-campaigns/election-recounts"
  },
  {
    "id": "jury-duty-from-voter-registration-myth",
    "category": "deadlines",
    "primaryQuery": "If I register to vote in 2026, will it make me get called for Jury Duty?",
    "variations": [
      "does registering to vote put you on jury duty",
      "if i dont register to vote can i avoid jury duty",
      "how do courts pick people for jury duty",
      "dmv driver license jury duty list"
    ],
    "misspellings": [
      "regester to vote jury duty",
      "avoid jurry duty by not voting",
      "voter roll jury summons"
    ],
    "directAnswer": "Skipping voter registration will NOT keep you off Jury Duty! Modern federal and state courts pull jury pools from state DMV driver’s license records, state ID cards, state income tax filings, and unemployment/utility records in addition to voter rolls.",
    "inDepthAnswer": "Decades ago, some county courts relied solely on voter registration lists to summon jurors, creating an urban legend that not registering to vote avoids jury service. Today, under state Jury Selection and Service Acts across the country, courts merge DMV driver’s license databases, state non-driver ID lists, and state tax rolls into a master jury wheel. If you have a driver’s license, state ID, or file taxes, you are already in the jury pool—so never give up your right to vote because of the jury duty myth.",
    "sourceStatute": "28 U.S. Code § 1863 & State Master Jury Wheel Statutes",
    "sourceUrl": "https://www.uscourts.gov/services-forms/jury-service/learn-about-jury-service"
  },
  {
    "id": "ride-to-the-polls-free-uber-lyft-transit-2026",
    "category": "logistics",
    "primaryQuery": "How can I get a free ride to the polls on Election Day 2026 (Uber, Lyft, public transit, or volunteer rides)?",
    "variations": [
      "free ride to vote election day 2026",
      "does uber or lyft have election day discount codes",
      "is the bus or subway free on election day",
      "i dont have a car how do i get to my polling place",
      "rideshare to the polls 2026"
    ],
    "misspellings": [
      "free ride to poling place",
      "uber lyft code election day 2026",
      "bus free on voteing day"
    ],
    "directAnswer": "On Tuesday, November 3, 2026, hundreds of major metropolitan public transit agencies offer 100% fare-free bus and rail rides all day, Lyft and Uber offer discounted Election Day ride-to-the-polls promo codes (typically 50% off up to $10 via RideUnited / NAACP / Voto Latino), and local civic groups provide free volunteer carpools.",
    "inDepthAnswer": "If you lack transportation to reach your polling place or drop box on November 3, 2026:\n1. Public Transit: Check your city metro transit agency—systems in Los Angeles (LA Metro), Houston (METRO), Dallas (DART), Atlanta (MARTA), Charlotte (CATS), Detroit, Minneapolis, and dozens of counties make buses and light rail completely free on Election Day.\n2. Rideshare & United Way 211: Dial 2-1-1 or visit Rideshare2Vote.com and Lyft’s Voting Access portal in late October 2026 to claim free or 50%-off rideshare vouchers to and from your polling place.",
    "sourceStatute": "APTA Public Transit Election Access & Civic Rideshare Programs",
    "sourceUrl": "https://www.vote.gov"
  },
  {
    "id": "spanish-bilingual-ballot-translator-polling-place",
    "category": "logistics",
    "primaryQuery": "Can I get a ballot in Spanish (or another language) or bring a family member to translate for me at the polls?",
    "variations": [
      "can i bring a translator to the voting booth",
      "como votar en las elecciones 2026",
      "where to get a spanish sample ballot",
      "can my child translate the ballot for me",
      "voting rights act section 203 bilingual ballot",
      "chinese vietnamese tagalog ballot translation"
    ],
    "misspellings": [
      "spanish balot at polling place",
      "bring translater to vote",
      "bilingul ballot election 2026"
    ],
    "directAnswer": "Yes! In all 50 states, Section 208 of the federal Voting Rights Act (52 U.S.C. § 10508) guarantees your right to bring ANY person of your choice (such as an adult child, relative, or friend) into the voting booth to translate the ballot for you. Additionally, over 330 counties provide official bilingual ballots under VRA Section 203.",
    "inDepthAnswer": "Under Voting Rights Act Section 203 (52 U.S.C. § 10503), counties and states with significant Spanish, Asian (Chinese, Vietnamese, Korean, Tagalog), or Native American language populations are legally mandated to provide full bilingual paper/electronic ballots, sample ballots, and bilingual poll workers at the precinct. Even if your county is not covered by Section 203, federal law (VRA Section 208) allows you to bring a family member or translator of your choice into the voting booth in every single precinct in America (as long as the helper is not your employer or union representative).",
    "sourceStatute": "52 U.S. Code § 10503 (VRA § 203) & 52 U.S. Code § 10508 (VRA § 208)",
    "sourceUrl": "https://www.justice.gov/crt/about-language-minority-voting-rights"
  },
  {
    "id": "caveman-shorthand-misspelling-master-index",
    "category": "misspellings",
    "primaryQuery": "Quick Reference for Shorthand Search Terms, Voice Queries & Common Misspellings (Eleciton, Voteing, Absentie, Balot)",
    "variations": [
      "when vote 2026",
      "where i vote today",
      "no id can vote",
      "poll open time",
      "boss pay me to vote",
      "mail ballot need stamp",
      "moved where vote",
      "who on ballot 2026",
      "register vote deadline",
      "early vote near me",
      "what time voting stop",
      "can felon vote",
      "forgot voter card can i vote"
    ],
    "misspellings": [
      "eleciton day 2026",
      "electon day 2026",
      "elction day 2026",
      "voteing near me",
      "absentie balot",
      "provisonal balot",
      "regester to vote",
      "midturm elections 2026",
      "novemeber 3 2026"
    ],
    "directAnswer": "Whether you search in quick shorthand (\"when vote 2026\", \"no id can vote\", \"moved where vote\") or with mobile keyboard typos (\"eleciton day\", \"absentie balot\", \"provisonal ballot\", \"regester to vote\"), here are the 5 essential facts for the Tuesday, November 3, 2026 U.S. Midterm Election.",
    "inDepthAnswer": "1. Date & Hours (\"when vote 2026\" / \"eleciton day\"): Tuesday, November 3, 2026. Polls open 6:00–8:00 AM and close 7:00–9:00 PM local time.\n2. Missing ID (\"no id can vote\" / \"provisonal balot\"): 14 states + D.C. require no ID at the booth; in all other states you can sign a Reasonable Impediment Affidavit or cast a HAVA Provisional Ballot (52 U.S.C. § 21082).\n3. Moved Recently (\"moved where vote\"): If you moved within the same county or live in a Same-Day Registration state (23 jurisdictions), you can update your address and vote.\n4. Absentee & Stamps (\"absentie balot\" / \"mail ballot need stamp\"): USPS delivers all ballots even without a stamp (POM § 171), or you can surrender an unvoted mail ballot at the polls to vote in person.\n5. Work Leave (\"boss pay me to vote\"): 29 states mandate time off work to vote (22 paid).",
    "sourceStatute": "2 U.S.C. § 7, 52 U.S.C. § 21082 & 50-State Election Codes",
    "sourceUrl": "https://election-day-2026.vercel.app/ask"
  }
];
