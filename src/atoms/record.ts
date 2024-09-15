import { Record, RecordPlace } from "@/types/record";
import { InterestElement } from "@/types/user";
import { atom } from "recoil";

export const myRecordAtom = atom<Record[]>({
  key: "myRecordAtom",
  default: [],
});

export const recordDateAtom = atom<Date | null>({
  key: "recordDateAtom",
  default: null,
});

export const recordPlaceAtom = atom<RecordPlace>({
  key: "recordPlaceAtom",
  default: {
    placeName: "",
    addressName: "",
    placeLatitude: 0,
    placeLongitude: 0,
  },
});

export const recordCategoriesAtom = atom<InterestElement[] | undefined>({
  key: "recordCategories",
  default: [],
});

export const recordStateAtom = atom<String>({
  key: "recordStateAtom",
  default: "PRIVATE",
});

export const recordScoreAtom = atom<Number>({
  key: "recordScoreAtom",
  default: 0,
});
