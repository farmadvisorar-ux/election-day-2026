// Auto-generated 2026 Major U.S. Cities Election & Split-County Dataset (153 Cities across all 50 States + D.C.)

export interface CityCountyLink {
  name: string;
  slug: string;
}

export interface CityElectionData2026 {
  slug: string;
  cityName: string;
  stateSlug: string;
  stateAbbr: string;
  stateName: string;
  population: number;
  counties: CityCountyLink[];
  isSplitCounty: boolean;
  splitCountyNote: string;
  electionAuthorityName: string;
  votingSystemType: string;
  transitAgency: string;
  electionDayTransitPolicy: string;
  majorCongressionalDistricts: string[];
}

export const CITIES_2026_LIST: CityElectionData2026[] = [
  {
    "slug": "new-york-city-ny",
    "cityName": "New York City",
    "stateSlug": "new-york",
    "stateAbbr": "NY",
    "stateName": "New York",
    "population": 8258035,
    "counties": [
      {
        "name": "New York County (Manhattan)",
        "slug": "new-york-county"
      },
      {
        "name": "Kings County (Brooklyn)",
        "slug": "kings-county"
      },
      {
        "name": "Queens County (Queens)",
        "slug": "queens-county"
      },
      {
        "name": "Bronx County (The Bronx)",
        "slug": "bronx-county"
      },
      {
        "name": "Richmond County (Staten Island)",
        "slug": "richmond-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "New York City is uniquely divided into 5 coextensive counties (boroughs): Manhattan (New York County), Brooklyn (Kings County), Queens (Queens County), The Bronx (Bronx County), and Staten Island (Richmond County). All 5 boroughs are administered centrally by the NYC Board of Elections (NYCBOE), but you MUST vote at your assigned Early Voting site or Election Day poll site within your home borough.",
    "electionAuthorityName": "Board of Elections in the City of New York (NYCBOE)",
    "votingSystemType": "Assigned Poll Site & Borough Early Voting Center",
    "transitAgency": "MTA (NYC Subway, Bus, LIRR, Metro-North & Staten Island Ferry)",
    "electionDayTransitPolicy": "The Staten Island Ferry is 100% free 24/7; MTA Access-A-Ride paratransit provides scheduled curb-to-curb polling place transport, and Lyft/Uber offer discounted Election Day promo codes across all 5 boroughs.",
    "majorCongressionalDistricts": [
      "NY-05",
      "NY-06",
      "NY-07",
      "NY-08",
      "NY-09",
      "NY-10",
      "NY-11",
      "NY-12",
      "NY-13",
      "NY-14",
      "NY-15"
    ]
  },
  {
    "slug": "los-angeles-ca",
    "cityName": "Los Angeles",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 3820914,
    "counties": [
      {
        "name": "Los Angeles County",
        "slug": "los-angeles-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "All of the City of Los Angeles lies within Los Angeles County, which operates the Voter's Choice Act model—meaning any registered LA voter can cast a ballot in person at ANY of the 600+ LA County Vote Centers regardless of neighborhood.",
    "electionAuthorityName": "Los Angeles County Registrar-Recorder/County Clerk (LAVote.gov)",
    "votingSystemType": "Countywide Vote Center Model (Vote Anywhere in LA County) + Universal Mail Ballot",
    "transitAgency": "LA Metro (Metro Rail, Metro Bus, Metro Bike Share & Metro Micro)",
    "electionDayTransitPolicy": "LA Metro provides 100% FREE rides on all Metro Buses, Metro Rail lines, Metro Micro, and free 30-minute Metro Bike Share rides on Election Day (Tuesday, November 3, 2026).",
    "majorCongressionalDistricts": [
      "CA-28",
      "CA-29",
      "CA-30",
      "CA-32",
      "CA-34",
      "CA-36",
      "CA-37",
      "CA-43",
      "CA-44"
    ]
  },
  {
    "slug": "chicago-il",
    "cityName": "Chicago",
    "stateSlug": "illinois",
    "stateAbbr": "IL",
    "stateName": "Illinois",
    "population": 2664452,
    "counties": [
      {
        "name": "Cook County (City of Chicago Jurisdiction)",
        "slug": "cook-county"
      },
      {
        "name": "DuPage County (O'Hare Corridor Edge)",
        "slug": "dupage-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "CRITICAL CHICAGO DISTINCTION: Although Chicago is in Cook County, elections inside the City of Chicago limits are administered by the Chicago Board of Election Commissioners (chicagoelections.gov), whereas suburban Cook County is administered separately by the Cook County Clerk. Chicago voters can use any of the 50 Ward Early Voting Supersites!",
    "electionAuthorityName": "Chicago Board of Election Commissioners (ChicagoElections.gov)",
    "votingSystemType": "50 Ward Early Voting Sites (Open on Election Day too) + Assigned Precincts",
    "transitAgency": "CTA (Chicago Transit Authority 'L' Trains & Buses), Metra & Pace",
    "electionDayTransitPolicy": "CTA and Pace coordinate ADA paratransit polling rides and direct bus routes to all 50 Ward Early Voting sites and downtown Loop Supersite (191 N. Clark).",
    "majorCongressionalDistricts": [
      "IL-01",
      "IL-02",
      "IL-03",
      "IL-04",
      "IL-05",
      "IL-07",
      "IL-09"
    ]
  },
  {
    "slug": "houston-tx",
    "cityName": "Houston",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 2314157,
    "counties": [
      {
        "name": "Harris County",
        "slug": "harris-county"
      },
      {
        "name": "Fort Bend County",
        "slug": "fort-bend-county"
      },
      {
        "name": "Montgomery County",
        "slug": "montgomery-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Houston spans 3 counties! Over 90% of Houston is in Harris County (HoustonVotes.com), which allows Countywide Polling Place voting at any Harris County Vote Center. However, southwest Houston neighborhoods in Fort Bend County must vote at Fort Bend County Vote Centers, and Kingwood/northern portions in Montgomery County must vote in Montgomery County.",
    "electionAuthorityName": "Harris County Clerk Elections Department (HarrisVotes.com) + Fort Bend & Montgomery Elections",
    "votingSystemType": "Countywide Vote Centers (Harris & Fort Bend) / Assigned Precincts (Montgomery on Election Day)",
    "transitAgency": "METRO Houston (METRORail, Local Bus, Park & Ride & METROLift)",
    "electionDayTransitPolicy": "METRO Houston traditionally offers FREE rides to the polls on Local Bus, METRORail, and METROLift paratransit during Early Voting and on Election Day when voters show their Voter Registration Card or I Voted sticker.",
    "majorCongressionalDistricts": [
      "TX-02",
      "TX-07",
      "TX-08",
      "TX-09",
      "TX-18",
      "TX-22",
      "TX-29",
      "TX-36",
      "TX-38"
    ]
  },
  {
    "slug": "phoenix-az",
    "cityName": "Phoenix",
    "stateSlug": "arizona",
    "stateAbbr": "AZ",
    "stateName": "Arizona",
    "population": 1650070,
    "counties": [
      {
        "name": "Maricopa County",
        "slug": "maricopa-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Phoenix lies entirely within Maricopa County. Maricopa County uses a 100% Vote Anywhere Center model (BeBallotReady.Vote)—you can cast a regular ballot or drop off your early mail ballot (in its signed green affidavit envelope) at ANY Maricopa County Vote Center.",
    "electionAuthorityName": "Maricopa County Elections Department (BeBallotReady.Vote)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Maricopa County) + Active Early Voting List (AEVL)",
    "transitAgency": "Valley Metro (Valley Metro Rail, Bus & Dial-a-Ride)",
    "electionDayTransitPolicy": "Valley Metro coordinates transit stops directly adjacent to major Maricopa County Vote Centers across Downtown, Maryvale, Camelback, and South Phoenix.",
    "majorCongressionalDistricts": [
      "AZ-01",
      "AZ-03",
      "AZ-04",
      "AZ-08",
      "AZ-09"
    ]
  },
  {
    "slug": "philadelphia-pa",
    "cityName": "Philadelphia",
    "stateSlug": "pennsylvania",
    "stateAbbr": "PA",
    "stateName": "Pennsylvania",
    "population": 1550542,
    "counties": [
      {
        "name": "Philadelphia County",
        "slug": "philadelphia-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "The City of Philadelphia and Philadelphia County are consolidated and share identical boundaries. On Election Day, you must vote at your assigned Ward & Division polling place. For Mail-In Ballots, ALWAYS seal your ballot inside the yellow \"Official Election Ballot\" secrecy envelope FIRST, then sign and date the outer return envelope!",
    "electionAuthorityName": "Philadelphia City Commissioners (Vote.Phila.gov)",
    "votingSystemType": "Assigned Ward/Division Polling Places + Satellite Election Offices & Official 24/7 Drop Boxes",
    "transitAgency": "SEPTA (Market-Frankford Line, Broad Street Line, Trolleys, Buses & Regional Rail)",
    "electionDayTransitPolicy": "SEPTA Key Senior Ride Free program and CCT Connect ADA paratransit operate across all 66 Philadelphia wards; Satellite Election Offices offer one-stop in-person mail ballot application, printing, and return.",
    "majorCongressionalDistricts": [
      "PA-02",
      "PA-03",
      "PA-05"
    ]
  },
  {
    "slug": "san-antonio-tx",
    "cityName": "San Antonio",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 1495295,
    "counties": [
      {
        "name": "Bexar County",
        "slug": "bexar-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "San Antonio voters registered in Bexar County can vote at ANY of the 300+ Bexar County Election Day Vote Centers—you are not restricted to a single neighborhood precinct.",
    "electionAuthorityName": "Bexar County Elections Department (Bexar.org/Elections)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Bexar County)",
    "transitAgency": "VIA Metropolitan Transit (VIA Bus, Primo & VIAtrans)",
    "electionDayTransitPolicy": "VIA Metropolitan Transit provides FREE Fare-Free Election Day rides on all regular bus, VIA Link, and VIAtrans services to voters presenting a valid Texas Voter Registration Card or Photo ID.",
    "majorCongressionalDistricts": [
      "TX-20",
      "TX-21",
      "TX-23",
      "TX-28",
      "TX-35"
    ]
  },
  {
    "slug": "san-diego-ca",
    "cityName": "San Diego",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 1388320,
    "counties": [
      {
        "name": "San Diego County",
        "slug": "san-diego-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "San Diego County operates under the California Voter's Choice Act: every registered voter automatically receives a mail ballot 29 days before Election Day and may vote in person at ANY of the 200+ San Diego County Vote Centers.",
    "electionAuthorityName": "San Diego County Registrar of Voters (SDVote.com)",
    "votingSystemType": "Countywide Vote Centers + Universal Vote-by-Mail & 140+ Official Ballot Drop Boxes",
    "transitAgency": "San Diego MTS (Trolley & Bus) & North County Transit District (NCTD)",
    "electionDayTransitPolicy": "San Diego MTS PRONTO transit system serves all major Vote Centers and ballot drop box hubs.",
    "majorCongressionalDistricts": [
      "CA-48",
      "CA-49",
      "CA-50",
      "CA-51",
      "CA-52"
    ]
  },
  {
    "slug": "dallas-tx",
    "cityName": "Dallas",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 1302868,
    "counties": [
      {
        "name": "Dallas County",
        "slug": "dallas-county"
      },
      {
        "name": "Collin County",
        "slug": "collin-county"
      },
      {
        "name": "Denton County",
        "slug": "denton-county"
      },
      {
        "name": "Kaufman County",
        "slug": "kaufman-county"
      },
      {
        "name": "Rockwall County",
        "slug": "rockwall-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Dallas spans 5 counties! While most Dallas residents vote through DallasCountyVotes.org (which uses Countywide Vote Centers), Far North Dallas residents living inside Collin County or Denton County boundaries MUST vote at a Collin County or Denton County polling location.",
    "electionAuthorityName": "Dallas County Elections Department (DallasCountyVotes.org) + Collin/Denton Elections",
    "votingSystemType": "Countywide Vote Centers (Dallas, Collin, Kaufman & Rockwall) / Precinct-Specific on Election Day in Denton County",
    "transitAgency": "DART (Dallas Area Rapid Transit Light Rail, Bus, GoLink & Streetcar)",
    "electionDayTransitPolicy": "DART provides FREE rides on all DART buses, light rail, GoLink, Dallas Streetcar, and Paratransit on Election Day (Nov 3, 2026) and during Texas Early Voting when showing a Voter Registration card.",
    "majorCongressionalDistricts": [
      "TX-03",
      "TX-05",
      "TX-24",
      "TX-30",
      "TX-32",
      "TX-33"
    ]
  },
  {
    "slug": "jacksonville-fl",
    "cityName": "Jacksonville",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 985843,
    "counties": [
      {
        "name": "Duval County",
        "slug": "duval-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Jacksonville and Duval County have a consolidated city-county government. During Early Voting, you may vote at any of the 20+ Duval County Early Voting sites; on Election Day (Nov 3, 2026), Florida law requires voting at your specific assigned Duval County precinct.",
    "electionAuthorityName": "Duval County Supervisor of Elections (DuvalElections.com)",
    "votingSystemType": "Countywide Early Voting Sites / Assigned Precinct Polling Place on Election Day",
    "transitAgency": "JTA (Jacksonville Transportation Authority Bus, Skyway & First Coast Flyer)",
    "electionDayTransitPolicy": "JTA Skyway in Downtown Jacksonville is always free, and JTA coordinates routes to main Duval County Early Voting library locations.",
    "majorCongressionalDistricts": [
      "FL-04",
      "FL-05"
    ]
  },
  {
    "slug": "austin-tx",
    "cityName": "Austin",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 979882,
    "counties": [
      {
        "name": "Travis County",
        "slug": "travis-county"
      },
      {
        "name": "Williamson County",
        "slug": "williamson-county"
      },
      {
        "name": "Hays County",
        "slug": "hays-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Austin spans 3 counties: Travis County (VoteTravis.gov), Williamson County in North Austin/Lakeline/Avery Ranch (Wilco.org/Elections), and a southern portion in Hays County. All 3 counties use Countywide Vote Centers, meaning you can vote anywhere within YOUR registered county, but a Williamson County Austin voter cannot vote at a Travis County Vote Center.",
    "electionAuthorityName": "Travis County Clerk Elections Division (VoteTravis.gov) + Williamson & Hays County Elections",
    "votingSystemType": "Countywide Vote Centers within your registered county (Travis, Williamson, or Hays)",
    "transitAgency": "CapMetro (MetroBus, MetroRapid, MetroRail & Pickup)",
    "electionDayTransitPolicy": "CapMetro provides 100% Fare-Free service on all MetroBus, MetroRapid, MetroRail, and CapMetro Access lines on Election Day.",
    "majorCongressionalDistricts": [
      "TX-10",
      "TX-21",
      "TX-31",
      "TX-35",
      "TX-37"
    ]
  },
  {
    "slug": "fort-worth-tx",
    "cityName": "Fort Worth",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 978468,
    "counties": [
      {
        "name": "Tarrant County",
        "slug": "tarrant-county"
      },
      {
        "name": "Denton County",
        "slug": "denton-county"
      },
      {
        "name": "Parker County",
        "slug": "parker-county"
      },
      {
        "name": "Wise County",
        "slug": "wise-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "While 95%+ of Fort Worth is in Tarrant County (which uses Countywide Vote Centers so Tarrant voters can vote anywhere in Tarrant County), rapid northern growth around Alliance/Sendera Ranch extends into Denton County, which requires voting in Denton County.",
    "electionAuthorityName": "Tarrant County Elections Administration (TarrantCounty.com/Elections)",
    "votingSystemType": "Countywide Vote Centers (Tarrant & Parker) / Precinct on Election Day (Denton)",
    "transitAgency": "Trinity Metro (Bus, TEXRail, Trinity Railway Express & ZIPZONE)",
    "electionDayTransitPolicy": "Trinity Metro offers free rides to polling locations on Election Day and during Early Voting on buses, TEXRail, and Trinity Metro Bikes with a voter ID or registration card.",
    "majorCongressionalDistricts": [
      "TX-06",
      "TX-12",
      "TX-24",
      "TX-25",
      "TX-26",
      "TX-33"
    ]
  },
  {
    "slug": "san-jose-ca",
    "cityName": "San Jose",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 969655,
    "counties": [
      {
        "name": "Santa Clara County",
        "slug": "santa-clara-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "San Jose voters are served within Santa Clara County via Santa Clara County Registrar of Voters (SCCVote.org — 1555 Berger Dr). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Santa Clara County Registrar of Voters (SCCVote.org — 1555 Berger Dr)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Santa Clara County) + Universal Mail Ballot & 100+ Drop Boxes",
    "transitAgency": "VTA (Santa Clara Valley Transportation Authority Light Rail & Bus — Free Rides on Election Day!)",
    "electionDayTransitPolicy": "VTA (Santa Clara Valley Transportation Authority Light Rail & Bus — Free Rides on Election Day!) provides public transit service connecting San Jose neighborhoods with major Santa Clara County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-16",
      "CA-17",
      "CA-18",
      "CA-19"
    ]
  },
  {
    "slug": "columbus-oh",
    "cityName": "Columbus",
    "stateSlug": "ohio",
    "stateAbbr": "OH",
    "stateName": "Ohio",
    "population": 913175,
    "counties": [
      {
        "name": "Franklin County",
        "slug": "franklin-county"
      },
      {
        "name": "Delaware County",
        "slug": "delaware-county"
      },
      {
        "name": "Fairfield County",
        "slug": "fairfield-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Columbus lies primarily in Franklin County, with northern neighborhoods in Delaware County and southeastern neighborhoods in Fairfield County. Under Ohio law, each county has EXACTLY ONE Early In-Person Voting Center (1700 Morse Rd for Franklin County), and on Election Day you must vote at your assigned neighborhood polling location.",
    "electionAuthorityName": "Franklin County Board of Elections (Vote.FranklinCountyOhio.gov)",
    "votingSystemType": "Single County Early Voting Center + Assigned Precinct on Election Day (Strict Photo ID Required)",
    "transitAgency": "COTA (Central Ohio Transit Authority)",
    "electionDayTransitPolicy": "COTA provides 100% Fare-Free transit across all fixed bus routes, COTA//Plus, and Mainstream paratransit on Election Day (November 3, 2026) and connects directly to the Morse Road Early Voting Center.",
    "majorCongressionalDistricts": [
      "OH-03",
      "OH-12",
      "OH-15"
    ]
  },
  {
    "slug": "charlotte-nc",
    "cityName": "Charlotte",
    "stateSlug": "north-carolina",
    "stateAbbr": "NC",
    "stateName": "North Carolina",
    "population": 911311,
    "counties": [
      {
        "name": "Mecklenburg County",
        "slug": "mecklenburg-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Charlotte is in Mecklenburg County. Take advantage of North Carolina's 17-day Early Voting period (Oct 15–Oct 31, 2026): during Early Voting, you can vote AND use Same-Day Voter Registration at ANY of the 33 Mecklenburg County Early Voting sites! On Election Day (Nov 3), Same-Day Registration is NOT available and you must vote at your assigned precinct.",
    "electionAuthorityName": "Mecklenburg County Board of Elections (MeckBOE.org)",
    "votingSystemType": "Vote-Anywhere + Same-Day Registration during Early Voting / Assigned Precinct on Election Day",
    "transitAgency": "CATS (Charlotte Area Transit System LYNX Light Rail, Streetcar & Bus)",
    "electionDayTransitPolicy": "CATS coordinates transit access to Hal Marshall Center and all 33 Mecklenburg Early Voting locations.",
    "majorCongressionalDistricts": [
      "NC-08",
      "NC-12",
      "NC-14"
    ]
  },
  {
    "slug": "indianapolis-in",
    "cityName": "Indianapolis",
    "stateSlug": "indiana",
    "stateAbbr": "IN",
    "stateName": "Indiana",
    "population": 879293,
    "counties": [
      {
        "name": "Marion County",
        "slug": "marion-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Indianapolis and Marion County are consolidated (Unigov). Marion County is a Vote Center County—any registered Marion County voter can cast a ballot at ANY of the ~185 Election Day Vote Centers across Indianapolis! Remember: Indiana polls close at 6:00 PM ET (earliest in the nation).",
    "electionAuthorityName": "Marion County Election Board (Vote.Indy.gov)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Marion County) • Polls Close 6:00 PM ET",
    "transitAgency": "IndyGo (Red Line, Purple Line, Bus & Open Door Paratransit)",
    "electionDayTransitPolicy": "IndyGo provides FREE fares across all fixed routes, BRT (Red/Purple Line), and Open Door paratransit on Election Day (Tuesday, November 3, 2026).",
    "majorCongressionalDistricts": [
      "IN-06",
      "IN-07"
    ]
  },
  {
    "slug": "san-francisco-ca",
    "cityName": "San Francisco",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 808988,
    "counties": [
      {
        "name": "San Francisco County",
        "slug": "san-francisco-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "The City and County of San Francisco are a single consolidated jurisdiction. All registered voters receive a mail ballot automatically, can use 37+ official 24/7 drop boxes, vote early at City Hall (1 Dr Carlton B Goodlett Pl), or vote at their neighborhood polling place on Nov 3.",
    "electionAuthorityName": "San Francisco Department of Elections (SFElections.gov)",
    "votingSystemType": "Universal Vote-by-Mail + City Hall Early Voting Center + 500+ Neighborhood Polling Places",
    "transitAgency": "SFMTA Muni (Muni Metro, Bus, Cable Car) & BART",
    "electionDayTransitPolicy": "SFMTA Muni serves all 500+ neighborhood polling sites and City Hall Voting Center.",
    "majorCongressionalDistricts": [
      "CA-11",
      "CA-15"
    ]
  },
  {
    "slug": "seattle-wa",
    "cityName": "Seattle",
    "stateSlug": "washington",
    "stateAbbr": "WA",
    "stateName": "Washington",
    "population": 755078,
    "counties": [
      {
        "name": "King County",
        "slug": "king-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Seattle is in King County, Washington—a 100% Universal Vote-by-Mail state with Same-Day Voter Registration up to 8:00 PM on Election Day! Return your ballot postage-free by mail or before 8:00 PM sharp on Nov 3 at any of the 75+ official King County Elections Drop Boxes, or visit a King County Vote Center (e.g., Lumen Field Event Center) for in-person registration and replacement ballots.",
    "electionAuthorityName": "King County Elections (KingCounty.gov/Elections)",
    "votingSystemType": "100% All-Mail Ballot + 75+ 24/7 Official Drop Boxes & Regional In-Person Vote Centers",
    "transitAgency": "King County Metro & Sound Transit Link Light Rail",
    "electionDayTransitPolicy": "Youth 18 and under ride free year-round on King County Metro and Link Light Rail; official ballot drop boxes are positioned at major Link Light Rail and transit hubs.",
    "majorCongressionalDistricts": [
      "WA-07",
      "WA-09"
    ]
  },
  {
    "slug": "denver-co",
    "cityName": "Denver",
    "stateSlug": "colorado",
    "stateAbbr": "CO",
    "stateName": "Colorado",
    "population": 716577,
    "counties": [
      {
        "name": "Denver County",
        "slug": "denver-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "The City and County of Denver is a consolidated jurisdiction. Every active Denver voter automatically receives a mail ballot; you can return it at any of the 40+ 24-hour Denver Drop Boxes or register and vote in person up to 7:00 PM on Election Day at any Voter Service and Polling Center (VSPC).",
    "electionAuthorityName": "Denver Office of the Clerk and Recorder – Elections Division (DenverVotes.org)",
    "votingSystemType": "Universal Mail Ballot + 24/7 Drop Boxes + Vote-Anywhere VSPCs with Same-Day Registration",
    "transitAgency": "RTD Denver (Light Rail, Commuter Rail & Bus)",
    "electionDayTransitPolicy": "RTD stations across Denver host official 24-hour ballot drop boxes right at transit platforms.",
    "majorCongressionalDistricts": [
      "CO-01"
    ]
  },
  {
    "slug": "oklahoma-city-ok",
    "cityName": "Oklahoma City",
    "stateSlug": "oklahoma",
    "stateAbbr": "OK",
    "stateName": "Oklahoma",
    "population": 702767,
    "counties": [
      {
        "name": "Oklahoma County",
        "slug": "oklahoma-county"
      },
      {
        "name": "Cleveland County",
        "slug": "cleveland-county"
      },
      {
        "name": "Canadian County",
        "slug": "canadian-county"
      },
      {
        "name": "Pottawatomie County",
        "slug": "pottawatomie-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Oklahoma City spans 4 counties (Oklahoma County, Cleveland County, Canadian County, Pottawatomie County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Oklahoma City County Election Board (plus Cleveland/Canadian/Pottawatomie Boards for outer OKC)",
    "votingSystemType": "Assigned Precinct on Election Day + County Election Board Early Voting",
    "transitAgency": "EMBARK (OKC Bus & Streetcar)",
    "electionDayTransitPolicy": "EMBARK (OKC Bus & Streetcar) provides public transit service connecting Oklahoma City neighborhoods with major Oklahoma County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OK-03",
      "OK-04",
      "OK-05"
    ]
  },
  {
    "slug": "nashville-tn",
    "cityName": "Nashville",
    "stateSlug": "tennessee",
    "stateAbbr": "TN",
    "stateName": "Tennessee",
    "population": 687788,
    "counties": [
      {
        "name": "Davidson County",
        "slug": "davidson-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Nashville voters are served within Davidson County via Davidson County Election Commission (Nashville.gov/Vote). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Davidson County Election Commission (Nashville.gov/Vote)",
    "votingSystemType": "Countywide Early Voting Sites (11+ Locations) / Assigned Precinct on Election Day",
    "transitAgency": "WeGo Public Transit",
    "electionDayTransitPolicy": "WeGo Public Transit provides public transit service connecting Nashville neighborhoods with major Davidson County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TN-05",
      "TN-06",
      "TN-07"
    ]
  },
  {
    "slug": "washington-dc",
    "cityName": "Washington",
    "stateSlug": "district-of-columbia",
    "stateAbbr": "DC",
    "stateName": "District of Columbia",
    "population": 678972,
    "counties": [
      {
        "name": "District of Columbia",
        "slug": "district-of-columbia"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Washington, D.C. operates a Universal Mail Ballot + Vote Center model! Every registered D.C. voter automatically receives a mail ballot AND can vote in person (including Same-Day Voter Registration) at ANY of the 75+ D.C. Vote Centers across all 8 Wards regardless of home address.",
    "electionAuthorityName": "District of Columbia Board of Elections (DCBOE.org)",
    "votingSystemType": "Universal Mail Ballot + 55+ Drop Boxes + Vote-Anywhere Vote Centers with Same-Day Registration",
    "transitAgency": "WMATA (Metrorail & Metrobus) & DC Circulator",
    "electionDayTransitPolicy": "DC Vote Centers and Mail Ballot Drop Boxes are located within walking distance of Metrorail stations across all 8 Wards.",
    "majorCongressionalDistricts": [
      "DC-AL"
    ]
  },
  {
    "slug": "el-paso-tx",
    "cityName": "El Paso",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 678958,
    "counties": [
      {
        "name": "El Paso County",
        "slug": "el-paso-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "El Paso voters are served within El Paso County via El Paso County Elections Department (EPCountyVotes.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "El Paso County Elections Department (EPCountyVotes.com)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in El Paso County) • Mountain Time Zone!",
    "transitAgency": "Sun Metro (Brio BRT, Streetcar & Bus)",
    "electionDayTransitPolicy": "Sun Metro (Brio BRT, Streetcar & Bus) provides public transit service connecting El Paso neighborhoods with major El Paso County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TX-16",
      "TX-23"
    ]
  },
  {
    "slug": "las-vegas-nv",
    "cityName": "Las Vegas",
    "stateSlug": "nevada",
    "stateAbbr": "NV",
    "stateName": "Nevada",
    "population": 660929,
    "counties": [
      {
        "name": "Clark County",
        "slug": "clark-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Las Vegas (as well as unincorporated Las Vegas Strip/Paradise, Henderson, and North Las Vegas) lies within Clark County. Every active registered Clark County voter automatically receives a mail ballot AND can vote in person or use Same-Day Voter Registration (with a Nevada driver's license/ID) at ANY of the 100+ Clark County Vote Centers!",
    "electionAuthorityName": "Clark County Election Department (ClarkCountyNV.gov/Vote)",
    "votingSystemType": "Universal Mail Ballot + Countywide Vote Centers with Same-Day Registration",
    "transitAgency": "RTC of Southern Nevada (Transit Buses & Paratransit)",
    "electionDayTransitPolicy": "RTC of Southern Nevada provides 100% FREE transit rides on all fixed-route bus lines across the Las Vegas Valley on Election Day (Tuesday, November 3, 2026).",
    "majorCongressionalDistricts": [
      "NV-01",
      "NV-03",
      "NV-04"
    ]
  },
  {
    "slug": "boston-ma",
    "cityName": "Boston",
    "stateSlug": "massachusetts",
    "stateAbbr": "MA",
    "stateName": "Massachusetts",
    "population": 653833,
    "counties": [
      {
        "name": "Suffolk County",
        "slug": "suffolk-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "In Massachusetts, elections are administered by municipal City/Town Clerks rather than counties. The Boston Elections Department (Boston.gov/Elections, City Hall Room 241) runs all Early Voting sites, mail ballot drop boxes, and Ward/Precinct polling places across Boston.",
    "electionAuthorityName": "City of Boston Elections Department (Boston.gov/Elections)",
    "votingSystemType": "Citywide Early Voting (Boston City Hall & Neighborhood Sites) + Assigned Ward/Precinct on Election Day",
    "transitAgency": "MBTA (\"The T\" Subway, Bus, Commuter Rail & Ferry)",
    "electionDayTransitPolicy": "MBTA Routes 23, 28, and 29 operate 100% Fare-Free in Boston, and Government Center/State Street T stations connect directly to Boston City Hall Early Voting.",
    "majorCongressionalDistricts": [
      "MA-07",
      "MA-08"
    ]
  },
  {
    "slug": "detroit-mi",
    "cityName": "Detroit",
    "stateSlug": "michigan",
    "stateAbbr": "MI",
    "stateName": "Michigan",
    "population": 633218,
    "counties": [
      {
        "name": "Wayne County",
        "slug": "wayne-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "In Michigan, election administration is run at the CITY/TOWNSHIP Clerk level! Your primary election authority is the Detroit Department of Elections (2978 W Grand Blvd), supported by the Wayne County Clerk. Thanks to Michigan Proposal 2, Detroit offers at least 9 days of Early In-Person Voting, no-excuse absentee voting with prepaid return postage, and Same-Day Voter Registration at the Detroit City Clerk's office until 8:00 PM on Election Day.",
    "electionAuthorityName": "Detroit Department of Elections (DetroitMI.gov/Elections) & Wayne County Clerk",
    "votingSystemType": "City Early Voting Centers + 30+ Drop Boxes + Assigned Precincts + Same-Day Registration at City Clerk",
    "transitAgency": "DDOT (Detroit Department of Transportation), SMART Bus, QLINE & Detroit People Mover",
    "electionDayTransitPolicy": "The Detroit People Mover and QLINE Streetcar operate fare-free, connecting downtown and Woodward Corridor voters to Detroit Department of Elections hubs.",
    "majorCongressionalDistricts": [
      "MI-12",
      "MI-13"
    ]
  },
  {
    "slug": "portland-or",
    "cityName": "Portland",
    "stateSlug": "oregon",
    "stateAbbr": "OR",
    "stateName": "Oregon",
    "population": 630498,
    "counties": [
      {
        "name": "Multnomah County",
        "slug": "multnomah-county"
      },
      {
        "name": "Washington County",
        "slug": "washington-county"
      },
      {
        "name": "Clackamas County",
        "slug": "clackamas-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "While nearly all of Portland is in Multnomah County (MultCo.us/Elections), small western neighborhoods lie in Washington County and southern pockets lie in Clackamas County. Oregon is 100% Vote-by-Mail: you can drop your signed ballot envelope into ANY official 24-hour Oregon Ballot Drop Site (including all Multnomah County Library branches) before 8:00 PM on Nov 3, 2026, or mail it postmarked by Election Day!",
    "electionAuthorityName": "Multnomah County Elections Division (MultCo.us/Elections)",
    "votingSystemType": "100% Universal Vote-by-Mail + 30+ Official 24/7 Library & Street Ballot Drop Boxes",
    "transitAgency": "TriMet (MAX Light Rail, Portland Streetcar & Bus)",
    "electionDayTransitPolicy": "Official 24-hour ballot drop boxes are positioned at major TriMet MAX hubs and every Multnomah County Library branch.",
    "majorCongressionalDistricts": [
      "OR-01",
      "OR-03",
      "OR-05"
    ]
  },
  {
    "slug": "louisville-ky",
    "cityName": "Louisville",
    "stateSlug": "kentucky",
    "stateAbbr": "KY",
    "stateName": "Kentucky",
    "population": 622981,
    "counties": [
      {
        "name": "Jefferson County",
        "slug": "jefferson-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Louisville voters are served within Jefferson County via Jefferson County Clerk Election Center (JeffersonCountyClerk.org). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Jefferson County Clerk Election Center (JeffersonCountyClerk.org)",
    "votingSystemType": "3 Days of No-Excuse Early Voting (Thu-Sat before Election Day) + Assigned Precinct",
    "transitAgency": "TARC (Transit Authority of River City)",
    "electionDayTransitPolicy": "TARC (Transit Authority of River City) provides public transit service connecting Louisville neighborhoods with major Jefferson County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "KY-03"
    ]
  },
  {
    "slug": "memphis-tn",
    "cityName": "Memphis",
    "stateSlug": "tennessee",
    "stateAbbr": "TN",
    "stateName": "Tennessee",
    "population": 618639,
    "counties": [
      {
        "name": "Shelby County",
        "slug": "shelby-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Memphis voters are served within Shelby County via Shelby County Election Commission (ElectionSShelbyTN.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Shelby County Election Commission (ElectionSShelbyTN.gov)",
    "votingSystemType": "26 Countywide Early Voting Sites / Assigned Precinct on Election Day",
    "transitAgency": "MATA (Memphis Area Transit Authority)",
    "electionDayTransitPolicy": "MATA (Memphis Area Transit Authority) provides public transit service connecting Memphis neighborhoods with major Shelby County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TN-08",
      "TN-09"
    ]
  },
  {
    "slug": "baltimore-md",
    "cityName": "Baltimore",
    "stateSlug": "maryland",
    "stateAbbr": "MD",
    "stateName": "Maryland",
    "population": 565239,
    "counties": [
      {
        "name": "Baltimore City",
        "slug": "baltimore-city"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Baltimore voters are served within Baltimore City via Baltimore City Board of Elections (BaltimoreVotes.org) — Independent City separate from Baltimore County!. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Baltimore City Board of Elections (BaltimoreVotes.org) — Independent City separate from Baltimore County!",
    "votingSystemType": "8 Days of Early Voting at Any City Early Voting Center + Assigned Precinct on Election Day + Same-Day Registration",
    "transitAgency": "MDOT MTA (BaltimoreLink Bus, Metro SubwayLink & Light RailLink)",
    "electionDayTransitPolicy": "MDOT MTA (BaltimoreLink Bus, Metro SubwayLink & Light RailLink) provides public transit service connecting Baltimore neighborhoods with major Baltimore City early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "MD-02",
      "MD-07"
    ]
  },
  {
    "slug": "milwaukee-wi",
    "cityName": "Milwaukee",
    "stateSlug": "wisconsin",
    "stateAbbr": "WI",
    "stateName": "Wisconsin",
    "population": 561385,
    "counties": [
      {
        "name": "Milwaukee County",
        "slug": "milwaukee-county"
      },
      {
        "name": "Waukesha County",
        "slug": "waukesha-county"
      },
      {
        "name": "Washington County",
        "slug": "washington-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Wisconsin elections are administered at the municipal level by the City of Milwaukee Election Commission (City.Milwaukee.gov/Election). Remember: Wisconsin has Same-Day Voter Registration AT YOUR POLLING PLACE on Election Day—just bring both an acceptable Photo ID AND Proof of Residence (utility bill, bank statement, lease, or government document showing your current Milwaukee address).",
    "electionAuthorityName": "City of Milwaukee Election Commission (City.Milwaukee.gov/Election)",
    "votingSystemType": "In-Person Absentee (Early Voting) Sites + Assigned Ward Polling Place with Same-Day Registration",
    "transitAgency": "MCTS (Milwaukee County Transit System & CONNECT 1 BRT)",
    "electionDayTransitPolicy": "MCTS bus routes and MobiliSE partner organizations provide free/discounted Election Day voter rides across Milwaukee.",
    "majorCongressionalDistricts": [
      "WI-04"
    ]
  },
  {
    "slug": "albuquerque-nm",
    "cityName": "Albuquerque",
    "stateSlug": "new-mexico",
    "stateAbbr": "NM",
    "stateName": "New Mexico",
    "population": 560274,
    "counties": [
      {
        "name": "Bernalillo County",
        "slug": "bernalillo-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Albuquerque voters are served within Bernalillo County via Bernalillo County Clerk's Office (BerncoVotes.org). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Bernalillo County Clerk's Office (BerncoVotes.org)",
    "votingSystemType": "Countywide Voting Convenience Centers (Vote & Register Same-Day Anywhere in Bernalillo County)",
    "transitAgency": "ABQ RIDE & ART Bus Rapid Transit (100% Zero-Fare Year-Round!)",
    "electionDayTransitPolicy": "ABQ RIDE & ART Bus Rapid Transit (100% Zero-Fare Year-Round!) provides public transit service connecting Albuquerque neighborhoods with major Bernalillo County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NM-01",
      "NM-02"
    ]
  },
  {
    "slug": "tucson-az",
    "cityName": "Tucson",
    "stateSlug": "arizona",
    "stateAbbr": "AZ",
    "stateName": "Arizona",
    "population": 547239,
    "counties": [
      {
        "name": "Pima County",
        "slug": "pima-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Tucson voters are served within Pima County via Pima County Recorder & Elections Department (Pima.gov/Vote). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Pima County Recorder & Elections Department (Pima.gov/Vote)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Pima County) + Active Early Voting List",
    "transitAgency": "Sun Tran & Sun Link Streetcar (100% Fare-Free Transit!)",
    "electionDayTransitPolicy": "Sun Tran & Sun Link Streetcar (100% Fare-Free Transit!) provides public transit service connecting Tucson neighborhoods with major Pima County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AZ-06",
      "AZ-07"
    ]
  },
  {
    "slug": "fresno-ca",
    "cityName": "Fresno",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 545716,
    "counties": [
      {
        "name": "Fresno County",
        "slug": "fresno-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Fresno voters are served within Fresno County via Fresno County Clerk/Registrar of Voters (VoteFresnoCounty.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Fresno County Clerk/Registrar of Voters (VoteFresnoCounty.com)",
    "votingSystemType": "Countywide Vote Centers (Voter's Choice Act) + Universal Mail Ballot & Drop Boxes",
    "transitAgency": "FAX (Fresno Area Express)",
    "electionDayTransitPolicy": "FAX (Fresno Area Express) provides public transit service connecting Fresno neighborhoods with major Fresno County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-05",
      "CA-20",
      "CA-21"
    ]
  },
  {
    "slug": "sacramento-ca",
    "cityName": "Sacramento",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 526384,
    "counties": [
      {
        "name": "Sacramento County",
        "slug": "sacramento-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Sacramento voters are served within Sacramento County via Sacramento County Voter Registration and Elections (Elections.SacCounty.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Sacramento County Voter Registration and Elections (Elections.SacCounty.gov)",
    "votingSystemType": "Countywide Vote Centers + Universal Vote-by-Mail & 60+ Drop Boxes",
    "transitAgency": "SacRT (Sacramento Regional Transit Light Rail & Bus)",
    "electionDayTransitPolicy": "SacRT (Sacramento Regional Transit Light Rail & Bus) provides public transit service connecting Sacramento neighborhoods with major Sacramento County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-06",
      "CA-07"
    ]
  },
  {
    "slug": "mesa-az",
    "cityName": "Mesa",
    "stateSlug": "arizona",
    "stateAbbr": "AZ",
    "stateName": "Arizona",
    "population": 511648,
    "counties": [
      {
        "name": "Maricopa County",
        "slug": "maricopa-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Mesa voters are served within Maricopa County via Maricopa County Elections Department (BeBallotReady.Vote). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Maricopa County Elections Department (BeBallotReady.Vote)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Maricopa County)",
    "transitAgency": "Valley Metro Rail & Bus",
    "electionDayTransitPolicy": "Valley Metro Rail & Bus provides public transit service connecting Mesa neighborhoods with major Maricopa County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AZ-04",
      "AZ-05"
    ]
  },
  {
    "slug": "atlanta-ga",
    "cityName": "Atlanta",
    "stateSlug": "georgia",
    "stateAbbr": "GA",
    "stateName": "Georgia",
    "population": 510823,
    "counties": [
      {
        "name": "Fulton County",
        "slug": "fulton-county"
      },
      {
        "name": "DeKalb County",
        "slug": "dekalb-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "CRITICAL ATLANTA BOUNDARY RULE: Approximately 90% of the City of Atlanta is in Fulton County, while the eastern 10% (East Atlanta, Kirkwood, Edgewood, Candler Park, Emory/Druid Hills Annexation) is in DeKalb County! You MUST vote in the county where your home address is taxed/registered. During Early Voting, you can use ANY Early Voting site within your county; on Election Day (Nov 3), you must go to your specific assigned precinct (check MVP.SOS.GA.GOV).",
    "electionAuthorityName": "Fulton County Registration & Elections + DeKalb County Voter Registration & Elections",
    "votingSystemType": "Countywide Early Voting (Including Mandatory Saturdays) / Strict Assigned Precinct on Election Day",
    "transitAgency": "MARTA (Heavy Rail, Streetcar, Bus & MARTA Mobility)",
    "electionDayTransitPolicy": "Many Fulton and DeKalb Early Voting locations and drop boxes are located directly along MARTA rail lines.",
    "majorCongressionalDistricts": [
      "GA-04",
      "GA-05",
      "GA-06",
      "GA-13"
    ]
  },
  {
    "slug": "kansas-city-mo",
    "cityName": "Kansas City",
    "stateSlug": "missouri",
    "stateAbbr": "MO",
    "stateName": "Missouri",
    "population": 510704,
    "counties": [
      {
        "name": "Jackson County",
        "slug": "jackson-county"
      },
      {
        "name": "Clay County",
        "slug": "clay-county"
      },
      {
        "name": "Platte County",
        "slug": "platte-county"
      },
      {
        "name": "Cass County",
        "slug": "cass-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "UNIQUE 4-COUNTY SPLIT: Kansas City, Missouri spans 4 counties! Voters living in the Jackson County portion of KCMO are served by the Kansas City Board of Election Commissioners (KCEB.org), while Northland KCMO voters must vote through the Clay County Board of Elections (ClayCountyMoElections.com) or Platte County Board of Elections (PlatteCountyMoVotes.gov), and southern KCMO voters in Cass County vote through the Cass County Clerk.",
    "electionAuthorityName": "Kansas City Board of Election Commissioners (KCEB.org) + Clay, Platte & Cass County Elections",
    "votingSystemType": "2-Week No-Excuse In-Person Absentee + Assigned Polling Place (Strict Government Photo ID Required)",
    "transitAgency": "RideKC (KCATA Bus, MAX BRT & KC Streetcar)",
    "electionDayTransitPolicy": "The KC Streetcar is 100% free every day, and RideKC offers free bus transit on Election Day across the Kansas City metro.",
    "majorCongressionalDistricts": [
      "MO-04",
      "MO-05",
      "MO-06"
    ]
  },
  {
    "slug": "colorado-springs-co",
    "cityName": "Colorado Springs",
    "stateSlug": "colorado",
    "stateAbbr": "CO",
    "stateName": "Colorado",
    "population": 488664,
    "counties": [
      {
        "name": "El Paso County",
        "slug": "el-paso-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Colorado Springs voters are served within El Paso County via El Paso County Clerk and Recorder (EPCVotes.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "El Paso County Clerk and Recorder (EPCVotes.com)",
    "votingSystemType": "Universal Mail Ballot + 40+ 24/7 Ballot Drop Boxes + Vote-Anywhere VSPCs with Same-Day Registration",
    "transitAgency": "Mountain Metropolitan Transit (MMT)",
    "electionDayTransitPolicy": "Mountain Metropolitan Transit (MMT) provides public transit service connecting Colorado Springs neighborhoods with major El Paso County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CO-05"
    ]
  },
  {
    "slug": "omaha-ne",
    "cityName": "Omaha",
    "stateSlug": "nebraska",
    "stateAbbr": "NE",
    "stateName": "Nebraska",
    "population": 483335,
    "counties": [
      {
        "name": "Douglas County",
        "slug": "douglas-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Omaha voters are served within Douglas County via Douglas County Election Commission (VoteDouglasCounty.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Douglas County Election Commission (VoteDouglasCounty.com)",
    "votingSystemType": "Early In-Person at 12220 W Center Rd + Drop Boxes + Assigned Precinct (Photo ID Required; NE-02 Electoral Vote District!)",
    "transitAgency": "Metro Transit Omaha & ORBT",
    "electionDayTransitPolicy": "Metro Transit Omaha & ORBT provides public transit service connecting Omaha neighborhoods with major Douglas County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NE-02"
    ]
  },
  {
    "slug": "raleigh-nc",
    "cityName": "Raleigh",
    "stateSlug": "north-carolina",
    "stateAbbr": "NC",
    "stateName": "North Carolina",
    "population": 482295,
    "counties": [
      {
        "name": "Wake County",
        "slug": "wake-county"
      },
      {
        "name": "Durham County",
        "slug": "durham-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Raleigh spans 2 counties (Wake County, Durham County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Wake County Board of Elections (ReadyToVote.com)",
    "votingSystemType": "17-Day Early Voting with Same-Day Registration at Any Wake County Site + Assigned Precinct on Nov 3 (Photo ID Required)",
    "transitAgency": "GoRaleigh & GoTriangle",
    "electionDayTransitPolicy": "GoRaleigh & GoTriangle provides public transit service connecting Raleigh neighborhoods with major Wake County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NC-02",
      "NC-04"
    ]
  },
  {
    "slug": "miami-fl",
    "cityName": "Miami",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 455924,
    "counties": [
      {
        "name": "Miami-Dade County",
        "slug": "miami-dade-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Miami is in Miami-Dade County (MiamiDade.gov/Elections). During the 14-day Early Voting window, any Miami-Dade voter can cast a ballot or drop off a Vote-by-Mail ballot at ANY of the 33 Early Voting sites across the county. On Election Day (Nov 3, 7 AM–7 PM), Florida law strictly requires voting at your single assigned neighborhood precinct.",
    "electionAuthorityName": "Miami-Dade County Supervisor of Elections (MiamiDade.gov/Elections)",
    "votingSystemType": "Countywide Early Voting & Secure Intake Stations / Strict Assigned Precinct on Election Day (Bilingual EN/ES/HT)",
    "transitAgency": "Miami-Dade Transit (Metrorail, Metromover, Metrobus)",
    "electionDayTransitPolicy": "Miami-Dade Metromover in Downtown/Brickell is 100% free every day; Metrorail Government Center connects directly to Downtown Early Voting.",
    "majorCongressionalDistricts": [
      "FL-24",
      "FL-26",
      "FL-27",
      "FL-28"
    ]
  },
  {
    "slug": "virginia-beach-va",
    "cityName": "Virginia Beach",
    "stateSlug": "virginia",
    "stateAbbr": "VA",
    "stateName": "Virginia",
    "population": 453649,
    "counties": [
      {
        "name": "Virginia Beach City",
        "slug": "virginia-beach-city"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Virginia Beach voters are served within Virginia Beach City via Virginia Beach Voter Registration & Elections (Vote.VirginiaBeach.gov) — Independent City. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Virginia Beach Voter Registration & Elections (Vote.VirginiaBeach.gov) — Independent City",
    "votingSystemType": "45 Days of No-Excuse Early Voting + Assigned Precinct on Election Day + Same-Day Registration",
    "transitAgency": "Hampton Roads Transit (HRT)",
    "electionDayTransitPolicy": "Hampton Roads Transit (HRT) provides public transit service connecting Virginia Beach neighborhoods with major Virginia Beach City early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "VA-02"
    ]
  },
  {
    "slug": "long-beach-ca",
    "cityName": "Long Beach",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 449468,
    "counties": [
      {
        "name": "Los Angeles County",
        "slug": "los-angeles-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Long Beach voters are served within Los Angeles County via Los Angeles County Registrar-Recorder (LAVote.gov) & Long Beach City Clerk. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Los Angeles County Registrar-Recorder (LAVote.gov) & Long Beach City Clerk",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in LA County) + Universal Mail Ballot",
    "transitAgency": "Long Beach Transit & LA Metro A Line (Free on Election Day)",
    "electionDayTransitPolicy": "Long Beach Transit & LA Metro A Line (Free on Election Day) provides public transit service connecting Long Beach neighborhoods with major Los Angeles County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-42",
      "CA-44"
    ]
  },
  {
    "slug": "oakland-ca",
    "cityName": "Oakland",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 436504,
    "counties": [
      {
        "name": "Alameda County",
        "slug": "alameda-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Oakland voters are served within Alameda County via Alameda County Registrar of Voters (ACVote.org). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Alameda County Registrar of Voters (ACVote.org)",
    "votingSystemType": "Countywide Accessible Vote Centers (Vote Anywhere in Alameda County) + Universal Mail Ballot",
    "transitAgency": "AC Transit & BART",
    "electionDayTransitPolicy": "AC Transit & BART provides public transit service connecting Oakland neighborhoods with major Alameda County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-12"
    ]
  },
  {
    "slug": "minneapolis-mn",
    "cityName": "Minneapolis",
    "stateSlug": "minnesota",
    "stateAbbr": "MN",
    "stateName": "Minnesota",
    "population": 425115,
    "counties": [
      {
        "name": "Hennepin County",
        "slug": "hennepin-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Minneapolis elections are run by Minneapolis Elections & Voter Services (Vote.Minneapolismn.gov) alongside Hennepin County. Minnesota provides 46 days of No-Excuse Early In-Person Voting (starting September 18, 2026) and Same-Day Voter Registration right at your neighborhood polling place on Election Day!",
    "electionAuthorityName": "Minneapolis Elections & Voter Services (Vote.Minneapolismn.gov) & Hennepin County",
    "votingSystemType": "46-Day Early Voting Centers + Assigned Precinct with Election Day Same-Day Registration",
    "transitAgency": "Metro Transit (METRO Light Rail, BRT & Bus)",
    "electionDayTransitPolicy": "Metro Transit connects directly to the Minneapolis Early Vote Center (980 E Hennepin Ave) and Hennepin County Government Center.",
    "majorCongressionalDistricts": [
      "MN-05"
    ]
  },
  {
    "slug": "bakersfield-ca",
    "cityName": "Bakersfield",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 413381,
    "counties": [
      {
        "name": "Kern County",
        "slug": "kern-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Bakersfield voters are served within Kern County via Kern County Elections Division (KernVote.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Kern County Elections Division (KernVote.com)",
    "votingSystemType": "Universal Mail Ballot + Official Drop Boxes + Assigned Polling Places",
    "transitAgency": "Golden Empire Transit (GET Bus)",
    "electionDayTransitPolicy": "Golden Empire Transit (GET Bus) provides public transit service connecting Bakersfield neighborhoods with major Kern County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-20",
      "CA-22"
    ]
  },
  {
    "slug": "tulsa-ok",
    "cityName": "Tulsa",
    "stateSlug": "oklahoma",
    "stateAbbr": "OK",
    "stateName": "Oklahoma",
    "population": 411894,
    "counties": [
      {
        "name": "Tulsa County",
        "slug": "tulsa-county"
      },
      {
        "name": "Osage County",
        "slug": "osage-county"
      },
      {
        "name": "Rogers County",
        "slug": "rogers-county"
      },
      {
        "name": "Wagoner County",
        "slug": "wagoner-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Tulsa spans 4 counties (Tulsa County, Osage County, Rogers County, Wagoner County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Tulsa County Election Board (TulsaCounty.org/Elections)",
    "votingSystemType": "Early In-Person Voting at County Election Board + Assigned Precinct on Election Day",
    "transitAgency": "MetroLink Tulsa (Aero BRT & Bus)",
    "electionDayTransitPolicy": "MetroLink Tulsa (Aero BRT & Bus) provides public transit service connecting Tulsa neighborhoods with major Tulsa County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OK-01"
    ]
  },
  {
    "slug": "tampa-fl",
    "cityName": "Tampa",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 403364,
    "counties": [
      {
        "name": "Hillsborough County",
        "slug": "hillsborough-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Tampa voters are served within Hillsborough County via Hillsborough County Supervisor of Elections (VoteHillsborough.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Hillsborough County Supervisor of Elections (VoteHillsborough.gov)",
    "votingSystemType": "27+ Countywide Early Voting Sites / Assigned Precinct on Election Day",
    "transitAgency": "HART (Hillsborough Area Regional Transit & TECO Line Streetcar)",
    "electionDayTransitPolicy": "HART (Hillsborough Area Regional Transit & TECO Line Streetcar) provides public transit service connecting Tampa neighborhoods with major Hillsborough County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "FL-14",
      "FL-15",
      "FL-16"
    ]
  },
  {
    "slug": "arlington-tx",
    "cityName": "Arlington",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 398431,
    "counties": [
      {
        "name": "Tarrant County",
        "slug": "tarrant-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Arlington voters are served within Tarrant County via Tarrant County Elections Administration (TarrantCounty.com/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Tarrant County Elections Administration (TarrantCounty.com/Elections)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Tarrant County)",
    "transitAgency": "Arlington Via Rideshare Transit",
    "electionDayTransitPolicy": "Arlington Via Rideshare Transit provides public transit service connecting Arlington neighborhoods with major Tarrant County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TX-06",
      "TX-25",
      "TX-33"
    ]
  },
  {
    "slug": "wichita-ks",
    "cityName": "Wichita",
    "stateSlug": "kansas",
    "stateAbbr": "KS",
    "stateName": "Kansas",
    "population": 396119,
    "counties": [
      {
        "name": "Sedgwick County",
        "slug": "sedgwick-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Wichita voters are served within Sedgwick County via Sedgwick County Election Office (SedgwickCounty.org/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Sedgwick County Election Office (SedgwickCounty.org/Elections)",
    "votingSystemType": "Advance In-Person Voting at Satellite Centers + Assigned Polling Place on Election Day",
    "transitAgency": "Wichita Transit (Free Rides on Election Day!)",
    "electionDayTransitPolicy": "Wichita Transit (Free Rides on Election Day!) provides public transit service connecting Wichita neighborhoods with major Sedgwick County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "KS-04"
    ]
  },
  {
    "slug": "aurora-co",
    "cityName": "Aurora",
    "stateSlug": "colorado",
    "stateAbbr": "CO",
    "stateName": "Colorado",
    "population": 395052,
    "counties": [
      {
        "name": "Arapahoe County",
        "slug": "arapahoe-county"
      },
      {
        "name": "Adams County",
        "slug": "adams-county"
      },
      {
        "name": "Douglas County",
        "slug": "douglas-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Aurora spans 3 counties (Arapahoe County, Adams County, Douglas County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "ArapahoeVotes.com, AdamsVotes.com & DouglasVotes.com (Aurora spans 3 counties!)",
    "votingSystemType": "Universal Mail Ballot + 24/7 Drop Boxes + County VSPCs with Same-Day Registration",
    "transitAgency": "RTD Denver (R Line, A Line & Bus)",
    "electionDayTransitPolicy": "RTD Denver (R Line, A Line & Bus) provides public transit service connecting Aurora neighborhoods with major Arapahoe County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CO-06"
    ]
  },
  {
    "slug": "new-orleans-la",
    "cityName": "New Orleans",
    "stateSlug": "louisiana",
    "stateAbbr": "LA",
    "stateName": "Louisiana",
    "population": 364136,
    "counties": [
      {
        "name": "Orleans Parish",
        "slug": "orleans-parish"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "New Orleans voters are served within Orleans Parish via Orleans Parish Registrar of Voters & Clerk of Criminal District Court (NOLA.gov/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Orleans Parish Registrar of Voters & Clerk of Criminal District Court (NOLA.gov/Elections)",
    "votingSystemType": "Early Voting (14 to 7 Days Prior at City Hall & Algiers/Lakeview Sites) + Assigned Precinct on Election Day (6 AM–8 PM CT)",
    "transitAgency": "NORTA (New Orleans RTA Streetcars, Buses & Ferries)",
    "electionDayTransitPolicy": "NORTA (New Orleans RTA Streetcars, Buses & Ferries) provides public transit service connecting New Orleans neighborhoods with major Orleans Parish early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "LA-02"
    ]
  },
  {
    "slug": "cleveland-oh",
    "cityName": "Cleveland",
    "stateSlug": "ohio",
    "stateAbbr": "OH",
    "stateName": "Ohio",
    "population": 362656,
    "counties": [
      {
        "name": "Cuyahoga County",
        "slug": "cuyahoga-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Cleveland voters are served within Cuyahoga County via Cuyahoga County Board of Elections (443VOTE.us). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Cuyahoga County Board of Elections (443VOTE.us)",
    "votingSystemType": "Early In-Person Voting at 2925 Euclid Ave + Assigned Precinct on Election Day (Strict Photo ID Required)",
    "transitAgency": "GCRTA (Greater Cleveland Regional Transit Authority Rail & Bus)",
    "electionDayTransitPolicy": "GCRTA (Greater Cleveland Regional Transit Authority Rail & Bus) provides public transit service connecting Cleveland neighborhoods with major Cuyahoga County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OH-11"
    ]
  },
  {
    "slug": "honolulu-hi",
    "cityName": "Honolulu",
    "stateSlug": "hawaii",
    "stateAbbr": "HI",
    "stateName": "Hawaii",
    "population": 341778,
    "counties": [
      {
        "name": "Honolulu County",
        "slug": "honolulu-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Honolulu voters are served within Honolulu County via City and County of Honolulu Elections Division (HonoluluElections.us). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "City and County of Honolulu Elections Division (HonoluluElections.us)",
    "votingSystemType": "100% Universal Vote-by-Mail + Ballot Drop Boxes + Voter Service Centers (Honolulu Hale & Kapolei Hale) with Same-Day Registration",
    "transitAgency": "TheBus & Skyline Rail",
    "electionDayTransitPolicy": "TheBus & Skyline Rail provides public transit service connecting Honolulu neighborhoods with major Honolulu County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "HI-01"
    ]
  },
  {
    "slug": "anaheim-ca",
    "cityName": "Anaheim",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 340512,
    "counties": [
      {
        "name": "Orange County",
        "slug": "orange-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Anaheim voters are served within Orange County via Orange County Registrar of Voters (OCVote.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Orange County Registrar of Voters (OCVote.gov)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Orange County) + Universal Mail Ballot & 120+ Drop Boxes",
    "transitAgency": "OCTA (Orange County Transportation Authority)",
    "electionDayTransitPolicy": "OCTA (Orange County Transportation Authority) provides public transit service connecting Anaheim neighborhoods with major Orange County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-46"
    ]
  },
  {
    "slug": "henderson-nv",
    "cityName": "Henderson",
    "stateSlug": "nevada",
    "stateAbbr": "NV",
    "stateName": "Nevada",
    "population": 337305,
    "counties": [
      {
        "name": "Clark County",
        "slug": "clark-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Henderson voters are served within Clark County via Clark County Election Department & Henderson City Clerk. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Clark County Election Department & Henderson City Clerk",
    "votingSystemType": "Universal Mail Ballot + Countywide Vote Centers with Same-Day Registration",
    "transitAgency": "RTC of Southern Nevada (Free Rides on Election Day)",
    "electionDayTransitPolicy": "RTC of Southern Nevada (Free Rides on Election Day) provides public transit service connecting Henderson neighborhoods with major Clark County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NV-01",
      "NV-03"
    ]
  },
  {
    "slug": "orlando-fl",
    "cityName": "Orlando",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 320742,
    "counties": [
      {
        "name": "Orange County",
        "slug": "orange-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Orlando voters are served within Orange County via Orange County Supervisor of Elections (OCFElections.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Orange County Supervisor of Elections (OCFElections.com)",
    "votingSystemType": "20+ Countywide Early Voting Locations / Assigned Precinct on Election Day",
    "transitAgency": "LYNX Bus & SunRail",
    "electionDayTransitPolicy": "LYNX Bus & SunRail provides public transit service connecting Orlando neighborhoods with major Orange County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "FL-09",
      "FL-10"
    ]
  },
  {
    "slug": "lexington-ky",
    "cityName": "Lexington",
    "stateSlug": "kentucky",
    "stateAbbr": "KY",
    "stateName": "Kentucky",
    "population": 320154,
    "counties": [
      {
        "name": "Fayette County",
        "slug": "fayette-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Lexington voters are served within Fayette County via Fayette County Clerk (FayetteCountyClerk.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Fayette County Clerk (FayetteCountyClerk.com)",
    "votingSystemType": "3 Days No-Excuse Early Voting + Assigned Polling Place on Election Day (6 AM–6 PM ET)",
    "transitAgency": "Lextran (Free Rides on Election Day!)",
    "electionDayTransitPolicy": "Lextran (Free Rides on Election Day!) provides public transit service connecting Lexington neighborhoods with major Fayette County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "KY-06"
    ]
  },
  {
    "slug": "stockton-ca",
    "cityName": "Stockton",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 319543,
    "counties": [
      {
        "name": "San Joaquin County",
        "slug": "san-joaquin-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Stockton voters are served within San Joaquin County via San Joaquin County Registrar of Voters (SJGov.org/Department/ROV). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "San Joaquin County Registrar of Voters (SJGov.org/Department/ROV)",
    "votingSystemType": "Universal Mail Ballot + Drop Boxes + Polling Places",
    "transitAgency": "San Joaquin RTD",
    "electionDayTransitPolicy": "San Joaquin RTD provides public transit service connecting Stockton neighborhoods with major San Joaquin County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-09",
      "CA-13"
    ]
  },
  {
    "slug": "riverside-ca",
    "cityName": "Riverside",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 318858,
    "counties": [
      {
        "name": "Riverside County",
        "slug": "riverside-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Riverside voters are served within Riverside County via Riverside County Registrar of Voters (VoteInfo.net). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Riverside County Registrar of Voters (VoteInfo.net)",
    "votingSystemType": "Countywide Vote Centers (Voter's Choice Act) + Universal Mail Ballot & 100+ Drop Boxes",
    "transitAgency": "RTA (Riverside Transit Agency)",
    "electionDayTransitPolicy": "RTA (Riverside Transit Agency) provides public transit service connecting Riverside neighborhoods with major Riverside County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-39",
      "CA-41"
    ]
  },
  {
    "slug": "corpus-christi-tx",
    "cityName": "Corpus Christi",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 316595,
    "counties": [
      {
        "name": "Nueces County",
        "slug": "nueces-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Corpus Christi voters are served within Nueces County via Nueces County Clerk Elections Department (NuecesCo.com/County-Services/County-Clerk/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Nueces County Clerk Elections Department (NuecesCo.com/County-Services/County-Clerk/Elections)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Nueces County)",
    "transitAgency": "CCRTA (Corpus Christi Regional Transportation Authority — Free Rides on Election Day!)",
    "electionDayTransitPolicy": "CCRTA (Corpus Christi Regional Transportation Authority — Free Rides on Election Day!) provides public transit service connecting Corpus Christi neighborhoods with major Nueces County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TX-27"
    ]
  },
  {
    "slug": "irvine-ca",
    "cityName": "Irvine",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 314625,
    "counties": [
      {
        "name": "Orange County",
        "slug": "orange-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Irvine voters are served within Orange County via Orange County Registrar of Voters (OCVote.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Orange County Registrar of Voters (OCVote.gov)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Orange County) + Universal Mail Ballot",
    "transitAgency": "OCTA & iShuttle",
    "electionDayTransitPolicy": "OCTA & iShuttle provides public transit service connecting Irvine neighborhoods with major Orange County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-47"
    ]
  },
  {
    "slug": "cincinnati-oh",
    "cityName": "Cincinnati",
    "stateSlug": "ohio",
    "stateAbbr": "OH",
    "stateName": "Ohio",
    "population": 311097,
    "counties": [
      {
        "name": "Hamilton County",
        "slug": "hamilton-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Cincinnati voters are served within Hamilton County via Hamilton County Board of Elections (VoteHamiltonCountyOhio.gov — 4700 Smith Rd, Norwood). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Hamilton County Board of Elections (VoteHamiltonCountyOhio.gov — 4700 Smith Rd, Norwood)",
    "votingSystemType": "Single County Early Voting Center + Assigned Precinct on Election Day (Strict Photo ID Required)",
    "transitAgency": "SORTA Metro & Cincinnati Connector Streetcar (Streetcar is 100% Free!)",
    "electionDayTransitPolicy": "SORTA Metro & Cincinnati Connector Streetcar (Streetcar is 100% Free!) provides public transit service connecting Cincinnati neighborhoods with major Hamilton County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OH-01"
    ]
  },
  {
    "slug": "santa-ana-ca",
    "cityName": "Santa Ana",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 310538,
    "counties": [
      {
        "name": "Orange County",
        "slug": "orange-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Santa Ana voters are served within Orange County via Orange County Registrar of Voters (OCVote.gov — Headquartered in Santa Ana at 1300 S Grand Ave). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Orange County Registrar of Voters (OCVote.gov — Headquartered in Santa Ana at 1300 S Grand Ave)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Orange County) + Universal Mail Ballot",
    "transitAgency": "OCTA & OC Streetcar",
    "electionDayTransitPolicy": "OCTA & OC Streetcar provides public transit service connecting Santa Ana neighborhoods with major Orange County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-46"
    ]
  },
  {
    "slug": "newark-nj",
    "cityName": "Newark",
    "stateSlug": "new-jersey",
    "stateAbbr": "NJ",
    "stateName": "New Jersey",
    "population": 304960,
    "counties": [
      {
        "name": "Essex County",
        "slug": "essex-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Newark voters are served within Essex County via Essex County Clerk & Superintendent of Elections (EssexClerk.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Essex County Clerk & Superintendent of Elections (EssexClerk.com)",
    "votingSystemType": "9 Days of In-Person Early Voting at Any Essex County Site + Secure Drop Boxes + Assigned Ward/District Polling Place",
    "transitAgency": "NJ Transit (Bus, Newark Light Rail & Commuter Rail)",
    "electionDayTransitPolicy": "NJ Transit (Bus, Newark Light Rail & Commuter Rail) provides public transit service connecting Newark neighborhoods with major Essex County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NJ-08",
      "NJ-10"
    ]
  },
  {
    "slug": "st-paul-mn",
    "cityName": "St. Paul",
    "stateSlug": "minnesota",
    "stateAbbr": "MN",
    "stateName": "Minnesota",
    "population": 303820,
    "counties": [
      {
        "name": "Ramsey County",
        "slug": "ramsey-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "St. Paul voters are served within Ramsey County via Ramsey County Elections Office (RamseyCounty.us/Vote). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Ramsey County Elections Office (RamseyCounty.us/Vote)",
    "votingSystemType": "46-Day Early Voting + Assigned Precinct with Election Day Same-Day Registration",
    "transitAgency": "Metro Transit (Green Line, Gold Line BRT & Bus)",
    "electionDayTransitPolicy": "Metro Transit (Green Line, Gold Line BRT & Bus) provides public transit service connecting St. Paul neighborhoods with major Ramsey County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "MN-04"
    ]
  },
  {
    "slug": "pittsburgh-pa",
    "cityName": "Pittsburgh",
    "stateSlug": "pennsylvania",
    "stateAbbr": "PA",
    "stateName": "Pennsylvania",
    "population": 303255,
    "counties": [
      {
        "name": "Allegheny County",
        "slug": "allegheny-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Pittsburgh voters are served within Allegheny County via Allegheny County Elections Division (AlleghenyCounty.us/Elections — 542 Forbes Ave). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Allegheny County Elections Division (AlleghenyCounty.us/Elections — 542 Forbes Ave)",
    "votingSystemType": "Satellite Election Offices for Over-the-Counter Mail Voting + Assigned Precinct on Election Day",
    "transitAgency": "Pittsburgh Regional Transit (PRT Light Rail \"The T\" & Bus)",
    "electionDayTransitPolicy": "Pittsburgh Regional Transit (PRT Light Rail \"The T\" & Bus) provides public transit service connecting Pittsburgh neighborhoods with major Allegheny County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "PA-12"
    ]
  },
  {
    "slug": "greensboro-nc",
    "cityName": "Greensboro",
    "stateSlug": "north-carolina",
    "stateAbbr": "NC",
    "stateName": "North Carolina",
    "population": 302296,
    "counties": [
      {
        "name": "Guilford County",
        "slug": "guilford-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Greensboro voters are served within Guilford County via Guilford County Board of Elections (GuilfordCountyNC.gov/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Guilford County Board of Elections (GuilfordCountyNC.gov/Elections)",
    "votingSystemType": "17-Day Early Voting with Same-Day Registration + Assigned Precinct on Nov 3",
    "transitAgency": "GTA (Greensboro Transit Agency — Free Rides on Election Day)",
    "electionDayTransitPolicy": "GTA (Greensboro Transit Agency — Free Rides on Election Day) provides public transit service connecting Greensboro neighborhoods with major Guilford County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NC-06",
      "NC-09"
    ]
  },
  {
    "slug": "durham-nc",
    "cityName": "Durham",
    "stateSlug": "north-carolina",
    "stateAbbr": "NC",
    "stateName": "North Carolina",
    "population": 296186,
    "counties": [
      {
        "name": "Durham County",
        "slug": "durham-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Durham voters are served within Durham County via Durham County Board of Elections (DCVotes.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Durham County Board of Elections (DCVotes.com)",
    "votingSystemType": "17-Day Early Voting with Same-Day Registration + Assigned Precinct on Election Day",
    "transitAgency": "GoDurham (100% Fare-Free Bus Transit!)",
    "electionDayTransitPolicy": "GoDurham (100% Fare-Free Bus Transit!) provides public transit service connecting Durham neighborhoods with major Durham County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NC-04"
    ]
  },
  {
    "slug": "lincoln-ne",
    "cityName": "Lincoln",
    "stateSlug": "nebraska",
    "stateAbbr": "NE",
    "stateName": "Nebraska",
    "population": 294757,
    "counties": [
      {
        "name": "Lancaster County",
        "slug": "lancaster-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Lincoln voters are served within Lancaster County via Lancaster County Election Commissioner (Lancaster.NE.gov/Election). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Lancaster County Election Commissioner (Lancaster.NE.gov/Election)",
    "votingSystemType": "Early In-Person at 601 N 46th St + Drop Boxes + Assigned Precinct (Photo ID Required)",
    "transitAgency": "StarTran Bus",
    "electionDayTransitPolicy": "StarTran Bus provides public transit service connecting Lincoln neighborhoods with major Lancaster County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NE-01"
    ]
  },
  {
    "slug": "jersey-city-nj",
    "cityName": "Jersey City",
    "stateSlug": "new-jersey",
    "stateAbbr": "NJ",
    "stateName": "New Jersey",
    "population": 291657,
    "counties": [
      {
        "name": "Hudson County",
        "slug": "hudson-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Jersey City voters are served within Hudson County via Hudson County Clerk & Board of Elections (HudsonCountyClerk.org). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Hudson County Clerk & Board of Elections (HudsonCountyClerk.org)",
    "votingSystemType": "9 Days of In-Person Early Voting + Secure Drop Boxes + Assigned Polling Place",
    "transitAgency": "PATH, NJ Transit Hudson-Bergen Light Rail & Bus",
    "electionDayTransitPolicy": "PATH, NJ Transit Hudson-Bergen Light Rail & Bus provides public transit service connecting Jersey City neighborhoods with major Hudson County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NJ-08",
      "NJ-10"
    ]
  },
  {
    "slug": "plano-tx",
    "cityName": "Plano",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 290190,
    "counties": [
      {
        "name": "Collin County",
        "slug": "collin-county"
      },
      {
        "name": "Denton County",
        "slug": "denton-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Plano spans 2 counties (Collin County, Denton County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Collin County Elections (CollinCountyTX.gov/Elections) & Denton County Elections (VoteDenton.gov)",
    "votingSystemType": "Countywide Vote Centers in Collin County / Assigned Precinct on Election Day in Denton County",
    "transitAgency": "DART (Red/Orange Line & GoLink — Free on Election Day)",
    "electionDayTransitPolicy": "DART (Red/Orange Line & GoLink — Free on Election Day) provides public transit service connecting Plano neighborhoods with major Collin County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TX-03",
      "TX-04",
      "TX-24",
      "TX-32"
    ]
  },
  {
    "slug": "anchorage-ak",
    "cityName": "Anchorage",
    "stateSlug": "alaska",
    "stateAbbr": "AK",
    "stateName": "Alaska",
    "population": 286075,
    "counties": [
      {
        "name": "Anchorage Municipality",
        "slug": "anchorage-municipality"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Anchorage voters are served within Anchorage Municipality via State of Alaska Division of Elections Region I & Municipality of Anchorage Clerk. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "State of Alaska Division of Elections Region I & Municipality of Anchorage Clerk",
    "votingSystemType": "15-Day Early In-Person Voting (City Hall, Loussac Library, Airport) + Assigned Precinct on Nov 3 (Ranked-Choice Voting General Ballot!)",
    "transitAgency": "People Mover Anchorage (Free Rides on Election Day!)",
    "electionDayTransitPolicy": "People Mover Anchorage (Free Rides on Election Day!) provides public transit service connecting Anchorage neighborhoods with major Anchorage Municipality early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AK-AL"
    ]
  },
  {
    "slug": "north-las-vegas-nv",
    "cityName": "North Las Vegas",
    "stateSlug": "nevada",
    "stateAbbr": "NV",
    "stateName": "Nevada",
    "population": 284771,
    "counties": [
      {
        "name": "Clark County",
        "slug": "clark-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "North Las Vegas voters are served within Clark County via Clark County Election Department & North Las Vegas City Clerk. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Clark County Election Department & North Las Vegas City Clerk",
    "votingSystemType": "Universal Mail Ballot + Countywide Vote Centers with Same-Day Registration",
    "transitAgency": "RTC of Southern Nevada (Free Rides on Election Day)",
    "electionDayTransitPolicy": "RTC of Southern Nevada (Free Rides on Election Day) provides public transit service connecting North Las Vegas neighborhoods with major Clark County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NV-04"
    ]
  },
  {
    "slug": "st-louis-mo",
    "cityName": "St. Louis",
    "stateSlug": "missouri",
    "stateAbbr": "MO",
    "stateName": "Missouri",
    "population": 281754,
    "counties": [
      {
        "name": "St Louis City",
        "slug": "st-louis-city"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "St. Louis voters are served within St Louis City via Board of Election Commissioners for the City of St. Louis (StLouis-MO.gov/Election-Board) — Independent City separate from St. Louis County!. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Board of Election Commissioners for the City of St. Louis (StLouis-MO.gov/Election-Board) — Independent City separate from St. Louis County!",
    "votingSystemType": "Citywide Polling Place Capability (Vote at ANY City of St. Louis Polling Place on Election Day!) + 2-Week No-Excuse Absentee",
    "transitAgency": "Metro Transit St. Louis (MetroLink & MetroBus)",
    "electionDayTransitPolicy": "Metro Transit St. Louis (MetroLink & MetroBus) provides public transit service connecting St. Louis neighborhoods with major St Louis City early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "MO-01"
    ]
  },
  {
    "slug": "madison-wi",
    "cityName": "Madison",
    "stateSlug": "wisconsin",
    "stateAbbr": "WI",
    "stateName": "Wisconsin",
    "population": 280305,
    "counties": [
      {
        "name": "Dane County",
        "slug": "dane-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Madison voters are served within Dane County via City of Madison Clerk's Office (CityofMadison.com/Clerk/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "City of Madison Clerk's Office (CityofMadison.com/Clerk/Elections)",
    "votingSystemType": "2-Week In-Person Absentee (\"Badger Vote\" Sites including UW-Madison Campus) + Assigned Ward Polling Place with Same-Day Registration",
    "transitAgency": "Madison Metro Transit (Bus Rapid Transit Route A)",
    "electionDayTransitPolicy": "Madison Metro Transit (Bus Rapid Transit Route A) provides public transit service connecting Madison neighborhoods with major Dane County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "WI-02"
    ]
  },
  {
    "slug": "chandler-az",
    "cityName": "Chandler",
    "stateSlug": "arizona",
    "stateAbbr": "AZ",
    "stateName": "Arizona",
    "population": 280167,
    "counties": [
      {
        "name": "Maricopa County",
        "slug": "maricopa-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Chandler voters are served within Maricopa County via Maricopa County Elections Department (BeBallotReady.Vote). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Maricopa County Elections Department (BeBallotReady.Vote)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Maricopa County)",
    "transitAgency": "Valley Metro & Chandler Flex",
    "electionDayTransitPolicy": "Valley Metro & Chandler Flex provides public transit service connecting Chandler neighborhoods with major Maricopa County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AZ-04",
      "AZ-05"
    ]
  },
  {
    "slug": "gilbert-az",
    "cityName": "Gilbert",
    "stateSlug": "arizona",
    "stateAbbr": "AZ",
    "stateName": "Arizona",
    "population": 275411,
    "counties": [
      {
        "name": "Maricopa County",
        "slug": "maricopa-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Gilbert voters are served within Maricopa County via Maricopa County Elections Department (BeBallotReady.Vote). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Maricopa County Elections Department (BeBallotReady.Vote)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Maricopa County)",
    "transitAgency": "Valley Metro Bus",
    "electionDayTransitPolicy": "Valley Metro Bus provides public transit service connecting Gilbert neighborhoods with major Maricopa County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AZ-05"
    ]
  },
  {
    "slug": "reno-nv",
    "cityName": "Reno",
    "stateSlug": "nevada",
    "stateAbbr": "NV",
    "stateName": "Nevada",
    "population": 274915,
    "counties": [
      {
        "name": "Washoe County",
        "slug": "washoe-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Reno voters are served within Washoe County via Washoe County Registrar of Voters (WashoeCounty.gov/Voters). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Washoe County Registrar of Voters (WashoeCounty.gov/Voters)",
    "votingSystemType": "Universal Mail Ballot + Countywide Vote Centers with Same-Day Registration",
    "transitAgency": "RTC Washoe (Free Rides on All Routes on Election Day!)",
    "electionDayTransitPolicy": "RTC Washoe (Free Rides on All Routes on Election Day!) provides public transit service connecting Reno neighborhoods with major Washoe County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NV-02"
    ]
  },
  {
    "slug": "chula-vista-ca",
    "cityName": "Chula Vista",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 274787,
    "counties": [
      {
        "name": "San Diego County",
        "slug": "san-diego-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Chula Vista voters are served within San Diego County via San Diego County Registrar of Voters (SDVote.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "San Diego County Registrar of Voters (SDVote.com)",
    "votingSystemType": "Countywide Vote Centers + Universal Vote-by-Mail",
    "transitAgency": "San Diego MTS (Blue Line Trolley & Bus)",
    "electionDayTransitPolicy": "San Diego MTS (Blue Line Trolley & Bus) provides public transit service connecting Chula Vista neighborhoods with major San Diego County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-52"
    ]
  },
  {
    "slug": "buffalo-ny",
    "cityName": "Buffalo",
    "stateSlug": "new-york",
    "stateAbbr": "NY",
    "stateName": "New York",
    "population": 274678,
    "counties": [
      {
        "name": "Erie County",
        "slug": "erie-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Buffalo voters are served within Erie County via Erie County Board of Elections (Elections.Erie.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Erie County Board of Elections (Elections.Erie.gov)",
    "votingSystemType": "9 Days of Early Voting at ANY of the 38 Erie County Early Voting Sites + Assigned Polling Place on Election Day",
    "transitAgency": "NFTA Metro (Bus & Metro Rail)",
    "electionDayTransitPolicy": "NFTA Metro (Bus & Metro Rail) provides public transit service connecting Buffalo neighborhoods with major Erie County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NY-26"
    ]
  },
  {
    "slug": "fort-wayne-in",
    "cityName": "Fort Wayne",
    "stateSlug": "indiana",
    "stateAbbr": "IN",
    "stateName": "Indiana",
    "population": 269994,
    "counties": [
      {
        "name": "Allen County",
        "slug": "allen-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Fort Wayne voters are served within Allen County via Allen County Election Board (AllenCountyINVotes.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Allen County Election Board (AllenCountyINVotes.gov)",
    "votingSystemType": "Early In-Person at Rousseau Centre & Satellite Sites + Assigned Precinct on Election Day (Polls Close 6:00 PM ET)",
    "transitAgency": "Citilink Fort Wayne",
    "electionDayTransitPolicy": "Citilink Fort Wayne provides public transit service connecting Fort Wayne neighborhoods with major Allen County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "IN-03"
    ]
  },
  {
    "slug": "lubbock-tx",
    "cityName": "Lubbock",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 266878,
    "counties": [
      {
        "name": "Lubbock County",
        "slug": "lubbock-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Lubbock voters are served within Lubbock County via Lubbock County Elections Office (VoteLubbock.org). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Lubbock County Elections Office (VoteLubbock.org)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Lubbock County)",
    "transitAgency": "Citibus Lubbock",
    "electionDayTransitPolicy": "Citibus Lubbock provides public transit service connecting Lubbock neighborhoods with major Lubbock County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TX-19"
    ]
  },
  {
    "slug": "toledo-oh",
    "cityName": "Toledo",
    "stateSlug": "ohio",
    "stateAbbr": "OH",
    "stateName": "Ohio",
    "population": 265304,
    "counties": [
      {
        "name": "Lucas County",
        "slug": "lucas-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Toledo voters are served within Lucas County via Lucas County Board of Elections (LucasCountyOhioVotes.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Lucas County Board of Elections (LucasCountyOhioVotes.gov)",
    "votingSystemType": "Early In-Person Center (3737 W Sylvania Ave) + Assigned Polling Place on Election Day",
    "transitAgency": "TARTA (Toledo Area Regional Transit Authority — Free Rides on Election Day)",
    "electionDayTransitPolicy": "TARTA (Toledo Area Regional Transit Authority — Free Rides on Election Day) provides public transit service connecting Toledo neighborhoods with major Lucas County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OH-09"
    ]
  },
  {
    "slug": "st-petersburg-fl",
    "cityName": "St. Petersburg",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 263553,
    "counties": [
      {
        "name": "Pinellas County",
        "slug": "pinellas-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "St. Petersburg voters are served within Pinellas County via Pinellas County Supervisor of Elections (VotePinellas.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Pinellas County Supervisor of Elections (VotePinellas.gov)",
    "votingSystemType": "Early Voting Centers + 20+ Ballot Dropoff Locations + Assigned Precinct on Election Day",
    "transitAgency": "PSTA (Pinellas Suncoast Transit Authority & SunRunner BRT)",
    "electionDayTransitPolicy": "PSTA (Pinellas Suncoast Transit Authority & SunRunner BRT) provides public transit service connecting St. Petersburg neighborhoods with major Pinellas County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "FL-13",
      "FL-14"
    ]
  },
  {
    "slug": "laredo-tx",
    "cityName": "Laredo",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 257602,
    "counties": [
      {
        "name": "Webb County",
        "slug": "webb-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Laredo voters are served within Webb County via Webb County Elections Administration (WebbCountyTX.gov/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Webb County Elections Administration (WebbCountyTX.gov/Elections)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Webb County)",
    "transitAgency": "El Metro Transit Laredo (Free Rides on Election Day)",
    "electionDayTransitPolicy": "El Metro Transit Laredo (Free Rides on Election Day) provides public transit service connecting Laredo neighborhoods with major Webb County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TX-28"
    ]
  },
  {
    "slug": "irving-tx",
    "cityName": "Irving",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 254373,
    "counties": [
      {
        "name": "Dallas County",
        "slug": "dallas-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Irving voters are served within Dallas County via Dallas County Elections Department (DallasCountyVotes.org). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Dallas County Elections Department (DallasCountyVotes.org)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Dallas County)",
    "transitAgency": "DART (Orange Line, TRE & Bus — Free on Election Day)",
    "electionDayTransitPolicy": "DART (Orange Line, TRE & Bus — Free on Election Day) provides public transit service connecting Irving neighborhoods with major Dallas County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TX-24",
      "TX-33"
    ]
  },
  {
    "slug": "chesapeake-va",
    "cityName": "Chesapeake",
    "stateSlug": "virginia",
    "stateAbbr": "VA",
    "stateName": "Virginia",
    "population": 253886,
    "counties": [
      {
        "name": "Chesapeake City",
        "slug": "chesapeake-city"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Chesapeake voters are served within Chesapeake City via Chesapeake Office of Voter Registration and Elections — Independent City. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Chesapeake Office of Voter Registration and Elections — Independent City",
    "votingSystemType": "45-Day Early Voting + Assigned Precinct on Election Day + Same-Day Registration",
    "transitAgency": "Hampton Roads Transit (HRT)",
    "electionDayTransitPolicy": "Hampton Roads Transit (HRT) provides public transit service connecting Chesapeake neighborhoods with major Chesapeake City early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "VA-02",
      "VA-03"
    ]
  },
  {
    "slug": "glendale-az",
    "cityName": "Glendale",
    "stateSlug": "arizona",
    "stateAbbr": "AZ",
    "stateName": "Arizona",
    "population": 253855,
    "counties": [
      {
        "name": "Maricopa County",
        "slug": "maricopa-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Glendale voters are served within Maricopa County via Maricopa County Elections Department (BeBallotReady.Vote). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Maricopa County Elections Department (BeBallotReady.Vote)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Maricopa County)",
    "transitAgency": "Valley Metro & Glendale Urban Shuttle (GUS)",
    "electionDayTransitPolicy": "Valley Metro & Glendale Urban Shuttle (GUS) provides public transit service connecting Glendale neighborhoods with major Maricopa County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AZ-03",
      "AZ-08"
    ]
  },
  {
    "slug": "winston-salem-nc",
    "cityName": "Winston-Salem",
    "stateSlug": "north-carolina",
    "stateAbbr": "NC",
    "stateName": "North Carolina",
    "population": 252975,
    "counties": [
      {
        "name": "Forsyth County",
        "slug": "forsyth-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Winston-Salem voters are served within Forsyth County via Forsyth County Board of Elections (Forsyth.cc/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Forsyth County Board of Elections (Forsyth.cc/Elections)",
    "votingSystemType": "17-Day Early Voting with Same-Day Registration + Assigned Precinct on Election Day",
    "transitAgency": "WSTA (Winston-Salem Transit Authority)",
    "electionDayTransitPolicy": "WSTA (Winston-Salem Transit Authority) provides public transit service connecting Winston-Salem neighborhoods with major Forsyth County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NC-06",
      "NC-10"
    ]
  },
  {
    "slug": "scottsdale-az",
    "cityName": "Scottsdale",
    "stateSlug": "arizona",
    "stateAbbr": "AZ",
    "stateName": "Arizona",
    "population": 244394,
    "counties": [
      {
        "name": "Maricopa County",
        "slug": "maricopa-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Scottsdale voters are served within Maricopa County via Maricopa County Elections Department (BeBallotReady.Vote). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Maricopa County Elections Department (BeBallotReady.Vote)",
    "votingSystemType": "Countywide Vote Centers (Vote Anywhere in Maricopa County)",
    "transitAgency": "Valley Metro & Scottsdale Trolley (Trolley is 100% Free!)",
    "electionDayTransitPolicy": "Valley Metro & Scottsdale Trolley (Trolley is 100% Free!) provides public transit service connecting Scottsdale neighborhoods with major Maricopa County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AZ-01"
    ]
  },
  {
    "slug": "garland-tx",
    "cityName": "Garland",
    "stateSlug": "texas",
    "stateAbbr": "TX",
    "stateName": "Texas",
    "population": 243470,
    "counties": [
      {
        "name": "Dallas County",
        "slug": "dallas-county"
      },
      {
        "name": "Collin County",
        "slug": "collin-county"
      },
      {
        "name": "Rockwall County",
        "slug": "rockwall-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Garland spans 3 counties (Dallas County, Collin County, Rockwall County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Dallas County Elections Department (DallasCountyVotes.org)",
    "votingSystemType": "Countywide Vote Centers",
    "transitAgency": "DART (Blue Line & Bus — Free on Election Day)",
    "electionDayTransitPolicy": "DART (Blue Line & Bus — Free on Election Day) provides public transit service connecting Garland neighborhoods with major Dallas County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TX-03",
      "TX-05",
      "TX-32"
    ]
  },
  {
    "slug": "boise-id",
    "cityName": "Boise",
    "stateSlug": "idaho",
    "stateAbbr": "ID",
    "stateName": "Idaho",
    "population": 235421,
    "counties": [
      {
        "name": "Ada County",
        "slug": "ada-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Boise voters are served within Ada County via Ada County Elections (AdaCounty.id.gov/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Ada County Elections (AdaCounty.id.gov/Elections)",
    "votingSystemType": "Early In-Person Voting (400 N Benjamin Ln & Mobile Voting Food Truck!) + Assigned Precinct with Election Day Same-Day Registration",
    "transitAgency": "Valley Regional Transit (VRT)",
    "electionDayTransitPolicy": "Valley Regional Transit (VRT) provides public transit service connecting Boise neighborhoods with major Ada County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "ID-01",
      "ID-02"
    ]
  },
  {
    "slug": "norfolk-va",
    "cityName": "Norfolk",
    "stateSlug": "virginia",
    "stateAbbr": "VA",
    "stateName": "Virginia",
    "population": 230930,
    "counties": [
      {
        "name": "Norfolk City",
        "slug": "norfolk-city"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Norfolk voters are served within Norfolk City via Norfolk Office of Elections (Norfolk.gov/Elections) — Independent City. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Norfolk Office of Elections (Norfolk.gov/Elections) — Independent City",
    "votingSystemType": "45-Day Early Voting + Assigned Precinct on Election Day + Same-Day Registration",
    "transitAgency": "HRT Bus, Tide Light Rail & Elizabeth River Ferry",
    "electionDayTransitPolicy": "HRT Bus, Tide Light Rail & Elizabeth River Ferry provides public transit service connecting Norfolk neighborhoods with major Norfolk City early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "VA-03"
    ]
  },
  {
    "slug": "spokane-wa",
    "cityName": "Spokane",
    "stateSlug": "washington",
    "stateAbbr": "WA",
    "stateName": "Washington",
    "population": 229447,
    "counties": [
      {
        "name": "Spokane County",
        "slug": "spokane-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Spokane voters are served within Spokane County via Spokane County Elections Office (SpokaneCounty.org/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Spokane County Elections Office (SpokaneCounty.org/Elections)",
    "votingSystemType": "100% Universal Vote-by-Mail + 25+ Official Drop Boxes + Same-Day Registration up to 8 PM on Nov 3",
    "transitAgency": "Spokane Transit Authority (STA & City Line)",
    "electionDayTransitPolicy": "Spokane Transit Authority (STA & City Line) provides public transit service connecting Spokane neighborhoods with major Spokane County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "WA-05"
    ]
  },
  {
    "slug": "richmond-va",
    "cityName": "Richmond",
    "stateSlug": "virginia",
    "stateAbbr": "VA",
    "stateName": "Virginia",
    "population": 229239,
    "counties": [
      {
        "name": "Richmond City",
        "slug": "richmond-city"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Richmond voters are served within Richmond City via Richmond Office of Elections (RVA.gov/Elections — 2134 W Laburnum Ave) — Independent City separate from Henrico/Chesterfield!. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Richmond Office of Elections (RVA.gov/Elections — 2134 W Laburnum Ave) — Independent City separate from Henrico/Chesterfield!",
    "votingSystemType": "45-Day Early Voting + Assigned Precinct on Election Day + Same-Day Registration",
    "transitAgency": "GRTC Transit System & Pulse BRT (100% Zero-Fare Transit!)",
    "electionDayTransitPolicy": "GRTC Transit System & Pulse BRT (100% Zero-Fare Transit!) provides public transit service connecting Richmond neighborhoods with major Richmond City early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "VA-04"
    ]
  },
  {
    "slug": "fremont-ca",
    "cityName": "Fremont",
    "stateSlug": "california",
    "stateAbbr": "CA",
    "stateName": "California",
    "population": 226208,
    "counties": [
      {
        "name": "Alameda County",
        "slug": "alameda-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Fremont voters are served within Alameda County via Alameda County Registrar of Voters (ACVote.org). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Alameda County Registrar of Voters (ACVote.org)",
    "votingSystemType": "Countywide Accessible Vote Centers (Vote Anywhere in Alameda County) + Universal Mail Ballot",
    "transitAgency": "AC Transit & BART (Fremont & Warm Springs Stations)",
    "electionDayTransitPolicy": "AC Transit & BART (Fremont & Warm Springs Stations) provides public transit service connecting Fremont neighborhoods with major Alameda County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CA-14",
      "CA-17"
    ]
  },
  {
    "slug": "huntsville-al",
    "cityName": "Huntsville",
    "stateSlug": "alabama",
    "stateAbbr": "AL",
    "stateName": "Alabama",
    "population": 225564,
    "counties": [
      {
        "name": "Madison County",
        "slug": "madison-county"
      },
      {
        "name": "Limestone County",
        "slug": "limestone-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Huntsville spans 2 counties (Madison County, Limestone County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Madison County Probate Judge & Absentee Election Manager (MadisonCountyAL.gov) + Limestone County (Western Huntsville)",
    "votingSystemType": "Assigned Precinct Polling Place on Election Day (7 AM–7 PM CT; Photo ID Required)",
    "transitAgency": "Orbit Huntsville Transit",
    "electionDayTransitPolicy": "Orbit Huntsville Transit provides public transit service connecting Huntsville neighborhoods with major Madison County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AL-05"
    ]
  },
  {
    "slug": "tacoma-wa",
    "cityName": "Tacoma",
    "stateSlug": "washington",
    "stateAbbr": "WA",
    "stateName": "Washington",
    "population": 222906,
    "counties": [
      {
        "name": "Pierce County",
        "slug": "pierce-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Tacoma voters are served within Pierce County via Pierce County Elections (PierceCountyWA.gov/Elections — 2501 S 35th St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Pierce County Elections (PierceCountyWA.gov/Elections — 2501 S 35th St)",
    "votingSystemType": "100% Universal Vote-by-Mail + 50+ Official 24/7 Ballot Drop Boxes + Pierce County Election Center with Same-Day Registration",
    "transitAgency": "Pierce Transit & Sound Transit T Line Streetcar",
    "electionDayTransitPolicy": "Pierce Transit & Sound Transit T Line Streetcar provides public transit service connecting Tacoma neighborhoods with major Pierce County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "WA-06",
      "WA-09",
      "WA-10"
    ]
  },
  {
    "slug": "hialeah-fl",
    "cityName": "Hialeah",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 221300,
    "counties": [
      {
        "name": "Miami Dade County",
        "slug": "miami-dade-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Hialeah voters are served within Miami Dade County via Miami-Dade County Supervisor of Elections (MiamiDade.gov/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Miami-Dade County Supervisor of Elections (MiamiDade.gov/Elections)",
    "votingSystemType": "Countywide Early Voting (JFK Library & Hialeah Sites) / Assigned Precinct on Election Day (Full Spanish & English Ballots)",
    "transitAgency": "Miami-Dade Metrorail (Hialeah, Tri-Rail & Okeechobee Stations) & Hialeah Transit",
    "electionDayTransitPolicy": "Miami-Dade Metrorail (Hialeah, Tri-Rail & Okeechobee Stations) & Hialeah Transit provides public transit service connecting Hialeah neighborhoods with major Miami Dade County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "FL-26"
    ]
  },
  {
    "slug": "baton-rouge-la",
    "cityName": "Baton Rouge",
    "stateSlug": "louisiana",
    "stateAbbr": "LA",
    "stateName": "Louisiana",
    "population": 219573,
    "counties": [
      {
        "name": "East Baton Rouge Parish",
        "slug": "east-baton-rouge-parish"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Baton Rouge voters are served within East Baton Rouge Parish via East Baton Rouge Parish Registrar of Voters (EBRClerkOfCourt.org / GeauxVote.com). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "East Baton Rouge Parish Registrar of Voters (EBRClerkOfCourt.org / GeauxVote.com)",
    "votingSystemType": "Early Voting (City Hall, Motorists Bldg, Coursey Blvd & Central) + Assigned Precinct on Election Day",
    "transitAgency": "CATS (Capital Area Transit System)",
    "electionDayTransitPolicy": "CATS (Capital Area Transit System) provides public transit service connecting Baton Rouge neighborhoods with major East Baton Rouge Parish early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "LA-02",
      "LA-06"
    ]
  },
  {
    "slug": "des-moines-ia",
    "cityName": "Des Moines",
    "stateSlug": "iowa",
    "stateAbbr": "IA",
    "stateName": "Iowa",
    "population": 210381,
    "counties": [
      {
        "name": "Polk County",
        "slug": "polk-county"
      },
      {
        "name": "Warren County",
        "slug": "warren-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Des Moines spans 2 counties (Polk County, Warren County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Polk County Election Office (PolkCountyIowa.gov/Auditor/Election — 2309 Euclid Ave)",
    "votingSystemType": "20-Day In-Person Absentee + Assigned Precinct with Election Day Same-Day Registration (Polls Close 8:00 PM CT)",
    "transitAgency": "DART (Des Moines Area Regional Transit Authority)",
    "electionDayTransitPolicy": "DART (Des Moines Area Regional Transit Authority) provides public transit service connecting Des Moines neighborhoods with major Polk County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "IA-03"
    ]
  },
  {
    "slug": "salt-lake-city-ut",
    "cityName": "Salt Lake City",
    "stateSlug": "utah",
    "stateAbbr": "UT",
    "stateName": "Utah",
    "population": 209593,
    "counties": [
      {
        "name": "Salt Lake County",
        "slug": "salt-lake-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Salt Lake City voters are served within Salt Lake County via Salt Lake County Clerk Elections Division (SLCo.org/Clerk/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Salt Lake County Clerk Elections Division (SLCo.org/Clerk/Elections)",
    "votingSystemType": "100% Universal Vote-by-Mail + 20+ Official 24/7 Drop Boxes + In-Person Vote Centers (Government Center 2001 S State St)",
    "transitAgency": "UTA (TRAX Light Rail, FrontRunner & Bus — Free Fare Zone Downtown)",
    "electionDayTransitPolicy": "UTA (TRAX Light Rail, FrontRunner & Bus — Free Fare Zone Downtown) provides public transit service connecting Salt Lake City neighborhoods with major Salt Lake County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "UT-01",
      "UT-02",
      "UT-04"
    ]
  },
  {
    "slug": "rochester-ny",
    "cityName": "Rochester",
    "stateSlug": "new-york",
    "stateAbbr": "NY",
    "stateName": "New York",
    "population": 207274,
    "counties": [
      {
        "name": "Monroe County",
        "slug": "monroe-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Rochester voters are served within Monroe County via Monroe County Board of Elections (MonroeCounty.gov/Elections — 39 Main St W). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Monroe County Board of Elections (MonroeCounty.gov/Elections — 39 Main St W)",
    "votingSystemType": "9 Days of Early Voting at ANY of the 20+ Monroe County Early Voting Sites + Assigned Polling Place on Election Day",
    "transitAgency": "RTS (Regional Transit Service)",
    "electionDayTransitPolicy": "RTS (Regional Transit Service) provides public transit service connecting Rochester neighborhoods with major Monroe County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NY-25"
    ]
  },
  {
    "slug": "sioux-falls-sd",
    "cityName": "Sioux Falls",
    "stateSlug": "south-dakota",
    "stateAbbr": "SD",
    "stateName": "South Dakota",
    "population": 206410,
    "counties": [
      {
        "name": "Minnehaha County",
        "slug": "minnehaha-county"
      },
      {
        "name": "Lincoln County",
        "slug": "lincoln-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Sioux Falls spans 2 counties (Minnehaha County, Lincoln County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Minnehaha County Auditor (MinnehahaCounty.gov — 415 N Dakota Ave) & Lincoln County Auditor",
    "votingSystemType": "46 Days of No-Excuse In-Person Absentee Voting at County Auditor + Assigned Precinct on Election Day",
    "transitAgency": "Sioux Area Metro (SAM)",
    "electionDayTransitPolicy": "Sioux Area Metro (SAM) provides public transit service connecting Sioux Falls neighborhoods with major Minnehaha County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "SD-AL"
    ]
  },
  {
    "slug": "little-rock-ar",
    "cityName": "Little Rock",
    "stateSlug": "arkansas",
    "stateAbbr": "AR",
    "stateName": "Arkansas",
    "population": 203842,
    "counties": [
      {
        "name": "Pulaski County",
        "slug": "pulaski-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Little Rock voters are served within Pulaski County via Pulaski County Election Commission & Circuit/County Clerk (VotePulaski.net). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Pulaski County Election Commission & Circuit/County Clerk (VotePulaski.net)",
    "votingSystemType": "Countywide Vote Centers (Vote at ANY Pulaski County Early Voting or Election Day Vote Center! Strict Photo ID Required)",
    "transitAgency": "Rock Region METRO (Bus & Streetcar)",
    "electionDayTransitPolicy": "Rock Region METRO (Bus & Streetcar) provides public transit service connecting Little Rock neighborhoods with major Pulaski County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AR-02"
    ]
  },
  {
    "slug": "augusta-ga",
    "cityName": "Augusta",
    "stateSlug": "georgia",
    "stateAbbr": "GA",
    "stateName": "Georgia",
    "population": 202960,
    "counties": [
      {
        "name": "Richmond County",
        "slug": "richmond-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Augusta voters are served within Richmond County via Augusta-Richmond County Board of Elections (AugustaGA.gov/593/Board-of-Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Augusta-Richmond County Board of Elections (AugustaGA.gov/593/Board-of-Elections)",
    "votingSystemType": "Countywide Early Voting Centers / Assigned Precinct on Election Day",
    "transitAgency": "Augusta Transit",
    "electionDayTransitPolicy": "Augusta Transit provides public transit service connecting Augusta neighborhoods with major Richmond County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "GA-12"
    ]
  },
  {
    "slug": "tallahassee-fl",
    "cityName": "Tallahassee",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 202221,
    "counties": [
      {
        "name": "Leon County",
        "slug": "leon-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Tallahassee voters are served within Leon County via Leon County Supervisor of Elections (LeonVotes.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Leon County Supervisor of Elections (LeonVotes.gov)",
    "votingSystemType": "Early Voting Centers (including FSU Donald L. Tucker Civic Center & FAMU Student Union) + Assigned Precinct on Election Day",
    "transitAgency": "StarMetro Tallahassee",
    "electionDayTransitPolicy": "StarMetro Tallahassee provides public transit service connecting Tallahassee neighborhoods with major Leon County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "FL-02"
    ]
  },
  {
    "slug": "knoxville-tn",
    "cityName": "Knoxville",
    "stateSlug": "tennessee",
    "stateAbbr": "TN",
    "stateName": "Tennessee",
    "population": 198162,
    "counties": [
      {
        "name": "Knox County",
        "slug": "knox-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Knoxville voters are served within Knox County via Knox County Election Commission (KnoxCounty.org/Election). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Knox County Election Commission (KnoxCounty.org/Election)",
    "votingSystemType": "10+ Countywide Early Voting Locations (including Downtown West & UT Baker Center) / Assigned Precinct on Election Day",
    "transitAgency": "KAT (Knoxville Area Transit)",
    "electionDayTransitPolicy": "KAT (Knoxville Area Transit) provides public transit service connecting Knoxville neighborhoods with major Knox County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TN-02"
    ]
  },
  {
    "slug": "overland-park-ks",
    "cityName": "Overland Park",
    "stateSlug": "kansas",
    "stateAbbr": "KS",
    "stateName": "Kansas",
    "population": 197089,
    "counties": [
      {
        "name": "Johnson County",
        "slug": "johnson-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Overland Park voters are served within Johnson County via Johnson County Election Office (JoCoElection.org — 2101 E Kansas City Rd, Olathe). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Johnson County Election Office (JoCoElection.org — 2101 E Kansas City Rd, Olathe)",
    "votingSystemType": "10+ Advance In-Person Voting Satellite Locations + Drop Boxes + Assigned Polling Place on Election Day",
    "transitAgency": "RideKC Johnson County",
    "electionDayTransitPolicy": "RideKC Johnson County provides public transit service connecting Overland Park neighborhoods with major Johnson County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "KS-03"
    ]
  },
  {
    "slug": "birmingham-al",
    "cityName": "Birmingham",
    "stateSlug": "alabama",
    "stateAbbr": "AL",
    "stateName": "Alabama",
    "population": 196644,
    "counties": [
      {
        "name": "Jefferson County",
        "slug": "jefferson-county"
      },
      {
        "name": "Shelby County",
        "slug": "shelby-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Birmingham spans 2 counties (Jefferson County, Shelby County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Jefferson County Board of Registrars & Probate Judge (JeffCoAL.org/Elections)",
    "votingSystemType": "Assigned Precinct Polling Place on Election Day (7 AM–7 PM CT) + Excuse-Required Absentee at County Courthouse",
    "transitAgency": "MAX Transit (BJCTA Bus & Birmingham Xpress BRT)",
    "electionDayTransitPolicy": "MAX Transit (BJCTA Bus & Birmingham Xpress BRT) provides public transit service connecting Birmingham neighborhoods with major Jefferson County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AL-06",
      "AL-07"
    ]
  },
  {
    "slug": "grand-rapids-mi",
    "cityName": "Grand Rapids",
    "stateSlug": "michigan",
    "stateAbbr": "MI",
    "stateName": "Michigan",
    "population": 196608,
    "counties": [
      {
        "name": "Kent County",
        "slug": "kent-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Grand Rapids voters are served within Kent County via Grand Rapids City Clerk (GrandRapidsMI.gov/Clerk — 300 Monroe Ave NW) & Kent County Clerk. Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Grand Rapids City Clerk (GrandRapidsMI.gov/Clerk — 300 Monroe Ave NW) & Kent County Clerk",
    "votingSystemType": "9+ Days of Early In-Person Voting + Official Drop Boxes + Assigned Precinct + Same-Day Registration at City Clerk",
    "transitAgency": "The Rapid (Silver Line, Laker Line & Bus)",
    "electionDayTransitPolicy": "The Rapid (Silver Line, Laker Line & Bus) provides public transit service connecting Grand Rapids neighborhoods with major Kent County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "MI-03"
    ]
  },
  {
    "slug": "vancouver-wa",
    "cityName": "Vancouver",
    "stateSlug": "washington",
    "stateAbbr": "WA",
    "stateName": "Washington",
    "population": 196442,
    "counties": [
      {
        "name": "Clark County",
        "slug": "clark-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Vancouver voters are served within Clark County via Clark County Elections Department (Clark.WA.gov/Elections — 1408 Franklin St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Clark County Elections Department (Clark.WA.gov/Elections — 1408 Franklin St)",
    "votingSystemType": "100% Universal Vote-by-Mail + 22+ Official Ballot Drop Boxes + Same-Day Registration up to 8 PM on Nov 3",
    "transitAgency": "C-TRAN (The Vine BRT & Bus)",
    "electionDayTransitPolicy": "C-TRAN (The Vine BRT & Bus) provides public transit service connecting Vancouver neighborhoods with major Clark County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "WA-03"
    ]
  },
  {
    "slug": "montgomery-al",
    "cityName": "Montgomery",
    "stateSlug": "alabama",
    "stateAbbr": "AL",
    "stateName": "Alabama",
    "population": 195287,
    "counties": [
      {
        "name": "Montgomery County",
        "slug": "montgomery-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Montgomery voters are served within Montgomery County via Montgomery County Probate Office & Board of Registrars (MC-ALA.org/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Montgomery County Probate Office & Board of Registrars (MC-ALA.org/Elections)",
    "votingSystemType": "Assigned Precinct Polling Place on Election Day (7 AM–7 PM CT; Photo ID Required)",
    "transitAgency": "The M (Montgomery Area Transit System)",
    "electionDayTransitPolicy": "The M (Montgomery Area Transit System) provides public transit service connecting Montgomery neighborhoods with major Montgomery County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AL-02"
    ]
  },
  {
    "slug": "providence-ri",
    "cityName": "Providence",
    "stateSlug": "rhode-island",
    "stateAbbr": "RI",
    "stateName": "Rhode Island",
    "population": 190792,
    "counties": [
      {
        "name": "Providence County",
        "slug": "providence-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Providence voters are served within Providence County via Providence Board of Canvassers (ProvidenceRI.gov/Board-of-Canvassers — 25 Dorrance St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Providence Board of Canvassers (ProvidenceRI.gov/Board-of-Canvassers — 25 Dorrance St)",
    "votingSystemType": "20 Days of Early In-Person Voting at Providence City Hall + Assigned Polling Place on Election Day",
    "transitAgency": "RIPTA (Rhode Island Public Transit Authority)",
    "electionDayTransitPolicy": "RIPTA (Rhode Island Public Transit Authority) provides public transit service connecting Providence neighborhoods with major Providence County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "RI-01",
      "RI-02"
    ]
  },
  {
    "slug": "akron-oh",
    "cityName": "Akron",
    "stateSlug": "ohio",
    "stateAbbr": "OH",
    "stateName": "Ohio",
    "population": 188701,
    "counties": [
      {
        "name": "Summit County",
        "slug": "summit-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Akron voters are served within Summit County via Summit County Board of Elections (VoteSummit.gov — 470 Grant St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Summit County Board of Elections (VoteSummit.gov — 470 Grant St)",
    "votingSystemType": "Single Early Voting Center (500 Grant St) + 24/7 Drop Box + Assigned Precinct on Election Day (Strict Photo ID Required)",
    "transitAgency": "METRO RTA Akron (100% Free Rides on Election Day!)",
    "electionDayTransitPolicy": "METRO RTA Akron (100% Free Rides on Election Day!) provides public transit service connecting Akron neighborhoods with major Summit County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OH-13"
    ]
  },
  {
    "slug": "chattanooga-tn",
    "cityName": "Chattanooga",
    "stateSlug": "tennessee",
    "stateAbbr": "TN",
    "stateName": "Tennessee",
    "population": 187030,
    "counties": [
      {
        "name": "Hamilton County",
        "slug": "hamilton-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Chattanooga voters are served within Hamilton County via Hamilton County Election Commission (Elect.HamiltonTN.gov — 700 River Terminal Rd). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Hamilton County Election Commission (Elect.HamiltonTN.gov — 700 River Terminal Rd)",
    "votingSystemType": "Countywide Early Voting Sites / Assigned Precinct on Election Day (Eastern Time Zone!)",
    "transitAgency": "CARTA (Chattanooga Area Regional Transportation Authority & Free Electric Shuttle)",
    "electionDayTransitPolicy": "CARTA (Chattanooga Area Regional Transportation Authority & Free Electric Shuttle) provides public transit service connecting Chattanooga neighborhoods with major Hamilton County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "TN-03"
    ]
  },
  {
    "slug": "fort-lauderdale-fl",
    "cityName": "Fort Lauderdale",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 184255,
    "counties": [
      {
        "name": "Broward County",
        "slug": "broward-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Fort Lauderdale voters are served within Broward County via Broward County Supervisor of Elections (BrowardVotes.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Broward County Supervisor of Elections (BrowardVotes.gov)",
    "votingSystemType": "25+ Countywide Early Voting Sites & Secure Ballot Intake Drop Boxes / Assigned Precinct on Election Day",
    "transitAgency": "Broward County Transit (BCT) & Brightline",
    "electionDayTransitPolicy": "Broward County Transit (BCT) & Brightline provides public transit service connecting Fort Lauderdale neighborhoods with major Broward County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "FL-23",
      "FL-25"
    ]
  },
  {
    "slug": "shreveport-la",
    "cityName": "Shreveport",
    "stateSlug": "louisiana",
    "stateAbbr": "LA",
    "stateName": "Louisiana",
    "population": 177959,
    "counties": [
      {
        "name": "Caddo Parish",
        "slug": "caddo-parish"
      },
      {
        "name": "Bossier Parish",
        "slug": "bossier-parish"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Shreveport spans 2 counties (Caddo Parish, Bossier Parish). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Caddo Parish Registrar of Voters (CaddoVoter.org — 525 Marshall St)",
    "votingSystemType": "Early Voting + Assigned Precinct Polling Place on Election Day (6 AM–8 PM CT)",
    "transitAgency": "SporTran (100% Zero-Fare Bus Transit!)",
    "electionDayTransitPolicy": "SporTran (100% Zero-Fare Bus Transit!) provides public transit service connecting Shreveport neighborhoods with major Caddo Parish early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "LA-04",
      "LA-06"
    ]
  },
  {
    "slug": "eugene-or",
    "cityName": "Eugene",
    "stateSlug": "oregon",
    "stateAbbr": "OR",
    "stateName": "Oregon",
    "population": 177899,
    "counties": [
      {
        "name": "Lane County",
        "slug": "lane-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Eugene voters are served within Lane County via Lane County Elections (LaneCountyOR.gov/Elections — 275 W 10th Ave). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Lane County Elections (LaneCountyOR.gov/Elections — 275 W 10th Ave)",
    "votingSystemType": "100% Universal Vote-by-Mail + 24-Hour Official Drop Boxes",
    "transitAgency": "LTD (Lane Transit District & EmX BRT)",
    "electionDayTransitPolicy": "LTD (Lane Transit District & EmX BRT) provides public transit service connecting Eugene neighborhoods with major Lane County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OR-04"
    ]
  },
  {
    "slug": "salem-or",
    "cityName": "Salem",
    "stateSlug": "oregon",
    "stateAbbr": "OR",
    "stateName": "Oregon",
    "population": 177432,
    "counties": [
      {
        "name": "Marion County",
        "slug": "marion-county"
      },
      {
        "name": "Polk County",
        "slug": "polk-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Salem spans 2 counties (Marion County, Polk County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Marion County Clerk Elections (Co.Marion.OR.us/CO/Elections) & Polk County Clerk (West Salem across the Willamette River is in Polk County!)",
    "votingSystemType": "100% Universal Vote-by-Mail + Official Drop Boxes across Marion & Polk Counties",
    "transitAgency": "Cherriots Transit",
    "electionDayTransitPolicy": "Cherriots Transit provides public transit service connecting Salem neighborhoods with major Marion County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OR-06"
    ]
  },
  {
    "slug": "charleston-sc",
    "cityName": "Charleston",
    "stateSlug": "south-carolina",
    "stateAbbr": "SC",
    "stateName": "South Carolina",
    "population": 155369,
    "counties": [
      {
        "name": "Charleston County",
        "slug": "charleston-county"
      },
      {
        "name": "Berkeley County",
        "slug": "berkeley-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Charleston spans 2 counties (Charleston County, Berkeley County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Charleston County Board of Voter Registration and Elections (CharlestonCounty.org/Departments/BEV — 4340 Corporate Rd)",
    "votingSystemType": "2 Weeks of No-Excuse Early In-Person Voting + Assigned Precinct on Election Day (Strict Photo ID Required)",
    "transitAgency": "CARTA (Charleston Area Regional Transportation Authority & DASH Free Downtown Shuttle)",
    "electionDayTransitPolicy": "CARTA (Charleston Area Regional Transportation Authority & DASH Free Downtown Shuttle) provides public transit service connecting Charleston neighborhoods with major Charleston County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "SC-01",
      "SC-06"
    ]
  },
  {
    "slug": "bridgeport-ct",
    "cityName": "Bridgeport",
    "stateSlug": "connecticut",
    "stateAbbr": "CT",
    "stateName": "Connecticut",
    "population": 148028,
    "counties": [
      {
        "name": "Fairfield County",
        "slug": "fairfield-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Bridgeport voters are served within Fairfield County via Bridgeport Registrars of Voters & Town Clerk (BridgeportCT.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Bridgeport Registrars of Voters & Town Clerk (BridgeportCT.gov)",
    "votingSystemType": "14 Days of Connecticut Early In-Person Voting + Assigned Polling Place + Election Day Registration",
    "transitAgency": "Greater Bridgeport Transit (GBT) & Metro-North",
    "electionDayTransitPolicy": "Greater Bridgeport Transit (GBT) & Metro-North provides public transit service connecting Bridgeport neighborhoods with major Fairfield County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CT-04"
    ]
  },
  {
    "slug": "savannah-ga",
    "cityName": "Savannah",
    "stateSlug": "georgia",
    "stateAbbr": "GA",
    "stateName": "Georgia",
    "population": 147748,
    "counties": [
      {
        "name": "Chatham County",
        "slug": "chatham-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Savannah voters are served within Chatham County via Chatham County Voter Registration & Board of Elections (Elections.ChathamCountyGA.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Chatham County Voter Registration & Board of Elections (Elections.ChathamCountyGA.gov)",
    "votingSystemType": "Countywide Early Voting Sites (Including Saturdays) / Assigned Precinct on Election Day",
    "transitAgency": "CAT (Chatham Area Transit & Free DOT Downtown Shuttle)",
    "electionDayTransitPolicy": "CAT (Chatham Area Transit & Free DOT Downtown Shuttle) provides public transit service connecting Savannah neighborhoods with major Chatham County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "GA-01"
    ]
  },
  {
    "slug": "syracuse-ny",
    "cityName": "Syracuse",
    "stateSlug": "new-york",
    "stateAbbr": "NY",
    "stateName": "New York",
    "population": 145560,
    "counties": [
      {
        "name": "Onondaga County",
        "slug": "onondaga-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Syracuse voters are served within Onondaga County via Onondaga County Board of Elections (OnGov.net/Elections — 1000 Erie Blvd West). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Onondaga County Board of Elections (OnGov.net/Elections — 1000 Erie Blvd West)",
    "votingSystemType": "9 Days of Early Voting at ANY Onondaga County Early Voting Center + Assigned Polling Place on Election Day",
    "transitAgency": "Centro Transit",
    "electionDayTransitPolicy": "Centro Transit provides public transit service connecting Syracuse neighborhoods with major Onondaga County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NY-22"
    ]
  },
  {
    "slug": "jackson-ms",
    "cityName": "Jackson",
    "stateSlug": "mississippi",
    "stateAbbr": "MS",
    "stateName": "Mississippi",
    "population": 143709,
    "counties": [
      {
        "name": "Hinds County",
        "slug": "hinds-county"
      },
      {
        "name": "Madison County",
        "slug": "madison-county"
      },
      {
        "name": "Rankin County",
        "slug": "rankin-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Jackson spans 3 counties (Hinds County, Madison County, Rankin County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Hinds County Circuit Clerk & Election Commission (HindsCountyMS.com)",
    "votingSystemType": "Assigned Precinct Polling Place on Election Day (7 AM–7 PM CT; Photo ID Required) + Excuse-Required In-Person Absentee at Circuit Clerk",
    "transitAgency": "JTRAN (Jackson Public Transportation System)",
    "electionDayTransitPolicy": "JTRAN (Jackson Public Transportation System) provides public transit service connecting Jackson neighborhoods with major Hinds County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "MS-02",
      "MS-03"
    ]
  },
  {
    "slug": "columbia-sc",
    "cityName": "Columbia",
    "stateSlug": "south-carolina",
    "stateAbbr": "SC",
    "stateName": "South Carolina",
    "population": 142416,
    "counties": [
      {
        "name": "Richland County",
        "slug": "richland-county"
      },
      {
        "name": "Lexington County",
        "slug": "lexington-county"
      }
    ],
    "isSplitCounty": true,
    "splitCountyNote": "Columbia spans 2 counties (Richland County, Lexington County). Always verify which county your residential street address falls inside—your county determines your Early Voting centers, sample ballot, and local down-ballot contests.",
    "electionAuthorityName": "Richland County Voter Registration & Elections (RichlandCountySC.gov)",
    "votingSystemType": "2 Weeks of No-Excuse Early In-Person Voting + Assigned Precinct on Election Day (Strict Photo ID Required)",
    "transitAgency": "The COMET (Central Midlands Regional Transit)",
    "electionDayTransitPolicy": "The COMET (Central Midlands Regional Transit) provides public transit service connecting Columbia neighborhoods with major Richland County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "SC-02",
      "SC-06"
    ]
  },
  {
    "slug": "new-haven-ct",
    "cityName": "New Haven",
    "stateSlug": "connecticut",
    "stateAbbr": "CT",
    "stateName": "Connecticut",
    "population": 139135,
    "counties": [
      {
        "name": "New Haven County",
        "slug": "new-haven-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "New Haven voters are served within New Haven County via New Haven Registrars of Voters & City Clerk (NewHavenCT.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "New Haven Registrars of Voters & City Clerk (NewHavenCT.gov)",
    "votingSystemType": "14 Days of Connecticut Early In-Person Voting (200 Orange St) + Assigned Polling Place + Election Day Registration",
    "transitAgency": "CTtransit New Haven & Metro-North",
    "electionDayTransitPolicy": "CTtransit New Haven & Metro-North provides public transit service connecting New Haven neighborhoods with major New Haven County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CT-03"
    ]
  },
  {
    "slug": "cedar-rapids-ia",
    "cityName": "Cedar Rapids",
    "stateSlug": "iowa",
    "stateAbbr": "IA",
    "stateName": "Iowa",
    "population": 135958,
    "counties": [
      {
        "name": "Linn County",
        "slug": "linn-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Cedar Rapids voters are served within Linn County via Linn County Auditor & Elections (LinnCountyIowa.gov/Elections — 935 2nd St SW). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Linn County Auditor & Elections (LinnCountyIowa.gov/Elections — 935 2nd St SW)",
    "votingSystemType": "20-Day In-Person Absentee + Assigned Precinct with Election Day Same-Day Registration",
    "transitAgency": "Cedar Rapids Transit",
    "electionDayTransitPolicy": "Cedar Rapids Transit provides public transit service connecting Cedar Rapids neighborhoods with major Linn County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "IA-02"
    ]
  },
  {
    "slug": "dayton-oh",
    "cityName": "Dayton",
    "stateSlug": "ohio",
    "stateAbbr": "OH",
    "stateName": "Ohio",
    "population": 135512,
    "counties": [
      {
        "name": "Montgomery County",
        "slug": "montgomery-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Dayton voters are served within Montgomery County via Montgomery County Board of Elections (Montgomery.Boe.Ohio.gov — 451 W Third St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Montgomery County Board of Elections (Montgomery.Boe.Ohio.gov — 451 W Third St)",
    "votingSystemType": "Early Voting Center at County Administration Bldg + Assigned Precinct on Election Day",
    "transitAgency": "GDRTA (Greater Dayton Regional Transit Authority)",
    "electionDayTransitPolicy": "GDRTA (Greater Dayton Regional Transit Authority) provides public transit service connecting Dayton neighborhoods with major Montgomery County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "OH-10"
    ]
  },
  {
    "slug": "fargo-nd",
    "cityName": "Fargo",
    "stateSlug": "north-dakota",
    "stateAbbr": "ND",
    "stateName": "North Dakota",
    "population": 133188,
    "counties": [
      {
        "name": "Cass County",
        "slug": "cass-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Fargo voters are served within Cass County via Cass County Finance Office – Elections (CassCountyND.gov/Elections). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Cass County Finance Office – Elections (CassCountyND.gov/Elections)",
    "votingSystemType": "Countywide Vote Centers (Vote at ANY Cass County Vote Center! No Voter Registration in ND—Bring Valid ND ID with Current Street Address)",
    "transitAgency": "MATBUS Fargo-Moorhead",
    "electionDayTransitPolicy": "MATBUS Fargo-Moorhead provides public transit service connecting Fargo neighborhoods with major Cass County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "ND-AL"
    ]
  },
  {
    "slug": "topeka-ks",
    "cityName": "Topeka",
    "stateSlug": "kansas",
    "stateAbbr": "KS",
    "stateName": "Kansas",
    "population": 125475,
    "counties": [
      {
        "name": "Shawnee County",
        "slug": "shawnee-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Topeka voters are served within Shawnee County via Shawnee County Election Office (SNCoco.us/Election — 3420 SW Van Buren St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Shawnee County Election Office (SNCoco.us/Election — 3420 SW Van Buren St)",
    "votingSystemType": "Advance In-Person Voting at Election Office + Drop Boxes + Assigned Polling Place on Election Day",
    "transitAgency": "Topeka Metro (Free Rides on Election Day!)",
    "electionDayTransitPolicy": "Topeka Metro (Free Rides on Election Day!) provides public transit service connecting Topeka neighborhoods with major Shawnee County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "KS-02"
    ]
  },
  {
    "slug": "allentown-pa",
    "cityName": "Allentown",
    "stateSlug": "pennsylvania",
    "stateAbbr": "PA",
    "stateName": "Pennsylvania",
    "population": 125250,
    "counties": [
      {
        "name": "Lehigh County",
        "slug": "lehigh-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Allentown voters are served within Lehigh County via Lehigh County Office of Voter Registration and Elections (LehighCounty.org — 17 S 7th St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Lehigh County Office of Voter Registration and Elections (LehighCounty.org — 17 S 7th St)",
    "votingSystemType": "Over-the-Counter Mail Ballot Voting at Government Center + Drop Boxes + Assigned Precinct on Election Day",
    "transitAgency": "LANta (Lehigh and Northampton Transportation Authority)",
    "electionDayTransitPolicy": "LANta (Lehigh and Northampton Transportation Authority) provides public transit service connecting Allentown neighborhoods with major Lehigh County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "PA-07"
    ]
  },
  {
    "slug": "west-palm-beach-fl",
    "cityName": "West Palm Beach",
    "stateSlug": "florida",
    "stateAbbr": "FL",
    "stateName": "Florida",
    "population": 124130,
    "counties": [
      {
        "name": "Palm Beach County",
        "slug": "palm-beach-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "West Palm Beach voters are served within Palm Beach County via Palm Beach County Supervisor of Elections (VotePalmBeach.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Palm Beach County Supervisor of Elections (VotePalmBeach.gov)",
    "votingSystemType": "25+ Countywide Early Voting Locations / Assigned Precinct on Election Day",
    "transitAgency": "Palm Tran & Tri-Rail",
    "electionDayTransitPolicy": "Palm Tran & Tri-Rail provides public transit service connecting West Palm Beach neighborhoods with major Palm Beach County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "FL-21",
      "FL-22"
    ]
  },
  {
    "slug": "billings-mt",
    "cityName": "Billings",
    "stateSlug": "montana",
    "stateAbbr": "MT",
    "stateName": "Montana",
    "population": 120864,
    "counties": [
      {
        "name": "Yellowstone County",
        "slug": "yellowstone-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Billings voters are served within Yellowstone County via Yellowstone County Elections Office (YellowstoneCountyMT.gov/Elections — 217 N 27th St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Yellowstone County Elections Office (YellowstoneCountyMT.gov/Elections — 217 N 27th St)",
    "votingSystemType": "30-Day Absentee/Early In-Person Voting at County Courthouse + Assigned Polling Place + Late Registration at County Elections Office",
    "transitAgency": "MET Transit Billings",
    "electionDayTransitPolicy": "MET Transit Billings provides public transit service connecting Billings neighborhoods with major Yellowstone County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "MT-02"
    ]
  },
  {
    "slug": "hartford-ct",
    "cityName": "Hartford",
    "stateSlug": "connecticut",
    "stateAbbr": "CT",
    "stateName": "Connecticut",
    "population": 119669,
    "counties": [
      {
        "name": "Hartford County",
        "slug": "hartford-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Hartford voters are served within Hartford County via Hartford Registrars of Voters & Town Clerk (HartfordCT.gov — 550 Main St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Hartford Registrars of Voters & Town Clerk (HartfordCT.gov — 550 Main St)",
    "votingSystemType": "14 Days of Connecticut Early In-Person Voting (New CT Law!) + Assigned Polling Place + Election Day Registration at City Hall",
    "transitAgency": "CTtransit & CTfastrak",
    "electionDayTransitPolicy": "CTtransit & CTfastrak provides public transit service connecting Hartford neighborhoods with major Hartford County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "CT-01"
    ]
  },
  {
    "slug": "ann-arbor-mi",
    "cityName": "Ann Arbor",
    "stateSlug": "michigan",
    "stateAbbr": "MI",
    "stateName": "Michigan",
    "population": 119381,
    "counties": [
      {
        "name": "Washtenaw County",
        "slug": "washtenaw-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Ann Arbor voters are served within Washtenaw County via Ann Arbor City Clerk (A2Gov.org/Elections — 301 E Huron St & UM Campus Satellite Sites!). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Ann Arbor City Clerk (A2Gov.org/Elections — 301 E Huron St & UM Campus Satellite Sites!)",
    "votingSystemType": "Early Voting Centers (including UM Museum of Art / Duderstadt Center) + Drop Boxes + Same-Day Registration until 8 PM Nov 3",
    "transitAgency": "TheRide (AAATA Bus)",
    "electionDayTransitPolicy": "TheRide (AAATA Bus) provides public transit service connecting Ann Arbor neighborhoods with major Washtenaw County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "MI-06"
    ]
  },
  {
    "slug": "manchester-nh",
    "cityName": "Manchester",
    "stateSlug": "new-hampshire",
    "stateAbbr": "NH",
    "stateName": "New Hampshire",
    "population": 115474,
    "counties": [
      {
        "name": "Hillsborough County",
        "slug": "hillsborough-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Manchester voters are served within Hillsborough County via Manchester Office of the City Clerk (ManchesterNH.gov/CityClerk — 1 City Hall Plaza). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Manchester Office of the City Clerk (ManchesterNH.gov/CityClerk — 1 City Hall Plaza)",
    "votingSystemType": "Assigned Ward Polling Place on Election Day (6 AM–7 PM ET) + Same-Day Election Day Registration at the Polls (Proof of Citizenship & Domicile Required)",
    "transitAgency": "Manchester Transit Authority (MTA)",
    "electionDayTransitPolicy": "Manchester Transit Authority (MTA) provides public transit service connecting Manchester neighborhoods with major Hillsborough County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NH-01"
    ]
  },
  {
    "slug": "las-cruces-nm",
    "cityName": "Las Cruces",
    "stateSlug": "new-mexico",
    "stateAbbr": "NM",
    "stateName": "New Mexico",
    "population": 114892,
    "counties": [
      {
        "name": "Dona Ana County",
        "slug": "dona-ana-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Las Cruces voters are served within Dona Ana County via Doña Ana County Clerk's Office (DonaAnaElections.com — 845 N Motel Blvd). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Doña Ana County Clerk's Office (DonaAnaElections.com — 845 N Motel Blvd)",
    "votingSystemType": "Countywide Voting Convenience Centers (Vote & Register Same-Day Anywhere in Doña Ana County)",
    "transitAgency": "RoadRUNNER Transit (100% Fare-Free Transit!)",
    "electionDayTransitPolicy": "RoadRUNNER Transit (100% Fare-Free Transit!) provides public transit service connecting Las Cruces neighborhoods with major Dona Ana County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NM-02"
    ]
  },
  {
    "slug": "provo-ut",
    "cityName": "Provo",
    "stateSlug": "utah",
    "stateAbbr": "UT",
    "stateName": "Utah",
    "population": 113676,
    "counties": [
      {
        "name": "Utah County",
        "slug": "utah-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Provo voters are served within Utah County via Utah County Clerk Elections Division (Vote.UtahCounty.gov — 100 E Center St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Utah County Clerk Elections Division (Vote.UtahCounty.gov — 100 E Center St)",
    "votingSystemType": "100% Universal Vote-by-Mail + 24/7 Official Drop Boxes + Election Day Service Centers",
    "transitAgency": "UTA (UVX BRT is 100% Fare-Free! + FrontRunner)",
    "electionDayTransitPolicy": "UTA (UVX BRT is 100% Fare-Free! + FrontRunner) provides public transit service connecting Provo neighborhoods with major Utah County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "UT-03"
    ]
  },
  {
    "slug": "green-bay-wi",
    "cityName": "Green Bay",
    "stateSlug": "wisconsin",
    "stateAbbr": "WI",
    "stateName": "Wisconsin",
    "population": 105744,
    "counties": [
      {
        "name": "Brown County",
        "slug": "brown-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Green Bay voters are served within Brown County via Green Bay City Clerk (GreenBayWI.gov/Elections — 100 N Jefferson St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Green Bay City Clerk (GreenBayWI.gov/Elections — 100 N Jefferson St)",
    "votingSystemType": "2-Week In-Person Absentee at City Hall + Assigned Ward Polling Place with Election Day Same-Day Registration (Photo ID + Proof of Address)",
    "transitAgency": "Green Bay Metro (Free Rides on Election Day!)",
    "electionDayTransitPolicy": "Green Bay Metro (Free Rides on Election Day!) provides public transit service connecting Green Bay neighborhoods with major Brown County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "WI-08"
    ]
  },
  {
    "slug": "fayetteville-ar",
    "cityName": "Fayetteville",
    "stateSlug": "arkansas",
    "stateAbbr": "AR",
    "stateName": "Arkansas",
    "population": 101680,
    "counties": [
      {
        "name": "Washington County",
        "slug": "washington-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Fayetteville voters are served within Washington County via Washington County Election Commission (WashingtonCountyAR.gov). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Washington County Election Commission (WashingtonCountyAR.gov)",
    "votingSystemType": "Countywide Vote Centers (Vote at ANY Washington County Vote Center, including U of A Arkansas Union!)",
    "transitAgency": "Razorback Transit (100% Fare-Free) & Ozark Regional Transit",
    "electionDayTransitPolicy": "Razorback Transit (100% Fare-Free) & Ozark Regional Transit provides public transit service connecting Fayetteville neighborhoods with major Washington County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "AR-03"
    ]
  },
  {
    "slug": "albany-ny",
    "cityName": "Albany",
    "stateSlug": "new-york",
    "stateAbbr": "NY",
    "stateName": "New York",
    "population": 101228,
    "counties": [
      {
        "name": "Albany County",
        "slug": "albany-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Albany voters are served within Albany County via Albany County Board of Elections (AlbanyCountyNY.gov/Elections — 260 South Pearl St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Albany County Board of Elections (AlbanyCountyNY.gov/Elections — 260 South Pearl St)",
    "votingSystemType": "9 Days of Early Voting at Any Albany County Site + Assigned Polling Place on Election Day",
    "transitAgency": "CDTA (Capital District Transportation Authority)",
    "electionDayTransitPolicy": "CDTA (Capital District Transportation Authority) provides public transit service connecting Albany neighborhoods with major Albany County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NY-20"
    ]
  },
  {
    "slug": "erie-pa",
    "cityName": "Erie",
    "stateSlug": "pennsylvania",
    "stateAbbr": "PA",
    "stateName": "Pennsylvania",
    "population": 93511,
    "counties": [
      {
        "name": "Erie County",
        "slug": "erie-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Erie voters are served within Erie County via Erie County Board of Elections (ErieCountyPA.gov — 140 W 6th St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Erie County Board of Elections (ErieCountyPA.gov — 140 W 6th St)",
    "votingSystemType": "Over-the-Counter Mail Ballot Voting at Courthouse + Drop Box + Assigned Precinct on Election Day",
    "transitAgency": "EMTA (Erie Metropolitan Transit Authority \"The e\")",
    "electionDayTransitPolicy": "EMTA (Erie Metropolitan Transit Authority \"The e\") provides public transit service connecting Erie neighborhoods with major Erie County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "PA-16"
    ]
  },
  {
    "slug": "santa-fe-nm",
    "cityName": "Santa Fe",
    "stateSlug": "new-mexico",
    "stateAbbr": "NM",
    "stateName": "New Mexico",
    "population": 89137,
    "counties": [
      {
        "name": "Santa Fe County",
        "slug": "santa-fe-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Santa Fe voters are served within Santa Fe County via Santa Fe County Clerk's Office (SantaFeCountyNM.gov/Clerk — 100 Catron St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Santa Fe County Clerk's Office (SantaFeCountyNM.gov/Clerk — 100 Catron St)",
    "votingSystemType": "Countywide Voting Convenience Centers (Vote & Register Same-Day Anywhere in Santa Fe County)",
    "transitAgency": "Santa Fe Trails & New Mexico Rail Runner Express",
    "electionDayTransitPolicy": "Santa Fe Trails & New Mexico Rail Runner Express provides public transit service connecting Santa Fe neighborhoods with major Santa Fe County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "NM-03"
    ]
  },
  {
    "slug": "missoula-mt",
    "cityName": "Missoula",
    "stateSlug": "montana",
    "stateAbbr": "MT",
    "stateName": "Montana",
    "population": 77757,
    "counties": [
      {
        "name": "Missoula County",
        "slug": "missoula-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Missoula voters are served within Missoula County via Missoula County Elections Office (MissoulaVotes.com — 140 N Russell St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Missoula County Elections Office (MissoulaVotes.com — 140 N Russell St)",
    "votingSystemType": "30-Day Absentee Voting + Ballot Drop Locations + Polling Places + Same-Day Registration at Fairgrounds Election Center",
    "transitAgency": "Mountain Line (100% Zero-Fare Bus Transit!)",
    "electionDayTransitPolicy": "Mountain Line (100% Zero-Fare Bus Transit!) provides public transit service connecting Missoula neighborhoods with major Missoula County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "MT-01"
    ]
  },
  {
    "slug": "scranton-pa",
    "cityName": "Scranton",
    "stateSlug": "pennsylvania",
    "stateAbbr": "PA",
    "stateName": "Pennsylvania",
    "population": 75805,
    "counties": [
      {
        "name": "Lackawanna County",
        "slug": "lackawanna-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Scranton voters are served within Lackawanna County via Lackawanna County Department of Elections (LackawannaCounty.org — 123 Wyoming Ave). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Lackawanna County Department of Elections (LackawannaCounty.org — 123 Wyoming Ave)",
    "votingSystemType": "Over-the-Counter Mail Ballot Voting + Drop Boxes + Assigned Precinct on Election Day",
    "transitAgency": "COLTS (County of Lackawanna Transit System)",
    "electionDayTransitPolicy": "COLTS (County of Lackawanna Transit System) provides public transit service connecting Scranton neighborhoods with major Lackawanna County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "PA-08"
    ]
  },
  {
    "slug": "wilmington-de",
    "cityName": "Wilmington",
    "stateSlug": "delaware",
    "stateAbbr": "DE",
    "stateName": "Delaware",
    "population": 71675,
    "counties": [
      {
        "name": "New Castle County",
        "slug": "new-castle-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Wilmington voters are served within New Castle County via Delaware Department of Elections – New Castle County Office (Elections.Delaware.gov — 820 N French St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Delaware Department of Elections – New Castle County Office (Elections.Delaware.gov — 820 N French St)",
    "votingSystemType": "10 Days of Early In-Person Voting at Any County Early Voting Site + Assigned Polling Place on Election Day",
    "transitAgency": "DART First State & SEPTA Wilmington/Newark Line",
    "electionDayTransitPolicy": "DART First State & SEPTA Wilmington/Newark Line provides public transit service connecting Wilmington neighborhoods with major New Castle County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "DE-AL"
    ]
  },
  {
    "slug": "portland-me",
    "cityName": "Portland",
    "stateSlug": "maine",
    "stateAbbr": "ME",
    "stateName": "Maine",
    "population": 69104,
    "counties": [
      {
        "name": "Cumberland County",
        "slug": "cumberland-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Portland voters are served within Cumberland County via City of Portland City Clerk Elections Division (PortlandMaine.gov/Elections — 389 Congress St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "City of Portland City Clerk Elections Division (PortlandMaine.gov/Elections — 389 Congress St)",
    "votingSystemType": "30-Day No-Excuse In-Person Absentee Voting at City Hall + Assigned Ward/Precinct with Election Day Same-Day Registration (Ranked-Choice Federal Ballot!)",
    "transitAgency": "Greater Portland METRO Bus",
    "electionDayTransitPolicy": "Greater Portland METRO Bus provides public transit service connecting Portland neighborhoods with major Cumberland County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "ME-01"
    ]
  },
  {
    "slug": "cheyenne-wy",
    "cityName": "Cheyenne",
    "stateSlug": "wyoming",
    "stateAbbr": "WY",
    "stateName": "Wyoming",
    "population": 65168,
    "counties": [
      {
        "name": "Laramie County",
        "slug": "laramie-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Cheyenne voters are served within Laramie County via Laramie County Clerk Elections Office (LaramieCountyWY.gov — 309 W 20th St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Laramie County Clerk Elections Office (LaramieCountyWY.gov — 309 W 20th St)",
    "votingSystemType": "28 Days of Early In-Person Absentee Voting at County Governmental Complex + Countywide Vote Centers on Election Day with Same-Day Registration (Photo ID + Proof of Citizenship)",
    "transitAgency": "Cheyenne Transit Program (CTP)",
    "electionDayTransitPolicy": "Cheyenne Transit Program (CTP) provides public transit service connecting Cheyenne neighborhoods with major Laramie County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "WY-AL"
    ]
  },
  {
    "slug": "charleston-wv",
    "cityName": "Charleston",
    "stateSlug": "west-virginia",
    "stateAbbr": "WV",
    "stateName": "West Virginia",
    "population": 46686,
    "counties": [
      {
        "name": "Kanawha County",
        "slug": "kanawha-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Charleston voters are served within Kanawha County via Kanawha County Clerk Voter Registration Office (Kanawha.us — 415 Quarrier St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Kanawha County Clerk Voter Registration Office (Kanawha.us — 415 Quarrier St)",
    "votingSystemType": "10 Days of Early In-Person Voting (Including 2 Saturdays) + Assigned Precinct on Election Day",
    "transitAgency": "KRT (Kanawha Valley Regional Transportation Authority)",
    "electionDayTransitPolicy": "KRT (Kanawha Valley Regional Transportation Authority) provides public transit service connecting Charleston neighborhoods with major Kanawha County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "WV-01"
    ]
  },
  {
    "slug": "burlington-vt",
    "cityName": "Burlington",
    "stateSlug": "vermont",
    "stateAbbr": "VT",
    "stateName": "Vermont",
    "population": 44528,
    "counties": [
      {
        "name": "Chittenden County",
        "slug": "chittenden-county"
      }
    ],
    "isSplitCounty": false,
    "splitCountyNote": "Burlington voters are served within Chittenden County via Burlington City Clerk/Treasurer Office (BurlingtonVT.gov/CT — 149 Church St). Check your sample ballot and polling location before heading out on Tuesday, November 3, 2026.",
    "electionAuthorityName": "Burlington City Clerk/Treasurer Office (BurlingtonVT.gov/CT — 149 Church St)",
    "votingSystemType": "100% Universal General Election Mail Ballot + Ballot Drop Boxes + Ward Polling Places with Same-Day Registration",
    "transitAgency": "Green Mountain Transit (GMT)",
    "electionDayTransitPolicy": "Green Mountain Transit (GMT) provides public transit service connecting Burlington neighborhoods with major Chittenden County early voting centers, ballot drop boxes, and Election Day polling places.",
    "majorCongressionalDistricts": [
      "VT-AL"
    ]
  }
];

export const CITIES_2026_MAP: Record<string, CityElectionData2026> = Object.fromEntries(
  CITIES_2026_LIST.map((c) => [c.slug, c])
);
