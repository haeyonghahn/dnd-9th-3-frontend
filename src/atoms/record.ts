import { Record } from "@/types/record";
import { InterestElement } from "@/types/user";
import { atom } from "recoil";

export const myRecordAtom = atom<Record[]>({
  key: "myRecord",
  default: [],
});

export const recordDateAtom = atom<Date>({
  key: "recordDate",
  default: new Date(),
});

export const recordCategoryAtom = atom<InterestElement[]>({
  key: "recordCategory",
  default: [],
});
