import React, { useState } from 'react';
import { Currency, Property } from '../types';
import { formatPrice, formatSecondaryPrice } from '../utils/formatters';

interface ProspectusModalProps {
  property: Property | null;
  currency: Currency;
  onClose: () => void;
  onBookInspection: (propertyTitle: string) => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  property,
  currency,
  onClose,
  onBookInspection
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [dossierDownloaded, setDossierDownloaded] = useState(false);

  if (!property) return null;

  const secondaryPrice = formatSecondaryPrice(property, currency);

  const handleDownloadDossier = () => {
    setDossierDownloaded(true);
    setTimeout(() => {
      setDossierDownloaded(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0d1320] border border-[#D4AF37]/40 rounded-xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070B14] border-b border-[#1E293B]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#D4AF37]">folder_open</span>
            <span className="font-display text-xs uppercase tracking-widest text-[#F8FAFC] font-semibold">
              Private Architectural Dossier &amp; RERA Sanction Plans
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors cursor-pointer"
            aria-label="Close prospectus"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Main Visual & Header Info */}
          <div>
            <div className="relative h-80 sm:h-96 w-full rounded-lg overflow-hidden border border-[#1E293B]">
              <img
                src={property.gallery[activeImageIndex] || property.image}
                alt={property.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-95 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-black/20 pointer-events-none"></div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="font-display text-xs text-[#D4AF37] uppercase tracking-wider font-semibold">
                    {property.location}
                  </span>
                  <h2 className="font-headline text-2xl sm:text-3xl text-[#F8FAFC]">
                    {property.title}
                  </h2>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8]">
                    Verified Allocation Price
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                    {formatPrice(property, currency)}
                  </div>
                  {secondaryPrice && (
                    <div className="text-xs text-[#94A3B8]">{secondaryPrice}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {property.gallery.length > 1 && (
              <div className="flex gap-2 mt-3">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded overflow-hidden border transition-all ${
                      activeImageIndex === idx ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]' : 'border-[#1E293B] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Compliance Badges */}
          <div className="flex flex-wrap items-center gap-3 p-4 bg-[#0B111E] rounded-lg border border-[#1E293B]">
            <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-[#10B981] font-semibold">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>{property.badges.rera}</span>
            </div>
            <span className="text-[#1E293B]">|</span>
            <div className="text-xs font-display uppercase tracking-wider text-[#D4AF37] font-semibold">
              Registration No: <span className="font-mono text-[#F8FAFC]">{property.reraNumber}</span>
            </div>
            <span className="text-[#1E293B]">|</span>
            <div className="text-xs font-display uppercase tracking-wider text-[#F8FAFC]">
              {property.status} • {property.handover}
            </div>
          </div>

          {/* Narrative Architectural Overview */}
          <div className="space-y-3">
            <h3 className="font-headline text-lg text-[#F8FAFC]">
              Architectural Concept &amp; Residence Profile
            </h3>
            <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Technical Specifications Matrix */}
          <div>
            <h3 className="font-headline text-lg text-[#F8FAFC] mb-4">
              Structural &amp; Investment Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#131C2E] p-4 rounded-lg border border-[#1E293B]">
              <div>
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Configuration
                </span>
                <span className="text-xs sm:text-sm font-display text-[#F8FAFC] font-semibold">
                  {property.bhk} BHK Suite
                </span>
              </div>
              <div>
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Super Area
                </span>
                <span className="text-xs sm:text-sm font-display text-[#F8FAFC] font-semibold">
                  {property.superArea}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Usable Carpet
                </span>
                <span className="text-xs sm:text-sm font-display text-[#F8FAFC] font-semibold">
                  {property.usableCarpet}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Yield Projection
                </span>
                <span className="text-xs sm:text-sm font-display text-[#10B981] font-semibold">
                  {property.expectedGrossYield}
                </span>
              </div>
              <div className="pt-2 border-t border-[#1E293B]">
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Principal Architect
                </span>
                <span className="text-xs sm:text-sm font-body text-[#F8FAFC]">
                  {property.architect}
                </span>
              </div>
              <div className="pt-2 border-t border-[#1E293B]">
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Floor Plan Design
                </span>
                <span className="text-xs sm:text-sm font-body text-[#F8FAFC]">
                  {property.floorPlanType}
                </span>
              </div>
              <div className="pt-2 border-t border-[#1E293B]">
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  Dedicated Parking
                </span>
                <span className="text-xs sm:text-sm font-body text-[#F8FAFC]">
                  {property.parkingSpaces} Reserved Bays
                </span>
              </div>
              <div className="pt-2 border-t border-[#1E293B]">
                <span className="text-[10px] font-display uppercase tracking-wider text-[#94A3B8] block">
                  HOA / Maintenance
                </span>
                <span className="text-xs sm:text-sm font-body text-[#F8FAFC]">
                  {property.maintenancePerSqFt}
                </span>
              </div>
            </div>
          </div>

          {/* Key Amenities */}
          <div>
            <h3 className="font-headline text-lg text-[#F8FAFC] mb-3">
              Included Private Amenities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {property.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 bg-[#0B111E] rounded border border-[#1E293B] text-xs font-body text-[#F8FAFC] flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-xs text-[#D4AF37]">star</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="p-5 bg-[#0B111E] rounded-xl border border-[#1E293B] space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-display text-sm text-[#F8FAFC] font-semibold uppercase tracking-wider">
                  Direct Institutional Allocation
                </div>
                <div className="text-xs text-[#94A3B8]">
                  Zero brokerage. Original developer invoice under Haryana RERA / MahaRERA / DLD.
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleDownloadDossier}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded bg-[#131C2E] hover:bg-[#1a233a] border border-[#1E293B] text-[#dde2f5] font-display text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span>{dossierDownloaded ? 'Dossier Downloaded ✓' : 'Download Full PDF Dossier'}</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onBookInspection(property.title);
                  }}
                  className="flex-1 sm:flex-initial px-6 py-2.5 rounded bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#070B14] font-display text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">directions_car</span>
                  <span>Schedule Chauffeur Visit</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
