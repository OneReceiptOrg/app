"use client";

import type { StateCreator } from "zustand";

export interface CpCompanySlice {
  cpCompanyAddressLine1: string;
  cpCompanyPostalCode: string;
  cpCompanyCity: string;
  cpCompanyPhoneNumber: string;
  cpCompanyEmail: string;
  cpCompanyInvoiceNumber: string;
  cpCompanyInvoiceDate: string;
  cpCompanyPaymentMethod: string;
  cpCompanyDueDate: string;
  cpCompanyClientName: string;
  cpCompanyClientAddress: string;
  cpCompanyClientCity: string;
  cpCompanyClientPhoneNumber: string;
  cpCompanyClientEmail: string;
  cpCompanyProductDescription: string;
  cpCompanyProductQuantity: number;
  cpCompanyProductUnitPriceHT: number;
  cpCompanyProductVatRate: number;
  cpCompanyProductTotalHT: number;
  cpCompanyProductTotalVATAmount: number;
  cpCompanyProductTotalTTC: number;
  cpCompanyGrandTotalHT: string;
  cpCompanyGrandTotalVAT: string;
  cpCompanyGrandTotalTTC: string;

  updateCpCompanyAddressLine1: (value: string) => void;
  updateCpCompanyPostalCode: (value: string) => void;
  updateCpCompanyCity: (value: string) => void;
  updateCpCompanyPhoneNumber: (value: string) => void;
  updateCpCompanyEmail: (value: string) => void;
  updateCpCompanyInvoiceNumber: (value: string) => void;
  updateCpCompanyInvoiceDate: (value: string) => void;
  updateCpCompanyPaymentMethod: (value: string) => void;
  updateCpCompanyDueDate: (value: string) => void;
  updateCpCompanyClientName: (value: string) => void;
  updateCpCompanyClientAddress: (value: string) => void;
  updateCpCompanyClientCity: (value: string) => void;
  updateCpCompanyClientPhoneNumber: (value: string) => void;
  updateCpCompanyClientEmail: (value: string) => void;
  updateCpCompanyProductDescription: (value: string) => void;
  updateCpCompanyProductQuantity: (value: number) => void;
  updateCpCompanyProductUnitPriceHT: (value: number) => void;
  updateCpCompanyProductVatRate: (value: number) => void;

  calculateCpCompanyTotals: () => void;
  prepareCpCompanyPayload: () => any;
}

export const initialCpCompanyState = {
  cpCompanyAddressLine1: "94 rue RENE BOULANGER",
  cpCompanyPostalCode: "75010",
  cpCompanyCity: "Paris",
  cpCompanyPhoneNumber: "01 48 03 35 58",
  cpCompanyEmail: "customerservice@cpcompany.com",
  cpCompanyInvoiceNumber: "F2023-1212",
  cpCompanyInvoiceDate: "26/10/2024",
  cpCompanyPaymentMethod: "carte bancaire",
  cpCompanyDueDate: "10/11/2024",
  cpCompanyClientName: "Aristide Gilgean",
  cpCompanyClientAddress: "Rue des chênes 139",
  cpCompanyClientCity: "Wihérie",
  cpCompanyClientPhoneNumber: "0492125567",
  cpCompanyClientEmail: "gilgeanaristide@gmail.com",
  cpCompanyProductDescription: "Extra Fine Merino Wool Goggle Beanie",
  cpCompanyProductQuantity: 1,
  cpCompanyProductUnitPriceHT: 115.7,
  cpCompanyProductVatRate: 21,
  cpCompanyProductTotalHT: 115.7,
  cpCompanyProductTotalVATAmount: 24.297,
  cpCompanyProductTotalTTC: 139.997,
  cpCompanyGrandTotalHT: "115.70",
  cpCompanyGrandTotalVAT: "24.30",
  cpCompanyGrandTotalTTC: "140.00",
};

export const createCpCompanySlice: StateCreator<
  CpCompanySlice,
  [],
  [],
  CpCompanySlice
