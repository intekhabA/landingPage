import React, { useState } from 'react';
import { Currency } from '../types';

interface InvestmentCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  onBookAdvisory: () => void;
}

export const InvestmentCalculatorModal: React.FC<InvestmentCalculatorModalProps> = ({
  isOpen,
  onClose,
  currency,
  onBookAdvisory
}) => {
  const [investmentInrCr, setInvestmentInrCr] = useState<number>(20);
  const [holdingYears, setHoldingYears] = useState<number>(5);

  if (!isOpen) return null;

  // Approximate metrics
  const investmentAedM = (investmentInrCr * 0.44).toFixed(1);
  const investmentUsdM = (investmentInrCr * 0.12).toFixed(1);

  // India metrics
  const indiaRentalYieldPercent = 4.8;
  const indiaAnnualApprecPercent = 7.5;
  const indiaGrossRental5Yr = (investmentInrCr * (indiaRentalYieldPercent / 100) * holdingYears).toFixed(1);
  const indiaCapitalApprec5Yr = (investmentInrCr * (Math.pow(1 + indiaAnnualApprecPercent / 100, holdingYears) - 1)).toFixed(1);

  // Dubai metrics
  const dubaiRentalYieldPercent = 7.2;
  const dubaiAnnualApprecPercent = 8.2;
  const dubaiGrossRental5YrInr = (investmentInrCr * (dubaiRentalYieldPercent / 100) * holdingYears).toFixed(1);
  const dubaiCapitalApprec5YrInr = (investmentInrCr * (Math.pow(1 + dubaiAnnualApprecPercent / 100, holdingYears) - 1)).toFixed(1);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0d1320] border border-[#D4AF37]/40 rounded-xl shadow-2xl overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070B14] border-b border-[#1E293B]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#D4AF37]">insights</span>
            <span className="font-display text-xs uppercase tracking-widest text-[#F8FAFC] font-semibold">
              Cross-Border Capital Allocation &amp; Yield Modeler
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          <div>
            <h2 className="font-headline text-2xl text-[#F8FAFC] mb-2 font-normal">
              Compare India Prime vs. UAE Sovereign Real Estate
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Model institutional returns, capital gains exposure, tax shelters, and currency repatriation covenants across your target horizon.
            </p>
          </div>

          {/* Interactive Controls */}
          <div className="bg-[#131C2E] p-6 rounded-xl border border-[#1E293B] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-display text-xs uppercase tracking-wider text-[#94A3B8] font-semibold">
                  Capital Deployment
                </label>
                <span className="font-display text-base font-bold text-[#D4AF37]">
                  ₹ {investmentInrCr} Cr / AED {investmentAedM} M
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="2.5"
                value={investmentInrCr}
                onChange={(e) => setInvestmentInrCr(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#94A3B8] font-mono mt-1">
                <span>₹ 5 Cr ($ 600K)</span>
                <span>₹ 25 Cr ($ 3.0M)</span>
                <span>₹ 50 Cr ($ 6.0M)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-display text-xs uppercase tracking-wider text-[#94A3B8] font-semibold">
                  Investment Horizon
                </label>
                <span className="font-display text-base font-bold text-[#F8FAFC]">
                  {holdingYears} Years
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                step="1"
                value={holdingYears}
                onChange={(e) => setHoldingYears(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#94A3B8] font-mono mt-1">
                <span>3 Years</span>
                <span>5 Years</span>
                <span>10 Years</span>
              </div>
            </div>
          </div>

          {/* Side by Side Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* India Corridor Card */}
            <div className="bg-[#0B111E] p-6 rounded-xl border border-[#1E293B] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                <div>
                  <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] font-semibold">
                    Territory
                  </span>
                  <h3 className="font-headline text-lg text-[#F8FAFC]">India Prime Corridors</h3>
                  <span className="text-xs text-[#94A3B8]">Gurgaon Golf Course Rd &amp; South Mumbai</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#131C2E] text-xs font-display text-[#D4AF37]">
                  RERA Shield
                </span>
              </div>

              <div className="space-y-3 font-display text-xs">
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Average Gross Yield:</span>
                  <span className="text-[#F8FAFC] font-bold">{indiaRentalYieldPercent}% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Estimated {holdingYears}-Yr Rental Income:</span>
                  <span className="text-[#F8FAFC] font-bold">₹ {indiaGrossRental5Yr} Cr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Projected Capital Growth:</span>
                  <span className="text-[#10B981] font-bold">+₹ {indiaCapitalApprec5Yr} Cr</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#1E293B]">
                  <span className="text-[#94A3B8]">Long-Term Capital Gains Tax:</span>
                  <span className="text-[#ffb4ab] font-bold">12.5% without indexation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Currency Hedge:</span>
                  <span className="text-[#94A3B8]">INR Pegged Domestic</span>
                </div>
              </div>
            </div>

            {/* Dubai Waterfront Card */}
            <div className="bg-[#0B111E] p-6 rounded-xl border border-[#D4AF37]/40 space-y-4 relative">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-0.5 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 text-[10px] font-display uppercase tracking-wider font-bold rounded">
                  0% Sovereign Tax
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                <div>
                  <span className="text-[10px] font-display uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Territory
                  </span>
                  <h3 className="font-headline text-lg text-[#F8FAFC]">Dubai Sovereign Waterfront</h3>
                  <span className="text-xs text-[#94A3B8]">Palm Jumeirah &amp; Downtown Dubai</span>
                </div>
              </div>

              <div className="space-y-3 font-display text-xs">
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Average Net Yield:</span>
                  <span className="text-[#10B981] font-bold">{dubaiRentalYieldPercent}% Net Tax-Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Estimated {holdingYears}-Yr Rental Income:</span>
                  <span className="text-[#F8FAFC] font-bold">₹ {dubaiGrossRental5YrInr} Cr equivalent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Projected Capital Growth:</span>
                  <span className="text-[#10B981] font-bold">+₹ {dubaiCapitalApprec5YrInr} Cr</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#1E293B]">
                  <span className="text-[#94A3B8]">Capital Gains Tax Shield:</span>
                  <span className="text-[#10B981] font-bold">0% Direct Tax</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Immigration Status:</span>
                  <span className="text-[#D4AF37] font-bold">10-Year UAE Golden Visa</span>
                </div>
              </div>
            </div>

          </div>

          {/* Institutional Advisory CTA */}
          <div className="p-5 bg-[#131C2E] rounded-xl border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#94A3B8]">
              Need a bespoke tax counsel memo for your Family Office or FEMA repatriation plan?
            </div>
            <button
              onClick={() => {
                onClose();
                onBookAdvisory();
              }}
              className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#070B14] font-display text-xs uppercase font-bold tracking-wider rounded transition-colors"
            >
              Consult Senior Tax Principal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
