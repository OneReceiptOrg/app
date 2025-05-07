"use client";

import type { StateCreator } from "zustand";

export interface GucciSlice {
  gucciStoreLocation: string;
  gucciDate: string;
  gucciTransNumber: string;
  gucciOrderNumber: string;
  gucciPaymentMethod: string;
  gucciProductName: string;
  gucciProductSku: string;
  gucciProductPrice: string;
  gucciProductTax: string;
  gucciStoreAddress1: string;
  gucciStoreAddress2: string;
  gucciStoreCityZip: string;
  gucciStorePhoneFax: string;
  gucciStoreId: string;
  gucciRegisterId: string;
  gucciCustomerId: string;
  gucciItemPrice: string;
  gucciQuantity: string;
  gucciSalesperson: string;
  gucciSubtotal: string;
  gucciTotal: string;
  gucciPaymentAmount: string;
  gucciChange: string;
  gucciItemCount: number;
  gucciTaxAnalysisCode: string;
  gucciTaxAnalysisTaxable: string;
  gucciTaxAnalysisRate: string;
  gucciTaxAnalysisTotal: string;
  gucciTaxAnalysisTax: string;

  updateGucciStoreLocation: (location: string) => void;
  updateGucciDate: (date: string) => void;
  updateGucciTransNumber: (transNumber: string) => void;
  updateGucciOrderNumber: (orderNumber: string) => void;
  updateGucciPaymentMethod: (method: string) => void;
  updateGucciProductName: (name: string) => void;
  updateGucciProductSku: (sku: string) => void;
  updateGucciProductPrice: (price: string) => void;
  updateGucciProductTax: (tax: string) => void;
  updateGucciStoreAddress1: (value: string) => void;
  updateGucciStoreAddress2: (value: string) => void;
  updateGucciStoreCityZip: (value: string) => void;
  updateGucciStorePhoneFax: (value: string) => void;
  updateGucciStoreId: (value: string) => void;
  updateGucciRegisterId: (value: string) => void;
  updateGucciCustomerId: (value: string) => void;
  updateGucciItemPrice: (value: string) => void;
  updateGucciQuantity: (value: string) => void;
  updateGucciSalesperson: (value: string) => void;
  updateGucciSubtotal: (value: string) => void;
  updateGucciTotal: (value: string) => void;
  updateGucciPaymentAmount: (value: string) => void;
  updateGucciChange: (value: string) => void;
  updateGucciItemCount: (value: number) => void;
  updateGucciTaxAnalysisCode: (value: string) => void;
  updateGucciTaxAnalysisTaxable: (value: string) => void;
  updateGucciTaxAnalysisRate: (value: string) => void;
  updateGucciTaxAnalysisTotal: (value: string) => void;
  updateGucciTaxAnalysisTax: (value: string) => void;
}

export const initialGucciState = {
  gucciStoreLocation: "London Bond",
  gucciDate: "10/5/19 14:48:35",
  gucciTransNumber: "8591",
  gucciOrderNumber: "8591",
  gucciPaymentMethod: "Visa",
  gucciProductName: "MEN T-SHIRT",
  gucciProductSku: "182451M21",
  gucciProductPrice: "440.00",
  gucciProductTax: "88.00",
  gucciStoreAddress1: "34 Old Bond Street",
  gucciStoreAddress2: "34 Old Bond Street",
  gucciStoreCityZip: "London W1S 4QL",
  gucciStorePhoneFax: "tel +44 207 62 92 716 fax +44 2074930058",
  gucciStoreId: "20201",
  gucciRegisterId: "1",
  gucciCustomerId: "20201003673200",
  gucciItemPrice: "440.40",
  gucciQuantity: "1",
  gucciSalesperson: "ASeniono (Agnija)",
  gucciSubtotal: "440.00",
  gucciTotal: "440.00",
  gucciPaymentAmount: "440.00",
  gucciChange: "0.00",
  gucciItemCount: 1,
  gucciTaxAnalysisCode: "Local",
  gucciTaxAnalysisTaxable: "440.00",
  gucciTaxAnalysisRate: "20%",
  gucciTaxAnalysisTotal: "440.00",
  gucciTaxAnalysisTax: "88.00",
};

