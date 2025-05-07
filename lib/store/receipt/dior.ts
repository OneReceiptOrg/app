"use client";

import type { StateCreator } from "zustand";

export interface DiorSlice {
  diorStorePhone: string;
  diorStoreAddress: string; 
  diorStoreCityStateZip: string;
  diorStoreId: string; 
  diorDate: string; 
  diorTime: string; 
  diorRegisterId: string; 
  diorTransCounter: string; 
  diorCashierId: string; 
  diorCustomerName: string; 
  diorCustomerId: string; 
  diorStoreName: string; 
  diorProductName: string; 
  diorProductSku: string; 
  diorSalespersonId: string; 
  diorTotalAmount: string; 
  diorTaxRate: string; 
  diorTaxAmount: string; 
  diorSubtotal: string; 
  diorItemPrice: string; 
  diorCardLast4: string; 
  diorTaxRateDetail: string; 
  diorTaxAmountDetail: string; 
  diorTaxableAmountDetail: string; 
  diorTaxTotalDetail: string; 
  diorTransactionId: string; 

  updateDiorStorePhone: (value: string) => void;
  updateDiorStoreAddress: (value: string) => void;
  updateDiorStoreCityStateZip: (value: string) => void;
  updateDiorStoreId: (value: string) => void;
  updateDiorDate: (value: string) => void;
  updateDiorTime: (value: string) => void;
  updateDiorRegisterId: (value: string) => void;
  updateDiorTransCounter: (value: string) => void;
  updateDiorCashierId: (value: string) => void;
  updateDiorCustomerName: (value: string) => void;
  updateDiorCustomerId: (value: string) => void;
  updateDiorStoreName: (value: string) => void;
  updateDiorProductName: (value: string) => void;
  updateDiorProductSku: (value: string) => void;
  updateDiorSalespersonId: (value: string) => void;
  updateDiorTotalAmount: (value: string) => void;
  updateDiorTaxRate: (value: string) => void;
  updateDiorTaxAmount: (value: string) => void;
  updateDiorSubtotal: (value: string) => void;
  updateDiorItemPrice: (value: string) => void;
  updateDiorCardLast4: (value: string) => void;
  updateDiorTaxRateDetail: (value: string) => void;
  updateDiorTaxAmountDetail: (value: string) => void;
  updateDiorTaxableAmountDetail: (value: string) => void;
  updateDiorTaxTotalDetail: (value: string) => void;
  updateDiorTransactionId: (value: string) => void;
}

export const initialDiorState: Omit<DiorSlice, keyof DiorActions> = {
  diorStorePhone: "+44 20 7172 0172",
  diorStoreAddress: "160-162 New Bond Street",
  diorStoreCityStateZip: "London W1S 2UE",
  diorStoreId: "201",
  diorDate: "01/15/2024",
  diorTime: "14:30", 
  diorRegisterId: "01",
  diorTransCounter: "3",
  diorCashierId: "40002103",
  diorCustomerName: "JAMES WILSON",
  diorCustomerId: "05503008515",
  diorStoreName: "DIOR LONDON",
  diorProductName: "DIOR OBLIQUE JACKET",
  diorProductSku: "1DIOR239",
  diorSalespersonId: "10002133",
  diorTotalAmount: "3,200.00", 
  diorTaxRate: "20.00", 
  diorTaxAmount: "533.00", 
  diorSubtotal: "2,616.00", 
  diorItemPrice: "3,200.00", 
  diorCardLast4: "4892",
  diorTaxRateDetail: "0.00", 
  diorTaxAmountDetail: "0.00", 
  diorTaxableAmountDetail: "0.00", 
  diorTaxTotalDetail: "0.00", 
  diorTransactionId: "TR-89354", 
};

type DiorActions = {
  [K in keyof DiorSlice as K extends `update${string}`
    ? K
    : never]: DiorSlice[K];
};

export const createDiorSlice: StateCreator<DiorSlice, [], [], DiorSlice> = (
  set
) => ({
  ...initialDiorState,
  updateDiorStorePhone: (value) => set({ diorStorePhone: value }),
  updateDiorStoreAddress: (value) => set({ diorStoreAddress: value }),
  updateDiorStoreCityStateZip: (value) => set({ diorStoreCityStateZip: value }),
  updateDiorStoreId: (value) => set({ diorStoreId: value }),
  updateDiorDate: (value) => set({ diorDate: value }),
  updateDiorTime: (value) => set({ diorTime: value }),
  updateDiorRegisterId: (value) => set({ diorRegisterId: value }),
  updateDiorTransCounter: (value) => set({ diorTransCounter: value }),
  updateDiorCashierId: (value) => set({ diorCashierId: value }),
  updateDiorCustomerName: (value) => set({ diorCustomerName: value }),
  updateDiorCustomerId: (value) => set({ diorCustomerId: value }),
  updateDiorStoreName: (value) => set({ diorStoreName: value }),
  updateDiorProductName: (value) => set({ diorProductName: value }),
  updateDiorProductSku: (value) => set({ diorProductSku: value }),
  updateDiorSalespersonId: (value) => set({ diorSalespersonId: value }),
  updateDiorTotalAmount: (value) => set({ diorTotalAmount: value }),
  updateDiorTaxRate: (value) => set({ diorTaxRate: value }),
  updateDiorTaxAmount: (value) => set({ diorTaxAmount: value }),
  updateDiorSubtotal: (value) => set({ diorSubtotal: value }),
  updateDiorItemPrice: (value) => set({ diorItemPrice: value }),
  updateDiorCardLast4: (value) => set({ diorCardLast4: value }),
  updateDiorTaxRateDetail: (value) => set({ diorTaxRateDetail: value }),
  updateDiorTaxAmountDetail: (value) => set({ diorTaxAmountDetail: value }),
  updateDiorTaxableAmountDetail: (value) =>
    set({ diorTaxableAmountDetail: value }),
  updateDiorTaxTotalDetail: (value) => set({ diorTaxTotalDetail: value }),
  updateDiorTransactionId: (value) => set({ diorTransactionId: value }),
});
