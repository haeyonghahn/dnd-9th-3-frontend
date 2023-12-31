import { User } from "@/types/user";
import { atom } from "recoil";

export const userAtom = atom<User | null>({
  key: "user",
  default: null,
});
