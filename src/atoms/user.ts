import { IInterest, IUser } from "@/types/user";
import { atom } from "recoil";

export const userAtom = atom<IUser | null>({
  key: "user",
  default: {
    id: "",
    name: "",
    password: "",
    emails: [],
    interests: [],
  },
});

export const interestAtom = atom<IInterest[]>({
  key: "interests",
  default: [],
});
