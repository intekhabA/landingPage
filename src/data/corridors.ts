import { CorridorData } from '../types';

export const CORRIDORS: CorridorData[] = [
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    regionTag: 'National Capital Region',
    growthTag: '+8.4% YoY Growth',
    description: 'Golf Course Road, SPR & Dwarka Expressway. High-density multinational corporate headquarters and Fortune 500 leadership residency.',
    metric1Label: 'Average Gross Yield',
    metric1Value: '4.2% - 5.1%',
    metric2Label: 'Active Verified Inventory',
    metric2Value: '84 Private Units',
    activeInventoryCount: 84,
    highlights: ['DLF Golf Links Belt', 'Southern Peripheral Expressway', 'Private Helipads', 'Tier-1 International Schools']
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    regionTag: 'Financial Capital',
    growthTag: 'Prime Capital Preservation',
    description: 'Worli, Bandra-Kurla Complex (BKC) & South Mumbai. Scarcity-driven trophy assets, coastal road connectivity, and high-net-worth liquidity.',
    metric1Label: 'Capital Appreciation 3-Yr',
    metric1Value: '+28.4%',
    metric2Label: 'Active Verified Inventory',
    metric2Value: '62 Private Units',
    activeInventoryCount: 62,
    highlights: ['Bandra-Worli Sea Link Arterial', 'Coastal Road Direct Access', 'Heritage Malabar Hill Parcels', 'Private Waterfront Landings']
  },
  {
    id: 'dubai',
    name: 'Dubai Waterfront',
    regionTag: 'United Arab Emirates',
    growthTag: '7.2% Net Yield Tax-Free',
    description: 'Palm Jumeirah, Downtown Dubai & Dubai Marina. 100% foreign freehold ownership, zero tax on capital gains, and direct Golden Visa qualification.',
    metric1Label: 'Sovereign Tax Shield',
    metric1Value: '0% Capital Gains',
    metric2Label: 'Active Verified Inventory',
    metric2Value: '48 Trophy Enclaves',
    activeInventoryCount: 48,
    highlights: ['10-Year Renewable Golden Visa', 'Zero Wealth & Inheritance Tax', 'Yacht Slipways & Private Marinas', 'DLD Escrow Guaranteed']
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    regionTag: 'Tech & Enterprise Capital',
    growthTag: 'High HNW Tenant Influx',
    description: 'Lavelle Road, Sadashivanagar & Outer Ring Road Corridor. Founder estates, green residential enclaves, and consistent multinational tenancy demand.',
    metric1Label: 'Rental Demand Index',
    metric1Value: '9.6 / 10 Strong',
    metric2Label: 'Active Verified Inventory',
    metric2Value: '35 Gated Estates',
    activeInventoryCount: 35,
    highlights: ['Billionaires Row Sadashivanagar', 'Cubbon Park Green Reserve Buffer', 'Top Tech Unicorn Founder Residences', 'C1 Airport Corridor Links']
  },
  {
    id: 'noida',
    name: 'Noida Expressway & Sector 128',
    regionTag: 'Aviation & Infrastructure Corridor',
    growthTag: 'Noida International Airport Catalyst',
    description: 'Wide low-density green boulevards, world-class golf links properties, and rapid institutional connectivity linking Central Delhi to Jewar International Airport.',
    metric1Label: 'Infrastructure Index',
    metric1Value: 'Tier-1 Aerotropolis',
    metric2Label: 'Rental Uptick (24-Mo)',
    metric2Value: '+21.3%',
    activeInventoryCount: 29,
    highlights: ['Jewar International Aerotropolis', 'Jaypee Wish Town 18-Hole Championship Course', 'Low Density 2 Units/Floor Mandate', 'Direct Delhi DND Flyway Access']
  }
];
