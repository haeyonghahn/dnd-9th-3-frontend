import { getFeeds } from "@/api/record";
import { selector } from "recoil";

export const feedAtom = selector({
  key: "feeds",
  get: async () => {
    return getFeeds();
  },
});
