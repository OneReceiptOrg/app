"use client";

import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface FlightClubSlice {
  flightClubStoreAddress: string;
  flightClubStoreCityStateZip: string;
  flightClubStorePhone: string;

  flightClubDate: string;
  flightClubOrderNumber: string;

  flightClubProductName: string;
  flightClubProductSKU: string;
  flightClubProductSize: string;
  flightClubItemPrice: string;

  flightClubSubtotal: string;
  flightClubTaxAmount: string;
  flightClubShippingAmount: string;
  flightClubTotalAmount: string;
  flightClubDiscountAmount: string;
  flightClubTenderedCash: string;
  flightClubTenderedCreditCard: string;
  flightClubChangeAmount: string;

  updateFlightClubStoreAddress: (storeAddress: string) => void;
  updateFlightClubStoreCityStateZip: (storeCityStateZip: string) => void;
  updateFlightClubStorePhone: (storePhone: string) => void;
  updateFlightClubDate: (date: string) => void;
  updateFlightClubOrderNumber: (orderNumber: string) => void;
  updateFlightClubProductName: (productName: string) => void;
  updateFlightClubProductSKU: (productSKU: string) => void;
  updateFlightClubProductSize: (productSize: string) => void;
  updateFlightClubItemPrice: (itemPrice: string) => void;
  updateFlightClubSubtotal: (subtotal: string) => void;
  updateFlightClubTaxAmount: (taxAmount: string) => void;
  updateFlightClubShippingAmount: (shippingAmount: string) => void;
  updateFlightClubTotalAmount: (totalAmount: string) => void;
  updateFlightClubDiscountAmount: (discountAmount: string) => void;
  updateFlightClubTenderedCash: (tenderedCash: string) => void;
  updateFlightClubTenderedCreditCard: (tenderedCreditCard: string) => void;
  updateFlightClubChangeAmount: (changeAmount: string) => void;
}

export const createFlightClubSlice: StateCreator<
  StoreState,
  [],
  [],
  FlightClubSlice
> = (set) => ({
  flightClubStoreAddress: "812 Broadway",
  flightClubStoreCityStateZip: "New York, NY 10003",
  flightClubStorePhone: "(888) 937-8020",
  flightClubDate: "Saturday, May 11, 2019, 2:08 PM",
  flightClubOrderNumber: "ORD-444089",
  flightClubProductName: "Air Jordan 1 High OG",
  flightClubProductSKU: "555088-134",
  flightClubProductSize: "US 10",
  flightClubItemPrice: "175.00",
  flightClubSubtotal: "175.00",
  flightClubTaxAmount: "18.83",
  flightClubShippingAmount: "50.00",
  flightClubTotalAmount: "243.83",
  flightClubDiscountAmount: "0.00",
  flightClubTenderedCash: "0.00",
  flightClubTenderedCreditCard: "243.83",
  flightClubChangeAmount: "0.00",

  updateFlightClubStoreAddress: (storeAddress) =>
    set({ flightClubStoreAddress: storeAddress }),
  updateFlightClubStoreCityStateZip: (storeCityStateZip) =>
    set({ flightClubStoreCityStateZip: storeCityStateZip }),
  updateFlightClubStorePhone: (storePhone) =>
    set({ flightClubStorePhone: storePhone }),
  updateFlightClubDate: (date) => set({ flightClubDate: date }),
  updateFlightClubOrderNumber: (orderNumber) =>
    set({ flightClubOrderNumber: orderNumber }),
  updateFlightClubProductName: (productName) =>
    set({ flightClubProductName: productName }),
  updateFlightClubProductSKU: (productSKU) =>
    set({ flightClubProductSKU: productSKU }),
  updateFlightClubProductSize: (productSize) =>
    set({ flightClubProductSize: productSize }),
  updateFlightClubItemPrice: (itemPrice) =>
    set({ flightClubItemPrice: itemPrice }),
  updateFlightClubSubtotal: (subtotal) => set({ flightClubSubtotal: subtotal }),
  updateFlightClubTaxAmount: (taxAmount) =>
    set({ flightClubTaxAmount: taxAmount }),
  updateFlightClubShippingAmount: (shippingAmount) =>
    set({ flightClubShippingAmount: shippingAmount }),
  updateFlightClubTotalAmount: (totalAmount) =>
    set({ flightClubTotalAmount: totalAmount }),
  updateFlightClubDiscountAmount: (discountAmount) =>
    set({ flightClubDiscountAmount: discountAmount }),
  updateFlightClubTenderedCash: (tenderedCash) =>
    set({ flightClubTenderedCash: tenderedCash }),
  updateFlightClubTenderedCreditCard: (tenderedCreditCard) =>
    set({ flightClubTenderedCreditCard: tenderedCreditCard }),
  updateFlightClubChangeAmount: (changeAmount) =>
    set({ flightClubChangeAmount: changeAmount }),
});
