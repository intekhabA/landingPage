import { Currency, Property } from '../types';

export function formatPrice(property: Property, currency: Currency): string {
  if (currency === 'AED') {
    return `AED ${property.priceAedM.toFixed(1)} M`;
  }
  if (currency === 'USD') {
    return `$ ${property.priceUsdM.toFixed(2)} M`;
  }
  return `₹ ${property.priceInrCr.toFixed(1)} Cr+`;
}

export function formatSecondaryPrice(property: Property, currency: Currency): string | null {
  if (currency === 'AED') {
    return `(₹ ${property.priceInrCr.toFixed(1)} Cr)`;
  }
  if (currency === 'INR' && property.corridor === 'dubai') {
    return `(AED ${property.priceAedM.toFixed(1)} M)`;
  }
  if (currency === 'USD') {
    return `(AED ${property.priceAedM.toFixed(1)} M / ₹ ${property.priceInrCr.toFixed(1)} Cr)`;
  }
  return null;
}

export function formatTransactedVolume(currency: Currency): string {
  if (currency === 'AED') {
    return 'AED 2.0B+';
  }
  if (currency === 'USD') {
    return '$ 540M+';
  }
  return '₹ 4,500+ Cr';
}
