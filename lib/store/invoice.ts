"use client";

import type { StateCreator } from "zustand";
import { create } from "zustand";
import type { Item } from "./types";
import { createGucciSlice, initialGucciState } from "./invoice/gucci";
import type { GucciSlice } from "./invoice/gucci";
import { createFarfetchSlice, initialFarfetchState } from "./invoice/farfetch";
import type { FarfetchSlice } from "./invoice/farfetch";
import {
  createCpCompanySlice,
  initialCpCompanyState,
} from "./invoice/cpcompany";
import type { CpCompanySlice } from "./invoice/cpcompany";
import { createAppleSlice, initialAppleState } from "./invoice/apple";
import type { AppleSlice } from "./invoice/apple";
import {
  createSaintLaurentSlice,
  initialSaintLaurentState,
} from "./invoice/saintlaurent";
import type { SaintLaurentSlice } from "./invoice/saintlaurent";

export interface InvoiceSlice {
  invoiceItems: Item[];
  generatedInvoicePreviewUrl: string | null;
  currentPreviewBrand: string | null;
  isGeneratingPreview: boolean;
  isGeneratingFinal: boolean;

  addInvoiceItem: (item: Partial<Item>) => void;
  updateInvoiceItem: (index: number, item: Item) => void;
  removeInvoiceItem: (index: number) => void;

  calculateTotals: (brandId?: string) => void;
  updateInvoicePreview: (
    brandId?: string,
    templateId?: string
  ) => Promise<void>;
  generateFinalInvoice: (
    brandId?: string,
    templateId?: string
  ) => Promise<void>;
  resetInvoice: () => void;
  resetGeneratedInvoiceUrl: () => void;
}

export const initialInvoiceState = {
  invoiceItems: [],
  generatedInvoicePreviewUrl: null,
  currentPreviewBrand: null,
  isGeneratingPreview: false,
  isGeneratingFinal: false,
};

type StoreState = InvoiceSlice &
  GucciSlice &
  FarfetchSlice &
  CpCompanySlice &
  AppleSlice &
  SaintLaurentSlice;

export const createInvoiceSlice: StateCreator<
  StoreState,
  [],
  [],
  InvoiceSlice
