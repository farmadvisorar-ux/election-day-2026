import { ImageResponse } from 'next/og';
import { STATES_DATA } from '../../../../../data/states';
import { COUNTIES_BY_STATE, getCountyElectionAuthorityTitle } from '../../../../../data/counties';

export const alt = 'County Election Day 2026 Official Voter Guide — Polling Hours, Early Voting & Voter ID';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

interface Props {
  params: Promise<{ state: string; county: string }>;
}

export default async function Image({ params }: Props) {
  const { state: stateSlug, county: countySlug } = await params;
  const sSlug = stateSlug.toLowerCase();
  const cSlug = countySlug.toLowerCase();

  const state = STATES_DATA[sSlug];
  const county = (COUNTIES_BY_STATE[sSlug] || []).find((c) => c.slug === cSlug);

  if (!state || !county) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            fontSize: 48,
            fontWeight: 900,
          }}
        >
          {'ElectionDay2026.org — U.S. County Voter Guide'}
        </div>
      ),
      { ...size }
    );
  }

  const authorityTitle = getCountyElectionAuthorityTitle(state.postalCode, county.name);
  const pollHours = county.pollingHoursOverride || state.pollingHours;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #1e3a8a 100%)',
          color: '#ffffff',
          padding: '48px 56px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              {`FIPS ${county.fips}`}
            </div>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                color: '#93c5fd',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {`County Seat: ${county.countySeat}`}
            </div>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                color: '#cbd5e1',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {`CD: ${county.congressionalDistricts.slice(0, 3).join(', ')}`}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              backgroundColor: '#f59e0b',
              color: '#0f172a',
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: 20,
              fontWeight: 900,
            }}
          >
            {'NOV 3, 2026 MIDTERMS'}
          </div>
        </div>

        {/* Main County Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
          <div style={{ display: 'flex', fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            {`${county.name}, ${state.postalCode}`}
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#93c5fd', fontWeight: 700 }}>
            {`${authorityTitle} • 2026 Official Voter Guide`}
          </div>
          <div style={{ display: 'flex', fontSize: 20, color: '#cbd5e1' }}>
            {`Serving ${county.topCities.slice(0, 4).join(', ')} (USPS ZIPs ${county.zipRange})`}
          </div>
        </div>

        {/* 3 Statutory Cards */}
        <div style={{ display: 'flex', gap: '18px', width: '100%', marginTop: '16px' }}>
          <div
            style={{
              flex: 1,
              backgroundColor: 'rgba(30, 41, 59, 0.9)',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', fontSize: 15, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>
              {'Nov 3 Poll Hours'}
            </div>
            <div style={{ display: 'flex', fontSize: 24, color: '#ffffff', fontWeight: 800, marginTop: '6px' }}>
              {`${pollHours}`}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: 'rgba(30, 41, 59, 0.9)',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', fontSize: 15, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>
              {'Voter ID Requirement'}
            </div>
            <div style={{ display: 'flex', fontSize: 24, color: '#fbbf24', fontWeight: 800, marginTop: '6px' }}>
              {`${state.voterId.type}`}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: 'rgba(30, 41, 59, 0.9)',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', fontSize: 15, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>
              {'Census Electorate'}
            </div>
            <div style={{ display: 'flex', fontSize: 24, color: '#34d399', fontWeight: 800, marginTop: '6px' }}>
              {`${county.population.toLocaleString()} Pop.`}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #334155',
            paddingTop: '16px',
            fontSize: 18,
            color: '#94a3b8',
          }}
        >
          <div style={{ display: 'flex' }}>{'ElectionDay2026.org • Non-Partisan Civic Reference'}</div>
          <div style={{ display: 'flex', color: '#e2e8f0', fontWeight: 700 }}>
            {`/states/${state.slug}/counties/${county.slug}`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
