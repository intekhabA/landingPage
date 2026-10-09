import React, { useState } from 'react';

export const PavilionStandard: React.FC = () => {
  const [activePillarDetail, setActivePillarDetail] = useState<number | null>(null);

  const pillars = [
    {
      icon: 'verified_user',
      iconColor: 'text-[#10B981]',
      title: '100% RERA Verified',
      description:
        'Every project in our registry undergoes rigorous legal title verification, land parcel encumbrance audits, and statutory regulatory cross-examinations.',
      badgeText: 'Zero Gray-Market Units',
      auditDetails: [
        'Government land registry deed cross-examination',
        'State RERA registration & quarterly escrow accounts audit',
        'Litigation check across High Courts and Supreme Court registry',
        'Floor sanction plans and sanctioned FSI verification'
      ]
    },
    {
      icon: 'money_off',
      iconColor: 'text-[#D4AF37]',
      title: 'Zero Brokerage Fee',
      description:
        'Enjoy 100% transparent developer-direct pricing. As institutional mandate partners, our advisory incurs zero brokerage fee on original builder bookings.',
      badgeText: 'Direct Developer Invoicing',
      auditDetails: [
        'Zero commission loaded onto buyer purchase price',
        'Direct builder invoice with institutional discount allotment',
        'Direct escrow deposit to developer regulated bank account',
        'Transparent stamp duty & registration cost breakdown'
      ]
    },
    {
      icon: 'person_pin',
      iconColor: 'text-[#D4AF37]',
      title: 'Private Wealth Concierge',
      description:
        'A single senior advisory partner assigned exclusively to your family office, managing confidential site walkthroughs, unit allotment, and terms negotiation.',
      badgeText: 'Strict NDA Confidentiality',
      auditDetails: [
        'Direct access to Senior Investment Principals with 15+ yrs tenure',
        'Signed mutual bilateral Non-Disclosure Agreement',
        'Anonymous bidder representation if requested for ultra-luxury units',
        'Coordination with family office tax attorneys & wealth managers'
      ]
    },
    {
      icon: 'account_balance',
      iconColor: 'text-[#D4AF37]',
      title: 'Banking & Legal Desk',
      description:
        'Expedited private banking underwriting, FEMA compliance for NRIs, and swift Dubai Land Department escrow compliance handled end-to-end.',
      badgeText: 'Pre-Approved Loan Tracks',
      auditDetails: [
        'Direct tie-ups with Private Wealth Desks at HDFC, ICICI, Standard Chartered',
        'Dubai Land Department Trustee office remote deed execution',
        'RBI FEMA advisory for inward/outward currency remittance',
        'Fast-track 10-year UAE Golden Visa application processing'
      ]
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#0d1320]" id="the-pavilion-standard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="font-display text-[11px] text-[#D4AF37] uppercase tracking-widest block mb-2 font-semibold">
            Institutional Integrity
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#F8FAFC] font-light tracking-tight">
            The Pavilion Standard
          </h2>
          <p className="font-body text-base sm:text-lg text-[#94A3B8] mt-3 leading-relaxed">
            Why family offices, prominent enterprise founders, and cross-border investors trust Pavilion 360 for high-value real estate acquisitions.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const isExpanded = activePillarDetail === idx;

            return (
              <div
                key={pillar.title}
                className="bg-[#131C2E] p-6 sm:p-7 rounded-xl border border-[#1E293B] shadow-md flex flex-col justify-between space-y-4 hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded bg-[#0B111E] flex items-center justify-center ${pillar.iconColor} shadow-inner border border-[#1E293B]`}>
                    <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                  </div>

                  <div>
                    <h3 className="font-headline text-xl text-[#F8FAFC] mb-2 font-medium">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {isExpanded && (
                    <div className="pt-3 border-t border-[#1E293B] space-y-2 animate-fadeIn">
                      <span className="text-[10px] font-display uppercase tracking-wider text-[#D4AF37] font-semibold block">
                        Institutional Governance:
                      </span>
                      <ul className="space-y-1.5">
                        {pillar.auditDetails.map((detail, dIdx) => (
                          <li key={dIdx} className="text-[11px] text-[#dde2f5] flex items-start gap-1.5">
                            <span className="material-symbols-outlined text-xs text-[#10B981] mt-0.5">check_circle</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#1E293B]/70 flex items-center justify-between">
                  <span className="text-[11px] text-[#D4AF37] font-display uppercase tracking-wider flex items-center gap-1 font-semibold">
                    <span>{pillar.badgeText}</span>
                    <span className="material-symbols-outlined text-xs">check</span>
                  </span>

                  <button
                    onClick={() => setActivePillarDetail(isExpanded ? null : idx)}
                    className="text-[10px] font-display uppercase text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
                  >
                    {isExpanded ? 'Less' : 'Audit Protocol'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
