import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface GoyardSlice {
  goyardProductName: string;
  goyardProductPrice: string;
  goyardTaxAmount: string;
  goyardDate: string;
  goyardOrderNumber: string;
  goyardStoreName: string;
  goyardStoreAddress: string;
  goyardStoreCity: string;
  goyardStorePhone: string;
  goyardTransactionNumber: string;
  goyardSalesAssociate: string;
  goyardCustomerName: string;
  goyardProductReference: string;
  goyardProductColor: string;
  goyardCardLast4: string;
  goyardCustomerId: string;
  goyardStoreId: string;
  goyardCashierId: string;
  goyardCurrency: string;
  goyardPaymentMethod: string;
  goyardPaymentAmount: string;
  goyardTaxLabel: string;
  goyardTaxRate: string;
  goyardTaxBaseAmount: string;
  goyardVatNumber: string;
  goyardProductQuantity: string;
  goyardTime: string;
  updateGoyardProductName: (value: string) => void;
  updateGoyardProductPrice: (value: string) => void;
  updateGoyardTaxAmount: (value: string) => void;
  updateGoyardDate: (value: string) => void;
  updateGoyardOrderNumber: (value: string) => void;
  updateGoyardStoreName: (value: string) => void;
  updateGoyardStoreAddress: (value: string) => void;
  updateGoyardStoreCity: (value: string) => void;
  updateGoyardStorePhone: (value: string) => void;
  updateGoyardTransactionNumber: (value: string) => void;
  updateGoyardSalesAssociate: (value: string) => void;
  updateGoyardCustomerName: (value: string) => void;
  updateGoyardProductReference: (value: string) => void;
  updateGoyardProductColor: (value: string) => void;
  updateGoyardCardLast4: (value: string) => void;
  updateGoyardCustomerId: (value: string) => void;
  updateGoyardStoreId: (value: string) => void;
  updateGoyardCashierId: (value: string) => void;
  updateGoyardCurrency: (value: string) => void;
  updateGoyardPaymentMethod: (value: string) => void;
  updateGoyardPaymentAmount: (value: string) => void;
  updateGoyardTaxLabel: (value: string) => void;
  updateGoyardTaxRate: (value: string) => void;
  updateGoyardTaxBaseAmount: (value: string) => void;
  updateGoyardVatNumber: (value: string) => void;
  updateGoyardProductQuantity: (value: string) => void;
  updateGoyardTime: (value: string) => void;
}

export const createGoyardSlice: StateCreator<
  StoreState,
  [],
  [],
  GoyardSlice
> = (set) => ({
  goyardProductName: "Saint Louis PM Tote",
  goyardProductPrice: "2,450.00",
  goyardTaxAmount: "490.00",
  goyardDate: "03/16/2024 11:15",
  goyardOrderNumber: "189438",
  goyardStoreName: "Goyard Maison",
  goyardStoreAddress: "233 Mount Street",
  goyardStoreCity: "London W1K 2NE",
  goyardStorePhone: "+44 20 7493 1339",
  goyardTransactionNumber: "AEL",
  goyardSalesAssociate: "Pierre Dubois",
  goyardCustomerName: "Victoria Brown",
  goyardProductReference: "BELVE3PMTY29CG29P",
  goyardProductColor: "Black/Tan",
  goyardCardLast4: "****",
  goyardCustomerId: "E3645694",
  goyardStoreId: "UK1",
  goyardCashierId: "UK1C1",
  goyardCurrency: "£",
  goyardPaymentMethod: "American Express GBP",
  goyardPaymentAmount: "2,450.00",
  goyardTaxLabel: "VAT",
  goyardTaxRate: "20.00%",
  goyardTaxBaseAmount: "2,940.00",
  goyardVatNumber: "973 5481 85",
  goyardProductQuantity: "1",
  goyardTime: "14:34",
  updateGoyardProductName: (value) => set({ goyardProductName: value }),
  updateGoyardProductPrice: (value) => set({ goyardProductPrice: value }),
  updateGoyardTaxAmount: (value) => set({ goyardTaxAmount: value }),
  updateGoyardDate: (value) => set({ goyardDate: value }),
  updateGoyardOrderNumber: (value) => set({ goyardOrderNumber: value }),
  updateGoyardStoreName: (value) => set({ goyardStoreName: value }),
  updateGoyardStoreAddress: (value) => set({ goyardStoreAddress: value }),
  updateGoyardStoreCity: (value) => set({ goyardStoreCity: value }),
  updateGoyardStorePhone: (value) => set({ goyardStorePhone: value }),
  updateGoyardTransactionNumber: (value) =>
    set({ goyardTransactionNumber: value }),
  updateGoyardSalesAssociate: (value) => set({ goyardSalesAssociate: value }),
  updateGoyardCustomerName: (value) => set({ goyardCustomerName: value }),
  updateGoyardProductReference: (value) =>
    set({ goyardProductReference: value }),
  updateGoyardProductColor: (value) => set({ goyardProductColor: value }),
  updateGoyardCardLast4: (value) => set({ goyardCardLast4: value }),
  updateGoyardCustomerId: (value) => set({ goyardCustomerId: value }),
  updateGoyardStoreId: (value) => set({ goyardStoreId: value }),
  updateGoyardCashierId: (value) => set({ goyardCashierId: value }),
  updateGoyardCurrency: (value) => set({ goyardCurrency: value }),
  updateGoyardPaymentMethod: (value) => set({ goyardPaymentMethod: value }),
  updateGoyardPaymentAmount: (value) => set({ goyardPaymentAmount: value }),
  updateGoyardTaxLabel: (value) => set({ goyardTaxLabel: value }),
  updateGoyardTaxRate: (value) => set({ goyardTaxRate: value }),
  updateGoyardTaxBaseAmount: (value) => set({ goyardTaxBaseAmount: value }),
  updateGoyardVatNumber: (value) => set({ goyardVatNumber: value }),
  updateGoyardProductQuantity: (value) => set({ goyardProductQuantity: value }),
  updateGoyardTime: (value) => set({ goyardTime: value }),
});
