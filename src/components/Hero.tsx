import React from 'react';
import { Currency } from '../types';
import { formatTransactedVolume } from '../utils/formatters';

interface HeroProps {
  currency: Currency;
  onExploreClick: () => void;
  onFilterRera: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currency,
  onExploreClick,
  onFilterRera
}) => {
  return (
    <section className="relative w-full pt-12 pb-20 sm:pb-24 overflow-hidden">
      {/* Ambient architectural lighting glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-80 right-0 w-[420px] h-[420px] bg-[#3e495d]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Brand Authority Pillar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={onFilterRera}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#242a38] hover:bg-[#2f3543] transition-colors border border-[#10B981]/30 shadow-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#10B981] text-sm">
              verified
            </span>
            <span className="font-display text-[11px] tracking-widest text-[#10B981] uppercase font-semibold">
              RERA Certified Advisory
            </span>
          </button>
          <span className="text-[#99907c] text-xs">/</span>
          <span className="font-display text-[11px] text-[#F3E5AB] uppercase tracking-widest font-medium">
            India &amp; Dubai's Premier Residences
          </span>
        </div>

        {/* Grand Editorial Typography Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[56px] text-[#F8FAFC] tracking-tight font-light leading-[1.08] lg:leading-[64px]">
              Find Your Sanctuary <br className="hidden sm:inline" />
              <span className="italic font-normal font-headline text-[#f2ca50]">
                Among World-Class
              </span>{' '}
              <br />
              Residences.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="font-body text-base lg:text-[18px] text-[#94A3B8] leading-relaxed">
              Curated portfolio of prime apartments, sky penthouses, and gated private estates. Direct developer pricing, certified RERA documentation, and bespoke advisory.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-1.5 font-display text-[13px] text-[#D4AF37] hover:text-[#F3E5AB] transition-colors uppercase font-semibold tracking-wider group cursor-pointer"
              >
                <span>Initialize Portfolio Search</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-y-0.5">
                  arrow_downward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[#1a1f2d] p-6 sm:p-8 rounded-xl border border-[#1E293B] shadow-2xl">
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#D4AF37] font-bold tracking-tight">
              15,000+
            </div>
            <div className="font-display text-[12px] text-[#F8FAFC] uppercase tracking-wider font-semibold">
              Verified Units Advised
            </div>
            <p className="font-body text-xs text-[#94A3B8]">
              Audited developer inventory
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#F8FAFC] font-bold tracking-tight">
              250+
            </div>
            <div className="font-display text-[12px] text-[#D4AF37] uppercase tracking-wider font-semibold">
              RERA Registered
            </div>
            <p className="font-body text-xs text-[#94A3B8]">
              Gurgaon, Mumbai, BLR &amp; DLD
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#D4AF37] font-bold tracking-tight">
              {formatTransactedVolume(currency)}
            </div>
            <div className="font-display text-[12px] text-[#F8FAFC] uppercase tracking-wider font-semibold">
              Transacted Volume
            </div>
            <p className="font-body text-xs text-[#94A3B8]">
              Private wealth allocation
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl lg:text-[44px] text-[#ffe088] font-bold tracking-tight">
              Zero Brokerage
            </div>
            <div className="font-display text-[12px] text-[#10B981] uppercase tracking-wider font-semibold">
              Direct Builder Terms
            </div>
            <p className="font-body text-xs text-[#94A3B8]">
              On all first-allocation units
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
