import {
  FeedHeaderCol,
  FeedHeaderItem,
  FeedHeaderItems,
  FeedHeaderSearch,
  FeedHeaderWrapper,
  Wrapper,
} from "./FeedHeader.styled";
import { Link } from "react-router-dom";
import Recent from "../Recent/Recent";
import { useRecoilState } from "recoil";
import { isFeedTabAtom } from "@/atoms/feedtab";
import Recommend from "../Recommend/Recommend";
import { useRouter } from "@/hooks/useRouter";

const FeedHeader = () => {
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
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </FeedHeaderSearch>
          </FeedHeaderCol>
        </FeedHeaderWrapper>
        {currentPath === "/feed" ? <Recent /> : <Recommend />}
      </Wrapper>
    </>
  );
};

export default FeedHeader;
