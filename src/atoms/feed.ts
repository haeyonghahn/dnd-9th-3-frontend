import { Feed } from "@/types/feed";
import { atom } from "recoil";

export const feedAtom = atom<Feed[]>({
  key: "feed",
  default: [
    { feedId: 0, img: "/images/desert.jpg" },
    { feedId: 1, img: "/images/ocean.jpg" },
  ],
});

export const feedIndexAtom = atom<number>({
  key: "feedIndex",
  default: 0,
});
