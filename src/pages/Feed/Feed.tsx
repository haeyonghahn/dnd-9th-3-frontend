import {
  Header,
  HeaderCol,
  HeaderItem,
  HeaderItems,
  Search,
  Wrapper,
} from "./Feed.styled";
import { Link } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { feedAtom } from "@/atoms/feed";
import Icon from "@/foundations/Icon";
import { TouchEventHandler, useRef, useState } from "react";
import FeedItem from "./FeedItem";

const Feed = () => {
  const feeds = useRecoilValueLoadable(feedAtom);

  const [feedTab, setFeedTab] = useState(true);
  const handleHeaderItem = () => {
    setFeedTab((prev) => !prev);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevTouch, setPrevTouch] = useState<React.Touch | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  // const height = useDomHeight(containerRef);

  const handleTouchMove: TouchEventHandler = (event) => {
    const touch = event.touches[0]!;
    setPrevTouch(touch);
    if (!prevTouch) return;

    const diff = touch.pageY - prevTouch.pageY;
    setScrollPosition(scrollPosition + diff);
  };

  const handleTouchEnd: TouchEventHandler = () => {
    setPrevTouch(null);
  };

  switch (feeds.state) {
    case "hasValue":
      return (
        <>
          <Wrapper>
            <Header>
              <HeaderCol>
                <HeaderItems>
                  <HeaderItem
                    className={feedTab ? "selected" : ""}
                    onClick={handleHeaderItem}
                  >
                    <Link to="">최신</Link>
                  </HeaderItem>
                  <HeaderItem
                    className={feedTab ? "" : "selected"}
                    onClick={handleHeaderItem}
                  >
                    <Link to="recommend">추천</Link>
                  </HeaderItem>
                </HeaderItems>
              </HeaderCol>
              <HeaderCol>
                <Search>
                  <Icon
                    icon="search"
                    fill="currentColor"
                    viewBoxWidth="20"
                    viewBoxHeight="20"
                  />
                </Search>
              </HeaderCol>
            </Header>
          </Wrapper>
          {/* 스크롤 컨테이너 */}
          {feedTab ? (
            <div
              ref={containerRef}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                width: "100%",
                height: "100%",
                overflowY: "hidden",
                scrollSnapType: "y mandatory",
              }}
            >
              {/* 자식 요소들을 이동 처리하기 위한 컨테이너 */}
              <div
                style={{
                  height: "100%",
                  transform: `translateY(${scrollPosition}px)`,
                  position: "relative",
                }}
              >
                {feeds.contents &&
                  feeds.contents.map((feed, index) => (
                    <div
                      key={index}
                      style={{
                        height: "100%",
                        scrollSnapAlign: "start",
                        position: "relative",
                      }}
                    >
                      <FeedItem feed={feed} />
                    </div>
                  ))}
              </div>
            </div>
          ) : null}
        </>
      );
    case "loading":
      return <>loading</>;
    case "hasError":
      return feeds.contents;
  }
};

export default Feed;
