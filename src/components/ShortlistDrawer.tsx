import React from 'react';
import { Currency, Property } from '../types';
import { formatPrice } from '../utils/formatters';

interface ShortlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProperties: Property[];
  currency: Currency;
  onRemove: (id: string) => void;
  onOpenProspectus: (p: Property) => void;
  onBookCombinedInspection: () => void;
}

export const ShortlistDrawer: React.FC<ShortlistDrawerProps> = ({
  isOpen,
  onClose,
  savedProperties,
  currency,
  onRemove,
  onOpenProspectus,
  onBookCombinedInspection
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-lg bg-[#0d1320] border-l border-[#D4AF37]/40 h-full flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-6 bg-[#070B14] border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#D4AF37]">bookmark</span>
            <h3 className="font-headline text-lg text-[#F8FAFC]">
              Saved Residences ({savedProperties.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {savedProperties.length === 0 ? (
            <div className="text-center py-16 text-[#94A3B8] space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#1E293B]">bookmark_border</span>
              <p className="text-sm">No residences saved to your private acquisition basket yet.</p>
              <p className="text-xs">Click the bookmark icon on any property card to compare them.</p>
            </div>
          ) : (
            savedProperties.map((p) => (
              <div
                key={p.id}
                className="p-4 bg-[#131C2E] rounded-lg border border-[#1E293B] space-y-3 group hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="flex gap-3">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-20 h-20 rounded object-cover border border-[#1E293B]"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-display uppercase tracking-wider text-[#D4AF37]">
                        {p.corridorLabel}
                      </span>
                      <button
                        onClick={() => onRemove(p.id)}
                        className="text-[#94A3B8] hover:text-[#ffb4ab] transition-colors"
                        title="Remove"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                    <h4 className="font-headline text-sm text-[#F8FAFC] font-medium leading-tight">
                      {p.title}
                    </h4>
                    <div className="font-display text-sm font-bold text-[#F8FAFC] mt-1">
                      {formatPrice(p, currency)}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-[#1E293B] text-xs font-display">
                  <span className="text-[#94A3B8]">{p.superArea}</span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenProspectus(p);
                    }}
                    className="text-[#D4AF37] hover:underline"
                  >
                    View Dossier &rarr;
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedProperties.length > 0 && (
          <div className="p-6 bg-[#070B14] border-t border-[#1E293B] space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookCombinedInspection();
              }}
              className="w-full py-3 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#070B14] font-display text-xs uppercase font-bold tracking-wider rounded transition-colors text-center"
            >
              Schedule Multi-Residence Itinerary
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
