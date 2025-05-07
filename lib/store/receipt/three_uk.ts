import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface ThreeUkSlice {
  threeUkBrandName: string;
  threeUkBranchName: string;
  threeUkStoreAddress: string;
  threeUkStoreCity: string;
  threeUkStorePhone: string;
  threeUkProductName: string;
  threeUkProductPrice: string;
  threeUkProductImei: string;
  threeUkInvoiceNumber: string;
  threeUkServedBy: string;
  threeUkVatNumber: string;
  threeUkTransactionDate: string;
  threeUkTransactionTime: string;
  threeUkTransactionStore: string;
  threeUkTransactionTerm: string;
  threeUkTransactionCode: string;
  updateThreeUkBrandName: (brandName: string) => void;
  updateThreeUkBranchName: (branchName: string) => void;
  updateThreeUkStoreAddress: (storeAddress: string) => void;
  updateThreeUkStoreCity: (storeCity: string) => void;
  updateThreeUkStorePhone: (storePhone: string) => void;
  updateThreeUkProductName: (productName: string) => void;
  updateThreeUkProductPrice: (productPrice: string) => void;
  updateThreeUkProductImei: (productImei: string) => void;
  updateThreeUkInvoiceNumber: (invoiceNumber: string) => void;
  updateThreeUkServedBy: (servedBy: string) => void;
  updateThreeUkVatNumber: (vatNumber: string) => void;
  updateThreeUkTransactionDate: (transactionDate: string) => void;
  updateThreeUkTransactionTime: (transactionTime: string) => void;
  updateThreeUkTransactionStore: (transactionStore: string) => void;
  updateThreeUkTransactionTerm: (transactionTerm: string) => void;
  updateThreeUkTransactionCode: (transactionCode: string) => void;
}

export const createThreeUkSlice: StateCreator<
  StoreState,
  [],
  [],
  ThreeUkSlice
> = (set) => ({
  threeUkBrandName: "Three.co.uk",
  threeUkBranchName: "Three Liverpool",
  threeUkStoreAddress: "123 Oxford Street",
  threeUkStoreCity: "London W1D 2JA",
  threeUkStorePhone: "+44 333 338 1001",
  threeUkProductName: "iPhone 15 Pro Max - Contract",
  threeUkProductPrice: "1,199.00",
  threeUkProductImei: "xxxxxxxx",
  threeUkInvoiceNumber: "XXXXXXXXXXXXXXXXXXX",
  threeUkServedBy: "Alex smith",
  threeUkVatNumber: "xxxxxxxxxx",
  threeUkTransactionDate: "02/08/2024",
  threeUkTransactionTime: "15:27",
  threeUkTransactionStore: "00001",
  threeUkTransactionTerm: "0001",
  threeUkTransactionCode: "00001",
  updateThreeUkBrandName: (brandName) => set({ threeUkBrandName: brandName }),
  updateThreeUkBranchName: (branchName) =>
    set({ threeUkBranchName: branchName }),
  updateThreeUkStoreAddress: (storeAddress) =>
    set({ threeUkStoreAddress: storeAddress }),
  updateThreeUkStoreCity: (storeCity) => set({ threeUkStoreCity: storeCity }),
  updateThreeUkStorePhone: (storePhone) =>
    set({ threeUkStorePhone: storePhone }),
  updateThreeUkProductName: (productName) =>
    set({ threeUkProductName: productName }),
  updateThreeUkProductPrice: (productPrice) =>
    set({ threeUkProductPrice: productPrice }),
  updateThreeUkProductImei: (productImei) =>
    set({ threeUkProductImei: productImei }),
  updateThreeUkInvoiceNumber: (invoiceNumber) =>
    set({ threeUkInvoiceNumber: invoiceNumber }),
  updateThreeUkServedBy: (servedBy) => set({ threeUkServedBy: servedBy }),
  updateThreeUkVatNumber: (vatNumber) => set({ threeUkVatNumber: vatNumber }),
  updateThreeUkTransactionDate: (transactionDate) =>
    set({ threeUkTransactionDate: transactionDate }),
  updateThreeUkTransactionTime: (transactionTime) =>
    set({ threeUkTransactionTime: transactionTime }),
  updateThreeUkTransactionStore: (transactionStore) =>
    set({ threeUkTransactionStore: transactionStore }),
  updateThreeUkTransactionTerm: (transactionTerm) =>
    set({ threeUkTransactionTerm: transactionTerm }),
  updateThreeUkTransactionCode: (transactionCode) =>
    set({ threeUkTransactionCode: transactionCode }),
});
