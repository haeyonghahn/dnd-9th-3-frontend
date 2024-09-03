import { useRecoilValue } from "recoil";
import FeedHeader from "./Header/FeedHeader";
import { isFeedTabAtom } from "@/atoms/feedtab";
import { FeedImage } from "./Feed.styled";

const Feed = () => {
  const feedTab = useRecoilValue(isFeedTabAtom);
  return (
    <>
      <FeedHeader />
      {feedTab ? <FeedImage src="/images/desert.jpg" /> : null}
    </>
  );
};

export default Feed;
