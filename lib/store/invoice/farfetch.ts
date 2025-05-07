"use client";

import type { StateCreator } from "zustand";
import type { Item } from "../types";

export interface FarfetchSlice {
  farfetchVatNumber: string;
  farfetchOrderNumber: string;
  farfetchInvoiceDate: string;
  farfetchInvoiceNumber: string;
  farfetchEoriNumber: string;
  farfetchExportReason: string;
  farfetchCustomerName: string;
  farfetchCustomerAddressLine: string;
  farfetchCustomerCityZip: string;
  farfetchCustomerRegionCountry: string;
  farfetchShippingDescription: string;
  farfetchShippingQuantity: number;
  farfetchShippingUnitPrice: number;
  farfetchShippingDiscount: number;
  farfetchShippingTotalExclVat: string;
  farfetchShippingTotalInclVat: number;
  farfetchSubTotalExclVat: string;
  farfetchTotalDiscount: string;
  farfetchTaxableAmount: string;
  farfetchTotalVat: string;
  farfetchGrandTotal: string;

  updateFarfetchVatNumber: (value: string) => void;
  updateFarfetchOrderNumber: (value: string) => void;
  updateFarfetchInvoiceDate: (value: string) => void;
  updateFarfetchInvoiceNumber: (value: string) => void;
  updateFarfetchEoriNumber: (value: string) => void;
  updateFarfetchExportReason: (value: string) => void;
  updateFarfetchCustomerName: (value: string) => void;
  updateFarfetchCustomerAddressLine: (value: string) => void;
  updateFarfetchCustomerCityZip: (value: string) => void;
  updateFarfetchCustomerRegionCountry: (value: string) => void;
  updateFarfetchShippingDescription: (value: string) => void;
  updateFarfetchShippingQuantity: (value: number) => void;
  updateFarfetchShippingUnitPrice: (value: number) => void;
  updateFarfetchShippingDiscount: (value: number) => void;
  updateFarfetchShippingTotalInclVat: (value: number) => void;

  calculateFarfetchTotals: (invoiceItems: Item[]) => void;
  prepareFarfetchPayload: (invoiceItems: Item[]) => any;
}

export const initialFarfetchState = {
  farfetchVatNumber: "FR09691814410",
  farfetchOrderNumber: "VHQ5T2/EB110035472",
  farfetchInvoiceDate: "2023-07-12",
  farfetchInvoiceNumber: "ITDN0035472664689031",
  farfetchEoriNumber: "NL861065561",
  farfetchExportReason: "Personal use, not for resale",
  farfetchCustomerName: "Lucas Mallak",
  farfetchCustomerAddressLine: "14 place du fort",
  farfetchCustomerCityZip: "Lyon Gerland, 69007",
  farfetchCustomerRegionCountry: "Auvergne Rhône-Alpes, France",
  farfetchShippingDescription: "Shipping Charges",
  farfetchShippingQuantity: 1,
  farfetchShippingUnitPrice: 10.0,
  farfetchShippingDiscount: 0.0,
  farfetchShippingTotalExclVat: "10.00",
  farfetchShippingTotalInclVat: 12.0,
  farfetchSubTotalExclVat: "225.00",
  farfetchTotalDiscount: "0.00",
  farfetchTaxableAmount: "225.00",
  farfetchTotalVat: "47.00",
  farfetchGrandTotal: "282.00",
};

export const createFarfetchSlice: StateCreator<
  FarfetchSlice,
  [],
  [],
  FarfetchSlice
