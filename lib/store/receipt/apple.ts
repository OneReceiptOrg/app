"use client";

import type { StateCreator } from "zustand";

export interface AppleSlice {
  appleStoreLocation: string;
  appleDateTime: string;
  appleProductName: string;
  applePartNumber: string;
  appleReturnDate: string;
  appleSubTotal: string;
  appleTaxRate: string;
  appleTaxAmount: string;
  appleTotal: string;
  applePaymentMethod: string;
  appleCardNumber: string;
  appleTransactionDateTime: string;
  appleApplicationId: string;
  appleApplicationPanSequence: string;
  appleDeviceId: string;
  appleCardType: string;
  applePreferredName: string;
  appleTvr: string;
  appleTsi: string;
  appleTransactionCode: string;

  updateAppleStoreLocation: (value: string) => void;
  updateAppleDateTime: (value: string) => void;
  updateAppleProductName: (value: string) => void;
  updateApplePartNumber: (value: string) => void;
  updateAppleReturnDate: (value: string) => void;
  updateAppleSubTotal: (value: string) => void;
  updateAppleTaxRate: (value: string) => void;
  updateAppleTaxAmount: (value: string) => void;
  updateAppleTotal: (value: string) => void;
  updateApplePaymentMethod: (value: string) => void;
  updateAppleCardNumber: (value: string) => void;
  updateAppleTransactionDateTime: (value: string) => void;
  updateAppleApplicationId: (value: string) => void;
  updateAppleApplicationPanSequence: (value: string) => void;
  updateAppleDeviceId: (value: string) => void;
  updateAppleCardType: (value: string) => void;
  updateApplePreferredName: (value: string) => void;
  updateAppleTvr: (value: string) => void;
  updateAppleTsi: (value: string) => void;
  updateAppleTransactionCode: (value: string) => void;
}

export const createAppleSlice: StateCreator<AppleSlice> = (set) => ({
  appleStoreLocation: "Apple Downtown Brooklyn",
  appleDateTime: "04/12/2025, 10:04 PM",
  appleProductName: "AirPods (2nd Generation)",
  applePartNumber: "MV7N2AM/A",
  appleReturnDate: "Apr 26, 2025",
  appleSubTotal: "129.95",
  appleTaxRate: "9.04%",
  appleTaxAmount: "12.00",
  appleTotal: "141.28",
  applePaymentMethod: "CHASE VISA",
  appleCardNumber: ".....3123",
  appleTransactionDateTime: "2024/01/13 14:43:16",
  appleApplicationId: "A00000000031010",
  appleApplicationPanSequence: "01",
  appleDeviceId: "0000",
  appleCardType: "Credit",
  applePreferredName: "CHASE VISA",
  appleTvr: "0000000000000",
  appleTsi: "0000",
  appleTransactionCode: "2024011301325027019",

  updateAppleStoreLocation: (value) => set({ appleStoreLocation: value }),
  updateAppleDateTime: (value) => set({ appleDateTime: value }),
  updateAppleProductName: (value) => set({ appleProductName: value }),
  updateApplePartNumber: (value) => set({ applePartNumber: value }),
  updateAppleReturnDate: (value) => set({ appleReturnDate: value }),
  updateAppleSubTotal: (value) => set({ appleSubTotal: value }),
  updateAppleTaxRate: (value) => set({ appleTaxRate: value }),
  updateAppleTaxAmount: (value) => set({ appleTaxAmount: value }),
  updateAppleTotal: (value) => set({ appleTotal: value }),
  updateApplePaymentMethod: (value) => set({ applePaymentMethod: value }),
  updateAppleCardNumber: (value) => set({ appleCardNumber: value }),
  updateAppleTransactionDateTime: (value) =>
    set({ appleTransactionDateTime: value }),
  updateAppleApplicationId: (value) => set({ appleApplicationId: value }),
  updateAppleApplicationPanSequence: (value) =>
    set({ appleApplicationPanSequence: value }),
  updateAppleDeviceId: (value) => set({ appleDeviceId: value }),
  updateAppleCardType: (value) => set({ appleCardType: value }),
  updateApplePreferredName: (value) => set({ applePreferredName: value }),
  updateAppleTvr: (value) => set({ appleTvr: value }),
  updateAppleTsi: (value) => set({ appleTsi: value }),
  updateAppleTransactionCode: (value) => set({ appleTransactionCode: value }),
});
