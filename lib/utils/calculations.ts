

export function parseCurrency(value: string | undefined): number {
  if (!value) return 0;
  return parseFloat(value.replace(/[^0-9.-]+/g, "")) || 0;
}

export function formatCurrency(value: number): string {
  return value.toFixed(2);
}


export function calculateVat(value: number, ratePercent: number): number {
  return (value * ratePercent) / 100;
}


export function calculateSubtotal(price: number, quantity: number): number {
  return price * quantity;
}

export function calculateTotal(subtotal: number, vat: number): number {
  return subtotal + vat;
}


export function extractRateFromString(rateString: string | undefined): number {
  if (!rateString) return 0;
  const match = rateString.match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
} 