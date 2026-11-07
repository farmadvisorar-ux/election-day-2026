export interface DocumentTypeOption {
  id: string;
  name: string;
  category: 'government-photo' | 'student-id' | 'military-tribal' | 'carry-license' | 'non-photo-gov' | 'digital-wallet';
}

export const DOCUMENT_TYPES: DocumentTypeOption[] = [
  { id: 'drivers-license', name: "In-State Driver's License or State ID", category: 'government-photo' },
  { id: 'out-of-state-dl', name: "Out-of-State Driver's License", category: 'government-photo' },
  { id: 'us-passport', name: "U.S. Passport or Passport Card", category: 'government-photo' },
  { id: 'military-veteran-id', name: "U.S. Military / Uniformed Services / Veteran ID", category: 'military-tribal' },
  { id: 'tribal-id', name: "Tribal ID (Federally or State Recognized)", category: 'military-tribal' },
  { id: 'college-student-id', name: "College / University Student Photo ID", category: 'student-id' },
  { id: 'concealed-carry-license', name: "Concealed Handgun / Firearm Carry License", category: 'carry-license' },
  { id: 'digital-wallet-id', name: "Digital Driver's License on Smartphone (Apple Wallet / State App)", category: 'digital-wallet' },
  { id: 'utility-bill-bank-statement', name: "Utility Bill, Bank Statement, or Paycheck with Address", category: 'non-photo-gov' },
  { id: 'voter-registration-card', name: "Official Voter Registration Card / Certificate", category: 'non-photo-gov' },
  { id: 'no-id-at-all', name: "No ID / Left Wallet at Home", category: 'non-photo-gov' },
];

export interface IdValidationResult {
  verdict: 'ACCEPTED' | 'CONDITIONAL' | 'NOT_ACCEPTED';
  headline: string;
  details: string;
  cureRules?: string;
  sourceStatute: string;
}

export interface StateIdProfile {
  stateSlug: string;
  stateName: string;
  stateAbbr: string;
  category: 'Strict Photo ID' | 'Non-Strict Photo ID' | 'Non-Photo ID Required' | 'Signature Verification Only';
  statuteCitation: string;
  generalRuleSummary: string;
  expirationRuleSummary: string;
  studentIdPolicy: string;
  digitalIdPolicy: string;
  provisionalCureDeadline: string;
}

