import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface SamsungProduct {
  sku: string;
  name: string;
  price: string;
  quantity: string;
  total: string;
}

export interface SamsungTaxItem {
  name: string;
  rate: string;
  amount: string;
}

export interface SamsungSlice {
  // Store information
  samsungStoreName: string;
  samsungStoreAddress: string;
  samsungStoreCity: string;
  samsungStorePhone: string;

  // Transaction details
  samsungDate: string;

  // Customer information
  samsungCustomerName: string;
  samsungCustomerId: string;
  samsungCustomerEmail: string;

  // Products
  samsungProducts: SamsungProduct[];

  // Totals
  samsungSubtotal: string;
  samsungTaxItems: SamsungTaxItem[];
  samsungTotal: string;

  // Payment information
  samsungPaymentMethod: string;
  samsungCardLast4: string;

  // Order details
  samsungOrderNumber: string;
  samsungSerialNumber: string;

  // Actions
  updateSamsungStoreName: (value: string) => void;
  updateSamsungStoreAddress: (value: string) => void;
  updateSamsungStoreCity: (value: string) => void;
  updateSamsungStorePhone: (value: string) => void;
  updateSamsungDate: (value: string) => void;
  updateSamsungCustomerName: (value: string) => void;
  updateSamsungCustomerId: (value: string) => void;
  updateSamsungCustomerEmail: (value: string) => void;
  updateSamsungProducts: (products: SamsungProduct[]) => void;
  updateSamsungSubtotal: (value: string) => void;
  updateSamsungTaxItems: (taxItems: SamsungTaxItem[]) => void;
  updateSamsungTotal: (value: string) => void;
  updateSamsungPaymentMethod: (value: string) => void;
  updateSamsungCardLast4: (value: string) => void;
  updateSamsungOrderNumber: (value: string) => void;
  updateSamsungSerialNumber: (value: string) => void;
}

export const createSamsungSlice: StateCreator<
  StoreState,
  [],
  [],
  SamsungSlice
> = (set) => ({
  // Initial state
  samsungStoreName: "Samsung Experience Store",
  samsungStoreAddress: "123 High Street",
  samsungStoreCity: "London SW1Y 4SB",
  samsungStorePhone: "+44 333 000 0333",
  samsungDate: "03/14/2024 10:30",
  samsungCustomerName: "David Wilson",
  samsungCustomerId: "193911",
  samsungCustomerEmail: "david.w@email.com",
  samsungProducts: [
    {
      sku: "PHUPSA000307",
      name: "Galaxy S24 Ultra",
      price: "1299.99",
      quantity: "1",
      total: "1299.99",
    },
  ],
  samsungSubtotal: "1299.99",
  samsungTaxItems: [
    {
      name: "TX Houstan City",
      rate: "1.0",
      amount: "260.00",
    },
  ],
  samsungTotal: "1559.99",
  samsungPaymentMethod: "Credit Card",
  samsungCardLast4: "8901",
  samsungOrderNumber: "ORD-377459",
  samsungSerialNumber: "RF8M99BKXEN",

  // Actions
  updateSamsungStoreName: (value) => set({ samsungStoreName: value }),
  updateSamsungStoreAddress: (value) => set({ samsungStoreAddress: value }),
  updateSamsungStoreCity: (value) => set({ samsungStoreCity: value }),
  updateSamsungStorePhone: (value) => set({ samsungStorePhone: value }),
  updateSamsungDate: (value) => set({ samsungDate: value }),
  updateSamsungCustomerName: (value) => set({ samsungCustomerName: value }),
  updateSamsungCustomerId: (value) => set({ samsungCustomerId: value }),
  updateSamsungCustomerEmail: (value) => set({ samsungCustomerEmail: value }),
  updateSamsungProducts: (products) => set({ samsungProducts: products }),
  updateSamsungSubtotal: (value) => set({ samsungSubtotal: value }),
  updateSamsungTaxItems: (taxItems) => set({ samsungTaxItems: taxItems }),
  updateSamsungTotal: (value) => set({ samsungTotal: value }),
  updateSamsungPaymentMethod: (value) => set({ samsungPaymentMethod: value }),
  updateSamsungCardLast4: (value) => set({ samsungCardLast4: value }),
  updateSamsungOrderNumber: (value) => set({ samsungOrderNumber: value }),
  updateSamsungSerialNumber: (value) => set({ samsungSerialNumber: value }),
});
