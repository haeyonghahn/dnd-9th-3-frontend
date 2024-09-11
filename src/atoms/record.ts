import { Record } from "@/types/record";
import { atom } from "recoil";

export const myRecordAtom = atom<Record[]>({
  key: "myRecord",
  default: [],
});

export const recordDateAtom = atom<Date>({
  key: "recordDate",
  default: new Date(),
});
