import { StateCreator } from "zustand";
import { StoreState } from "..";

export interface LVSlice {
  // Store Information
  lvStoreName: string;
  lvStoreAddressLine: string;
  lvStoreCityPostal: string;
  lvStoreCountry: string;
  lvStorePhone: string;
  lvStoreSiret: string;
  lvStoreNaf: string;
  lvStoreTvaNumber: string;
  lvStoreSiren: string;

  // Receipt Details
  lvSignatureCode: string;
  lvDocumentNumber: string;
  lvPosSoftwareVersion: string;
  lvStoreId: string;
  lvRegisterId: string;

  // Transaction Details
  lvDate: string;
  lvTime: string;
  lvTransactionId: string;
  lvSalesAssociate: string;
  lvCustomerName: string;

  // Product Details
  lvProductDescription: string;
  lvProductCode: string;
  lvQuantity: string;
  lvVatRate: string;
  lvUnitPriceHt: string;
  lvUnitPriceTtc: string;

  // Totals and Payment
  lvTotalTtc: string;
  lvTotalHt: string;
  lvTotalTax: string;
  lvPaymentMethod: string;
  lvAmountPaid: string;
  lvChangeGiven: string;

  // Update methods
  updateLvStoreName: (value: string) => void;
  updateLvStoreAddressLine: (value: string) => void;
  updateLvStoreCityPostal: (value: string) => void;
  updateLvStoreCountry: (value: string) => void;
  updateLvStorePhone: (value: string) => void;
  updateLvStoreSiret: (value: string) => void;
  updateLvStoreNaf: (value: string) => void;
  updateLvStoreTvaNumber: (value: string) => void;
  updateLvStoreSiren: (value: string) => void;
  updateLvSignatureCode: (value: string) => void;
  updateLvDocumentNumber: (value: string) => void;
  updateLvPosSoftwareVersion: (value: string) => void;
  updateLvStoreId: (value: string) => void;
  updateLvRegisterId: (value: string) => void;
  updateLvDate: (value: string) => void;
  updateLvTime: (value: string) => void;
  updateLvTransactionId: (value: string) => void;
  updateLvSalesAssociate: (value: string) => void;
  updateLvCustomerName: (value: string) => void;
  updateLvProductDescription: (value: string) => void;
  updateLvProductCode: (value: string) => void;
  updateLvQuantity: (value: string) => void;
  updateLvVatRate: (value: string) => void;
  updateLvUnitPriceHt: (value: string) => void;
  updateLvUnitPriceTtc: (value: string) => void;
  updateLvTotalTtc: (value: string) => void;
  updateLvTotalHt: (value: string) => void;
  updateLvTotalTax: (value: string) => void;
  updateLvPaymentMethod: (value: string) => void;
  updateLvAmountPaid: (value: string) => void;
  updateLvChangeGiven: (value: string) => void;
}

export const createLVSlice: StateCreator<StoreState, [], [], LVSlice> = (
  set
) => ({
  // Store Information - Default values
  lvStoreName: "Louis Vuitton PARIS CHAMPS ELYSEES",
  lvStoreAddressLine: "101, AVENUE DES CHAMPS-ELYSEES",
  lvStoreCityPostal: "75008 PARIS 75",
  lvStoreCountry: "France",
  lvStorePhone: "+33 9 77 40 40 77",
  lvStoreSiret: "331 888 990 00248",
  lvStoreNaf: "7010Z",
  lvStoreTvaNumber: "FR06331888990",
  lvStoreSiren: "775 66A 122 00119",

  // Receipt Details - Default values
  lvSignatureCode: "B01636imW",
  lvDocumentNumber: "T140625014835",
  lvPosSoftwareVersion: "18.0.2.0.26",
  lvStoreId: "1406",
  lvRegisterId: "1",

  // Transaction Details - Default values
  lvDate: "06/10/2023",
  lvTime: "12 : 07",
  lvTransactionId: "92348",
  lvSalesAssociate: "Ayako H.",
  lvCustomerName: "Noam Taine",

  // Product Details - Default values
  lvProductDescription: "SNEAKERS LV SKATE",
  lvProductCode: "808030",
  lvQuantity: "1",
  lvVatRate: "20%",
  lvUnitPriceHt: "792.00",
  lvUnitPriceTtc: "990.00",

  // Totals and Payment - Default values
  lvTotalTtc: "990.00",
  lvTotalHt: "792.33",
  lvTotalTax: "198.00",
  lvPaymentMethod: "EURO CASH",
  lvAmountPaid: "795.00",
  lvChangeGiven: "0.00",

  // Update methods
  updateLvStoreName: (value) => set({ lvStoreName: value }),
  updateLvStoreAddressLine: (value) => set({ lvStoreAddressLine: value }),
  updateLvStoreCityPostal: (value) => set({ lvStoreCityPostal: value }),
  updateLvStoreCountry: (value) => set({ lvStoreCountry: value }),
  updateLvStorePhone: (value) => set({ lvStorePhone: value }),
  updateLvStoreSiret: (value) => set({ lvStoreSiret: value }),
  updateLvStoreNaf: (value) => set({ lvStoreNaf: value }),
  updateLvStoreTvaNumber: (value) => set({ lvStoreTvaNumber: value }),
  updateLvStoreSiren: (value) => set({ lvStoreSiren: value }),
  updateLvSignatureCode: (value) => set({ lvSignatureCode: value }),
  updateLvDocumentNumber: (value) => set({ lvDocumentNumber: value }),
  updateLvPosSoftwareVersion: (value) => set({ lvPosSoftwareVersion: value }),
  updateLvStoreId: (value) => set({ lvStoreId: value }),
  updateLvRegisterId: (value) => set({ lvRegisterId: value }),
  updateLvDate: (value) => set({ lvDate: value }),
  updateLvTime: (value) => set({ lvTime: value }),
  updateLvTransactionId: (value) => set({ lvTransactionId: value }),
  updateLvSalesAssociate: (value) => set({ lvSalesAssociate: value }),
  updateLvCustomerName: (value) => set({ lvCustomerName: value }),
  updateLvProductDescription: (value) => set({ lvProductDescription: value }),
  updateLvProductCode: (value) => set({ lvProductCode: value }),
  updateLvQuantity: (value) => set({ lvQuantity: value }),
  updateLvVatRate: (value) => set({ lvVatRate: value }),
  updateLvUnitPriceHt: (value) => set({ lvUnitPriceHt: value }),
  updateLvUnitPriceTtc: (value) => set({ lvUnitPriceTtc: value }),
  updateLvTotalTtc: (value) => set({ lvTotalTtc: value }),
  updateLvTotalHt: (value) => set({ lvTotalHt: value }),
  updateLvTotalTax: (value) => set({ lvTotalTax: value }),
  updateLvPaymentMethod: (value) => set({ lvPaymentMethod: value }),
  updateLvAmountPaid: (value) => set({ lvAmountPaid: value }),
  updateLvChangeGiven: (value) => set({ lvChangeGiven: value }),
});
