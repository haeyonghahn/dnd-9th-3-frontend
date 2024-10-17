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
import { useDomHeight } from "@/hooks/useDomHeight";

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

const Feed = () => {
  const feeds = useRecoilValueLoadable(feedAtom);

  const [feedTab, setFeedTab] = useState(true);
  const handleHeaderItem = () => {
    setFeedTab((prev) => !prev);
  };

  const [scrollPosition, setScrollPosition] = useState(0); // touch가 이동한 길이가 누적된 값
  const [prevTouch, setPrevTouch] = useState<React.Touch | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const height = useDomHeight(containerRef);

  type RecentPositionHistory = Array<{ position: number; timestamp: number }>;
  const [recentPositionHistory, setRecentPositionHistory] =
    useState<RecentPositionHistory>([]);

  // snap 애니메이션을 위한 상태들
  const [snapStartedAt, setSnapStartedAt] = useState(0); // snap 시작 시간
  const [snapStartedPosition, setSnapStartedPosition] = useState(0); // snap이 시작된 지점
  const [snapTargetPosition, setSnapTargetPosition] = useState(0); // snap 목표 지점

  const handleTouchMove: TouchEventHandler = (event) => {
    const touch = event.touches[0]!;
    setPrevTouch(touch);
    if (!prevTouch) return;

    const diff = (touch.pageY - prevTouch.pageY) / height;
    const position = scrollPosition + diff;
    setScrollPosition(position);
    // 타임스탬프와 함께 기록
    setRecentPositionHistory((prev) =>
      [...prev, { position, timestamp: Date.now() }]
        // 100ms 이내의 touch point만 기록
        .filter(({ timestamp }) => Date.now() - timestamp < 100)
    );
  };

  const handleTouchEnd: TouchEventHandler = () => {
    // 터치 종료. 다음 터치 입력에서는 사용하지 않으므로 삭제 처리
    setPrevTouch(null);
    setRecentPositionHistory([]);

    setSnapStartedAt(Date.now());
    setSnapStartedPosition(scrollPosition);

    // 빠르게 스와이프하였는지?
    if (recentPositionHistory[0] && recentPositionHistory[0].position) {
      const fastSwipeDistance =
        recentPositionHistory[0].position - scrollPosition;
      if (Math.abs(fastSwipeDistance) > 0.03) {
        setSnapTargetPosition(
          Math.round(scrollPosition) + (fastSwipeDistance > 0 ? -1 : 1)
        );
        return;
      }
    }

    // 가까운 요소로 이동
    setSnapTargetPosition(Math.round(scrollPosition));
  };

  // snap 중인 경우 애니메이션 처리
  if (Date.now() - snapStartedAt < 300) {
    requestAnimationFrame(() => {
      const progress = (Date.now() - snapStartedAt) / 300;
      const position =
        snapStartedPosition +
        (snapTargetPosition - snapStartedPosition) * easeOutExpo(progress);
      setScrollPosition(position);
    });
  }
  // snap 종료 처리
  else if (snapStartedAt !== 0) {
    setSnapStartedAt(0);
    setScrollPosition(snapTargetPosition);
  }

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
                <Search isloading="">
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
                  transform: `translateY(${scrollPosition * height}px)`,
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
                      <FeedItem feed={feed} isloading="" />
                    </div>
                  ))}
              </div>
            </div>
          ) : null}
        </>
      );
    case "loading":
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
                <Search isloading="">
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
                  transform: `translateY(${scrollPosition * height}px)`,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    scrollSnapAlign: "start",
                    position: "relative",
                  }}
                >
                  <FeedItem
                    feed={null}
                    isloading={feeds.state === "loading" ? "true" : ""}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </>
      );
    case "hasError":
      return feeds.contents;
  }
};

export default Feed;
