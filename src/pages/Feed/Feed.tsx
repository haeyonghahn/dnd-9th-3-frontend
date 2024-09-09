import {
  FeedHeaderCol,
  FeedHeaderItem,
  FeedHeaderItems,
  FeedHeaderSearch,
  FeedHeaderWrapper,
  FeedImage,
  Wrapper,
} from "./Feed.styled";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { isFeedTabAtom } from "@/atoms/feedtab";
import { useRouter } from "@/hooks/useRouter";
import Recent from "./Recent/Recent";
import Recommend from "./Recommend/Recommend";
import { feedAtom, feedIndexAtom } from "@/atoms/feed";
import Icon from "@/foundations/Icon";
const Feed = () => {
  const feeds = useRecoilValue(feedAtom);
  const feedIndex = useRecoilValue(feedIndexAtom);
  const [feedTab, setFeedTab] = useRecoilState(isFeedTabAtom);
  const { currentPath } = useRouter();
  const handleHeaderItem = () => {
    setFeedTab((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        <FeedHeaderWrapper>
          <FeedHeaderCol>
            <FeedHeaderItems>
              <FeedHeaderItem
                className={feedTab ? "selected" : ""}
                onClick={handleHeaderItem}
              >
                <Link to="">최신</Link>
              </FeedHeaderItem>
              <FeedHeaderItem
                className={feedTab ? "" : "selected"}
                onClick={handleHeaderItem}
              >
                <Link to="recommend">추천</Link>
              </FeedHeaderItem>
            </FeedHeaderItems>
          </FeedHeaderCol>
          <FeedHeaderCol>
            <FeedHeaderSearch>
              <Icon
                icon="search"
                fill="currentColor"
                viewBoxWidth="20"
                viewBoxHeight="20"
              />
            </FeedHeaderSearch>
          </FeedHeaderCol>
        </FeedHeaderWrapper>
        {currentPath === "/feed" ? <Recent /> : <Recommend />}
      </Wrapper>
      {feedTab ? <FeedImage src={feeds[feedIndex].img} /> : null}
    </>
  );
};

export default Feed;
