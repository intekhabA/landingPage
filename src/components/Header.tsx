import React, { useState } from 'react';
import { Currency } from '../types';

interface HeaderProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenVisitModal: () => void;
  onOpenConciergeModal: () => void;
  onOpenShortlist: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenVisitModal,
  onOpenConciergeModal,
  onOpenShortlist,
  savedCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'featured-residences', label: 'Featured Residences' },
    { id: 'prime-corridors', label: 'Prime Corridors' },
    { id: 'the-pavilion-standard', label: 'The Pavilion Standard' },
    { id: 'dubai-waterfront', label: 'Dubai Waterfront' },
    { id: 'why-us', label: 'Why Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#070B14]/90 backdrop-blur-xl border-b border-[#1E293B]/60 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        
        {/* Brand & Wordmark */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3.5 shrink-0 cursor-pointer group"
        >
          <img
            alt="Pavilion 360 Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WfjDb1Lo4W5INQeopYNVbFg89_zNY10wDF24hR4C7dIXnIL8LKSKIHTHcZF8zktrlXWgCU-W2wNZMbw8ZL4lazmMN__sS70TUIa_-8oCyR8PV7q3wvaPxiqLTXo2OTUgeTIU3WEAMWJBDzZaakhdjy4zhMHjZyCrh7u1iRLbvWBwPbpJaMbv0X3CBfJhWlTt5VmOcQHApf1ksoOvLIOVc5VrOrzVr4mgQ7yMgnBMoFlgJZqKy-779Q6w"
          />
          <div className="flex flex-col">
            <span className="font-headline text-xl tracking-tight text-[#F8FAFC] font-medium leading-none">
              PAVILION 360
            </span>
            <span className="font-display text-[11px] tracking-[0.14em] text-[#D4AF37] uppercase font-semibold mt-1">
              Prime Real Estate Advisory
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-display text-[12px] uppercase tracking-wider transition-colors duration-200 py-1 px-2.5 rounded ${
                  isActive
                    ? 'bg-[#131C2E] text-[#F3E5AB] font-semibold border border-[#D4AF37]/30'
                    : 'text-[#d0c5af] hover:text-[#F3E5AB]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* Currency Switcher */}
          <div className="hidden lg:flex items-center bg-[#0B111E] p-1 rounded border border-[#1E293B]">
            {(['INR', 'AED', 'USD'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => onCurrencyChange(c)}
                className={`px-2 py-0.5 text-[11px] font-display rounded font-medium transition-all ${
                  currency === c
                    ? 'bg-[#D4AF37] text-[#070B14] font-bold shadow-xs'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {c === 'INR' ? '₹ INR' : c}
              </button>
            ))}
          </div>

          {/* Direct Private Client Desk Phone */}
          <div className="hidden md:flex flex-col text-right">
            <span className="font-display text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
              Direct Private Client Desk
            </span>
            <button
              onClick={onOpenConciergeModal}
              className="font-display text-[13px] tracking-wider text-[#F8FAFC] hover:text-[#D4AF37] transition-colors text-right font-medium"
            >
              +91 800-PAVILION
            </button>
          </div>

          {/* Schedule Private Visit CTA */}
          <button
            onClick={onOpenVisitModal}
            className="hidden sm:inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#070B14] font-display text-[12px] uppercase font-bold tracking-wider px-5 py-2.5 rounded transition-transform duration-200 hover:scale-[1.01] shadow-[0_1px_8px_rgba(0,0,0,0.04)] cursor-pointer"
          >
            Schedule Private Visit
          </button>

          {/* Saved Shortlist Trigger */}
          {savedCount > 0 && (
            <button
              onClick={onOpenShortlist}
              className="relative p-2 rounded bg-[#131C2E] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#1a1f2d] transition-colors"
              title="View Saved Residences"
            >
              <span className="material-symbols-outlined text-[18px]">bookmark</span>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#D4AF37] text-[#070B14] text-[10px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            </button>
          )}

          {/* VIP Client Desk Avatar */}
          <div 
            onClick={onOpenConciergeModal} 
            className="flex items-center gap-2 cursor-pointer group"
            title="Senior Client Director Online"
          >
            <div className="relative">
              <img
                alt="Director Profile"
                className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]/50 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs-EAXezbeJhi-3pJw-dPNFgdCpxtHYhP2QqXXKHOs5PaXu60EuvOj4z9ggJSmQjzH32OkzL2T_HTKfuXTy3c5x7c_Ln2gkt2qd1PO0_p_LTgjgwe0IuB2snNxnQvj7l1FIaBodygo6u_ugc4mk4Afv-8TqbekjYIG8EQ7grIa5fWD96yMDw0kXgevvPtwO5a23OU14FuK-GqHQ9YZhOmDUucUg6JbjeQKKQp43MwRHJA6C_I1gmU"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-[#070B14]"></span>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B111E] border-b border-[#1E293B] px-6 py-5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
            <span className="text-xs uppercase font-display text-[#94A3B8]">Preferred Currency</span>
            <div className="flex gap-2">
              {(['INR', 'AED', 'USD'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => onCurrencyChange(c)}
                  className={`px-2.5 py-1 text-xs font-display rounded ${
                    currency === c ? 'bg-[#D4AF37] text-[#070B14] font-bold' : 'bg-[#131C2E] text-[#94A3B8]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left font-display text-sm uppercase tracking-wider py-2 text-[#dde2f5] hover:text-[#D4AF37] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1E293B] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full py-3 bg-[#D4AF37] text-[#070B14] font-display text-xs uppercase font-bold tracking-wider rounded text-center"
            >
              Schedule Private Visit
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConciergeModal();
              }}
              className="w-full py-2.5 bg-[#131C2E] text-[#F8FAFC] font-display text-xs uppercase tracking-wider rounded border border-[#1E293B] text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm text-[#D4AF37]">phone_in_talk</span>
              <span>Direct Helpline (+91 800-PAVILION)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
