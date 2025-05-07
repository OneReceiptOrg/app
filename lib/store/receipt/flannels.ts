import { StateCreator } from "zustand";

export interface FlannelsSlice {
  flannelsStoreAddress: string;
  flannelsStoreCityStateZip: string;
  flannelsEmployeeId: string;
  flannelsEmployeeNumber: string;
  flannelsProductSku: string;
  flannelsProductName: string;
  flannelsItemPrice: string;
  flannelsSubtotal: string;
  flannelsTaxAmount: string;
  flannelsTotal: string;
  flannelsPaymentMethod: string;
  flannelsPaymentAmount: string;
  flannelsCardNumberMasked: string;
  flannelsMerchantNumber: string;
  flannelsTerminalNumber: string;
  flannelsAppId: string;
  flannelsAuthCode: string;
  flannelsStoreId: string;
  flannelsTillId: string;
  flannelsTransactionNumber: string;
  flannelsDate: string;
  flannelsTime: string;
  flannelsOperatorId: string;
  flannelsItemCount: number;
  flannelsVatNumber: string;
  flannelsBarcodeNumber: string;

  updateFlannelsStoreAddress: (value: string) => void;
  updateFlannelsStoreCityStateZip: (value: string) => void;
  updateFlannelsEmployeeId: (value: string) => void;
  updateFlannelsEmployeeNumber: (value: string) => void;
  updateFlannelsProductSku: (value: string) => void;
  updateFlannelsProductName: (value: string) => void;
  updateFlannelsItemPrice: (value: string) => void;
  updateFlannelsSubtotal: (value: string) => void;
  updateFlannelsTaxAmount: (value: string) => void;
  updateFlannelsTotal: (value: string) => void;
  updateFlannelsPaymentMethod: (value: string) => void;
  updateFlannelsPaymentAmount: (value: string) => void;
  updateFlannelsCardNumberMasked: (value: string) => void;
  updateFlannelsMerchantNumber: (value: string) => void;
  updateFlannelsTerminalNumber: (value: string) => void;
  updateFlannelsAppId: (value: string) => void;
  updateFlannelsAuthCode: (value: string) => void;
  updateFlannelsStoreId: (value: string) => void;
  updateFlannelsTillId: (value: string) => void;
  updateFlannelsTransactionNumber: (value: string) => void;
  updateFlannelsDate: (value: string) => void;
  updateFlannelsTime: (value: string) => void;
  updateFlannelsOperatorId: (value: string) => void;
  updateFlannelsItemCount: (value: number) => void;
  updateFlannelsVatNumber: (value: string) => void;
  updateFlannelsBarcodeNumber: (value: string) => void;
}

export const createFlannelsSlice: StateCreator<FlannelsSlice> = (set) => ({
  flannelsStoreAddress: "15-17 Oxford Street",
  flannelsStoreCityStateZip: "London W1D 2HU",
  flannelsEmployeeId: "511008",
  flannelsEmployeeNumber: "511008",
  flannelsProductSku: "11402702270", 
  flannelsProductName: "Stone Island Sweatshirt",
  flannelsItemPrice: "225.00",
  flannelsSubtotal: "225.00", 
  flannelsTaxAmount: "45.00",
  flannelsTotal: "270.00", 
  flannelsPaymentMethod: "VISA DEBIT",
  flannelsPaymentAmount: "270.00",
  flannelsCardNumberMasked: "125000******9012",
  flannelsMerchantNumber: "***24708",
  flannelsTerminalNumber: "****0801",
  flannelsAppId: "4B2871ZVSNPPZBR8349|UU/+dcJ029Mi",
  flannelsAuthCode: "009886",
  flannelsStoreId: "1842",
  flannelsTillId: "002",
  flannelsTransactionNumber: "000342",
  flannelsDate: "23/09/23",
  flannelsTime: "17:03",
  flannelsOperatorId: "507314",
  flannelsItemCount: 1,
  flannelsVatNumber: "GB 707 7253 32",
  flannelsBarcodeNumber: "178102020781260119",

  updateFlannelsStoreAddress: (value) => set({ flannelsStoreAddress: value }),
  updateFlannelsStoreCityStateZip: (value) => set({ flannelsStoreCityStateZip: value }),
  updateFlannelsEmployeeId: (value) => set({ flannelsEmployeeId: value }),
  updateFlannelsEmployeeNumber: (value) => set({ flannelsEmployeeNumber: value }),
  updateFlannelsProductSku: (value) => set({ flannelsProductSku: value }),
  updateFlannelsProductName: (value) => set({ flannelsProductName: value }),
  updateFlannelsItemPrice: (value) => set({ flannelsItemPrice: value }),
  updateFlannelsSubtotal: (value) => set({ flannelsSubtotal: value }),
  updateFlannelsTaxAmount: (value) => set({ flannelsTaxAmount: value }),
  updateFlannelsTotal: (value) => set({ flannelsTotal: value }),
  updateFlannelsPaymentMethod: (value) => set({ flannelsPaymentMethod: value }),
  updateFlannelsPaymentAmount: (value) => set({ flannelsPaymentAmount: value }),
  updateFlannelsCardNumberMasked: (value) => set({ flannelsCardNumberMasked: value }),
  updateFlannelsMerchantNumber: (value) => set({ flannelsMerchantNumber: value }),
  updateFlannelsTerminalNumber: (value) => set({ flannelsTerminalNumber: value }),
  updateFlannelsAppId: (value) => set({ flannelsAppId: value }),
  updateFlannelsAuthCode: (value) => set({ flannelsAuthCode: value }),
  updateFlannelsStoreId: (value) => set({ flannelsStoreId: value }),
  updateFlannelsTillId: (value) => set({ flannelsTillId: value }),
  updateFlannelsTransactionNumber: (value) => set({ flannelsTransactionNumber: value }),
  updateFlannelsDate: (value) => set({ flannelsDate: value }),
  updateFlannelsTime: (value) => set({ flannelsTime: value }),
  updateFlannelsOperatorId: (value) => set({ flannelsOperatorId: value }),
  updateFlannelsItemCount: (value) => set({ flannelsItemCount: value }),
  updateFlannelsVatNumber: (value) => set({ flannelsVatNumber: value }),
  updateFlannelsBarcodeNumber: (value) => set({ flannelsBarcodeNumber: value }),
}); 