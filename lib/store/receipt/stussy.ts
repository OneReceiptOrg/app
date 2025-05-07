"use client";

import type { StateCreator } from "zustand";

export interface StussySlice {
  stussyStoreAddressLine1: string;
  stussyStoreCity: string;
  stussyStorePhone: string;
  stussyDateTime: string;
  stussyTicketNumber: string;
  stussyVatNumber: string;
  stussyRegister: string;
  stussyEmployee: string;
  stussyProductName: string;
  stussyProductPrice: string;
  stussyProductSize: string;
  stussySubtotal: string;
  stussyTaxBase: string;
  stussyTaxRate: string;
  stussyTaxAmount: string;
  stussyTotal: string;
  stussyPaymentMethod: string;
  stussyBarcodeNumber: string;

  updateStussyStoreAddressLine1: (value: string) => void;
  updateStussyStoreCity: (value: string) => void;
  updateStussyStorePhone: (value: string) => void;
  updateStussyDateTime: (value: string) => void;
  updateStussyTicketNumber: (value: string) => void;
  updateStussyVatNumber: (value: string) => void;
  updateStussyRegister: (value: string) => void;
  updateStussyEmployee: (value: string) => void;
  updateStussyProductName: (value: string) => void;
  updateStussyProductPrice: (value: string) => void;
  updateStussyProductSize: (value: string) => void;
  updateStussySubtotal: (value: string) => void;
  updateStussyTaxBase: (value: string) => void;
  updateStussyTaxRate: (value: string) => void;
  updateStussyTaxAmount: (value: string) => void;
  updateStussyTotal: (value: string) => void;
  updateStussyPaymentMethod: (value: string) => void;
  updateStussyBarcodeNumber: (value: string) => void;
}

export const createStussySlice: StateCreator<StussySlice> = (set) => ({
  stussyStoreAddressLine1: "Zeedijk 22dH",
  stussyStoreCity: "Amsterdam, NH 1012AZ Netherlands",
  stussyStorePhone: "+31 202801378",
  stussyDateTime: "28-12-2023 6:40pm",
  stussyTicketNumber: "220000057624",
  stussyVatNumber: "857809362B01",
  stussyRegister: "Register 1",
  stussyEmployee: "Jarmo",
  stussyProductName: "Basic Stüssy Hoodie",
  stussyProductPrice: "141.70",
  stussyProductSize: "L",
  stussySubtotal: "141.70",
  stussyTaxBase: "165.29",
  stussyTaxRate: "21",
  stussyTaxAmount: "11.70",
  stussyTotal: "141.70",
  stussyPaymentMethod: "Debit Card",
  stussyBarcodeNumber: "2 200000 576248",

  updateStussyStoreAddressLine1: (value: string) => set({ stussyStoreAddressLine1: value }),
  updateStussyStoreCity: (value: string) => set({ stussyStoreCity: value }),
  updateStussyStorePhone: (value: string) => set({ stussyStorePhone: value }),
  updateStussyDateTime: (value: string) => set({ stussyDateTime: value }),
  updateStussyTicketNumber: (value: string) => set({ stussyTicketNumber: value }),
  updateStussyVatNumber: (value: string) => set({ stussyVatNumber: value }),
  updateStussyRegister: (value: string) => set({ stussyRegister: value }),
  updateStussyEmployee: (value: string) => set({ stussyEmployee: value }),
  updateStussyProductName: (value: string) => set({ stussyProductName: value }),
  updateStussyProductPrice: (value: string) => set({ stussyProductPrice: value }),
  updateStussyProductSize: (value: string) => set({ stussyProductSize: value }),
  updateStussySubtotal: (value: string) => set({ stussySubtotal: value }),
  updateStussyTaxBase: (value: string) => set({ stussyTaxBase: value }),
  updateStussyTaxRate: (value: string) => set({ stussyTaxRate: value }),
  updateStussyTaxAmount: (value: string) => set({ stussyTaxAmount: value }),
  updateStussyTotal: (value: string) => set({ stussyTotal: value }),
  updateStussyPaymentMethod: (value: string) => set({ stussyPaymentMethod: value }),
  updateStussyBarcodeNumber: (value: string) => set({ stussyBarcodeNumber: value }),
}); 