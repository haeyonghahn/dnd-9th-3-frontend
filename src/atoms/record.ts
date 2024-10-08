import { IFile, IRecordPlace } from "@/types/record";
import { IInterest } from "@/types/user";
import { atom } from "recoil";

export const recordImageAtom = atom<IFile[]>({
  key: "recordImageAtom",
  default: [
    {
      id: 0,
      file: null,
    },
    {
      id: 1,
      file: null,
    },
    {
      id: 2,
      file: null,
    },
    {
      id: 3,
      file: null,
    },
    {
      id: 4,
      file: null,
    },
  ],
});

export const deleteRecordNumberAtom = atom<string>({
  key: "deleteRecordNumberAtom",
  default: "",
});

export const recordTitleAtom = atom<string>({
  key: "recordTitleAtom",
  default: "",
});

export const recordDescriptAtom = atom<string>({
  key: "recordDescriptAtom",
  default: "",
});

export const recordDateAtom = atom<Date | null>({
  key: "recordDateAtom",
  default: null,
});

export const recordPlaceAtom = atom<IRecordPlace>({
  key: "recordPlaceAtom",
  default: {
    placeName: "",
    addressName: "",
    placeLatitude: 0,
    placeLongitude: 0,
  },
});

export const recordCategoriesAtom = atom<IInterest[] | undefined>({
  key: "recordCategories",
  default: [],
});

export const recordStateAtom = atom<string>({
  key: "recordStateAtom",
  default: "PRIVATE",
});

export const recordScoreAtom = atom<number>({
  key: "recordScoreAtom",
  default: 0,
});
