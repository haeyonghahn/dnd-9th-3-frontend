import { getFeeds } from "@/api/record";
import { atom, selector } from "recoil";

export const feedAtom = selector({
  key: "feeds",
  get: async () => {
    return getFeeds();
  },
});

export const feedIndexAtom = atom<number>({
  key: "feedIndex",
  default: 0,
});
