"use client";

import type { StateCreator } from "zustand";
import type { Item } from "../types";

export interface AppleSlice {
  // Basic store info
  storeTitle: string;
  storeLogo: string;
  storeName: string;
  storeAddress1: string;
  storeAddress2: string;
  storeWebsite: string;
  vatLabel: string;
  vatNumber: string;

  // Customer info
  customerName: string;
  customerEmail: string;

  // Product info
  productName: string;
  refLabel: string;
  refNumber: string;
  serialLabel: string;
  serialNumber: string;
  returnDateLabel: string;
  returnDate: string;
  supportText: string;
  supportUrl: string;
  ecoParticipationText: string;
  ecoParticipationAmount: string;

  // Price details
  unitPrice: string;
  vatRate: string;
  quantity: string;
  priceHt: string;
  tvaAmount: string;
  total: string;

  // Total section
  totalLabel: string;
  totalPriceHt: string;
  totalTva: string;
  totalTtc: string;

  // Payment methods
  paymentMethodLabel: string;
  paymentMethod1Text: string;
  paymentMethod1Type: string;
  paymentMethod1Details: string;
  paymentMethod1CardMask: string;
  paymentMethod1CardLast4: string;
  paymentMethod1AuthCode: string;
  paymentMethod1Amount: string;
  paymentMethod2Text: string;
  paymentMethod2CardMask: string;
  paymentMethod2CardLast4: string;
  paymentMethod2AuthCode: string;
  paymentMethod2Amount: string;
  giftcardBalanceLabel: string;
  giftcardMask: string;
  giftcardLast4: string;
  giftcardBalance: string;

  // VAT summary
  vatSummaryLabel: string;
  summaryVatRate: string;
  summaryBase: string;
  summaryTva: string;

  // Date
  date: string;

  // Update functions
  updateStoreTitle: (value: string) => void;
  updateStoreLogo: (value: string) => void;
  updateStoreName: (value: string) => void;
  updateStoreAddress1: (value: string) => void;
  updateStoreAddress2: (value: string) => void;
  updateStoreWebsite: (value: string) => void;
  updateVatLabel: (value: string) => void;
  updateVatNumber: (value: string) => void;
  updateCustomerName: (value: string) => void;
  updateCustomerEmail: (value: string) => void;
  updateProductName: (value: string) => void;
  updateRefLabel: (value: string) => void;
  updateRefNumber: (value: string) => void;
  updateSerialLabel: (value: string) => void;
  updateSerialNumber: (value: string) => void;
  updateReturnDateLabel: (value: string) => void;
  updateReturnDate: (value: string) => void;
  updateSupportText: (value: string) => void;
  updateSupportUrl: (value: string) => void;
  updateEcoParticipationText: (value: string) => void;
  updateEcoParticipationAmount: (value: string) => void;
  updateUnitPrice: (value: string) => void;
  updateVatRate: (value: string) => void;
  updateQuantity: (value: string) => void;
  updatePriceHt: (value: string) => void;
  updateTvaAmount: (value: string) => void;
  updateTotal: (value: string) => void;
  updateTotalLabel: (value: string) => void;
  updateTotalPriceHt: (value: string) => void;
  updateTotalTva: (value: string) => void;
  updateTotalTtc: (value: string) => void;
  updatePaymentMethodLabel: (value: string) => void;
  updatePaymentMethod1Text: (value: string) => void;
  updatePaymentMethod1Type: (value: string) => void;
  updatePaymentMethod1Details: (value: string) => void;
  updatePaymentMethod1CardMask: (value: string) => void;
  updatePaymentMethod1CardLast4: (value: string) => void;
  updatePaymentMethod1AuthCode: (value: string) => void;
  updatePaymentMethod1Amount: (value: string) => void;
  updatePaymentMethod2Text: (value: string) => void;
  updatePaymentMethod2CardMask: (value: string) => void;
  updatePaymentMethod2CardLast4: (value: string) => void;
  updatePaymentMethod2AuthCode: (value: string) => void;
  updatePaymentMethod2Amount: (value: string) => void;
  updateGiftcardBalanceLabel: (value: string) => void;
  updateGiftcardMask: (value: string) => void;
  updateGiftcardLast4: (value: string) => void;
  updateGiftcardBalance: (value: string) => void;
  updateVatSummaryLabel: (value: string) => void;
  updateSummaryVatRate: (value: string) => void;
  updateSummaryBase: (value: string) => void;
  updateSummaryTva: (value: string) => void;
  updateDate: (value: string) => void;

