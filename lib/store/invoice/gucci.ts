"use client";

import type { StateCreator } from "zustand";
import type { Item } from "../types";

export interface GucciSlice {
  gucciOrderNumber: string;
  gucciOrderDate: string;
  gucciBillingName: string;
  gucciBillingAddressLine: string;
  gucciBillingCityStateZip: string;
  gucciBillingPhone: string;
  gucciBillingEmail: string;
  gucciPaymentMethod: string;
  gucciShippingName: string;
  gucciShippingAddressLine: string;
  gucciShippingCityStateZip: string;
  gucciShippingPhone: string;
  gucciShippingEmail: string;
  gucciShippingMethod: string;
  gucciReturnReasonCode: string;

  gucciSubTotal: string;
  gucciShippingCost: string;
  gucciTax: string;
  gucciFinalTotal: string;

  updateGucciOrderNumber: (value: string) => void;
  updateGucciOrderDate: (value: string) => void;
  updateGucciBillingName: (value: string) => void;
  updateGucciBillingAddressLine: (value: string) => void;
  updateGucciBillingCityStateZip: (value: string) => void;
  updateGucciBillingPhone: (value: string) => void;
  updateGucciBillingEmail: (value: string) => void;
  updateGucciPaymentMethod: (value: string) => void;
  updateGucciShippingName: (value: string) => void;
  updateGucciShippingAddressLine: (value: string) => void;
  updateGucciShippingCityStateZip: (value: string) => void;
  updateGucciShippingPhone: (value: string) => void;
  updateGucciShippingEmail: (value: string) => void;
  updateGucciShippingMethod: (value: string) => void;
  updateGucciReturnReasonCode: (value: string) => void;

  updateGucciSubTotal: (value: string) => void;
  updateGucciShippingCost: (value: string) => void;
  updateGucciTax: (value: string) => void;
  updateGucciFinalTotal: (value: string) => void;

  calculateGucciTotals: (invoiceItems: Item[]) => void;
  prepareGucciPayload: (invoiceItems: Item[]) => any;
}

export const initialGucciState = {
  gucciOrderNumber: "440299181",
  gucciOrderDate: new Date().toLocaleDateString("en-CA"),
  gucciBillingName: "Kayne West",
  gucciBillingAddressLine: "555 Ocean Drive",
  gucciBillingCityStateZip: "LOS ANGELES, CA 90100",
  gucciBillingPhone: "+1 (505) 444-5991",
  gucciBillingEmail: "theyea@yahoo.com",
  gucciPaymentMethod: "Visa",
  gucciShippingName: "Kayne West",
  gucciShippingAddressLine: "555 Ocean Drive",
  gucciShippingCityStateZip: "LOS ANGELES, CA 90100",
  gucciShippingPhone: "+1 (505) 444-5991",
  gucciShippingEmail: "theyea@yahoo.com",
  gucciShippingMethod: "4 - FEDEX-Air-2nd Day Air",
  gucciReturnReasonCode: "N/A",

  gucciSubTotal: "0.00",
  gucciShippingCost: "0.00",
  gucciTax: "0.00",
  gucciFinalTotal: "0.00",
};

export const createGucciSlice: StateCreator<GucciSlice, [], [], GucciSlice> = (
  set,
  get
) => ({
  ...initialGucciState,

  updateGucciOrderNumber: (value) => set({ gucciOrderNumber: value }),
  updateGucciOrderDate: (value) => set({ gucciOrderDate: value }),
  updateGucciBillingName: (value) => set({ gucciBillingName: value }),
  updateGucciBillingAddressLine: (value) =>
    set({ gucciBillingAddressLine: value }),
  updateGucciBillingCityStateZip: (value) =>
    set({ gucciBillingCityStateZip: value }),
  updateGucciBillingPhone: (value) => set({ gucciBillingPhone: value }),
  updateGucciBillingEmail: (value) => set({ gucciBillingEmail: value }),
  updateGucciPaymentMethod: (value) => set({ gucciPaymentMethod: value }),
  updateGucciShippingName: (value) => set({ gucciShippingName: value }),
  updateGucciShippingAddressLine: (value) =>
    set({ gucciShippingAddressLine: value }),
  updateGucciShippingCityStateZip: (value) =>
    set({ gucciShippingCityStateZip: value }),
  updateGucciShippingPhone: (value) => set({ gucciShippingPhone: value }),
  updateGucciShippingEmail: (value) => set({ gucciShippingEmail: value }),
  updateGucciShippingMethod: (value) => set({ gucciShippingMethod: value }),
  updateGucciReturnReasonCode: (value) => set({ gucciReturnReasonCode: value }),

  updateGucciSubTotal: (value) => set({ gucciSubTotal: value }),
  updateGucciShippingCost: (value) => set({ gucciShippingCost: value }),
  updateGucciTax: (value) => set({ gucciTax: value }),
  updateGucciFinalTotal: (value) => set({ gucciFinalTotal: value }),

  calculateGucciTotals: (invoiceItems) => {
    const state = get();
    const subTotal = invoiceItems.reduce(
      (sum, item) => sum + (item.lineTotal || 0),
      0
    );
    const shippingCost = parseFloat(state.gucciShippingCost) || 0;
    const taxRate = 0.2;
    const tax = subTotal * taxRate;
    const finalTotal = subTotal + shippingCost + tax;

    set({
      gucciSubTotal: subTotal.toFixed(2),
      gucciTax: tax.toFixed(2),
      gucciFinalTotal: finalTotal.toFixed(2),
    });
  },

  prepareGucciPayload: (invoiceItems) => {
    const state = get();
    const firstItem = invoiceItems[0] || {};

    return {
      template: "gucci",
      ORDER_NUMBER: state.gucciOrderNumber,
      ORDER_DATE: state.gucciOrderDate,
      BILLING_NAME: state.gucciBillingName,
      BILLING_ADDRESS_LINE: state.gucciBillingAddressLine,
      BILLING_CITY_STATE_ZIP: state.gucciBillingCityStateZip,
      BILLING_PHONE: state.gucciBillingPhone,
      BILLING_EMAIL: state.gucciBillingEmail,
      PAYMENT_METHOD: state.gucciPaymentMethod,
      SHIPPING_NAME: state.gucciShippingName,
      SHIPPING_ADDRESS_LINE: state.gucciShippingAddressLine,
      SHIPPING_CITY_STATE_ZIP: state.gucciShippingCityStateZip,
      SHIPPING_PHONE: state.gucciShippingPhone,
      SHIPPING_EMAIL: state.gucciShippingEmail,
      SHIPPING_METHOD: state.gucciShippingMethod,
      RETURN_REASON_CODE: state.gucciReturnReasonCode,
      SKU: firstItem.sku || "",
      STYLE_NUMBER: firstItem.styleNumber || "",
      DESCRIPTION: firstItem.name || "",
      QTY: firstItem.quantity || 0,
      UNIT: firstItem.price?.toFixed(2) || "0.00",
      TOTAL: firstItem.lineTotal?.toFixed(2) || "0.00",
      SUB_TOTAL: state.gucciSubTotal,
      SHIPPING: state.gucciShippingCost,
      TAX: state.gucciTax,
      FINAL_TOTAL: state.gucciFinalTotal,
    };
  },
});