export const STATE_ID_PROFILES: Record<string, StateIdProfile> = {
  texas: {
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    category: 'Strict Photo ID',
    statuteCitation: 'Tex. Elec. Code § 63.0101 & § 63.001',
    generalRuleSummary:
      'Texas requires one of 7 acceptable forms of photo ID. If you cannot reasonably obtain one, you may sign a Reasonable Impediment Declaration (RID) and present a supporting non-photo document.',
    expirationRuleSummary:
      'For voters aged 18–69, the photo ID may be expired up to 4 years. For voters aged 70 or older, the photo ID may be expired for any length of time if otherwise valid.',
    studentIdPolicy:
      'NOT ACCEPTED. Student IDs from colleges and universities are strictly prohibited as primary photo ID under Texas state law.',
    digitalIdPolicy:
      'NOT ACCEPTED. Digital driver’s licenses or electronic copies displayed on smartphones/Apple Wallet cannot be accepted by Texas poll workers.',
    provisionalCureDeadline:
      '6th calendar day after Election Day (must present acceptable ID at County Voter Registrar office).',
  },
  georgia: {
    stateSlug: 'georgia',
    stateName: 'Georgia',
    stateAbbr: 'GA',
    category: 'Strict Photo ID',
    statuteCitation: 'O.C.G.A. § 21-2-417',
    generalRuleSummary:
      'Georgia strictly requires a government-issued photo ID for in-person voting. If voting by mail, you must provide your driver’s license number, state ID number, or a photocopy of ID.',
    expirationRuleSummary:
      'Any valid state or federal government employee photo ID, military ID, or passport may be expired; Georgia driver’s licenses are accepted if valid or expired within statutory limits.',
    studentIdPolicy:
      'CONDITIONAL. Only photo IDs from approved Georgia public colleges/universities (Board of Regents or Technical College System) are accepted. Private university student IDs are NOT accepted.',
    digitalIdPolicy:
      'NOT ACCEPTED. Georgia digital driver’s licenses in Apple Wallet are approved for TSA at airports, but NOT yet authorized for in-person voting check-in.',
    provisionalCureDeadline:
      '3 business days after Election Day (by Friday, November 6, 2026 at the County Elections Office).',
  },
  ohio: {
    stateSlug: 'ohio',
    stateName: 'Ohio',
    stateAbbr: 'OH',
    category: 'Strict Photo ID',
    statuteCitation: 'Ohio Rev. Code § 3505.18 (Amended by HB 458)',
    generalRuleSummary:
      'Ohio requires an unexpired government-issued photo ID. Utility bills, bank statements, and college student IDs are no longer accepted for in-person voting under Ohio HB 458.',
    expirationRuleSummary:
      'The photo ID must be UNEXPIRED (except for military IDs which can have no expiration or be current).',
    studentIdPolicy:
      'STRICTLY PROHIBITED. Student photo IDs from public or private universities are completely barred under Ohio state law.',
    digitalIdPolicy:
      'NOT ACCEPTED. Electronic or digital images of IDs on smartphones cannot be used at Ohio polling places.',
    provisionalCureDeadline:
      '4 days after Election Day (must present valid photo ID to the County Board of Elections).',
  },
  northcarolina: {
    stateSlug: 'northcarolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    category: 'Non-Strict Photo ID',
    statuteCitation: 'N.C. Gen. Stat. § 163-166.16',
    generalRuleSummary:
      'North Carolina voters must show an acceptable photo ID. If you lack one, you can vote a regular ballot by signing an ID Exception Form (for reasonable impediments, natural disasters, or religious objections) or vote a provisional ballot.',
    expirationRuleSummary:
      'For voters aged 18–64, photo ID must be unexpired or expired for 1 year or less. For voters aged 65+, any ID expired on or after their 65th birthday is valid indefinitely.',
    studentIdPolicy:
      'ACCEPTED IF APPROVED. Student IDs from approved North Carolina colleges and universities (approved by the State Board of Elections) are accepted.',
    digitalIdPolicy:
      'NOT ACCEPTED. Photos of IDs on phones are not permitted; physical card required (unless using an officially NCSBE-approved mobile college ID).',
    provisionalCureDeadline:
      'County canvass day (typically 9 days after Election Day, by 5:00 PM at County Board of Elections).',
  },
  wisconsin: {
    stateSlug: 'wisconsin',
    stateName: 'Wisconsin',
    stateAbbr: 'WI',
    category: 'Strict Photo ID',
    statuteCitation: 'Wis. Stat. § 5.02(6m) & § 6.79(2)',
    generalRuleSummary:
      'Wisconsin requires acceptable photo ID for in-person and absentee voting. Your address does NOT need to match your voter registration on your photo ID.',
    expirationRuleSummary:
      'Wisconsin driver’s license, state ID, military ID, or U.S. passport may be expired if the expiration date is after the date of the most recent general election (Nov 5, 2024).',
    studentIdPolicy:
      'CONDITIONAL. Student IDs must have: (1) photo, (2) student signature, (3) issuance date, (4) expiration date within 2 years, AND (5) separate proof of current enrollment (tuition receipt or campus portal).',
    digitalIdPolicy:
      'NOT ACCEPTED. Wisconsin law requires the physical document to be inspected by election inspectors.',
    provisionalCureDeadline:
      'Friday after Election Day by 4:00 PM at your municipal clerk’s office.',
  },
  pennsylvania: {
    stateSlug: 'pennsylvania',
    stateName: 'Pennsylvania',
    stateAbbr: 'PA',
    category: 'Signature Verification Only',
    statuteCitation: '25 P.S. § 3050(a)',
    generalRuleSummary:
      'In Pennsylvania, photo ID is ONLY required if you are voting in an election precinct for the FIRST TIME. Returning voters in their regular precinct simply sign the pollbook without showing ID.',
    expirationRuleSummary:
      'First-time voters may use any valid photo or non-photo ID. If photo ID, it may be unexpired or expired within 12 months.',
    studentIdPolicy:
      'ACCEPTED FOR FIRST-TIME VOTERS. Any valid Pennsylvania college or university student ID (photo or non-photo) is valid for first-time precinct voters.',
    digitalIdPolicy:
      'Physical paper or card required for first-time voter check-in.',
    provisionalCureDeadline:
      '6th calendar day after Election Day (following county board of elections provisional challenges).',
  },
  michigan: {
    stateSlug: 'michigan',
    stateName: 'Michigan',
    stateAbbr: 'MI',
    category: 'Non-Strict Photo ID',
    statuteCitation: 'MCL 168.523',
    generalRuleSummary:
      'Michigan voters are asked to present photo ID. However, if you do not have photo ID with you, you have the statutory right under Michigan law to sign a simple "Affidavit of Voter Not in Possession of Picture ID" and vote a regular ballot.',
    expirationRuleSummary:
      'Photo ID may be unexpired or expired.',
    studentIdPolicy:
      'ACCEPTED. Photo IDs issued by any accredited high school, college, or university in Michigan are fully accepted.',
    digitalIdPolicy:
      'Physical ID or signed affidavit of non-possession required.',
    provisionalCureDeadline:
      '6 days after Election Day (if voting a provisional envelope ballot).',
  },
  arizona: {
    stateSlug: 'arizona',
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    category: 'Non-Strict Photo ID',
    statuteCitation: 'A.R.S. § 16-579',
    generalRuleSummary:
      'Arizona voters have 3 options: (1) One unexpired government photo ID with current address; OR (2) Two separate non-photo documents showing name and address (utility bills, bank statements, vehicle registration); OR (3) One photo ID with non-matching address plus one supporting document with current address.',
    expirationRuleSummary:
      'Photo ID must be unexpired (unless it is a tribal ID).',
    studentIdPolicy:
      'CONDITIONAL. A college student ID can serve as photo ID, but if it lacks your current voting address, you must pair it with a utility bill or lease agreement.',
    digitalIdPolicy:
      'ACCEPTED IN SELECT COUNTIES. Arizona mobile driver’s licenses (mDL) on smartphones are accepted at equipped Vote Centers in Maricopa and Pima counties.',
    provisionalCureDeadline:
      '5 business days after Election Day (by Tuesday, November 10, 2026).',
  },
  florida: {
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    category: 'Non-Strict Photo ID',
    statuteCitation: 'Fla. Stat. § 101.043',
    generalRuleSummary:
      'Florida requires an approved photo ID with signature. If your photo ID lacks a signature (e.g. passport), you can provide a second ID with your signature (e.g. credit card or debit card). If you have no ID, you vote a provisional ballot that automatically counts if your signature matches your voter file!',
    expirationRuleSummary:
      'Photo ID must be current and unexpired.',
    studentIdPolicy:
      'ACCEPTED. Student IDs with photos are explicitly listed among the 12 statutorily approved forms of photo ID in Florida.',
    digitalIdPolicy:
      'NOT ACCEPTED. Electronic digital driver’s licenses cannot be used at Florida polling places.',
    provisionalCureDeadline:
      'Thursday following Election Day by 5:00 PM local time.',
  },
  california: {
    stateSlug: 'california',
    stateName: 'California',
    stateAbbr: 'CA',
    category: 'Signature Verification Only',
    statuteCitation: 'Cal. Elec. Code § 14216',
    generalRuleSummary:
      'California does NOT require photo ID or document verification for voting in person. Registered voters simply sign their name in the pollbook under penalty of perjury (or return their signed mail-in ballot). Only certain first-time federal voters who did not provide ID during registration must show ID.',
    expirationRuleSummary:
      'N/A for regular voters.',
    studentIdPolicy:
      'N/A for regular voters; accepted as supporting ID for first-time HAVA voters.',
    digitalIdPolicy:
      'N/A for in-person voting.',
    provisionalCureDeadline:
      'Signature cure deadline is 2 days prior to election certification (approx. 28 days post-election).',
  },
  newyork: {
    stateSlug: 'newyork',
    stateName: 'New York',
    stateAbbr: 'NY',
    category: 'Signature Verification Only',
    statuteCitation: 'N.Y. Elec. Law § 8-304',
    generalRuleSummary:
      'New York does NOT require voters to present photo ID at polling places. You sign your name in the pollbook and your signature is matched against your voter registration card on file. Only first-time federal registrants without an ID match must show ID.',
    expirationRuleSummary:
      'N/A for regular voters.',
    studentIdPolicy:
      'N/A for regular voters; valid for first-time HAVA registrants.',
    digitalIdPolicy:
      'N/A.',
    provisionalCureDeadline:
      'Affidavit / provisional ballot signature cure notice within 7 days of notice.',
  },
  illinois: {
    stateSlug: 'illinois',
    stateName: 'Illinois',
    stateAbbr: 'IL',
    category: 'Signature Verification Only',
    statuteCitation: '10 ILCS 5/17-9',
    generalRuleSummary:
      'Illinois uses signature verification. Registered voters do not show ID at their regular precinct polling place. However, if you are using Same-Day Registration on Election Day, you must bring two forms of ID (one showing current address).',
    expirationRuleSummary:
      'N/A for registered voters.',
    studentIdPolicy:
      'Student IDs serve as one of the two forms of ID for Same-Day Registration.',
    digitalIdPolicy:
      'N/A for regular check-in.',
    provisionalCureDeadline:
      '14 days after Election Day (Tuesday, November 17, 2026).',
  },
};