  // Calculate totals and prepare payload
  calculateTotals: () => void;
  prepareApplePayload: () => any;
}

export const initialAppleState = {
  // Basic store info
  storeTitle: "Reçu",
  storeLogo: "A",
  storeName: "Apple Sainte-Catherine",
  storeAddress1: "2-4 rue Sainte-Catherine",
  storeAddress2: "33000 Bordeaux",
  storeWebsite: "http://www.apple.com/retail",
  vatLabel: "Numéro TVA:",
  vatNumber: "FR21483209383",

  // Customer info
  customerName: "Ayoub Bourouis",
  customerEmail: "Ayoubytb677@gmail.com",

  // Product info
  productName: "AirPods (3ᵉ génération) avec Boîtier de charge Lightning",
  refLabel: "N° Référence:",
  refNumber: "MPNY3ZM/A",
  serialLabel: "N° de Série:",
  serialNumber: "TGCXD6Q1YP",
  returnDateLabel: "Date Retour:",
  returnDate: "08 janv. , 2023",
  supportText: "Pour obtenir de l'aide :",
  supportUrl: "www.apple.com/fr/support",
  ecoParticipationText: "Dont éco-participation",
  ecoParticipationAmount: "0,02 €",

  // Price details
  unitPrice: "174,17 €",
  vatRate: "20,0%",
  quantity: "1",
  priceHt: "174,17 €",
  tvaAmount: "34,83 €",
  total: "209,00 €",

  // Total section
  totalLabel: "Total",
  totalPriceHt: "174,17 €",
  totalTva: "34,83 €",
  totalTtc: "209,00 €",

  // Payment methods
  paymentMethodLabel: "Méthode de Paiement",
  paymentMethod1Text: "Montant réglé par",
  paymentMethod1Type: "Carte-Cadeau Apple",
  paymentMethod1Details: "(Manuelle)",
  paymentMethod1CardMask: "••••",
  paymentMethod1CardLast4: "6260",
  paymentMethod1AuthCode: "9212502",
  paymentMethod1Amount: "150,00 €",
  paymentMethod2Text: "Montant réglé par VISA (Puce)",
  paymentMethod2CardMask: "••••",
  paymentMethod2CardLast4: "2418",
  paymentMethod2AuthCode: "724941",
  paymentMethod2Amount: "59,00 €",
  giftcardBalanceLabel: "Solde de la carte cadeau",
  giftcardMask: "••••",
  giftcardLast4: "6260",
  giftcardBalance: "0,00 €",

  // VAT summary
  vatSummaryLabel: "Résumé TVA:",
  summaryVatRate: "20,0%",
  summaryBase: "174,17 €",
  summaryTva: "34,83 €",

  // Date
  date: "05/06/23 - 17:41",
};

