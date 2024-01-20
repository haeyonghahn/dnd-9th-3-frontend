import { InterestElement, User } from "@/types/user";
import { atom } from "recoil";

export const userAtom = atom<User | null>({
  key: "user",
  default: {
    id: "",
    name: "",
    password: "",
    emailSet: [],
    interestSet: [],
  },
});

export const interestAtom = atom<InterestElement[]>({
  key: "interests",
  default: [],
});
