import React from 'react';
import { CORRIDORS } from '../data/corridors';

interface CorridorsSectionProps {
  selectedCorridor: string;
  onSelectCorridor: (corridorId: string) => void;
  onOpenCalculator: () => void;
}

export const CorridorsSection: React.FC<CorridorsSectionProps> = ({
  selectedCorridor,
  onSelectCorridor,
  onOpenCalculator,
}) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#0B111E]" id="prime-corridors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-display text-[11px] text-[#D4AF37] uppercase tracking-widest block mb-2 font-semibold">
              Strategic Capital Allocation
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#F8FAFC] font-light tracking-tight">
              Explore Properties by Prime Corridor
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-3">
              Institutional intelligence tracking sovereign wealth inflow, infrastructure completion, and institutional rental yields across the Golden Quadrant and GCC corridors.
            </p>
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 font-display text-[11px] text-[#D4AF37] hover:text-[#F3E5AB] uppercase tracking-wider font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">calculate</span>
              <span>Open Cross-Border Yield &amp; Tax Modeling Tool</span>
            </button>
          </div>
        </div>

        {/* Corridor Grid (5 Asymmetric Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORRIDORS.map((corridor) => {
            const isNoida = corridor.id === 'noida';
            const isSelected = selectedCorridor === corridor.id;

            return (
              <div
                key={corridor.id}
                onClick={() => onSelectCorridor(corridor.id)}
                className={`bg-[#131C2E] rounded-xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg ${
                  isNoida ? 'md:col-span-2 lg:col-span-2' : ''
                } ${
                  isSelected
                    ? 'border-[#D4AF37] ring-1 ring-[#D4AF37] bg-[#1a233a]'
                    : 'border-[#1E293B] hover:border-[#D4AF37]/50 hover:bg-[#182236]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-display text-[11px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                      {corridor.regionTag}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#0B111E] text-[#10B981] font-display text-[11px] rounded border border-[#10B981]/20 font-semibold">
                      {corridor.growthTag}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl text-[#F8FAFC] mb-2 group-hover:text-[#F3E5AB] transition-colors">
                    {corridor.name}
                  </h3>

                  <p className="font-body text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed mb-6">
                    {corridor.description}
                  </p>
                </div>

                {isNoida ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 bg-[#0B111E] p-4 rounded-lg border border-[#1E293B]/70">
                    <div>
                      <span className="text-[11px] text-[#94A3B8] font-display block uppercase">
                        {corridor.metric1Label}
                      </span>
                      <span className="text-[#F8FAFC] font-display font-semibold text-sm">
                        {corridor.metric1Value}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-[#94A3B8] font-display block uppercase">
                        {corridor.metric2Label}
                      </span>
                      <span className="text-[#10B981] font-display font-semibold text-sm">
                        {corridor.metric2Value}
                      </span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-[#1E293B] pt-2 sm:pt-0 sm:pl-3">
                      <span className="text-[11px] text-[#94A3B8] font-display block uppercase">
                        Active Inventory
                      </span>
                      <span className="text-[#D4AF37] font-display font-semibold text-sm">
                        {corridor.activeInventoryCount} Verified Units
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="pt-3 bg-[#0B111E] p-3.5 rounded-lg border border-[#1E293B]/70 space-y-1.5">
                    <div className="flex justify-between items-center text-xs text-[#94A3B8]">
                      <span>{corridor.metric1Label}</span>
                      <span className="text-[#F8FAFC] font-display font-semibold">
                        {corridor.metric1Value}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-[#94A3B8]">
                      <span>{corridor.metric2Label}</span>
                      <span className="text-[#D4AF37] font-display font-semibold">
                        {corridor.metric2Value}
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-xs font-display">
                  <span className="text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors">
                    Filter {corridor.name} Residences
                  </span>
                  <span className="material-symbols-outlined text-sm text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
