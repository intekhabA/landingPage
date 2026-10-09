import React from 'react';
import { Currency, Property } from '../types';
import { formatPrice, formatSecondaryPrice } from '../utils/formatters';

interface FeaturedResidencesProps {
  properties: Property[];
  currency: Currency;
  onOpenProspectus: (property: Property) => void;
  onToggleSave: (id: string) => void;
  savedPropertyIds: string[];
}

export const FeaturedResidences: React.FC<FeaturedResidencesProps> = ({
  properties,
  currency,
  onOpenProspectus,
  onToggleSave,
  savedPropertyIds,
}) => {
  return (
    <section className="w-full py-16 sm:py-24" id="featured-residences">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] mb-2 font-display text-[11px] uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-sm">stars</span>
              <span>Handpicked Collection</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#F8FAFC] font-light tracking-tight">
              Featured Luxury Developments
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#94A3B8] max-w-md leading-relaxed">
            Direct allocations in landmark addresses, each backed by statutory clearance, institutional covenants, and developer-direct pricing.
          </p>
        </div>

        {/* Property Grid */}
        {properties.length === 0 ? (
          <div className="bg-[#131C2E] border border-[#1E293B] rounded-xl p-12 text-center">
            <span className="material-symbols-outlined text-4xl text-[#D4AF37] mb-3">search_off</span>
            <h3 className="font-headline text-xl text-[#F8FAFC] mb-2">No Verified Units Match Active Filter</h3>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
              Our private advisory desk has additional off-market and unlisted units under strict NDA confidentiality.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {properties.map((property) => {
              const isSaved = savedPropertyIds.includes(property.id);
              const secondaryPrice = formatSecondaryPrice(property, currency);

              return (
                <div
                  key={property.id}
                  className="bg-[#131C2E] rounded-lg overflow-hidden border border-[#1E293B]/80 shadow-xl group hover:border-[#D4AF37]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative h-80 w-full overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-black/30 pointer-events-none"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-[#070B14]/90 backdrop-blur-md rounded text-[#D4AF37] font-display text-[10px] tracking-wider uppercase font-semibold border border-[#D4AF37]/30">
                        {property.badges.allocation}
                      </span>
                      <span className="px-2.5 py-1 bg-[#0B111E]/90 backdrop-blur-md rounded text-[#10B981] font-display text-[10px] tracking-wider uppercase font-semibold flex items-center gap-1 border border-[#10B981]/30">
                        <span className="material-symbols-outlined text-xs">verified</span>
                        {property.badges.rera}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#242a38]/90 backdrop-blur-md rounded text-[#F8FAFC] font-display text-[10px] tracking-wider uppercase font-medium border border-[#1E293B]">
                        {property.badges.feature}
                      </span>
                      <button
                        onClick={() => onToggleSave(property.id)}
                        className={`p-1.5 rounded backdrop-blur-md transition-colors cursor-pointer ${
                          isSaved
                            ? 'bg-[#D4AF37] text-[#070B14]'
                            : 'bg-[#070B14]/80 text-[#94A3B8] hover:text-[#F8FAFC]'
                        }`}
                        title={isSaved ? 'Remove from Saved' : 'Save Residence'}
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {isSaved ? 'bookmark_added' : 'bookmark'}
                        </span>
                      </button>
                    </div>

                    {/* Bottom Image Info Banner */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[#F8FAFC]">
                      <div className="pr-4">
                        <p className="font-display text-[10px] text-[#94A3B8] uppercase tracking-wider">
                          {property.location}
                        </p>
                        <h3 className="font-headline text-xl sm:text-2xl text-[#F8FAFC] mt-0.5 leading-snug font-normal">
                          {property.title}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-display text-[10px] text-[#D4AF37] uppercase tracking-wider block font-semibold">
                          Direct Pricing
                        </span>
                        <p className="font-display text-xl sm:text-2xl text-[#F8FAFC] font-bold tracking-tight">
                          {formatPrice(property, currency)}
                        </p>
                        {secondaryPrice && (
                          <span className="text-[11px] text-[#94A3B8] font-body block">
                            {secondaryPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Details Body */}
                  <div className="p-6 space-y-4">
                    {/* 3-Column Metrics Ribbon */}
                    <div className="grid grid-cols-3 gap-2 text-center py-3 bg-[#0B111E] rounded border border-[#1E293B]/70">
                      <div>
                        <span className="font-display text-[10px] text-[#94A3B8] block uppercase">
                          Typology
                        </span>
                        <span className="font-display text-[12px] text-[#F8FAFC] font-semibold block truncate px-1">
                          {property.assetTypeLabel}
                        </span>
                      </div>
                      <div className="border-x border-[#1E293B]/80">
                        <span className="font-display text-[10px] text-[#94A3B8] block uppercase">
                          Area / Carpet
                        </span>
                        <span className="font-display text-[12px] text-[#F8FAFC] font-semibold block truncate px-1">
                          {property.superArea}
                        </span>
                      </div>
                      <div>
                        <span className="font-display text-[10px] text-[#94A3B8] block uppercase">
                          Status
                        </span>
                        <span className="font-display text-[12px] text-[#10B981] font-semibold block truncate px-1">
                          {property.status}
                        </span>
                      </div>
                    </div>

                    {/* Amenity Highlights */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-body text-[#94A3B8]">
                      {property.highlights.slice(0, 4).map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-[#242a38] px-2.5 py-1 rounded text-[#F8FAFC] text-[11px] font-medium border border-[#1E293B]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2 border-t border-[#1E293B]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="font-display text-[10px] text-[#94A3B8] tracking-wider">
                        RERA: <span className="text-[#F8FAFC] font-mono">{property.reraNumber}</span>
                      </div>

                      <button
                        onClick={() => onOpenProspectus(property)}
                        className="px-4 py-2 bg-[#242a38] hover:bg-[#D4AF37] hover:text-[#070B14] text-[#F3E5AB] rounded font-display text-[11px] uppercase tracking-wider font-semibold transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>Request Private Prospectus</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
