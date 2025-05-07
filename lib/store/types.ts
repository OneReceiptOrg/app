export interface Item {
  sku: string;
  styleNumber?: string; // Keep optional if not always present
  name: string;
  quantity: number;
  price: number; // Assuming this is UNIT_PRICE_EXCL_VAT for Farfetch
  lineTotal: number; // Assuming this is TOTAL_PRICE_EXCL_VAT for Farfetch

  // Farfetch Specific Item Fields
  productCode?: string; // Maps to {{PRODUCT_CODE}}
  discountAmount?: number; // Maps to {{DISCOUNT_AMOUNT}}
  vatRate?: number; // Maps to {{VAT_RATE}} (as percentage, e.g., 20)
  totalPriceInclVat?: number; // Maps to {{TOTAL_PRICE_INCL_VAT}} for the item line
  composition?: string; // Maps to {{PRODUCT_COMPOSITION}}
  countryOfOrigin?: string; // Maps to {{COUNTRY_OF_ORIGIN}}
}
