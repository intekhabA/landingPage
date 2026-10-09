import React, { useState } from 'react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookInspection: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  onBookInspection
}) => {
  const [requestSent, setRequestSent] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#0d1320] border border-[#D4AF37]/50 rounded-xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070B14] border-b border-[#1E293B]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="font-display text-xs uppercase tracking-widest text-[#F8FAFC] font-semibold">
              Direct Private Client Desk
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-start gap-4 p-4 bg-[#131C2E] rounded-xl border border-[#1E293B]">
            <img
              alt="Advisory Principal"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs-EAXezbeJhi-3pJw-dPNFgdCpxtHYhP2QqXXKHOs5PaXu60EuvOj4z9ggJSmQjzH32OkzL2T_HTKfuXTy3c5x7c_Ln2gkt2qd1PO0_p_LTgjgwe0IuB2snNxnQvj7l1FIaBodygo6u_ugc4mk4Afv-8TqbekjYIG8EQ7grIa5fWD96yMDw0kXgevvPtwO5a23OU14FuK-GqHQ9YZhOmDUucUg6JbjeQKKQp43MwRHJA6C_I1gmU"
            />
            <div>
              <div className="text-sm font-headline text-[#F8FAFC] font-semibold">
                Senior Acquisition Desk
              </div>
              <div className="text-xs text-[#D4AF37] font-display">
                Pavilion 360 Advisory LLP
              </div>
              <p className="text-xs text-[#94A3B8] mt-1">
                Direct phone allocation for HNWI family offices, venture founders, and sovereign wealth representatives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:+91800PAVILION"
              className="p-4 bg-[#0B111E] hover:bg-[#161b29] border border-[#1E293B] rounded-lg transition-colors flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl text-[#D4AF37]">call</span>
              <div>
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Telephone Hotline
                </span>
                <span className="text-sm font-display text-[#F8FAFC] font-bold">
                  +91 800-PAVILION
                </span>
              </div>
            </a>

            <div className="p-4 bg-[#0B111E] border border-[#1E293B] rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-[#10B981]">encrypted</span>
              <div>
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Mandate Protocol
                </span>
                <span className="text-xs font-display text-[#F8FAFC] font-semibold">
                  Zero Brokerage &amp; NDA
                </span>
              </div>
            </div>
          </div>

          {requestSent ? (
            <div className="p-4 bg-[#10B981]/10 border border-[#10B981]/40 text-[#10B981] rounded-lg text-center space-y-1 font-display text-xs">
              <div className="font-bold uppercase tracking-wider">
                ✓ Priority Callback Initialized
              </div>
              <p className="text-[#F8FAFC] text-[11px] font-body">
                Our Senior Client Principal is calling {clientPhone || '+91 800-PAVILION'} directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="text-xs font-display uppercase tracking-wider text-[#94A3B8] font-semibold">
                Request Priority Callback (15-Minute Response SLA)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#0B111E] text-[#F8FAFC] px-3.5 py-2.5 rounded border border-[#1E293B] text-xs focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Direct Phone (+91 / +971)"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-[#0B111E] text-[#F8FAFC] px-3.5 py-2.5 rounded border border-[#1E293B] text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#070B14] font-display text-xs uppercase font-bold tracking-wider rounded transition-colors"
                >
                  Request Confidential Callback
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookInspection();
                  }}
                  className="px-4 py-3 bg-[#131C2E] hover:bg-[#1a233a] text-[#F8FAFC] border border-[#1E293B] font-display text-xs uppercase tracking-wider rounded transition-colors"
                >
                  Book Chauffeur
                </button>
              </div>
            </form>
          )}

          <div className="pt-2 border-t border-[#1E293B] text-[11px] text-[#94A3B8] text-center">
            Advisory Desks: DLF Horizon Towers, Golf Course Rd, Gurgaon &bull; The Boulevard Plaza, Downtown Dubai
          </div>
        </div>
      </div>
    </div>
  );
};
