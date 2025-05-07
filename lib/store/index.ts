"use client";

import { create } from "zustand";
import {
  createGucciNycSlice,
  createGucciSlice,
  GucciNycSlice,
  type GucciSlice,
} from "./receipt/gucci";
import { createSephoraSlice, type SephoraSlice } from "./receipt/sephora";
import { createDiorSlice, type DiorSlice } from "./receipt/dior";
import { createSharedSlice, type SharedSlice } from "./shared";
import { createAppleSlice, type AppleSlice } from "./receipt/apple";
import { createDysonSlice, type DysonSlice } from "./receipt/dyson";
import {
  createFlightClubSlice,
  type FlightClubSlice,
} from "./receipt/flight_club";
import { createFlannelsSlice, type FlannelsSlice } from "./receipt/flannels";
import { createStussySlice, type StussySlice } from "./receipt/stussy";
import { createLVSlice, LVSlice } from "./receipt/lv";
import { createBalenciagaSlice, BalenciagaSlice } from "./receipt/balenciaga";
import { createSamsungSlice, SamsungSlice } from "./receipt/samsung";
import { createAdidasSlice, AdidasSlice } from "./receipt/adidas";
import { createFootLockerSlice, FootLockerSlice } from "./receipt/foot_locker";
import { createThreeUkSlice, ThreeUkSlice } from "./receipt/three_uk";
import { createGoyardSlice, GoyardSlice } from "./receipt/goyard";

export type StoreState = SharedSlice &
  GucciSlice &
  GucciNycSlice &
  SephoraSlice &
  DiorSlice &
  AppleSlice &
  DysonSlice &
  FlightClubSlice &
  FlannelsSlice &
  StussySlice &
  LVSlice &
  BalenciagaSlice &
  SamsungSlice &
  AdidasSlice &
  FootLockerSlice &
  ThreeUkSlice &
  GoyardSlice & {
    resetAll: () => void;
  };

export const useReceiptStore = create<StoreState>()((...a) => ({
  ...createSharedSlice(...a),
  ...createGucciSlice(...a),
  ...createGucciNycSlice(...a),
  ...createSephoraSlice(...a),
  ...createDiorSlice(...a),
  ...createAppleSlice(...a),
  ...createDysonSlice(...a),
  ...createFlightClubSlice(...a),
  ...createFlannelsSlice(...a),
  ...createStussySlice(...a),
  ...createLVSlice(...a),
  ...createBalenciagaSlice(...a),
  ...createSamsungSlice(...a),
  ...createAdidasSlice(...a),
  ...createFootLockerSlice(...a),
  ...createThreeUkSlice(...a),
  ...createGoyardSlice(...a),
  resetAll: () => {
    console.warn("resetAll is not fully implemented yet.");
  },
}));

export default useReceiptStore;
