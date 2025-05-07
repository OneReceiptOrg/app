"use client";

import type { StateCreator } from "zustand";
import type { Item } from "../types";

export interface SaintLaurentSlice {
  // Data fields
  invoiceNumber: string;
  invoiceDate: string;
  productName: string;
  productColor: string;
  quantity: string;
  unitPrice: string;
  discountAmount: string;
  netPrice: string;
  totalPrice: string;
  tva: string;
  customsCode: string;
  tvaPercentage: string;
  tvaAmount: string;
  totalNetHt: string;
  totalTvaAmount: string;
  totalTtc: string;

  // Update functions
  updateInvoiceNumber: (value: string) => void;
  updateInvoiceDate: (value: string) => void;
  updateProductName: (value: string) => void;
  updateProductColor: (value: string) => void;
  updateQuantity: (value: string) => void;
  updateUnitPrice: (value: string) => void;
  updateDiscountAmount: (value: string) => void;
  updateTva: (value: string) => void;
  updateCustomsCode: (value: string) => void;
  updateTvaPercentage: (value: string) => void;

  // Calculation functions
  calculateTotals: () => void;
  prepareSaintLaurentPayload: () => any;
}

export const initialSaintLaurentState = {
  invoiceNumber: "0513450000412",
  invoiceDate: "13 Janvier 2024",
  productName: "LOULOU SMALL CHAIN",
  productColor: "BLACK",
  quantity: "1",
  unitPrice: "2 100",
  discountAmount: "0,00",
  netPrice: "1 680,00",
  totalPrice: "2 100,00",
  tva: "NOR",
  customsCode: "64035995",
  tvaPercentage: "20.00%",
  tvaAmount: "420,00",
  totalNetHt: "1 680,00",
  totalTvaAmount: "420,00",
  totalTtc: "2 100,00",
};

export const createSaintLaurentSlice: StateCreator<
  SaintLaurentSlice,
  [],
  [],
  SaintLaurentSlice
> = (set, get) => ({
  ...initialSaintLaurentState,

  updateInvoiceNumber: (value) => set({ invoiceNumber: value }),
  updateInvoiceDate: (value) => set({ invoiceDate: value }),
  updateProductName: (value) => set({ productName: value }),
  updateProductColor: (value) => set({ productColor: value }),
  updateQuantity: (value) => set({ quantity: value }),
  updateUnitPrice: (value) => set({ unitPrice: value }),
  updateDiscountAmount: (value) => set({ discountAmount: value }),
  updateTva: (value) => set({ tva: value }),
  updateCustomsCode: (value) => set({ customsCode: value }),
  updateTvaPercentage: (value) => set({ tvaPercentage: value }),

  calculateTotals: () => {
    const state = get();
    const unitPrice = parseFloat(
      state.unitPrice.replace(/\s/g, "").replace(",", ".")
    );
    const quantity = parseInt(state.quantity) || 1;
    const tvaPercentage =
      parseFloat(state.tvaPercentage.replace("%", "")) || 20;

    const totalBeforeTax = unitPrice * quantity;
    const tvaAmount = totalBeforeTax * (tvaPercentage / 100);
    const totalWithTax = totalBeforeTax + tvaAmount;

    // Format numbers as Euro currency
    const formatCurrency = (value: number) =>
      value
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    set({
      netPrice: formatCurrency(totalBeforeTax),
      tvaAmount: formatCurrency(tvaAmount),
      totalPrice: formatCurrency(totalWithTax),
      totalNetHt: formatCurrency(totalBeforeTax),
      totalTvaAmount: formatCurrency(tvaAmount),
      totalTtc: formatCurrency(totalWithTax),
    });
  },

  prepareSaintLaurentPayload: () => {
    const state = get();
    return {
      INVOICE_NUMBER: state.invoiceNumber,
      INVOICE_DATE: state.invoiceDate,
      PRODUCT_NAME: state.productName,
      PRODUCT_COLOR: state.productColor,
      QUANTITY: state.quantity,
      UNIT_PRICE: state.unitPrice,
      DISCOUNT_AMOUNT: state.discountAmount,
      NET_PRICE: state.netPrice,
      TOTAL_PRICE: state.totalPrice,
      TVA: state.tva,
      CUSTOMS_CODE: state.customsCode,
      "TVA%": state.tvaPercentage,
      TVA_AMOUNT: state.tvaAmount,
      QUANTITY_TOTAL: state.quantity,
      TOTAL_PRICE_2: state.totalPrice,
      DISCOUNT_AMOUNT_2: state.discountAmount,
      NET_PRICE_2: state.totalNetHt,
      TVA_AMOUNT_2: state.totalTvaAmount,
      TOTAL_PRICE_3: state.totalTtc,
      TOTAL_PRICE_4: state.totalNetHt,
      TOTAL_PRICE_5: state.totalTtc,
    };
  },
});
