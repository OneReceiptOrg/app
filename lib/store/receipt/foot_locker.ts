import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface FootLockerSlice {
  // State properties
  footLockerProductName: string;
  footLockerPrice: string;
  footLockerTax: string;
  footLockerTotal: string;
  footLockerDateTime: string;
  footLockerDate: string;
  footLockerOrderNumber: string;
  footLockerStoreNumber: string;
  footLockerRegister: string;
  footLockerCashier: string;
  footLockerProductSKU: string;
  footLockerCardLast4: string;
  footLockerApprovalCode: string;
  footLockerStoreName: string;
  footLockerStoreAddress: string;
  footLockerStoreAddressLine2: string;
  footLockerStoreCity: string;
  footLockerStoreZip: string;
  footLockerStorePhone: string;
  footLockerAssociateNumber: string;
  footLockerCardExpiry: string;
  footLockerTaxRate: string;
  footLockerTaxableAmount: string;
  footLockerQuantity: number;
  footLockerValidationCode: string;

  // Update functions
  updateFootLockerProductName: (productName: string) => void;
  updateFootLockerPrice: (price: string) => void;
  updateFootLockerTax: (tax: string) => void;
  updateFootLockerTotal: (total: string) => void;
  updateFootLockerDateTime: (dateTime: string) => void;
  updateFootLockerDate: (date: string) => void;
  updateFootLockerOrderNumber: (orderNumber: string) => void;
  updateFootLockerStoreNumber: (storeNumber: string) => void;
  updateFootLockerRegister: (register: string) => void;
  updateFootLockerCashier: (cashier: string) => void;
  updateFootLockerProductSKU: (productSKU: string) => void;
  updateFootLockerCardLast4: (cardLast4: string) => void;
  updateFootLockerApprovalCode: (approvalCode: string) => void;
  updateFootLockerStoreName: (storeName: string) => void;
  updateFootLockerStoreAddress: (storeAddress: string) => void;
  updateFootLockerStoreAddressLine2: (storeAddressLine2: string) => void;
  updateFootLockerStoreCity: (storeCity: string) => void;
  updateFootLockerStoreZip: (storeZip: string) => void;
  updateFootLockerStorePhone: (storePhone: string) => void;
  updateFootLockerAssociateNumber: (associateNumber: string) => void;
  updateFootLockerCardExpiry: (cardExpiry: string) => void;
  updateFootLockerTaxRate: (taxRate: string) => void;
  updateFootLockerTaxableAmount: (taxableAmount: string) => void;
  updateFootLockerQuantity: (quantity: number) => void;
  updateFootLockerValidationCode: (validationCode: string) => void;
}

export const createFootLockerSlice: StateCreator<
  StoreState,
  [],
  [],
  FootLockerSlice
> = (set) => ({
  // Initial state values from original template
  footLockerProductName: "ADI ULTRA BOOST 3.0",
  footLockerPrice: "149.99",
  footLockerTax: "1.99",
  footLockerTotal: "151.98",
  footLockerDateTime: "06/28/2023 01:29 PM",
  footLockerDate: "06/28",
  footLockerOrderNumber: "54917",
  footLockerStoreNumber: "07153",
  footLockerRegister: "005",
  footLockerCashier: "CELENIA",
  footLockerProductSKU: "88666877746714",
  footLockerCardLast4: "6657",
  footLockerApprovalCode: "11493EF",
  footLockerStoreName: "FOOT LOCKER",
  footLockerStoreAddress: "THE FLORIDA MALL",
  footLockerStoreAddressLine2: "8001 S ORHIG HUSSOM JRAIL",
  footLockerStoreCity: "ORLNND",
  footLockerStoreZip: "32809",
  footLockerStorePhone: "407857190",
  footLockerAssociateNumber: "000009874068",
  footLockerCardExpiry: "******",
  footLockerTaxRate: "6.500",
  footLockerTaxableAmount: "149.99",
  footLockerQuantity: 1,
  footLockerValidationCode: "XY645ZF",

  // Update functions
  updateFootLockerProductName: (productName) =>
    set({ footLockerProductName: productName }),
  updateFootLockerPrice: (price) => set({ footLockerPrice: price }),
  updateFootLockerTax: (tax) => set({ footLockerTax: tax }),
  updateFootLockerTotal: (total) => set({ footLockerTotal: total }),
  updateFootLockerDateTime: (dateTime) => set({ footLockerDateTime: dateTime }),
  updateFootLockerDate: (date) => set({ footLockerDate: date }),
  updateFootLockerOrderNumber: (orderNumber) =>
    set({ footLockerOrderNumber: orderNumber }),
  updateFootLockerStoreNumber: (storeNumber) =>
    set({ footLockerStoreNumber: storeNumber }),
  updateFootLockerRegister: (register) => set({ footLockerRegister: register }),
  updateFootLockerCashier: (cashier) => set({ footLockerCashier: cashier }),
  updateFootLockerProductSKU: (productSKU) =>
    set({ footLockerProductSKU: productSKU }),
  updateFootLockerCardLast4: (cardLast4) =>
    set({ footLockerCardLast4: cardLast4 }),
  updateFootLockerApprovalCode: (approvalCode) =>
    set({ footLockerApprovalCode: approvalCode }),
  updateFootLockerStoreName: (storeName) =>
    set({ footLockerStoreName: storeName }),
  updateFootLockerStoreAddress: (storeAddress) =>
    set({ footLockerStoreAddress: storeAddress }),
  updateFootLockerStoreAddressLine2: (storeAddressLine2) =>
    set({ footLockerStoreAddressLine2: storeAddressLine2 }),
  updateFootLockerStoreCity: (storeCity) =>
    set({ footLockerStoreCity: storeCity }),
  updateFootLockerStoreZip: (storeZip) => set({ footLockerStoreZip: storeZip }),
  updateFootLockerStorePhone: (storePhone) =>
    set({ footLockerStorePhone: storePhone }),
  updateFootLockerAssociateNumber: (associateNumber) =>
    set({ footLockerAssociateNumber: associateNumber }),
  updateFootLockerCardExpiry: (cardExpiry) =>
    set({ footLockerCardExpiry: cardExpiry }),
  updateFootLockerTaxRate: (taxRate) => set({ footLockerTaxRate: taxRate }),
  updateFootLockerTaxableAmount: (taxableAmount) =>
    set({ footLockerTaxableAmount: taxableAmount }),
  updateFootLockerQuantity: (quantity) => set({ footLockerQuantity: quantity }),
  updateFootLockerValidationCode: (validationCode) =>
    set({ footLockerValidationCode: validationCode }),
});
