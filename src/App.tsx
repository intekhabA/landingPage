import React, { useState, useMemo } from 'react';
import { Currency, Property, SearchFilters } from './types';
import { PROPERTIES } from './data/properties';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchConsole } from './components/SearchConsole';
import { FeaturedResidences } from './components/FeaturedResidences';
import { CorridorsSection } from './components/CorridorsSection';
import { PavilionStandard } from './components/PavilionStandard';
import { VipScheduler } from './components/VipScheduler';
import { Footer } from './components/Footer';
import { ProspectusModal } from './components/ProspectusModal';
import { ConciergeModal } from './components/ConciergeModal';
import { InvestmentCalculatorModal } from './components/InvestmentCalculatorModal';
import { ShortlistDrawer } from './components/ShortlistDrawer';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [currentSection, setCurrentSection] = useState('featured-residences');
  const [selectedProspectus, setSelectedProspectus] = useState<Property | null>(null);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isShortlistOpen, setIsShortlistOpen] = useState(false);
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>(['camellias-gurgaon']);

  // Filters State
  const [filters, setFilters] = useState<SearchFilters>({
    territory: 'all',
    assetType: 'all',
    bhk: 'any',
    budgetTier: 'any',
    quickFilters: ['Ready for Fit-out']
  });

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Territory
      if (filters.territory !== 'all' && property.corridor !== filters.territory) {
        return false;
      }

      // Asset Typology
      if (filters.assetType !== 'all' && property.assetType !== filters.assetType) {
        return false;
      }

      // BHK
      if (filters.bhk !== 'any') {
        if (filters.bhk === '5' && Number(property.bhk) < 5) return false;
        if (filters.bhk !== '5' && filters.bhk !== 'mansion' && property.bhk !== filters.bhk) {
          return false;
        }
      }

      // Budget Tier
      if (filters.budgetTier !== 'any') {
        if (filters.budgetTier === '2-5' && (property.priceInrCr < 2 || property.priceInrCr > 5)) {
          return false;
        }
        if (filters.budgetTier === '5-15' && (property.priceInrCr < 5 || property.priceInrCr > 15)) {
          return false;
        }
        if (filters.budgetTier === '15plus' && property.priceInrCr < 15) {
          return false;
        }
        if (filters.budgetTier === 'dubai-tier' && property.corridor !== 'dubai') {
          return false;
        }
      }

      // Quick Filters
      if (filters.quickFilters.length > 0) {
        for (const chip of filters.quickFilters) {
          if (chip === 'Ready for Fit-out' && !property.status.toLowerCase().includes('ready')) {
            return false;
          }
          if (chip === 'Golf Course Facing' && !property.highlights.some(h => h.toLowerCase().includes('golf'))) {
            return false;
          }
          if (chip === 'Sea Panorama' && !property.highlights.some(h => h.toLowerCase().includes('sea') || h.toLowerCase().includes('shoreline'))) {
            return false;
          }
          if (chip === 'UAE Golden Visa' && !property.badges.rera.includes('Golden Visa')) {
            return false;
          }
          if (chip === 'Private Elevators' && !property.highlights.some(h => h.toLowerCase().includes('elevators') || h.toLowerCase().includes('plunge'))) {
            return false;
          }
        }
      }

      return true;
    });
  }, [filters]);

  // Saved properties list
  const savedProperties = useMemo(() => {
    return PROPERTIES.filter((p) => savedPropertyIds.includes(p.id));
  }, [savedPropertyIds]);

  const handleToggleSave = (id: string) => {
    setSavedPropertyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);

    if (sectionId === 'dubai-waterfront') {
      setFilters((prev) => ({
        ...prev,
        territory: 'dubai'
      }));
      const el = document.getElementById('featured-residences');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSearch = () => {
    const el = document.getElementById('search-console');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToResidences = () => {
    const el = document.getElementById('featured-residences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToScheduler = () => {
    const el = document.getElementById('why-us');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCorridor = (corridorId: string) => {
    setFilters((prev) => ({
      ...prev,
      territory: corridorId
    }));
    handleScrollToResidences();
  };

  return (
    <div className="min-h-screen bg-[#0d1320] text-[#dde2f5] font-['Manrope',sans-serif] antialiased selection:bg-[#D4AF37] selection:text-[#070B14]">
      
      {/* Top Fixed Header */}
      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenVisitModal={handleScrollToScheduler}
        onOpenConciergeModal={() => setIsConciergeOpen(true)}
        onOpenShortlist={() => setIsShortlistOpen(true)}
        savedCount={savedPropertyIds.length}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#0d1320] min-h-[calc(100vh-80px)]">
        
        {/* Section 1: Hero */}
        <Hero
          currency={currency}
          onExploreClick={handleScrollToSearch}
          onFilterRera={() => {
            setFilters({
              territory: 'all',
              assetType: 'all',
              bhk: 'any',
              budgetTier: 'any',
              quickFilters: ['Ready for Fit-out']
            });
            handleScrollToSearch();
          }}
        />

        {/* Section 2: Bespoke Search & Filter Console */}
        <SearchConsole
          filters={filters}
          onFilterChange={setFilters}
          matchedCount={filteredProperties.length}
          onExploreSubmit={handleScrollToResidences}
        />

        {/* Section 3: Featured Luxury Developments */}
        <FeaturedResidences
          properties={filteredProperties.length > 0 ? filteredProperties : PROPERTIES.slice(0, 4)}
          currency={currency}
          onOpenProspectus={(prop) => setSelectedProspectus(prop)}
          onToggleSave={handleToggleSave}
          savedPropertyIds={savedPropertyIds}
        />

        {/* Section 4: Strategic Growth Corridors */}
        <CorridorsSection
          selectedCorridor={filters.territory}
          onSelectCorridor={handleSelectCorridor}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* Section 5: The Pavilion Standard */}
        <PavilionStandard />

        {/* Section 6: VIP Private Site Visit Scheduler */}
        <VipScheduler />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Modals & Trays */}
      <ProspectusModal
        property={selectedProspectus}
        currency={currency}
        onClose={() => setSelectedProspectus(null)}
        onBookInspection={(title) => {
          setSelectedProspectus(null);
          handleScrollToScheduler();
        }}
      />

      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        onBookInspection={() => {
          setIsConciergeOpen(false);
          handleScrollToScheduler();
        }}
      />

      <InvestmentCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        currency={currency}
        onBookAdvisory={() => {
          setIsCalculatorOpen(false);
          setIsConciergeOpen(true);
        }}
      />

      <ShortlistDrawer
        isOpen={isShortlistOpen}
        onClose={() => setIsShortlistOpen(false)}
        savedProperties={savedProperties}
        currency={currency}
        onRemove={handleToggleSave}
        onOpenProspectus={(p) => {
          setIsShortlistOpen(false);
          setSelectedProspectus(p);
        }}
        onBookCombinedInspection={() => {
          setIsShortlistOpen(false);
          handleScrollToScheduler();
        }}
      />

    </div>
  );
}
