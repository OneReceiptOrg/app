"use client";

import type { StateCreator } from "zustand";

export interface SephoraSlice {
  sephoraStoreName: string;
  sephoraStoreAddress1: string;
  sephoraStoreAddress2: string; 
  sephoraProductName: string;
  sephoraProductSku: string;
  sephoraProductQty: string;
  sephoraPrice: string;
  sephoraProductAmount: string;
  sephoraSubtotal: string;
  sephoraTaxDesc: string;
  sephoraTaxPercent: string;
  sephoraTax: string;
  sephoraTotalAmount: string;
  sephoraPaymentType: string;
  sephoraPaymentAmount: string;
  sephoraCardNumberMasked: string;
  sephoraCardType: string;
  sephoraCardEntry: string;
  sephoraTransType: string;
  sephoraAuthCode: string;
  sephoraSequenceNum: string;
  sephoraReferenceNum: string;
  sephoraTerminalId: string;
  sephoraDate: string;
  sephoraTime: string;
  sephoraApprovalStatus: string;

  updateSephoraStoreAddress1: (value: string) => void;
  updateSephoraStoreAddress2: (value: string) => void;
  updateSephoraProductName: (value: string) => void;
  updateSephoraProductSku: (value: string) => void;
  updateSephoraProductQty: (value: string) => void;
  updateSephoraPrice: (value: string) => void;
  updateSephoraProductAmount: (value: string) => void;
  updateSephoraSubtotal: (value: string) => void;
  updateSephoraTaxDesc: (value: string) => void;
  updateSephoraTaxPercent: (value: string) => void;
  updateSephoraTax: (value: string) => void;
  updateSephoraTotalAmount: (value: string) => void;
  updateSephoraPaymentType: (value: string) => void;
  updateSephoraPaymentAmount: (value: string) => void;
  updateSephoraCardNumberMasked: (value: string) => void;
  updateSephoraCardType: (value: string) => void;
  updateSephoraCardEntry: (value: string) => void;
  updateSephoraTransType: (value: string) => void;
  updateSephoraAuthCode: (value: string) => void;
  updateSephoraSequenceNum: (value: string) => void;
  updateSephoraReferenceNum: (value: string) => void;
  updateSephoraTerminalId: (value: string) => void;
  updateSephoraDate: (value: string) => void;
  updateSephoraTime: (value: string) => void;
}

export const initialSephoraState = {
  sephoraStoreName: "Sephora", 
  sephoraStoreAddress1: "5 Times Square",
  sephoraStoreAddress2: "New York, NY 10036", 
  sephoraProductName: "Dior Backstage Foundation",
  sephoraProductSku: "2775955", 
  sephoraProductQty: "1",
  sephoraPrice: "40.00",
  sephoraProductAmount: "40.00",
  sephoraSubtotal: "40.00",
  sephoraTaxDesc: "FL STATE TAX",
  sephoraTaxPercent: "7%",
  sephoraTax: "3.60",
  sephoraTotalAmount: "43.60",
  sephoraPaymentType: "Visa",
  sephoraPaymentAmount: "43.60", 
  sephoraCardNumberMasked: "***********5241",
  sephoraCardType: "Visa",
  sephoraCardEntry: "CHIP",
  sephoraTransType: "PURCHASE",
  sephoraAuthCode: "076135",
  sephoraSequenceNum: "092351",
  sephoraReferenceNum: "00006317",
  sephoraTerminalId: "712",
  sephoraDate: "03/13/2024",
  sephoraTime: "12:34:51", 
  sephoraApprovalStatus: "APPROVED", 
};

export const createSephoraSlice: StateCreator<
  SephoraSlice,
  [],
  [],
  SephoraSlice
> = (set) => ({
  ...initialSephoraState,
  updateSephoraStoreAddress1: (value) => set({ sephoraStoreAddress1: value }),
  updateSephoraStoreAddress2: (value) => set({ sephoraStoreAddress2: value }),
  updateSephoraProductName: (value) => set({ sephoraProductName: value }),
  updateSephoraProductSku: (value) => set({ sephoraProductSku: value }),
  updateSephoraProductQty: (value) => set({ sephoraProductQty: value }),
  updateSephoraPrice: (value) => set({ sephoraPrice: value }),
  updateSephoraProductAmount: (value) => set({ sephoraProductAmount: value }),
  updateSephoraSubtotal: (value) => set({ sephoraSubtotal: value }),
  updateSephoraTaxDesc: (value) => set({ sephoraTaxDesc: value }),
  updateSephoraTaxPercent: (value) => set({ sephoraTaxPercent: value }),
  updateSephoraTax: (value) => set({ sephoraTax: value }),
  updateSephoraTotalAmount: (value) => set({ sephoraTotalAmount: value }),
  updateSephoraPaymentType: (value) => set({ sephoraPaymentType: value }),
  updateSephoraPaymentAmount: (value) => set({ sephoraPaymentAmount: value }),
  updateSephoraCardNumberMasked: (value) =>
    set({ sephoraCardNumberMasked: value }),
  updateSephoraCardType: (value) => set({ sephoraCardType: value }),
  updateSephoraCardEntry: (value) => set({ sephoraCardEntry: value }),
  updateSephoraTransType: (value) => set({ sephoraTransType: value }),
  updateSephoraAuthCode: (value) => set({ sephoraAuthCode: value }),
  updateSephoraSequenceNum: (value) => set({ sephoraSequenceNum: value }),
  updateSephoraReferenceNum: (value) => set({ sephoraReferenceNum: value }),
  updateSephoraTerminalId: (value) => set({ sephoraTerminalId: value }),
  updateSephoraDate: (value) => set({ sephoraDate: value }),
  updateSephoraTime: (value) => set({ sephoraTime: value }),
});
