import { Feed } from "@/types/feed";
import { atom } from "recoil";

export const feedAtom = atom<Feed[]>({
  key: "feed",
  default: [
    { feedId: 1, img: "/images/desert.jpg" },
    { feedId: 2, img: "/images/ocean.jpg" },
  ],
});
