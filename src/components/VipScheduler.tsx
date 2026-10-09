import React, { useState } from 'react';

export const VipScheduler: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    corridor: 'Gurgaon (The Camellias / Golf Course)',
    investmentBand: '₹ 15 Cr - 35 Cr',
    date: '',
    vehicleChoice: 'Mercedes-Maybach S-Class'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const vehicles = [
    { id: 'Mercedes-Maybach S-Class', name: 'Mercedes-Maybach' },
    { id: 'Range Rover SV', name: 'Range Rover SV' },
    { id: 'BMW 7-Series Limo', name: 'BMW 7-Series' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ref = `PVL-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingReference(ref);
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 600);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setFormData({
      fullName: '',
      phone: '',
      corridor: 'Gurgaon (The Camellias / Golf Course)',
      investmentBand: '₹ 15 Cr - 35 Cr',
      date: '',
      vehicleChoice: 'Mercedes-Maybach S-Class'
    });
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#080e1b] relative" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131C2E] rounded-2xl p-6 sm:p-10 lg:p-14 border border-[#1E293B] shadow-2xl relative overflow-hidden">
          
          {/* Subtle background accent glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Chauffeur Experience Invitation Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#0B111E] text-[#D4AF37] font-display text-[11px] uppercase tracking-widest font-semibold border border-[#1E293B]">
                <span className="material-symbols-outlined text-sm">directions_car</span>
                <span>Chauffeur-Driven Private Inspection</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#F8FAFC] font-light leading-tight">
                Experience Your Next Home in Person.
              </h2>

              <p className="font-body text-base lg:text-[18px] text-[#94A3B8] leading-relaxed">
                We arrange complimentary chauffeur-driven luxury transit and direct developer architect walkthroughs at your preferred hour. Discover unmatched scale, acoustics, and views before allocation closing.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#F8FAFC]">
                  <span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span>
                  <span>Direct Access to Sample Penthouses &amp; Restricted Upper Floors</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#F8FAFC]">
                  <span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span>
                  <span>Full Architectural Dossier &amp; RERA Sanction Plans Handover</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-[#F8FAFC]">
                  <span className="material-symbols-outlined text-[#10B981] text-lg">check_circle</span>
                  <span>Private Consultation with Senior Investment Principal</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2.5 text-[#94A3B8] font-body text-sm bg-[#0B111E] px-4 py-2 rounded-lg border border-[#1E293B]">
                  <span className="material-symbols-outlined text-[#D4AF37]">call</span>
                  <span>Direct VIP Helpline:</span>
                  <a
                    className="text-[#F8FAFC] font-semibold font-display hover:text-[#D4AF37] transition-colors"
                    href="tel:+91800PAVILION"
                  >
                    +91 800-PAVILION
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Chauffeur Booking Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#0B111E] p-6 sm:p-8 rounded-xl border border-[#1E293B] shadow-xl space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                  <div>
                    <h3 className="font-headline text-xl text-[#F8FAFC] font-medium">
                      Schedule VIP Visit
                    </h3>
                    <p className="font-body text-xs text-[#94A3B8]">
                      Select corridor and transit window
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[#D4AF37] text-3xl">
                    calendar_month
                  </span>
                </div>

                {isConfirmed ? (
                  <div className="space-y-5 py-4 animate-fadeIn">
                    <div className="p-5 bg-[#10B981]/10 border border-[#10B981]/40 text-[#10B981] rounded-lg text-center space-y-2">
                      <span className="material-symbols-outlined text-3xl block mx-auto text-[#10B981]">
                        verified
                      </span>
                      <div className="font-display text-sm uppercase tracking-wider font-bold">
                        Priority Reservation Transmitted
                      </div>
                      <p className="font-body text-xs text-[#F8FAFC]/90">
                        Reference Number: <span className="font-mono text-[#D4AF37] font-bold">{bookingReference}</span>
                      </p>
                      <p className="text-xs text-[#94A3B8]">
                        Your Senior Client Desk Partner will telephone your private line within 60 minutes to coordinate chauffeur pickup.
                      </p>
                    </div>

                    <div className="p-4 bg-[#131C2E] rounded-lg border border-[#1E293B] text-xs space-y-2">
                      <div className="flex justify-between text-[#94A3B8]">
                        <span>Client:</span>
                        <span className="text-[#F8FAFC] font-medium">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between text-[#94A3B8]">
                        <span>Corridor:</span>
                        <span className="text-[#F8FAFC] font-medium">{formData.corridor}</span>
                      </div>
                      <div className="flex justify-between text-[#94A3B8]">
                        <span>Chauffeur Transit:</span>
                        <span className="text-[#D4AF37] font-medium">{formData.vehicleChoice}</span>
                      </div>
                      <div className="flex justify-between text-[#94A3B8]">
                        <span>Preferred Date:</span>
                        <span className="text-[#F8FAFC] font-medium">{formData.date || 'Immediate Coordination'}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleReset}
                        className="w-full py-2.5 bg-[#242a38] hover:bg-[#2f3543] text-[#F8FAFC] font-display text-xs uppercase tracking-wider rounded font-medium transition-colors"
                      >
                        Book Another Inspection
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display text-[11px] text-[#94A3B8] uppercase font-semibold mb-1">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Vikramaditya Singhania"
                          className="w-full bg-[#131C2E] text-[#F8FAFC] px-3.5 py-2.5 rounded border border-[#1E293B] font-body text-sm focus:outline-none focus:border-[#D4AF37] placeholder-[#94A3B8]/50"
                        />
                      </div>

                      <div>
                        <label className="block font-display text-[11px] text-[#94A3B8] uppercase font-semibold mb-1">
                          Direct Phone (+91 / +971)
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#131C2E] text-[#F8FAFC] px-3.5 py-2.5 rounded border border-[#1E293B] font-body text-sm focus:outline-none focus:border-[#D4AF37] placeholder-[#94A3B8]/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display text-[11px] text-[#94A3B8] uppercase font-semibold mb-1">
                          Preferred Corridor
                        </label>
                        <select
                          value={formData.corridor}
                          onChange={(e) => setFormData({ ...formData, corridor: e.target.value })}
                          className="w-full bg-[#131C2E] text-[#F8FAFC] px-3.5 py-2.5 rounded border border-[#1E293B] font-body text-sm focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                        >
                          <option>Gurgaon (The Camellias / Golf Course)</option>
                          <option>South Mumbai (Worli / Malabar Hill)</option>
                          <option>Dubai Waterfront (Palm / Downtown)</option>
                          <option>Central Bengaluru (Lavelle Road)</option>
                          <option>Noida Expressway (Sector 128)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-display text-[11px] text-[#94A3B8] uppercase font-semibold mb-1">
                          Investment Band
                        </label>
                        <select
                          value={formData.investmentBand}
                          onChange={(e) => setFormData({ ...formData, investmentBand: e.target.value })}
                          className="w-full bg-[#131C2E] text-[#F8FAFC] px-3.5 py-2.5 rounded border border-[#1E293B] font-body text-sm focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                        >
                          <option>₹ 5 Cr - 15 Cr</option>
                          <option>₹ 15 Cr - 35 Cr</option>
                          <option>₹ 35 Cr+ Ultra-Luxury</option>
                          <option>AED 15M+ Sovereign Dubai</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Vehicle & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display text-[11px] text-[#94A3B8] uppercase font-semibold mb-1">
                          Chauffeur Fleet Preference
                        </label>
                        <select
                          value={formData.vehicleChoice}
                          onChange={(e) => setFormData({ ...formData, vehicleChoice: e.target.value })}
                          className="w-full bg-[#131C2E] text-[#F8FAFC] px-3.5 py-2.5 rounded border border-[#1E293B] font-body text-sm focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                        >
                          {vehicles.map((v) => (
                            <option key={v.id} value={v.id}>
                              {v.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-display text-[11px] text-[#94A3B8] uppercase font-semibold mb-1">
                          Preferred Inspection Date
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-[#131C2E] text-[#F8FAFC] px-3.5 py-2.5 rounded border border-[#1E293B] font-body text-sm focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#070B14] font-display text-xs sm:text-sm uppercase font-bold tracking-wider rounded transition-all duration-200 hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                            <span>Transmitting Priority Reservation...</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-base">
                              airline_seat_recline_extra
                            </span>
                            <span>Confirm Chauffeur Site Inspection</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center font-display text-[11px] text-[#94A3B8] pt-1">
                      Strictly Confidential • Zero Spam Mandate • Developer Direct Allocation
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
