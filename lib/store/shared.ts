"use client";

import type { StateCreator } from "zustand";
import type { StoreState } from "./index";
import { buildRequestBody } from "./utils";

export interface SharedSlice {
  customerName: string;
  cashierName: string;
  selectedTemplate: string;
  selectedReceiptType: string;

  receiptImageUrl: string | null;
  isGenerating: boolean;
  generationError: string | null;

  updateCustomerName: (name: string) => void;
  updateCashierName: (name: string) => void;
  selectTemplate: (templateName: string) => void;
  selectReceiptType: (receiptType: string) => void;
  generateReceiptImage: () => Promise<void>;
}

export const initialSharedState = {
  customerName: "Valued Customer",
  cashierName: "Alice",
  selectedTemplate: "gucci",
  selectedReceiptType: "",
  receiptImageUrl: null,
  isGenerating: false,
  generationError: null,
};

export const createSharedSlice: StateCreator<
  StoreState,
  [],
  [],
  SharedSlice
> = (set, get) => ({
  ...initialSharedState,
  updateCustomerName: (name) => set({ customerName: name }),
  updateCashierName: (name) => set({ cashierName: name }),
  selectTemplate: (templateName) => {
    const currentUrl = get().receiptImageUrl;
    if (currentUrl) {
      try {
        URL.revokeObjectURL(currentUrl);
      } catch (error) {
        console.error("Error revoking URL:", error);
      }
    }
    set({
      selectedTemplate: templateName,
      selectedReceiptType: "",
      receiptImageUrl: null,
      generationError: null,
    });
  },
  selectReceiptType: (receiptType) => {
    const currentUrl = get().receiptImageUrl;
    if (currentUrl) {
      try {
        URL.revokeObjectURL(currentUrl);
      } catch (error) {
        console.error("Error revoking URL:", error);
      }
    }
    set({
      selectedReceiptType: receiptType,
      receiptImageUrl: null,
      generationError: null,
    });
  },
  generateReceiptImage: async () => {
    const currentState = get();
    console.log("currentState", currentState);
    const {
      selectedTemplate,
      selectedReceiptType,
      receiptImageUrl: currentImageUrl,
    } = currentState;

    set({ isGenerating: true, generationError: null });

    window.dispatchEvent(new CustomEvent("receipt:generation-start"));

    if (currentImageUrl) {
      try {
        URL.revokeObjectURL(currentImageUrl);
      } catch (error) {
        console.error("Error revoking URL:", error);
      }
    }

    try {
      const templateDataKey = selectedReceiptType || selectedTemplate;
      const requestBody = buildRequestBody(templateDataKey, currentState);

      if (requestBody) {
        requestBody.template = selectedTemplate;
        if (selectedReceiptType) {
          requestBody.templateId = selectedReceiptType;
        }
      }

      console.log(
        "Sending Request Body to API:",
        JSON.stringify(requestBody, null, 2)
      );
      if (!requestBody) {
        set({
          isGenerating: false,
          generationError: `Mapping not found for template: ${templateDataKey}`,
        });
        window.dispatchEvent(new CustomEvent("receipt:generation-failed"));
        return;
      }

      const response = await fetch("/app/api/generate/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        if (response.status === 429) {
          set({
            isGenerating: false,
            generationError: errorData.message || "Rate limit exceeded.",
            receiptImageUrl: null,
          });
          window.dispatchEvent(new CustomEvent("receipt:generation-failed"));
          return;
        }

        throw new Error(
          `API Error ${response.status}: ${errorData.error || "Unknown error"}`
        );
      }

      const blob = await response.blob();
      const newUrl = URL.createObjectURL(blob);

      set({
        receiptImageUrl: newUrl,
        isGenerating: false,
        generationError: null,
      });
    } catch (error) {
      set({
        generationError:
          error instanceof Error ? error.message : "Unknown error",
        isGenerating: false,
        receiptImageUrl: null,
      });
      window.dispatchEvent(new CustomEvent("receipt:generation-failed"));
    }
  },
});
