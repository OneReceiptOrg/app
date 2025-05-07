"use client";

import type { StateCreator } from "zustand";

export interface BalenciagaSlice {
  balenciagaStoreName: string;
  balenciagaStoreAddress: string;
  balenciagaStoreCity: string;
  balenciagaStoreZip: string;
  balenciagaStorePhone: string;
  balenciagaTransactionNumber: string;
  balenciagaDate: string;
  balenciagaTime: string;
  balenciagaCashier: string;
  balenciagaRegister: string;
  balenciagaCustomerName: string;
  balenciagaCustomerId: string;
  balenciagaCurrency: string;
  balenciagaProducts: {
    sku: string;
    quantity: string;
    price: string;
    total: string;
    name: string;
    size: string;
    salesperson: string;
  }[];
  balenciagaSubtotal: string;
  balenciagaTax: string;
  balenciagaTotal: string;
  balenciagaPaymentMethod: string;
  balenciagaPaymentAmount: string;
  balenciagaChange: string;
  balenciagaItemCount: number;
  balenciagaTaxAnalysis: {
    code: string;
    taxable: string;
    rate: string;
    totalTax: string;
  }[];

  updateBalenciagaStoreName: (value: string) => void;
  updateBalenciagaStoreAddress: (value: string) => void;
  updateBalenciagaStoreCity: (value: string) => void;
  updateBalenciagaStoreZip: (value: string) => void;
  updateBalenciagaStorePhone: (value: string) => void;
  updateBalenciagaTransactionNumber: (value: string) => void;
  updateBalenciagaDate: (value: string) => void;
  updateBalenciagaTime: (value: string) => void;
  updateBalenciagaCashier: (value: string) => void;
  updateBalenciagaRegister: (value: string) => void;
  updateBalenciagaCustomerName: (value: string) => void;
  updateBalenciagaCustomerId: (value: string) => void;
  updateBalenciagaCurrency: (value: string) => void;
  updateBalenciagaProducts: (products: BalenciagaSlice['balenciagaProducts']) => void;
  updateBalenciagaSubtotal: (value: string) => void;
  updateBalenciagaTax: (value: string) => void;
  updateBalenciagaTotal: (value: string) => void;
  updateBalenciagaPaymentMethod: (value: string) => void;
  updateBalenciagaPaymentAmount: (value: string) => void;
  updateBalenciagaChange: (value: string) => void;
  updateBalenciagaItemCount: (value: number) => void;
  updateBalenciagaTaxAnalysis: (taxAnalysis: BalenciagaSlice['balenciagaTaxAnalysis']) => void;
}

export const initialBalenciagaState = {
  balenciagaStoreName: "Costa Mesa",
  balenciagaStoreAddress: "3333 Bristol Street",
  balenciagaStoreCity: "Costa Mesa",
  balenciagaStoreZip: "92626", // Corrected zip from template
  balenciagaStorePhone: "(714)-668-0057",
  balenciagaTransactionNumber: "6985",
  balenciagaDate: "04/02/19",
  balenciagaTime: "12:04:43",
  balenciagaCashier: "1052200",
  balenciagaRegister: "1",
  balenciagaCustomerName: "Ruslan Badretdinov",
  balenciagaCustomerId: "2362349677847",
  balenciagaCurrency: "USD",
  balenciagaProducts: [
    {
      sku: "556150TAV4",
      quantity: "1",
      price: "440.40", // Price before tax? Check template
      total: "495.00", // Amount? Check template
      name: "MEN T-SHIRT M", // Simplified name
      size: "483504 - 1000 - M", // This looks like more SKU/internal codes
      salesperson: "1062200 (SHAEBUR)",
    },
  ],
  balenciagaSubtotal: "495.00",
  balenciagaTax: "36.09",
  balenciagaTotal: "531.09",
  balenciagaPaymentMethod: "Visa",
  balenciagaPaymentAmount: "440.00", // Should this match total? Check template
  balenciagaChange: "0.00",
  balenciagaItemCount: 1, // Hardcoded 2 in template, but only 1 product listed? Check logic
  balenciagaTaxAnalysis: [
    {
      code: "Local",
      taxable: "531.09", // Is this correct? Check template
      rate: "7.29", // Removed %
      totalTax: "36.09", // Renamed from 'Tax'
    },
  ],
};

export const createBalenciagaSlice: StateCreator<BalenciagaSlice, [], [], BalenciagaSlice> = (
  set
) => ({
  ...initialBalenciagaState,
  updateBalenciagaStoreName: (value) => set({ balenciagaStoreName: value }),
  updateBalenciagaStoreAddress: (value) => set({ balenciagaStoreAddress: value }),
  updateBalenciagaStoreCity: (value) => set({ balenciagaStoreCity: value }),
  updateBalenciagaStoreZip: (value) => set({ balenciagaStoreZip: value }),
  updateBalenciagaStorePhone: (value) => set({ balenciagaStorePhone: value }),
  updateBalenciagaTransactionNumber: (value) => set({ balenciagaTransactionNumber: value }),
  updateBalenciagaDate: (value) => set({ balenciagaDate: value }),
  updateBalenciagaTime: (value) => set({ balenciagaTime: value }),
  updateBalenciagaCashier: (value) => set({ balenciagaCashier: value }),
  updateBalenciagaRegister: (value) => set({ balenciagaRegister: value }),
  updateBalenciagaCustomerName: (value) => set({ balenciagaCustomerName: value }),
  updateBalenciagaCustomerId: (value) => set({ balenciagaCustomerId: value }),
  updateBalenciagaCurrency: (value) => set({ balenciagaCurrency: value }),
  updateBalenciagaProducts: (products) => set({ balenciagaProducts: products }),
  updateBalenciagaSubtotal: (value) => set({ balenciagaSubtotal: value }),
  updateBalenciagaTax: (value) => set({ balenciagaTax: value }),
  updateBalenciagaTotal: (value) => set({ balenciagaTotal: value }),
  updateBalenciagaPaymentMethod: (value) => set({ balenciagaPaymentMethod: value }),
  updateBalenciagaPaymentAmount: (value) => set({ balenciagaPaymentAmount: value }),
  updateBalenciagaChange: (value) => set({ balenciagaChange: value }),
  updateBalenciagaItemCount: (value) => set({ balenciagaItemCount: value }),
  updateBalenciagaTaxAnalysis: (taxAnalysis) => set({ balenciagaTaxAnalysis: taxAnalysis }),
}); 