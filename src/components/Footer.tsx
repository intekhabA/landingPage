import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConcierge }) => {
  return (
    <footer className="w-full bg-[#0B111E] text-[#94A3B8] pt-16 pb-12 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-headline text-2xl text-[#F8FAFC] tracking-tight font-medium">
                PAVILION 360
              </span>
            </div>
            <p className="font-body text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed">
              Ultra-prime architectural advisory and private client acquisitions across sovereign growth corridors in India and the United Arab Emirates.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#070B14] rounded border border-[#1E293B] text-[#10B981]">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span className="font-display text-[10px] text-[#F8FAFC] tracking-wider uppercase font-semibold">
                RERA Compliant Advisory
              </span>
            </div>
          </div>

          {/* Prime Corridors Col */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-4">
              Prime Corridors
            </h3>
            <ul className="space-y-2 font-body text-xs sm:text-[13px]">
              <li
                onClick={() => onNavigate('prime-corridors')}
                className="text-[#F8FAFC] hover:text-[#D4AF37] cursor-pointer transition-colors"
              >
                Gurgaon: Golf Course Road &amp; SPR
              </li>
              <li
                onClick={() => onNavigate('prime-corridors')}
                className="text-[#F8FAFC] hover:text-[#D4AF37] cursor-pointer transition-colors"
              >
                South Mumbai: Worli, Malabar Hill, BKC
              </li>
              <li
                onClick={() => onNavigate('prime-corridors')}
                className="text-[#F8FAFC] hover:text-[#D4AF37] cursor-pointer transition-colors"
              >
                Central Bengaluru: Lavelle Rd &amp; Sadashivanagar
              </li>
              <li
                onClick={() => onNavigate('prime-corridors')}
                className="text-[#F8FAFC] hover:text-[#D4AF37] cursor-pointer transition-colors"
              >
                Dubai: Downtown, Palm Jumeirah &amp; DIFC
              </li>
            </ul>
          </div>

          {/* Private Portfolio Col */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-4">
              Private Portfolio
            </h3>
            <ul className="space-y-2 font-body text-xs sm:text-[13px]">
              <li>
                <button
                  onClick={() => onNavigate('featured-residences')}
                  className="hover:text-[#F3E5AB] transition-colors text-left"
                >
                  Signature Penthouses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('featured-residences')}
                  className="hover:text-[#F3E5AB] transition-colors text-left"
                >
                  Waterfront Villas &amp; Mansions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('featured-residences')}
                  className="hover:text-[#F3E5AB] transition-colors text-left"
                >
                  Branded Trophy Residences
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('the-pavilion-standard')}
                  className="hover:text-[#F3E5AB] transition-colors text-left"
                >
                  Private Family Compounds
                </button>
              </li>
            </ul>
          </div>

          {/* Concierge Desk Col */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-4">
              Concierge Desk
            </h3>
            <div className="space-y-2 font-body text-xs sm:text-[13px]">
              <p className="text-[#F8FAFC]">DLF Horizon Towers, Golf Course Rd, Gurgaon</p>
              <p className="text-[#F8FAFC]">The Boulevard Plaza, Downtown Dubai, UAE</p>
              <p className="text-[#94A3B8] pt-1">concierge@pavilion360.in</p>
              <button
                onClick={onOpenConcierge}
                className="font-display text-sm text-[#D4AF37] hover:underline tracking-wide block font-semibold"
              >
                +91 800-PAVILION
              </button>
            </div>
          </div>

        </div>

        {/* RERA Regulatory Disclosure Box */}
        <div className="bg-[#161b29] p-5 rounded-lg border border-[#1E293B] space-y-2 mb-8 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base text-[#10B981]">gavel</span>
            <span className="font-display text-[11px] uppercase tracking-wider text-[#F8FAFC] font-semibold">
              RERA Regulatory Disclosure
            </span>
          </div>
          <p className="font-body text-xs text-[#94A3B8] leading-relaxed">
            Pavilion 360 acts as an accredited institutional transaction advisor. All representations are subject to regulatory filings under Haryana RERA, MahaRERA, Karnataka RERA, and Dubai Land Department (DLD/RERA). Registration identifiers: HRERA-PKL-GGM-1284-2023 | MahaRERA-A51900034120 | DLD Permit No. 49102. Verified prospectus documentation available upon accredited investor validation.
          </p>
        </div>

        {/* Bottom copyright & protocols */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1E293B]/60 font-display text-[11px] text-[#94A3B8]">
          <p>© 2025 Pavilion 360 Advisory LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#F8FAFC] cursor-pointer">Privacy Mandate</span>
            <span className="hover:text-[#F8FAFC] cursor-pointer">Terms of Advisory</span>
            <span className="hover:text-[#F8FAFC] cursor-pointer">Private Client Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