export const createAppleSlice: StateCreator<AppleSlice, [], [], AppleSlice> = (
  set,
  get
) => ({
  ...initialAppleState,

  // Update functions
  updateStoreTitle: (value) => set({ storeTitle: value }),
  updateStoreLogo: (value) => set({ storeLogo: value }),
  updateStoreName: (value) => set({ storeName: value }),
  updateStoreAddress1: (value) => set({ storeAddress1: value }),
  updateStoreAddress2: (value) => set({ storeAddress2: value }),
  updateStoreWebsite: (value) => set({ storeWebsite: value }),
  updateVatLabel: (value) => set({ vatLabel: value }),
  updateVatNumber: (value) => set({ vatNumber: value }),
  updateCustomerName: (value) => set({ customerName: value }),
  updateCustomerEmail: (value) => set({ customerEmail: value }),
  updateProductName: (value) => set({ productName: value }),
  updateRefLabel: (value) => set({ refLabel: value }),
  updateRefNumber: (value) => set({ refNumber: value }),
  updateSerialLabel: (value) => set({ serialLabel: value }),
  updateSerialNumber: (value) => set({ serialNumber: value }),
  updateReturnDateLabel: (value) => set({ returnDateLabel: value }),
  updateReturnDate: (value) => set({ returnDate: value }),
  updateSupportText: (value) => set({ supportText: value }),
  updateSupportUrl: (value) => set({ supportUrl: value }),
  updateEcoParticipationText: (value) => set({ ecoParticipationText: value }),
  updateEcoParticipationAmount: (value) =>
    set({ ecoParticipationAmount: value }),
  updateUnitPrice: (value) => set({ unitPrice: value }),
  updateVatRate: (value) => set({ vatRate: value }),
  updateQuantity: (value) => set({ quantity: value }),
  updatePriceHt: (value) => set({ priceHt: value }),
  updateTvaAmount: (value) => set({ tvaAmount: value }),
  updateTotal: (value) => set({ total: value }),
  updateTotalLabel: (value) => set({ totalLabel: value }),
  updateTotalPriceHt: (value) => set({ totalPriceHt: value }),
  updateTotalTva: (value) => set({ totalTva: value }),
  updateTotalTtc: (value) => set({ totalTtc: value }),
  updatePaymentMethodLabel: (value) => set({ paymentMethodLabel: value }),
  updatePaymentMethod1Text: (value) => set({ paymentMethod1Text: value }),
  updatePaymentMethod1Type: (value) => set({ paymentMethod1Type: value }),
  updatePaymentMethod1Details: (value) => set({ paymentMethod1Details: value }),
  updatePaymentMethod1CardMask: (value) =>
    set({ paymentMethod1CardMask: value }),
  updatePaymentMethod1CardLast4: (value) =>
    set({ paymentMethod1CardLast4: value }),
  updatePaymentMethod1AuthCode: (value) =>
    set({ paymentMethod1AuthCode: value }),
  updatePaymentMethod1Amount: (value) => set({ paymentMethod1Amount: value }),
  updatePaymentMethod2Text: (value) => set({ paymentMethod2Text: value }),
  updatePaymentMethod2CardMask: (value) =>
    set({ paymentMethod2CardMask: value }),
  updatePaymentMethod2CardLast4: (value) =>
    set({ paymentMethod2CardLast4: value }),
  updatePaymentMethod2AuthCode: (value) =>
    set({ paymentMethod2AuthCode: value }),
  updatePaymentMethod2Amount: (value) => set({ paymentMethod2Amount: value }),
  updateGiftcardBalanceLabel: (value) => set({ giftcardBalanceLabel: value }),
  updateGiftcardMask: (value) => set({ giftcardMask: value }),
  updateGiftcardLast4: (value) => set({ giftcardLast4: value }),
  updateGiftcardBalance: (value) => set({ giftcardBalance: value }),
  updateVatSummaryLabel: (value) => set({ vatSummaryLabel: value }),
  updateSummaryVatRate: (value) => set({ summaryVatRate: value }),
  updateSummaryBase: (value) => set({ summaryBase: value }),
  updateSummaryTva: (value) => set({ summaryTva: value }),
  updateDate: (value) => set({ date: value }),

  calculateTotals: () => {
    const state = get();
    const priceHt = parseFloat(state.unitPrice.replace(",", "."));
    const vatRateValue =
      parseFloat(state.vatRate.replace(",", ".").replace("%", "")) / 100;
    const quantity = parseInt(state.quantity);

    const totalHt = priceHt * quantity;
    const tvaAmount = totalHt * vatRateValue;
    const totalTtc = totalHt + tvaAmount;

    set({
      priceHt: totalHt.toFixed(2).replace(".", ",") + " €",
      tvaAmount: tvaAmount.toFixed(2).replace(".", ",") + " €",
      total: totalTtc.toFixed(2).replace(".", ",") + " €",
      totalPriceHt: totalHt.toFixed(2).replace(".", ",") + " €",
      totalTva: tvaAmount.toFixed(2).replace(".", ",") + " €",
      totalTtc: totalTtc.toFixed(2).replace(".", ",") + " €",
      summaryBase: totalHt.toFixed(2).replace(".", ",") + " €",
      summaryTva: tvaAmount.toFixed(2).replace(".", ",") + " €",
    });
  },

  prepareApplePayload: () => {
    const state = get();

    // Improved helper function to split a numeric value into individual characters
    const splitValue = (value: string) => {
      // Remove any currency symbol and space at the end
      const cleanValue = value.replace(/[€\s]/g, "");
      // Use an array to store each character
      const chars = Array.from(cleanValue);
      // Return the array of characters
      return chars;
    };

    // Safely get a character at an index from a split value
    const getChar = (value: string, index: number): string => {
      const chars = splitValue(value);
      return index < chars.length ? chars[index] : "";
    };

    // Main payload
    const payload = {
      RECEIPT_TITLE: state.storeTitle,
      STORE_LOGO: state.storeLogo,
      STORE_NAME: state.storeName,
      STORE_ADDRESS_1: state.storeAddress1,
      STORE_ADDRESS_2: state.storeAddress2,
      STORE_WEBSITE: state.storeWebsite,
      VAT_LABEL: state.vatLabel,
      VAT_NUMBER: state.vatNumber,
      CUSTOMER_NAME: state.customerName,
      CUSTOMER_EMAIL: state.customerEmail,
      PRODUCT_NAME: state.productName,
      REF_LABEL: state.refLabel,
      REF_NUMBER: state.refNumber,
      SERIAL_LABEL: state.serialLabel,
      SERIAL_NUMBER: state.serialNumber,
      RETURN_DATE_LABEL: state.returnDateLabel,
      RETURN_DATE: state.returnDate,
      SUPPORT_TEXT: state.supportText,
      SUPPORT_URL: state.supportUrl,
      ECO_PARTICIPATION_TEXT: state.ecoParticipationText,
      ECO_PARTICIPATION_AMOUNT: state.ecoParticipationAmount,

      // Split unit price into individual characters
      UNIT_PRICE_1: getChar(state.unitPrice, 0),
      UNIT_PRICE_2: getChar(state.unitPrice, 1),
      UNIT_PRICE_3: getChar(state.unitPrice, 2),
      UNIT_PRICE_4: getChar(state.unitPrice, 3),
      UNIT_PRICE_5: getChar(state.unitPrice, 4),
      UNIT_PRICE_6: getChar(state.unitPrice, 5),
      UNIT_PRICE_CURRENCY: "€",

      // Split VAT rate
      VAT_RATE_1: getChar(state.vatRate, 0),
      VAT_RATE_2: getChar(state.vatRate, 1),
      VAT_RATE_3: getChar(state.vatRate, 2),
      VAT_RATE_4: getChar(state.vatRate, 3),
      VAT_RATE_SYMBOL: "%",

      QUANTITY: state.quantity,

      // Split price HT
      PRICE_HT_1: getChar(state.priceHt, 0),
      PRICE_HT_2: getChar(state.priceHt, 1),
      PRICE_HT_3: getChar(state.priceHt, 2),
      PRICE_HT_4: getChar(state.priceHt, 3),
      PRICE_HT_5: getChar(state.priceHt, 4),
      PRICE_HT_6: getChar(state.priceHt, 5),
      PRICE_HT_CURRENCY: "€",

      // Split TVA amount
      TVA_AMOUNT_1: getChar(state.tvaAmount, 0),
      TVA_AMOUNT_2: getChar(state.tvaAmount, 1),
      TVA_AMOUNT_3: getChar(state.tvaAmount, 2),
      TVA_AMOUNT_4: getChar(state.tvaAmount, 3),
      TVA_AMOUNT_5: getChar(state.tvaAmount, 4),
      TVA_AMOUNT_CURRENCY: "€",

      // Split total
      TOTAL_1: getChar(state.total, 0),
      TOTAL_2: getChar(state.total, 1),
      TOTAL_3: getChar(state.total, 2),
      TOTAL_4: getChar(state.total, 3),
      TOTAL_5: getChar(state.total, 4),
      TOTAL_6: getChar(state.total, 5),
      TOTAL_CURRENCY: "€",

      TOTAL_LABEL: state.totalLabel,

      // Split total price HT
      TOTAL_PRICE_HT_1: getChar(state.totalPriceHt, 0),
      TOTAL_PRICE_HT_2: getChar(state.totalPriceHt, 1),
      TOTAL_PRICE_HT_3: getChar(state.totalPriceHt, 2),
      TOTAL_PRICE_HT_4: getChar(state.totalPriceHt, 3),
      TOTAL_PRICE_HT_5: getChar(state.totalPriceHt, 4),
      TOTAL_PRICE_HT_6: getChar(state.totalPriceHt, 5),
      TOTAL_PRICE_HT_CURRENCY: "€",

      // Split total TVA
      TOTAL_TVA_1: getChar(state.totalTva, 0),
      TOTAL_TVA_2: getChar(state.totalTva, 1),
      TOTAL_TVA_3: getChar(state.totalTva, 2),
      TOTAL_TVA_4: getChar(state.totalTva, 3),
      TOTAL_TVA_5: getChar(state.totalTva, 4),
      TOTAL_TVA_CURRENCY: "€",

      // Split total TTC
      TOTAL_TTC_1: getChar(state.totalTtc, 0),
      TOTAL_TTC_2: getChar(state.totalTtc, 1),
      TOTAL_TTC_3: getChar(state.totalTtc, 2),
      TOTAL_TTC_4: getChar(state.totalTtc, 3),
      TOTAL_TTC_5: getChar(state.totalTtc, 4),
      TOTAL_TTC_6: getChar(state.totalTtc, 5),
      TOTAL_TTC_CURRENCY: "€",

      PAYMENT_METHOD_LABEL: state.paymentMethodLabel,
      PAYMENT_METHOD_1_TEXT: state.paymentMethod1Text,
      PAYMENT_METHOD_1_TYPE: state.paymentMethod1Type,
      PAYMENT_METHOD_1_DETAILS: state.paymentMethod1Details,
      PAYMENT_METHOD_1_CARD_MASK: state.paymentMethod1CardMask,
      PAYMENT_METHOD_1_CARD_LAST4: state.paymentMethod1CardLast4,
      PAYMENT_METHOD_1_AUTH_CODE: state.paymentMethod1AuthCode,
      PAYMENT_METHOD_1_AMOUNT: state.paymentMethod1Amount,
      PAYMENT_METHOD_2_TEXT: state.paymentMethod2Text,
      PAYMENT_METHOD_2_CARD_MASK: state.paymentMethod2CardMask,
      PAYMENT_METHOD_2_CARD_LAST4: state.paymentMethod2CardLast4,
      PAYMENT_METHOD_2_AUTH_CODE: state.paymentMethod2AuthCode,
      PAYMENT_METHOD_2_AMOUNT: state.paymentMethod2Amount,
      GIFTCARD_BALANCE_LABEL: state.giftcardBalanceLabel,
      GIFTCARD_MASK: state.giftcardMask,
      GIFTCARD_LAST4: state.giftcardLast4,
      GIFTCARD_BALANCE: state.giftcardBalance,

      VAT_SUMMARY_LABEL: state.vatSummaryLabel,

      // Split summary VAT rate
      SUMMARY_VAT_RATE_1: getChar(state.summaryVatRate, 0),
      SUMMARY_VAT_RATE_2: getChar(state.summaryVatRate, 1),
      SUMMARY_VAT_RATE_3: getChar(state.summaryVatRate, 2),
      SUMMARY_VAT_RATE_4: getChar(state.summaryVatRate, 3),
      SUMMARY_VAT_RATE_SYMBOL: "%",

      // Split summary base
      SUMMARY_BASE_1: getChar(state.summaryBase, 0),
      SUMMARY_BASE_2: getChar(state.summaryBase, 1),
      SUMMARY_BASE_3: getChar(state.summaryBase, 2),
      SUMMARY_BASE_4: getChar(state.summaryBase, 3),
      SUMMARY_BASE_5: getChar(state.summaryBase, 4),
      SUMMARY_BASE_6: getChar(state.summaryBase, 5),
      SUMMARY_BASE_CURRENCY: "€",

      // Split summary TVA
      SUMMARY_TVA_1: getChar(state.summaryTva, 0),
      SUMMARY_TVA_2: getChar(state.summaryTva, 1),
      SUMMARY_TVA_3: getChar(state.summaryTva, 2),
      SUMMARY_TVA_4: getChar(state.summaryTva, 3),
      SUMMARY_TVA_5: getChar(state.summaryTva, 4),
      SUMMARY_TVA_CURRENCY: "€",

      // Special handling for date which has a specific format
      DATE_1:
        state.date.split(" ")[0].split("/")[0] +
        "/" +
        state.date.split(" ")[0].split("/")[1][0],
      DATE_2: state.date.split(" ")[0].split("/")[1][1],
      DATE_3:
        "/" +
        state.date.split(" ")[0].split("/")[2] +
        " " +
        state.date.split(" ").slice(1).join(" "),
    };

    return payload;
  },
});