export const createGucciSlice: StateCreator<GucciSlice, [], [], GucciSlice> = (
  set
) => ({
  ...initialGucciState,
  updateGucciStoreLocation: (location) => set({ gucciStoreLocation: location }),
  updateGucciDate: (date) => set({ gucciDate: date }),
  updateGucciTransNumber: (transNumber) =>
    set({ gucciTransNumber: transNumber }),
  updateGucciOrderNumber: (orderNumber) =>
    set({ gucciOrderNumber: orderNumber }),
  updateGucciPaymentMethod: (method) => set({ gucciPaymentMethod: method }),
  updateGucciProductName: (name) => set({ gucciProductName: name }),
  updateGucciProductSku: (sku) => set({ gucciProductSku: sku }),
  updateGucciProductPrice: (price) => set({ gucciProductPrice: price }),
  updateGucciProductTax: (tax) => set({ gucciProductTax: tax }),
  updateGucciStoreAddress1: (value) => set({ gucciStoreAddress1: value }),
  updateGucciStoreAddress2: (value) => set({ gucciStoreAddress2: value }),
  updateGucciStoreCityZip: (value) => set({ gucciStoreCityZip: value }),
  updateGucciStorePhoneFax: (value) => set({ gucciStorePhoneFax: value }),
  updateGucciStoreId: (value) => set({ gucciStoreId: value }),
  updateGucciRegisterId: (value) => set({ gucciRegisterId: value }),
  updateGucciCustomerId: (value) => set({ gucciCustomerId: value }),
  updateGucciItemPrice: (value) => set({ gucciItemPrice: value }),
  updateGucciQuantity: (value) => set({ gucciQuantity: value }),
  updateGucciSalesperson: (value) => set({ gucciSalesperson: value }),
  updateGucciSubtotal: (value) => set({ gucciSubtotal: value }),
  updateGucciTotal: (value) => set({ gucciTotal: value }),
  updateGucciPaymentAmount: (value) => set({ gucciPaymentAmount: value }),
  updateGucciChange: (value) => set({ gucciChange: value }),
  updateGucciItemCount: (value) => set({ gucciItemCount: value }),
  updateGucciTaxAnalysisCode: (value) => set({ gucciTaxAnalysisCode: value }),
  updateGucciTaxAnalysisTaxable: (value) =>
    set({ gucciTaxAnalysisTaxable: value }),
  updateGucciTaxAnalysisRate: (value) => set({ gucciTaxAnalysisRate: value }),
  updateGucciTaxAnalysisTotal: (value) => set({ gucciTaxAnalysisTotal: value }),
  updateGucciTaxAnalysisTax: (value) => set({ gucciTaxAnalysisTax: value }),
});

export interface GucciNycSlice {
  gucciTransNumber: string;
  gucciTransDateTime: string;
  gucciStoreNumber: string;
  gucciRegisterNumber: string;
  gucciCashierId: string;
  gucciCustomerName: string;
  gucciCustomerId: string;
  gucciItemSku: string;
  gucciItemQty: string;
  gucciItemPrice: string;
  gucciItemTotalAmount: string;
  gucciItemDescription: string;
  gucciItemSize: string;
  gucciItemStyleNumber: string;
  gucciItemExtraDetails: string;
  gucciSalespersonId: string;
  gucciSalespersonName: string;
  gucciSubtotal: string;
  gucciTaxAmount: string;
  gucciTotalAmount: string;
  gucciDistanceSalesAmount: string;
  gucciDistanceSalesId: string;
  gucciChangeAmount: string;
  gucciSoldItemCount: string;
  gucciTaxCode: string;
  gucciTaxableAmount: string;
  gucciTaxRate: string;
  gucciTaxTotal: string;
  gucciTaxAmountFinal: string;

  updateGucciTransNumber: (value: string) => void;
  updateGucciTransDateTime: (value: string) => void;
  updateGucciStoreNumber: (value: string) => void;
  updateGucciRegisterNumber: (value: string) => void;
  updateGucciCashierId: (value: string) => void;
  updateGucciCustomerName: (value: string) => void;
  updateGucciCustomerId: (value: string) => void;
  updateGucciItemSku: (value: string) => void;
  updateGucciItemQty: (value: string) => void;
  updateGucciItemPrice: (value: string) => void;
  updateGucciItemTotalAmount: (value: string) => void;
  updateGucciItemDescription: (value: string) => void;
  updateGucciItemSize: (value: string) => void;
  updateGucciItemStyleNumber: (value: string) => void;
  updateGucciItemExtraDetails: (value: string) => void;
  updateGucciSalespersonId: (value: string) => void;
  updateGucciSalespersonName: (value: string) => void;
  updateGucciSubtotal: (value: string) => void;
  updateGucciTaxAmount: (value: string) => void;
  updateGucciTotalAmount: (value: string) => void;
  updateGucciDistanceSalesAmount: (value: string) => void;
  updateGucciDistanceSalesId: (value: string) => void;
  updateGucciChangeAmount: (value: string) => void;
  updateGucciSoldItemCount: (value: string) => void;
  updateGucciTaxCode: (value: string) => void;
  updateGucciTaxableAmount: (value: string) => void;
  updateGucciTaxRate: (value: string) => void;
  updateGucciTaxTotal: (value: string) => void;
  updateGucciTaxAmountFinal: (value: string) => void;
}

