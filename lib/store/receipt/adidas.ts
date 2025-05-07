import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface AdidasProduct {
  sku: string;
  name: string;
  price: string;
  quantity: string;
  description: string;
  size: string;
}

export interface AdidasSlice {
  // Store information
  adidasStoreId: string;
  adidasStoreName: string;
  adidasStoreAddress: string;
  adidasStoreCity: string;
  adidasStorePhone: string;

  // Transaction details
  adidasTransactionId: string;
  adidasDateTime: string;

  // Products
  adidasProducts: AdidasProduct[];

  // Totals and payment
  adidasSubtotal: string;
  adidasTaxLabel: string;
  adidasTax: string;
  adidasTotal: string;
  adidasPayment: string;
  adidasBalance: string;

  // Payment information
  adidasPaymentMethod: string;
  adidasPaymentDate: string;
  adidasPaymentAmount: string;
  adidasReferenceNumber: string;
  adidasAuthNumber: string;
  adidasCardLast4: string;

  // Actions
  updateAdidasStoreId: (value: string) => void;
  updateAdidasStoreName: (value: string) => void;
  updateAdidasStoreAddress: (value: string) => void;
  updateAdidasStoreCity: (value: string) => void;
  updateAdidasStorePhone: (value: string) => void;
  updateAdidasTransactionId: (value: string) => void;
  updateAdidasDateTime: (value: string) => void;
  updateAdidasProducts: (products: AdidasProduct[]) => void;
  updateAdidasSubtotal: (value: string) => void;
  updateAdidasTaxLabel: (value: string) => void;
  updateAdidasTax: (value: string) => void;
  updateAdidasTotal: (value: string) => void;
  updateAdidasPayment: (value: string) => void;
  updateAdidasBalance: (value: string) => void;
  updateAdidasPaymentMethod: (value: string) => void;
  updateAdidasPaymentDate: (value: string) => void;
  updateAdidasPaymentAmount: (value: string) => void;
  updateAdidasReferenceNumber: (value: string) => void;
  updateAdidasAuthNumber: (value: string) => void;
  updateAdidasCardLast4: (value: string) => void;
}

export const createAdidasSlice: StateCreator<
  StoreState,
  [],
  [],
  AdidasSlice
> = (set) => ({
  // Initial state
  adidasStoreId: "6525",
  adidasStoreName: "New York Fifth Ave",
  adidasStoreAddress: "565 5th Ave",
  adidasStoreCity: "New York, NY 10017",
  adidasStorePhone: "(212) 883-5606",
  adidasTransactionId: "652510803",
  adidasDateTime: "02:51:10PM 12/19/2019",
  adidasProducts: [
    {
      sku: "FX4145",
      name: "YEEZY BOOST",
      price: "250.00",
      quantity: "1",
      description: "350 V2 YECHEIL/",
      size: "9.5",
    },
  ],
  adidasSubtotal: "250.00",
  adidasTaxLabel: "ACC",
  adidasTax: "22.20",
  adidasTotal: "239.53",
  adidasPayment: "239.53",
  adidasBalance: "0.00",
  adidasPaymentMethod: "VISA",
  adidasPaymentDate: "12/19/2019",
  adidasPaymentAmount: "239.53",
  adidasReferenceNumber: "6079606827",
  adidasAuthNumber: "095915",
  adidasCardLast4: "1126",

  // Actions
  updateAdidasStoreId: (value) => set({ adidasStoreId: value }),
  updateAdidasStoreName: (value) => set({ adidasStoreName: value }),
  updateAdidasStoreAddress: (value) => set({ adidasStoreAddress: value }),
  updateAdidasStoreCity: (value) => set({ adidasStoreCity: value }),
  updateAdidasStorePhone: (value) => set({ adidasStorePhone: value }),
  updateAdidasTransactionId: (value) => set({ adidasTransactionId: value }),
  updateAdidasDateTime: (value) => set({ adidasDateTime: value }),
  updateAdidasProducts: (products) => set({ adidasProducts: products }),
  updateAdidasSubtotal: (value) => set({ adidasSubtotal: value }),
  updateAdidasTaxLabel: (value) => set({ adidasTaxLabel: value }),
  updateAdidasTax: (value) => set({ adidasTax: value }),
  updateAdidasTotal: (value) => set({ adidasTotal: value }),
  updateAdidasPayment: (value) => set({ adidasPayment: value }),
  updateAdidasBalance: (value) => set({ adidasBalance: value }),
  updateAdidasPaymentMethod: (value) => set({ adidasPaymentMethod: value }),
  updateAdidasPaymentDate: (value) => set({ adidasPaymentDate: value }),
  updateAdidasPaymentAmount: (value) => set({ adidasPaymentAmount: value }),
  updateAdidasReferenceNumber: (value) => set({ adidasReferenceNumber: value }),
  updateAdidasAuthNumber: (value) => set({ adidasAuthNumber: value }),
  updateAdidasCardLast4: (value) => set({ adidasCardLast4: value }),
});
