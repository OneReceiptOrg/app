"use client";

import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface DysonSlice {
  dysonStoreName: string;
  dysonStoreAddress: string;
  dysonStoreCity: string;
  dysonStorePhone: string;

  dysonDate: string;
  dysonOrderNumber: string;
  dysonOrderReference: string;

  dysonCustomerName: string;
  dysonCustomerEmail: string;

  dysonProductName: string;
  dysonProductModel: string;
  dysonProductSKU: string;
  dysonSerialNumber: string;

  dysonPrice: string;
  dysonTax: string;
  dysonTotalPrice: string;
  dysonCardLast4: string;

  updateDysonStoreName: (storeName: string) => void;
  updateDysonStoreAddress: (storeAddress: string) => void;
  updateDysonStoreCity: (storeCity: string) => void;
  updateDysonStorePhone: (storePhone: string) => void;
  updateDysonDate: (date: string) => void;
  updateDysonOrderNumber: (orderNumber: string) => void;
  updateDysonOrderReference: (orderReference: string) => void;
  updateDysonCustomerName: (customerName: string) => void;
  updateDysonCustomerEmail: (customerEmail: string) => void;
  updateDysonProductName: (productName: string) => void;
  updateDysonProductModel: (productModel: string) => void;
  updateDysonProductSKU: (productSKU: string) => void;
  updateDysonSerialNumber: (serialNumber: string) => void;
  updateDysonPrice: (price: string) => void;
  updateDysonTax: (tax: string) => void;
  updateDysonTotalPrice: (totalPrice: string) => void;
  updateDysonCardLast4: (cardLast4: string) => void;
}

export const createDysonSlice: StateCreator<StoreState, [], [], DysonSlice> = (
  set
) => ({
  dysonStoreName: "Dyson Demo Store",
  dysonStoreAddress: "123 Oxford Street",
  dysonStoreCity: "London W1D 2LF",
  dysonStorePhone: "+44 800 298 0298",
  dysonDate: "03/15/2024 15:45",
  dysonOrderNumber: "ORD-132431",
  dysonOrderReference: "DYS-24031500789",
  dysonCustomerName: "Emma Thompson",
  dysonCustomerEmail: "emma.t@email.com",
  dysonProductName: "Dyson V15 Detect Absolute",
  dysonProductModel: "V15 Detect Absolute",
  dysonProductSKU: "419128-01",
  dysonSerialNumber: "XB22-UK-LEA193",
  dysonPrice: "699.99",
  dysonTax: "140.00",
  dysonTotalPrice: "839.99",
  dysonCardLast4: "7823",

  updateDysonStoreName: (storeName) => set({ dysonStoreName: storeName }),
  updateDysonStoreAddress: (storeAddress) =>
    set({ dysonStoreAddress: storeAddress }),
  updateDysonStoreCity: (storeCity) => set({ dysonStoreCity: storeCity }),
  updateDysonStorePhone: (storePhone) => set({ dysonStorePhone: storePhone }),
  updateDysonDate: (date) => set({ dysonDate: date }),
  updateDysonOrderNumber: (orderNumber) =>
    set({ dysonOrderNumber: orderNumber }),
  updateDysonOrderReference: (orderReference) =>
    set({ dysonOrderReference: orderReference }),
  updateDysonCustomerName: (customerName) =>
    set({ dysonCustomerName: customerName }),
  updateDysonCustomerEmail: (customerEmail) =>
    set({ dysonCustomerEmail: customerEmail }),
  updateDysonProductName: (productName) =>
    set({ dysonProductName: productName }),
  updateDysonProductModel: (productModel) =>
    set({ dysonProductModel: productModel }),
  updateDysonProductSKU: (productSKU) => set({ dysonProductSKU: productSKU }),
  updateDysonSerialNumber: (serialNumber) =>
    set({ dysonSerialNumber: serialNumber }),
  updateDysonPrice: (price) => set({ dysonPrice: price }),
  updateDysonTax: (tax) => set({ dysonTax: tax }),
  updateDysonTotalPrice: (totalPrice) => set({ dysonTotalPrice: totalPrice }),
  updateDysonCardLast4: (cardLast4) => set({ dysonCardLast4: cardLast4 }),
});
