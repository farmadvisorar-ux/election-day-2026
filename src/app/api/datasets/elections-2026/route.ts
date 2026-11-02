import { NextResponse } from 'next/server';
import { STATES_DATA } from '../../../../data/states';
import { COUNTIES_BY_STATE, TOTAL_US_COUNTIES_COUNT } from '../../../../data/counties';
import { COMPREHENSIVE_QUERY_MATRIX } from '../../../../data/queries';

export async function GET() {
  const payload = {
    datasetMetadata: {
      name: 'United States 2026 Midterm General Election 50-State, D.C. & 3,143-County Statutory Dataset',
      version: '2026.11',
      electionDate: '2026-11-03',
      statutoryAuthority: '2 U.S. Code § 7',
      license: 'https://creativecommons.org/publicdomain/zero/1.0/',
      publisher: 'ElectionDay2026.org Non-Partisan Civic Initiative',
      canonicalUrl: 'https://election-day-2026.vercel.app/50-state-comparison-matrix',
      countiesDirectoryUrl: 'https://election-day-2026.vercel.app/counties',
      totalStateJurisdictions: Object.keys(STATES_DATA).length,
      totalCountyJurisdictions: TOTAL_US_COUNTIES_COUNT,
    },
    jurisdictions: Object.values(STATES_DATA).map((state) => ({
      ...state,
      countyCount: (COUNTIES_BY_STATE[state.slug] || []).length,
      counties: COUNTIES_BY_STATE[state.slug] || [],
    })),
    verifiedFaqClusters: COMPREHENSIVE_QUERY_MATRIX,
  };

  return NextResponse.json(payload, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
