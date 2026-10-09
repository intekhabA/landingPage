import React, { useState } from 'react';
import { SearchFilters } from '../types';

interface SearchConsoleProps {
  filters: SearchFilters;
  onFilterChange: (newFilters: SearchFilters) => void;
  matchedCount: number;
  onExploreSubmit: () => void;
}

export const SearchConsole: React.FC<SearchConsoleProps> = ({
  filters,
  onFilterChange,
  matchedCount,
  onExploreSubmit
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [showMatchToast, setShowMatchToast] = useState(false);

  const quickFilterOptions = [
    'Ready for Fit-out',
    'Golf Course Facing',
    'Sea Panorama',
    'UAE Golden Visa',
    'Private Elevators',
    'Zero Brokerage'
  ];

  const handleSelectChange = (key: keyof SearchFilters, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const toggleChip = (chip: string) => {
    const active = filters.quickFilters.includes(chip);
    const newChips = active
      ? filters.quickFilters.filter((c) => c !== chip)
      : [...filters.quickFilters, chip];

    onFilterChange({
      ...filters,
      quickFilters: newChips
    });
  };

  const handleSearchClick = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowMatchToast(true);
      onExploreSubmit();
      setTimeout(() => {
        setShowMatchToast(false);
      }, 3000);
    }, 450);
  };

  const handleReset = () => {
    onFilterChange({
      territory: 'all',
      assetType: 'all',
      bhk: 'any',
      budgetTier: 'any',
      quickFilters: []
    });
  };

  const hasActiveFilters =
    filters.territory !== 'all' ||
    filters.assetType !== 'all' ||
    filters.bhk !== 'any' ||
    filters.budgetTier !== 'any' ||
    filters.quickFilters.length > 0;

  return (
    <section className="w-full py-10 sm:py-14 bg-[#080e1b]" id="search-console">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131C2E] p-4 sm:p-6 lg:p-8 rounded-xl border border-[#1E293B] shadow-2xl">
          
          {/* Console Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-6 bg-[#0B111E] p-4 rounded-lg border border-[#1E293B]/70">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#D4AF37]">tune</span>
              <span className="font-display text-sm sm:text-base text-[#F8FAFC] uppercase tracking-widest font-semibold">
                Private Acquisition Console
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-[#94A3B8] font-display text-[11px] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                <span>Real-Time Allocation Registry • Updated Daily</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={handleReset}
                  className="text-[11px] font-display text-[#D4AF37] hover:underline uppercase tracking-wider ml-2"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls Form Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
            
            {/* Territory */}
            <div className="flex flex-col space-y-1.5">
              <label className="font-display text-[11px] text-[#94A3B8] uppercase tracking-wider flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-xs text-[#D4AF37]">pin_drop</span>
                <span>Prime Territory</span>
              </label>
              <div className="relative">
                <select
                  value={filters.territory}
                  onChange={(e) => handleSelectChange('territory', e.target.value)}
                  className="w-full bg-[#0B111E] text-[#F8FAFC] font-body text-sm py-2.5 px-3.5 rounded border border-[#1E293B] appearance-none focus:outline-none focus:border-[#D4AF37]/60 shadow-inner cursor-pointer"
                >
                  <option value="all">All Prime Territories</option>
                  <option value="gurgaon">Gurgaon (Golf Course Rd &amp; SPR)</option>
                  <option value="mumbai">Mumbai (Worli, BKC, South)</option>
                  <option value="dubai">Dubai (Palm, Downtown, Waterfront)</option>
                  <option value="bengaluru">Bengaluru (Lavelle Rd &amp; Central)</option>
                  <option value="noida">Noida (Expressway &amp; Sec 128)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none text-sm">
                  expand_more
                </span>
              </div>
            </div>

            {/* Asset Typology */}
            <div className="flex flex-col space-y-1.5">
              <label className="font-display text-[11px] text-[#94A3B8] uppercase tracking-wider flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-xs text-[#D4AF37]">apartment</span>
                <span>Asset Typology</span>
              </label>
              <div className="relative">
                <select
                  value={filters.assetType}
                  onChange={(e) => handleSelectChange('assetType', e.target.value)}
                  className="w-full bg-[#0B111E] text-[#F8FAFC] font-body text-sm py-2.5 px-3.5 rounded border border-[#1E293B] appearance-none focus:outline-none focus:border-[#D4AF37]/60 shadow-inner cursor-pointer"
                >
                  <option value="all">All Asset Classes</option>
                  <option value="sky-penthouses">Sky Penthouses</option>
                  <option value="luxury-residences">Luxury Residences (4 &amp; 5 BHK)</option>
                  <option value="villas">Signature Beachfront Villas</option>
                  <option value="commercial">Grade-A Institutional Retail</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none text-sm">
                  expand_more
                </span>
              </div>
            </div>

            {/* Configuration / BHK */}
            <div className="flex flex-col space-y-1.5">
              <label className="font-display text-[11px] text-[#94A3B8] uppercase tracking-wider flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-xs text-[#D4AF37]">king_bed</span>
                <span>Configuration / BHK</span>
              </label>
              <div className="relative">
                <select
                  value={filters.bhk}
                  onChange={(e) => handleSelectChange('bhk', e.target.value)}
                  className="w-full bg-[#0B111E] text-[#F8FAFC] font-body text-sm py-2.5 px-3.5 rounded border border-[#1E293B] appearance-none focus:outline-none focus:border-[#D4AF37]/60 shadow-inner cursor-pointer"
                >
                  <option value="any">Any Configuration</option>
                  <option value="3">3 BHK Ultra Suite</option>
                  <option value="4">4 BHK Grand Residence</option>
                  <option value="5">5+ BHK / Sky Villa</option>
                  <option value="mansion">Standalone Family Compound</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none text-sm">
                  expand_more
                </span>
              </div>
            </div>

            {/* Capital Deployment Range */}
            <div className="flex flex-col space-y-1.5">
              <label className="font-display text-[11px] text-[#94A3B8] uppercase tracking-wider flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-xs text-[#D4AF37]">payments</span>
                <span>Capital Allocation</span>
              </label>
              <div className="relative">
                <select
                  value={filters.budgetTier}
                  onChange={(e) => handleSelectChange('budgetTier', e.target.value)}
                  className="w-full bg-[#0B111E] text-[#F8FAFC] font-body text-sm py-2.5 px-3.5 rounded border border-[#1E293B] appearance-none focus:outline-none focus:border-[#D4AF37]/60 shadow-inner cursor-pointer"
                >
                  <option value="any">Any Allocation Tier</option>
                  <option value="2-5">₹ 2 Cr - 5 Cr (High Yield)</option>
                  <option value="5-15">₹ 5 Cr - 15 Cr (Prime Luxury)</option>
                  <option value="15plus">₹ 15 Cr+ (Ultra-Prestige)</option>
                  <option value="dubai-tier">AED 10M - 50M+ (Sovereign UAE)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none text-sm">
                  expand_more
                </span>
              </div>
            </div>

          </div>

          {/* Quick Filter Chips & Search Action */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-2 border-t border-[#1E293B]/60">
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="font-display text-[11px] text-[#94A3B8] uppercase tracking-wider pr-1 font-semibold">
                Popular Filters:
              </span>
              {quickFilterOptions.map((chip) => {
                const isSelected = filters.quickFilters.includes(chip);
                return (
                  <button
                    key={chip}
                    onClick={() => toggleChip(chip)}
                    className={`px-3 py-1 text-xs rounded font-display transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-[#D4AF37] text-[#070B14] font-bold border-[#D4AF37]'
                        : 'bg-[#0B111E] text-[#94A3B8] border-[#1E293B] hover:text-[#F8FAFC] hover:bg-[#161b29]'
                    }`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleSearchClick}
              disabled={isSearching}
              className="w-full lg:w-auto px-8 py-3 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#070B14] font-display text-[13px] uppercase tracking-wider rounded font-bold transition-all duration-200 hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              {isSearching ? (
                <>
                  <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                  <span>Filtering Registry...</span>
                </>
              ) : showMatchToast ? (
                <>
                  <span className="material-symbols-outlined text-base text-[#070B14]">check</span>
                  <span>{matchedCount} Residences Matched</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">search</span>
                  <span>Explore Curated Inventory ({matchedCount})</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