> = (set, get) => ({
  ...initialFarfetchState,

  updateFarfetchVatNumber: (value) => set({ farfetchVatNumber: value }),
  updateFarfetchOrderNumber: (value) => set({ farfetchOrderNumber: value }),
  updateFarfetchInvoiceDate: (value) => set({ farfetchInvoiceDate: value }),
  updateFarfetchInvoiceNumber: (value) => set({ farfetchInvoiceNumber: value }),
  updateFarfetchEoriNumber: (value) => set({ farfetchEoriNumber: value }),
  updateFarfetchExportReason: (value) => set({ farfetchExportReason: value }),
  updateFarfetchCustomerName: (value) => set({ farfetchCustomerName: value }),
  updateFarfetchCustomerAddressLine: (value) =>
    set({ farfetchCustomerAddressLine: value }),
  updateFarfetchCustomerCityZip: (value) =>
    set({ farfetchCustomerCityZip: value }),
  updateFarfetchCustomerRegionCountry: (value) =>
    set({ farfetchCustomerRegionCountry: value }),
  updateFarfetchShippingDescription: (value) =>
    set({ farfetchShippingDescription: value }),
  updateFarfetchShippingQuantity: (value) =>
    set({ farfetchShippingQuantity: value }),
  updateFarfetchShippingUnitPrice: (value) =>
    set({ farfetchShippingUnitPrice: value }),
  updateFarfetchShippingDiscount: (value) =>
    set({ farfetchShippingDiscount: value }),
  updateFarfetchShippingTotalInclVat: (value) =>
    set({ farfetchShippingTotalInclVat: value }),

  calculateFarfetchTotals: (invoiceItems) => {
    const state = get();

    const itemsSubTotal = invoiceItems.reduce(
      (sum, item) => sum + (item.lineTotal || 0),
      0
    );
    const itemsTotalDiscount = invoiceItems.reduce(
      (sum, item) => sum + (item.discountAmount || 0),
      0
    );
    const itemsTotalVat = invoiceItems.reduce((sum, item) => {
      const itemVat = (item.lineTotal || 0) * ((item.vatRate || 0) / 100);
      return sum + itemVat;
    }, 0);

    const shippingSubTotal =
      state.farfetchShippingUnitPrice * state.farfetchShippingQuantity -
      state.farfetchShippingDiscount;
    const shippingVatRate = invoiceItems[0]?.vatRate || 0;
    const shippingVat = shippingSubTotal * (shippingVatRate / 100);
    const shippingTotalExclVat =
      shippingSubTotal - state.farfetchShippingDiscount;

    const totalDiscount = itemsTotalDiscount + state.farfetchShippingDiscount;
    const totalVat = itemsTotalVat + shippingVat;
    const taxableAmount = itemsSubTotal - itemsTotalDiscount;
    const grandTotal =
      itemsSubTotal - itemsTotalDiscount + shippingTotalExclVat + totalVat;

    set({
      farfetchSubTotalExclVat: itemsSubTotal.toFixed(2),
      farfetchTotalDiscount: totalDiscount.toFixed(2),
      farfetchTaxableAmount: taxableAmount.toFixed(2),
      farfetchTotalVat: totalVat.toFixed(2),
      farfetchGrandTotal: grandTotal.toFixed(2),
      farfetchShippingTotalExclVat: shippingTotalExclVat.toFixed(2),
    });
  },

  prepareFarfetchPayload: (invoiceItems) => {
    const state = get();
    const firstItem = invoiceItems[0] || {};
    const shippingTotalExclVat =
      state.farfetchShippingUnitPrice * state.farfetchShippingQuantity -
      state.farfetchShippingDiscount;
    const vatRatePercent = `${firstItem.vatRate || 0}%`;

    return {
      template: "farfetch",
      VAT_NUMBER: state.farfetchVatNumber,
      ORDER_NUMBER: state.farfetchOrderNumber,
      INVOICE_DATE: state.farfetchInvoiceDate,
      INVOICE_NUMBER: state.farfetchInvoiceNumber,
      EORI_NUMBER: state.farfetchEoriNumber,
      EXPORT_REASON: state.farfetchExportReason,
      CUSTOMER_NAME: state.farfetchCustomerName,
      CUSTOMER_ADDRESS_LINE: state.farfetchCustomerAddressLine,
      CUSTOMER_CITY_ZIP: state.farfetchCustomerCityZip,
      CUSTOMER_REGION_COUNTRY: state.farfetchCustomerRegionCountry,
      PRODUCT_CODE: firstItem.productCode || "",
      PRODUCT_DESCRIPTION: firstItem.name || "",
      PRODUCT_QUANTITY: firstItem.quantity || 1,
      UNIT_PRICE_EXCL_VAT: firstItem.price?.toFixed(2) || "0.00",
      DISCOUNT_AMOUNT: firstItem.discountAmount?.toFixed(2) || "0.00",
      TOTAL_PRICE_EXCL_VAT: firstItem.lineTotal?.toFixed(2) || "0.00",
      VAT_RATE: vatRatePercent,
      TOTAL_PRICE_INCL_VAT: firstItem.totalPriceInclVat?.toFixed(2) || "0.00",
      PRODUCT_COMPOSITION: firstItem.composition || "",
      COUNTRY_OF_ORIGIN: firstItem.countryOfOrigin || "",
      SHIPPING_DESCRIPTION: state.farfetchShippingDescription,
      SHIPPING_QUANTITY: state.farfetchShippingQuantity,
      SHIPPING_UNIT_PRICE:
        state.farfetchShippingUnitPrice?.toFixed(2) || "0.00",
      SHIPPING_DISCOUNT: state.farfetchShippingDiscount?.toFixed(2) || "0.00",
      SHIPPING_TOTAL_EXCL_VAT: shippingTotalExclVat.toFixed(2),
      SHIPPING_TOTAL_INCL_VAT:
        state.farfetchShippingTotalInclVat?.toFixed(2) || "0.00",
      TAX_RATE: vatRatePercent,
      TAXABLE_AMOUNT: state.farfetchTaxableAmount,
      TAX_AMOUNT: state.farfetchTotalVat,
      GRAND_TOTAL: state.farfetchGrandTotal,
    };
  },
});
