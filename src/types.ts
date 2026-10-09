export type Currency = 'INR' | 'AED' | 'USD';

export interface Property {
  id: string;
  title: string;
  location: string;
  corridor: 'gurgaon' | 'mumbai' | 'dubai' | 'bengaluru' | 'noida';
  corridorLabel: string;
  assetType: 'sky-penthouses' | 'luxury-residences' | 'villas' | 'commercial';
  assetTypeLabel: string;
  bhk: string;
  priceInrCr: number;
  priceAedM: number;
  priceUsdM: number;
  superArea: string;
  usableCarpet: string;
  status: string;
  statusTag: 'ready' | 'possession-soon' | 'under-construction';
  reraNumber: string;
  badges: {
    allocation: string;
    rera: string;
    feature: string;
  };
  highlights: string[];
  image: string;
  gallery: string[];
  alt: string;
  handover: string;
  expectedGrossYield: string;
  architect: string;
  description: string;
  floorPlanType: string;
  parkingSpaces: number;
  maintenancePerSqFt: string;
}

export interface CorridorData {
  id: 'gurgaon' | 'mumbai' | 'dubai' | 'bengaluru' | 'noida';
  name: string;
  regionTag: string;
  growthTag: string;
  description: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  activeInventoryCount: number;
  highlights: string[];
}

export interface SearchFilters {
  territory: string;
  assetType: string;
  bhk: string;
  budgetTier: string;
  quickFilters: string[];
}