> = (set, get) => ({
  ...initialInvoiceState,

  addInvoiceItem: (item) =>
    set((state) => {
      const newItemPrice = item.price || 0;
      const newItemQuantity = item.quantity || 1;
      const newItemVatRate = item.vatRate || 0;
      const newItemLineTotal = newItemPrice * newItemQuantity;
      const newItemTotalInclVat = newItemLineTotal * (1 + newItemVatRate / 100);

      return {
        invoiceItems: [
          ...state.invoiceItems,
          {
            sku: item.sku || "",
            styleNumber: item.styleNumber || "",
            name: item.name || "New Item",
            quantity: newItemQuantity,
            price: newItemPrice,
            lineTotal: newItemLineTotal,
            productCode: item.productCode || "",
            discountAmount: item.discountAmount || 0,
            vatRate: newItemVatRate,
            totalPriceInclVat: newItemTotalInclVat,
            composition: item.composition || "",
            countryOfOrigin: item.countryOfOrigin || "",
          } as Item,
        ],
      };
    }),
  updateInvoiceItem: (index, item) =>
    set((state) => {
      const updatedItem = { ...item };
      const price = updatedItem.price || 0;
      const quantity = updatedItem.quantity || 0;
      const vatRate = updatedItem.vatRate || 0;
      updatedItem.lineTotal = price * quantity;
      updatedItem.totalPriceInclVat =
        updatedItem.lineTotal * (1 + vatRate / 100);

      return {
        invoiceItems: state.invoiceItems.map((i, idx) =>
          idx === index ? updatedItem : i
        ),
      };
    }),
  removeInvoiceItem: (index) =>
    set((state) => ({
      invoiceItems: state.invoiceItems.filter((_, idx) => idx !== index),
    })),

  calculateTotals: (brandId = "gucci") => {
    if (brandId === "gucci") {
      (get() as GucciSlice).calculateGucciTotals(get().invoiceItems);
    } else if (brandId === "farfetch") {
      (get() as FarfetchSlice).calculateFarfetchTotals(get().invoiceItems);
    } else if (brandId === "cpcompany") {
      (get() as CpCompanySlice).calculateCpCompanyTotals();
    } else if (brandId === "apple") {
      (get() as AppleSlice).calculateTotals();
    } else if (brandId === "saintlaurent" || brandId === "saint_laurent") {
      (get() as SaintLaurentSlice).calculateTotals();
    }
  },

  updateInvoicePreview: async (brandId = "gucci", templateId?: string) => {
    get().calculateTotals(brandId);
    set({
      isGeneratingPreview: true,
      generatedInvoicePreviewUrl: null,
      currentPreviewBrand: brandId,
    });

    try {
      const endpoint = "/app/api/generate/invoice";
      let payload: any;
      let normalizedBrandId = brandId;

      // Normalize saint_laurent to saintlaurent for internal processing
      if (brandId === "saint_laurent") {
        normalizedBrandId = "saintlaurent";
      }

      if (brandId === "gucci") {
        payload = (get() as GucciSlice).prepareGucciPayload(get().invoiceItems);
        payload.template = templateId || "gucci";
      } else if (brandId === "farfetch") {
        payload = (get() as FarfetchSlice).prepareFarfetchPayload(
          get().invoiceItems
        );
        payload.template = templateId || "farfetch";
      } else if (brandId === "cpcompany") {
        payload = (get() as CpCompanySlice).prepareCpCompanyPayload();
        payload.template = templateId || "cpcompany";
      } else if (brandId === "apple") {
        payload = (get() as AppleSlice).prepareApplePayload();
        payload.template = templateId || "apple";
      } else if (normalizedBrandId === "saintlaurent") {
        payload = (get() as SaintLaurentSlice).prepareSaintLaurentPayload();
        payload.template = templateId || normalizedBrandId;
      } else {
        throw new Error(`Unsupported brand: ${brandId}`);
      }

      // Use both template and templateId for backward compatibility
      if (templateId) {
        payload.templateId = templateId;
      } else {
        payload.templateId = normalizedBrandId;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "Failed to parse error response" }));
        console.error("API Error:", errorData);
        throw new Error(
          `Failed to generate invoice preview: ${
            errorData.error || response.statusText
          }`
        );
      }

      const blob = await response.blob();
      const currentUrl = get().generatedInvoicePreviewUrl;
      if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
      }
      const url = URL.createObjectURL(blob);
      set({
        generatedInvoicePreviewUrl: url,
        currentPreviewBrand: brandId,
      });
    } catch (error) {
      console.error("Error generating invoice preview:", error);
    } finally {
      set({ isGeneratingPreview: false });
    }
  },

  generateFinalInvoice: async (brandId = "gucci", templateId?: string) => {
    get().calculateTotals(brandId);
    set({ isGeneratingFinal: true });

    try {
      const endpoint = "/app/api/generate/invoice";
      let payload: any;
      let normalizedBrandId = brandId;

      // Normalize saint_laurent to saintlaurent for internal processing
      if (brandId === "saint_laurent") {
        normalizedBrandId = "saintlaurent";
      }

      if (brandId === "gucci") {
        payload = (get() as GucciSlice).prepareGucciPayload(get().invoiceItems);
        payload.template = templateId || "gucci";
      } else if (brandId === "farfetch") {
        payload = (get() as FarfetchSlice).prepareFarfetchPayload(
          get().invoiceItems
        );
        payload.template = templateId || "farfetch";
      } else if (brandId === "cpcompany") {
        payload = (get() as CpCompanySlice).prepareCpCompanyPayload();
        payload.template = templateId || "cpcompany";
      } else if (brandId === "apple") {
        payload = (get() as AppleSlice).prepareApplePayload();
        payload.template = templateId || "apple";
      } else if (normalizedBrandId === "saintlaurent") {
        payload = (get() as SaintLaurentSlice).prepareSaintLaurentPayload();
        payload.template = templateId || normalizedBrandId;
      } else {
        throw new Error(`Unsupported brand: ${brandId}`);
      }

      // Use both template and templateId for backward compatibility
      if (templateId) {
        payload.templateId = templateId;
      } else {
        payload.templateId = normalizedBrandId;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "Failed to parse error response" }));
        console.error("API Error:", errorData);
        throw new Error(
          `Failed to generate final invoice: ${
            errorData.error || response.statusText
          }`
        );
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${brandId}-invoice.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating final invoice:", error);
    } finally {
      set({ isGeneratingFinal: false });
    }
  },

  resetInvoice: () => {
    const currentUrl = get().generatedInvoicePreviewUrl;
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
    }
    set({
      ...initialInvoiceState,
      ...initialGucciState,
      ...initialFarfetchState,
      ...initialCpCompanyState,
      ...initialAppleState,
      ...initialSaintLaurentState,
      generatedInvoicePreviewUrl: null,
    });
  },

  resetGeneratedInvoiceUrl: () => {
    const currentUrl = get().generatedInvoicePreviewUrl;
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
    }
    set({
      generatedInvoicePreviewUrl: null,
      currentPreviewBrand: null,
    });
  },
});

export type InvoiceStore = InvoiceSlice &
  GucciSlice &
  FarfetchSlice &
  CpCompanySlice &
  AppleSlice &
  SaintLaurentSlice;

export const useInvoiceStore = create<InvoiceStore>()((...args) => ({
  ...createInvoiceSlice(...args),
  ...createGucciSlice(...args),
  ...createFarfetchSlice(...args),
  ...createCpCompanySlice(...args),
  ...createAppleSlice(...args),
  ...createSaintLaurentSlice(...args),
}));
