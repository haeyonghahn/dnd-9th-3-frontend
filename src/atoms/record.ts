import { Record } from "@/types/record";
import { atom } from "recoil";

export const myRecordAtom = atom<Record[]>({
  key: "myRecord",
  default: [],
});