> = (set, get) => ({
  ...initialCpCompanyState,

  updateCpCompanyAddressLine1: (value) => set({ cpCompanyAddressLine1: value }),
  updateCpCompanyPostalCode: (value) => set({ cpCompanyPostalCode: value }),
  updateCpCompanyCity: (value) => set({ cpCompanyCity: value }),
  updateCpCompanyPhoneNumber: (value) => set({ cpCompanyPhoneNumber: value }),
  updateCpCompanyEmail: (value) => set({ cpCompanyEmail: value }),
  updateCpCompanyInvoiceNumber: (value) =>
    set({ cpCompanyInvoiceNumber: value }),
  updateCpCompanyInvoiceDate: (value) => set({ cpCompanyInvoiceDate: value }),
  updateCpCompanyPaymentMethod: (value) =>
    set({ cpCompanyPaymentMethod: value }),
  updateCpCompanyDueDate: (value) => set({ cpCompanyDueDate: value }),
  updateCpCompanyClientName: (value) => set({ cpCompanyClientName: value }),
  updateCpCompanyClientAddress: (value) =>
    set({ cpCompanyClientAddress: value }),
  updateCpCompanyClientCity: (value) => set({ cpCompanyClientCity: value }),
  updateCpCompanyClientPhoneNumber: (value) =>
    set({ cpCompanyClientPhoneNumber: value }),
  updateCpCompanyClientEmail: (value) => set({ cpCompanyClientEmail: value }),
  updateCpCompanyProductDescription: (value) =>
    set({ cpCompanyProductDescription: value }),
  updateCpCompanyProductQuantity: (value) => {
    set({ cpCompanyProductQuantity: value });
    get().calculateCpCompanyTotals();
  },
  updateCpCompanyProductUnitPriceHT: (value) => {
    set({ cpCompanyProductUnitPriceHT: value });
    get().calculateCpCompanyTotals();
  },
  updateCpCompanyProductVatRate: (value) => {
    set({ cpCompanyProductVatRate: value });
    get().calculateCpCompanyTotals();
  },

  calculateCpCompanyTotals: () => {
    const state = get();

    const totalHT =
      state.cpCompanyProductQuantity * state.cpCompanyProductUnitPriceHT;
    const totalVATAmount = totalHT * (state.cpCompanyProductVatRate / 100);
    const totalTTC = totalHT + totalVATAmount;

    set({
      cpCompanyProductTotalHT: totalHT,
      cpCompanyProductTotalVATAmount: totalVATAmount,
      cpCompanyProductTotalTTC: totalTTC,
      cpCompanyGrandTotalHT: totalHT.toFixed(2),
      cpCompanyGrandTotalVAT: totalVATAmount.toFixed(2),
      cpCompanyGrandTotalTTC: totalTTC.toFixed(2),
    });
  },

  prepareCpCompanyPayload: () => {
    const state = get();

    // Ensure totals are calculated before preparing payload
    get().calculateCpCompanyTotals();
    const calculatedState = get(); // Get updated state after calculation

    return {
      template: "cpcompany", // Assuming 'cpcompany' is the template name
      PAYMENT_METHOD: calculatedState.cpCompanyPaymentMethod,
      DUE_DATE: calculatedState.cpCompanyDueDate,
      INVOICE_NUMBER: calculatedState.cpCompanyInvoiceNumber,
      INOVICE_DATE: calculatedState.cpCompanyInvoiceDate, // Note: Placeholder typo 'INOVICE_DATE'
      COMPANY_POSTAL_CODE: calculatedState.cpCompanyPostalCode, // Assuming this maps correctly
      INVOICE_PHONE_NUMBER: calculatedState.cpCompanyPhoneNumber,
      INVOICE_EMAIL: calculatedState.cpCompanyEmail,
      PRODUCT_DESCRIPTION: calculatedState.cpCompanyProductDescription,
      CLIENT_FULL_NAME: calculatedState.cpCompanyClientName,
      CLIENT_ADDRESS: calculatedState.cpCompanyClientAddress,
      CLIENT_CITY: calculatedState.cpCompanyClientCity,
      CLIENT_NUMBER: calculatedState.cpCompanyClientPhoneNumber,
      CLIENT_EMAIL: calculatedState.cpCompanyClientEmail,
      QUANTITY: calculatedState.cpCompanyProductQuantity.toString(),
      UNIT_PRICE: calculatedState.cpCompanyProductUnitPriceHT.toFixed(2),
      TVA: calculatedState.cpCompanyProductVatRate.toString(), // As percentage value
      TOTAL_HT: calculatedState.cpCompanyGrandTotalHT,
      TTC: calculatedState.cpCompanyGrandTotalTTC,
      // Add other fields from state if needed for the template, mapping to placeholders
      COMPANY_ADDRESS_LINE_1: calculatedState.cpCompanyAddressLine1, // Example if needed
      COMPANY_CITY: calculatedState.cpCompanyCity, // Example if needed
    };
  },
});