export const initialGucciNycState = {
  gucciTransNumber: "69212",
  gucciTransDateTime: "8/9/21 17:27:26",
  gucciStoreNumber: "23030",
  gucciRegisterNumber: "13",
  gucciCashierId: "96962458",
  gucciCustomerName: "JEREMY CROUSE",
  gucciCustomerId: "2341599900805752059",
  gucciItemSku: "809385156",
  gucciItemQty: "1",
  gucciItemPrice: "980.00",
  gucciItemTotalAmount: "980.00",
  gucciItemDescription: "310 MENS RTW",
  gucciItemSize: "91/M",
  gucciItemStyleNumber: "626976XJCOE",
  gucciItemExtraDetails: "9146 - M",
  gucciSalespersonId: "96962458",
  gucciSalespersonName: "VINCENT",
  gucciSubtotal: "980.00",
  gucciTaxAmount: "0.00",
  gucciTotalAmount: "980.00",
  gucciDistanceSalesAmount: "980.00",
  gucciDistanceSalesId: "1025631405",
  gucciChangeAmount: "0.00",
  gucciSoldItemCount: "1",
  gucciTaxCode: "17512-1928",
  gucciTaxableAmount: "980.00",
  gucciTaxRate: "0%",
  gucciTaxTotal: "980.00",
  gucciTaxAmountFinal: "0.00",
};

export const createGucciNycSlice: StateCreator<
  GucciNycSlice,
  [],
  [],
  GucciNycSlice
> = (set) => ({
  ...initialGucciNycState,
  updateGucciTransNumber: (value: string) => set({ gucciTransNumber: value }),
  updateGucciTransDateTime: (value: string) =>
    set({ gucciTransDateTime: value }),
  updateGucciStoreNumber: (value: string) => set({ gucciStoreNumber: value }),
  updateGucciRegisterNumber: (value: string) =>
    set({ gucciRegisterNumber: value }),
  updateGucciCashierId: (value: string) => set({ gucciCashierId: value }),
  updateGucciCustomerName: (value: string) => set({ gucciCustomerName: value }),
  updateGucciCustomerId: (value: string) => set({ gucciCustomerId: value }),
  updateGucciItemSku: (value: string) => set({ gucciItemSku: value }),
  updateGucciItemQty: (value: string) => set({ gucciItemQty: value }),
  updateGucciItemPrice: (value: string) => set({ gucciItemPrice: value }),
  updateGucciItemTotalAmount: (value: string) =>
    set({ gucciItemTotalAmount: value }),
  updateGucciItemDescription: (value: string) =>
    set({ gucciItemDescription: value }),
  updateGucciItemSize: (value: string) => set({ gucciItemSize: value }),
  updateGucciItemStyleNumber: (value: string) =>
    set({ gucciItemStyleNumber: value }),
  updateGucciItemExtraDetails: (value: string) =>
    set({ gucciItemExtraDetails: value }),
  updateGucciSalespersonId: (value: string) =>
    set({ gucciSalespersonId: value }),
  updateGucciSalespersonName: (value: string) =>
    set({ gucciSalespersonName: value }),
  updateGucciSubtotal: (value: string) => set({ gucciSubtotal: value }),
  updateGucciTaxAmount: (value: string) => set({ gucciTaxAmount: value }),
  updateGucciTotalAmount: (value: string) => set({ gucciTotalAmount: value }),
  updateGucciDistanceSalesAmount: (value: string) =>
    set({ gucciDistanceSalesAmount: value }),
  updateGucciDistanceSalesId: (value: string) =>
    set({ gucciDistanceSalesId: value }),
  updateGucciChangeAmount: (value: string) => set({ gucciChangeAmount: value }),
  updateGucciSoldItemCount: (value: string) =>
    set({ gucciSoldItemCount: value }),
  updateGucciTaxCode: (value: string) => set({ gucciTaxCode: value }),
  updateGucciTaxableAmount: (value: string) =>
    set({ gucciTaxableAmount: value }),
  updateGucciTaxRate: (value: string) => set({ gucciTaxRate: value }),
  updateGucciTaxTotal: (value: string) => set({ gucciTaxTotal: value }),
  updateGucciTaxAmountFinal: (value: string) =>
    set({ gucciTaxAmountFinal: value }),
});
