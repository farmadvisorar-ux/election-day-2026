import { COUNTIES_BY_STATE, CountyItem } from './counties';
import { STATES_DATA, StateElectionData } from './states';

export interface CongressionalDistrictItem {
  code: string; // e.g. "TX-07", "PA-01", "WY-AL"
  slug: string; // e.g. "tx-07", "pa-01", "wy-al"
  districtNumber: string; // e.g. "07", "01", "At-Large"
  stateSlug: string;
  stateCode: string;
  stateName: string;
  counties: CountyItem[];
  majorCities: string[];
  zipRanges: string[];
  totalCountyPopulation: number;
  totalCountyCvap: number;
  isBattlegroundState: boolean;
}

export const DISTRICTS_BY_SLUG: Record<string, CongressionalDistrictItem> = (() => {
  const map: Record<string, CongressionalDistrictItem> = {};

  for (const [stateSlug, counties] of Object.entries(COUNTIES_BY_STATE)) {
    const state: StateElectionData | undefined = STATES_DATA[stateSlug];
    if (!state) continue;

    for (const county of counties) {
      for (const cdCode of county.congressionalDistricts) {
        const slug = cdCode.toLowerCase();
        const rawDist = cdCode.split('-')[1] || '01';
        const districtNumber = rawDist === 'AL' ? 'At-Large' : rawDist;

        if (!map[slug]) {
          map[slug] = {
            code: cdCode,
            slug,
            districtNumber,
            stateSlug,
            stateCode: state.postalCode,
            stateName: state.name,
            counties: [],
            majorCities: [],
            zipRanges: [],
            totalCountyPopulation: 0,
            totalCountyCvap: 0,
            isBattlegroundState: state.battleground,
          };
        }

        const item = map[slug];
        if (!item.counties.some((c) => c.fips === county.fips)) {
          item.counties.push(county);
          item.totalCountyPopulation += county.population;
          item.totalCountyCvap += county.cvap;
          if (county.zipRange && !item.zipRanges.includes(county.zipRange)) {
            item.zipRanges.push(county.zipRange);
          }
          for (const city of [county.countySeat, ...county.topCities]) {
            if (city && !item.majorCities.includes(city)) {
              item.majorCities.push(city);
            }
          }
        }
      }
    }
  }

  // Sort counties and cities cleanly within each district
  for (const dist of Object.values(map)) {
    dist.counties.sort((a, b) => b.population - a.population);
    dist.majorCities = dist.majorCities.slice(0, 12);
    dist.zipRanges = dist.zipRanges.slice(0, 6);
  }

  return map;
})();

export const ALL_DISTRICTS_LIST: CongressionalDistrictItem[] = Object.values(DISTRICTS_BY_SLUG).sort(
  (a, b) => a.code.localeCompare(b.code)
);

export const DISTRICTS_BY_STATE: Record<string, CongressionalDistrictItem[]> = (() => {
  const byState: Record<string, CongressionalDistrictItem[]> = {};
  for (const dist of ALL_DISTRICTS_LIST) {
    if (!byState[dist.stateSlug]) byState[dist.stateSlug] = [];
    byState[dist.stateSlug].push(dist);
  }
  return byState;
})();

export const TOP_COMPETITIVE_HOUSE_DISTRICTS: { district: string }[] = [
  { district: 'pa-01' },
  { district: 'pa-07' },
  { district: 'pa-08' },
  { district: 'pa-10' },
  { district: 'pa-17' },
  { district: 'mi-07' },
  { district: 'mi-08' },
  { district: 'mi-10' },
  { district: 'wi-01' },
  { district: 'wi-03' },
  { district: 'az-01' },
  { district: 'az-06' },
  { district: 'nv-01' },
  { district: 'nv-03' },
  { district: 'nv-04' },
  { district: 'nc-01' },
  { district: 'ga-02' },
  { district: 'tx-15' },
  { district: 'tx-28' },
  { district: 'tx-34' },
  { district: 'ca-13' },
  { district: 'ca-22' },
  { district: 'ca-27' },
  { district: 'ca-41' },
  { district: 'ca-45' },
  { district: 'ca-47' },
  { district: 'ny-03' },
  { district: 'ny-04' },
  { district: 'ny-17' },
  { district: 'ny-18' },
  { district: 'ny-19' },
  { district: 'ny-22' },
  { district: 'oh-01' },
  { district: 'oh-09' },
  { district: 'oh-13' },
  { district: 'va-02' },
  { district: 'va-07' },
  { district: 'me-02' },
  { district: 'ne-02' },
  { district: 'ia-01' },
  { district: 'ia-03' },
  { district: 'co-08' },
  { district: 'wa-03' },
  { district: 'or-05' },
  { district: 'nm-02' },
  { district: 'ak-al' },
];