export function evaluateVoterId(
  stateSlug: string,
  docId: string,
  condition: 'valid' | 'expired-recent' | 'expired-old' | 'digital-phone' | 'no-expiration'
): IdValidationResult {
  const profile = STATE_ID_PROFILES[stateSlug] || {
    stateSlug,
    stateName: 'Your State',
    stateAbbr: 'US',
    category: 'Non-Strict Photo ID' as const,
    statuteCitation: 'State Election Code',
    generalRuleSummary: 'Verify acceptable ID on your state’s official voter guide.',
    expirationRuleSummary: 'Check local expiration rules.',
    studentIdPolicy: 'Check university guidelines.',
    digitalIdPolicy: 'Physical document recommended.',
    provisionalCureDeadline: 'Check county clerk office.',
  };

  // Case 1: No ID at all
  if (docId === 'no-id-at-all') {
    if (profile.category === 'Signature Verification Only') {
      return {
        verdict: 'ACCEPTED',
        headline: `No ID Needed in ${profile.stateName}! Sign and Vote Regular Ballot`,
        details: `${profile.stateName} does not require registered voters to show an ID card at the polls. You simply state your name, verify your address, and sign the pollbook roster under penalty of perjury.`,
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'michigan') {
      return {
        verdict: 'ACCEPTED',
        headline: 'Sign the "Affidavit of Voter Not in Possession of ID" & Vote Regular Ballot',
        details:
          'Under Michigan law (MCL 168.523), you do NOT need to leave the polls! Tell the election worker: "I am not in possession of picture ID and wish to sign the affidavit." You will sign a brief form and cast a regular ballot that is counted immediately.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'northcarolina') {
      return {
        verdict: 'ACCEPTED',
        headline: 'Fill Out the "ID Exception Form" & Vote a Regular Ballot',
        details:
          'North Carolina law guarantees that voters who lack photo ID can complete a simple "ID Exception Form" citing a reasonable impediment (such as lack of transportation, lack of birth certificate, disability, or work schedule) and vote a regular ballot.',
        sourceStatute: profile.statuteCitation,
      };
    }
    return {
      verdict: 'CONDITIONAL',
      headline: `Request a Provisional Ballot & Cure Within Statutory Window`,
      details: `Because ${profile.stateName} is a ${profile.category} jurisdiction, you cannot cast a standard ballot without ID. However, under the federal Help America Vote Act (HAVA), poll workers CANNOT turn you away. Request a Provisional Ballot!`,
      cureRules: `You must present acceptable ID to the County Board of Elections / Voter Registrar by ${profile.provisionalCureDeadline}.`,
      sourceStatute: profile.statuteCitation,
    };
  }

  // Case 2: Digital ID on phone
  if (docId === 'digital-wallet-id' || condition === 'digital-phone') {
    if (stateSlug === 'arizona') {
      return {
        verdict: 'CONDITIONAL',
        headline: 'Digital ID Accepted in Maricopa and Pima Counties (Check Local Site)',
        details:
          'Arizona is one of the few states pilot-testing mobile driver’s licenses (mDL) at equipped Vote Centers in Phoenix and Tucson. However, poll workers in smaller rural counties may lack digital scanners—carry your physical card as backup.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (profile.category === 'Signature Verification Only') {
      return {
        verdict: 'ACCEPTED',
        headline: `No ID Needed to Vote in ${profile.stateName}`,
        details: `Even though digital driver's licenses are not officially scanned, ${profile.stateName} does not require an ID for registered voters! Simply sign the pollbook.`,
        sourceStatute: profile.statuteCitation,
      };
    }
    return {
      verdict: 'NOT_ACCEPTED',
      headline: `Digital IDs on Phones NOT Accepted at ${profile.stateName} Polls`,
      details: `${profile.stateName} election statutes require physical hard-copy identification cards. Digital driver’s licenses in Apple Wallet, Google Wallet, or state apps cannot be inspected or swiped by poll workers on Election Day.`,
      cureRules: 'Bring your physical plastic driver’s license, passport, or military card instead.',
      sourceStatute: profile.statuteCitation,
    };
  }

  // Case 3: Student ID
  if (docId === 'college-student-id') {
    if (stateSlug === 'ohio') {
      return {
        verdict: 'NOT_ACCEPTED',
        headline: 'College Student IDs Strictly BANNED Under Ohio HB 458',
        details:
          'Ohio law strictly bans all college and university student IDs (even from state universities like Ohio State or Cincinnati). If you show a student ID in Ohio, poll workers will reject it.',
        cureRules: 'Bring an unexpired Ohio driver’s license, state ID, U.S. passport, or military ID instead.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'texas') {
      return {
        verdict: 'CONDITIONAL',
        headline: 'Student IDs Not a Primary Photo ID — Use Reasonable Impediment Form',
        details:
          'College student IDs are not on the list of 7 primary photo IDs in Texas. If you do not possess an unexpired Texas DL, passport, or military ID, you may present your student ID as a supporting document alongside a signed Reasonable Impediment Declaration (RID).',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'wisconsin') {
      if (condition === 'valid') {
        return {
          verdict: 'CONDITIONAL',
          headline: 'Wisconsin Requires Student ID + Separate Proof of Enrollment',
          details:
            'Your student ID must have a photo, student signature, and expiration date within 2 years of issuance. CRITICAL: You must ALSO show separate proof of current enrollment (e.g. tuition bill, class schedule, or campus portal on your phone).',
          sourceStatute: profile.statuteCitation,
        };
      }
      return {
        verdict: 'NOT_ACCEPTED',
        headline: 'Expired Wisconsin Student IDs Generally Not Accepted',
        details:
          'Unlike driver’s licenses, Wisconsin student IDs must be unexpired or accompanied by current enrollment proof matching statutory formatting rules.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (profile.category === 'Signature Verification Only') {
      return {
        verdict: 'ACCEPTED',
        headline: `No ID Required for Registered Voters in ${profile.stateName}`,
        details: `Your college student ID is not even required—simply sign the pollbook to vote. If you are a first-time federal voter in Pennsylvania, your student ID is fully accepted!`,
        sourceStatute: profile.statuteCitation,
      };
    }
    return {
      verdict: 'ACCEPTED',
      headline: `College Student ID Accepted in ${profile.stateName}`,
      details: profile.studentIdPolicy,
      sourceStatute: profile.statuteCitation,
    };
  }

  // Case 4: Expired In-State Driver's License
  if (docId === 'drivers-license' && (condition === 'expired-recent' || condition === 'expired-old')) {
    if (stateSlug === 'texas') {
      if (condition === 'expired-recent') {
        return {
          verdict: 'ACCEPTED',
          headline: 'Expired Texas Driver’s License Accepted (Up to 4 Years!)',
          details:
            'Under Texas Election Code § 63.0101, voters aged 18–69 can use a Texas driver’s license expired up to 4 years prior to Election Day (November 3, 2026). Voters aged 70 or older can use a license expired for any length of time!',
          sourceStatute: profile.statuteCitation,
        };
      }
      return {
        verdict: 'CONDITIONAL',
        headline: 'Expired Over 4 Years? Allowed for Seniors Age 70+, or Use RID Form',
        details:
          'If you are age 70 or older, your Texas driver’s license is valid regardless of expiration date. If under 70 and expired more than 4 years, you can sign a Reasonable Impediment Declaration and show a utility bill, bank statement, or voter registration certificate.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'ohio') {
      return {
        verdict: 'NOT_ACCEPTED',
        headline: 'Ohio Requires UNEXPIRED Driver’s License (Zero Grace Period)',
        details:
          'Under Ohio HB 458, an expired Ohio driver’s license or state ID card is NOT valid for in-person voting. If your license is expired, you will be forced to vote a provisional ballot and must renew your ID and cure it within 4 days.',
        cureRules: 'Bring an unexpired U.S. passport or military ID if your license is expired.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'northcarolina') {
      if (condition === 'expired-recent') {
        return {
          verdict: 'ACCEPTED',
          headline: 'North Carolina Accepts Driver’s License Expired Up to 1 Year',
          details:
            'Under N.C. Gen. Stat. § 163-166.16, your North Carolina driver’s license can be expired for up to one year (or indefinitely for voters aged 65 and older).',
          sourceStatute: profile.statuteCitation,
        };
      }
      return {
        verdict: 'CONDITIONAL',
        headline: 'Expired Over 1 Year? Complete the ID Exception Form',
        details:
          'If expired more than 1 year, complete an official ID Exception Form citing lack of documentation/transportation to cast a regular ballot.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'wisconsin') {
      if (condition === 'expired-recent') {
        return {
          verdict: 'ACCEPTED',
          headline: 'Wisconsin Accepts License Expired After November 5, 2024',
          details:
            'Wisconsin law allows a driver’s license to be expired if the expiration date is after the date of the previous general election (November 5, 2024).',
          sourceStatute: profile.statuteCitation,
        };
      }
      return {
        verdict: 'NOT_ACCEPTED',
        headline: 'Expired Before Nov 5, 2024? Not Accepted at Wisconsin Polls',
        details:
          'Your license expired before the statutory cutoff. Bring an unexpired passport, military ID, or obtain a free Wisconsin voting photo ID from the DMV.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (profile.category === 'Signature Verification Only') {
      return {
        verdict: 'ACCEPTED',
        headline: `No ID Needed in ${profile.stateName}!`,
        details: `Your expired license does not matter—${profile.stateName} does not require ID for regular voting. Just sign the pollbook.`,
        sourceStatute: profile.statuteCitation,
      };
    }
  }

  // Case 5: Out of State Driver's License
  if (docId === 'out-of-state-dl') {
    if (stateSlug === 'texas' || stateSlug === 'ohio' || stateSlug === 'wisconsin') {
      return {
        verdict: 'NOT_ACCEPTED',
        headline: `Out-of-State Driver's License NOT Accepted as Photo ID in ${profile.stateName}`,
        details: `${profile.stateName} strictly requires an in-state driver’s license or federal ID (U.S. Passport or Military ID). Out-of-state licenses are not valid proof of identity for voting.`,
        cureRules: 'Bring a U.S. Passport, U.S. Military ID, or (in Texas) complete a Reasonable Impediment Declaration.',
        sourceStatute: profile.statuteCitation,
      };
    }
    if (profile.category === 'Signature Verification Only') {
      return {
        verdict: 'ACCEPTED',
        headline: `No ID Required for Registered Voters in ${profile.stateName}`,
        details: `If you are already registered in ${profile.stateName}, you do not need to show an ID card at all.`,
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'georgia') {
      return {
        verdict: 'NOT_ACCEPTED',
        headline: 'Georgia Requires Georgia Driver’s License or Federal Government ID',
        details:
          'An out-of-state driver’s license cannot be used at Georgia voting machines. If you do not have a Georgia license, bring a U.S. passport, military ID, or free Georgia Voter ID card.',
        sourceStatute: profile.statuteCitation,
      };
    }
  }

  // Case 6: Standard Valid Photo ID (U.S. Passport, Military ID, In-State License)
  if (
    docId === 'us-passport' ||
    docId === 'military-veteran-id' ||
    docId === 'tribal-id' ||
    (docId === 'drivers-license' && condition === 'valid')
  ) {
    return {
      verdict: 'ACCEPTED',
      headline: `100% Valid Photo ID Across All 50 States + D.C.!`,
      details: `Your ${docId === 'us-passport' ? 'U.S. Passport' : docId === 'military-veteran-id' ? 'Military / Veteran ID' : 'Valid In-State Driver’s License'} meets the highest statutory identification standard in the United States and is accepted at every polling place in ${profile.stateName}.`,
      sourceStatute: profile.statuteCitation,
    };
  }

  // Case 7: Non-photo supporting document (Utility bill, bank statement)
  if (docId === 'utility-bill-bank-statement' || docId === 'voter-registration-card') {
    if (profile.category === 'Strict Photo ID') {
      if (stateSlug === 'texas') {
        return {
          verdict: 'CONDITIONAL',
          headline: 'Accepted with Signed Reasonable Impediment Declaration (RID)',
          details:
            'In Texas, a utility bill, bank statement, or voter registration certificate is an approved "Supporting Document" under Tex. Elec. Code § 63.0101(i) when accompanied by a signed Reasonable Impediment Declaration.',
          sourceStatute: profile.statuteCitation,
        };
      }
      return {
        verdict: 'NOT_ACCEPTED',
        headline: `Non-Photo Documents NOT Accepted for Standard Voting in ${profile.stateName}`,
        details: `${profile.stateName} enforces a Strict Photo ID law. Paper utility bills and bank statements are not accepted at the check-in table. You must vote a provisional ballot and cure within ${profile.provisionalCureDeadline}.`,
        sourceStatute: profile.statuteCitation,
      };
    }
    if (stateSlug === 'arizona') {
      return {
        verdict: 'CONDITIONAL',
        headline: 'Accepted as "List 2" ID (Need 2 Separate Documents)',
        details:
          'Arizona allows you to vote with non-photo ID if you present TWO separate documents bearing your name and current address (e.g., utility bill + bank statement, or vehicle registration + property tax bill).',
        sourceStatute: profile.statuteCitation,
      };
    }
    return {
      verdict: 'ACCEPTED',
      headline: `Accepted in ${profile.stateName}`,
      details: `${profile.stateName} accepts official non-photo documents showing your name and current address for voter check-in.`,
      sourceStatute: profile.statuteCitation,
    };
  }

  // Default fallback
  return {
    verdict: 'ACCEPTED',
    headline: `Document Valid for Voting in ${profile.stateName}`,
    details: `${profile.generalRuleSummary} ${profile.expirationRuleSummary}`,
    sourceStatute: profile.statuteCitation,
  };
}
