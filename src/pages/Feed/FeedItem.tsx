import Avatar from "@/components/Avatar";
import Typography from "@/foundations/Typography";
import Icon from "@/foundations/Icon";
import { memo, useCallback, useEffect, useState } from "react";
import { colors } from "@/_shared/colors";
import { IFeed } from "@/types/feed";
import {
  BookMark,
  Container,
  Contents,
  Description,
  DescriptWrapper,
  Ellipse,
  Image,
  Place,
  PlaceName,
  PlaceWrapper,
  Profile,
  ProfileName,
  Title,
  Wrapper,
} from "./FeedItem.styled";
import Video from "@/components/Video";
import { getBookMark, saveBookMark } from "@/api/record";

interface FeedItemProps {
  feed: IFeed | null;
  isloading: string;
}

const FeedItem: React.FC<FeedItemProps> = memo(({ feed, isloading }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [bookmarkYn, setBookMarkYn] = useState("");
  const handleImage = (index: number) => {
    setImageIndex(index);
  };
  const handleBookMark = async (recordNo: string) => {
    const bookMarkRes = await saveBookMark(recordNo);
    setBookMarkYn(bookMarkRes);
  };
  const fetchBookMark = useCallback(async (recordNo: string) => {
    const bookMarkRes = await getBookMark(recordNo);
    setBookMarkYn(bookMarkRes);
  }, []);

  useEffect(() => {
    if (feed) {
      fetchBookMark(feed.recordNumber);
    }
  }, []);
  return (
    <>
      <Container>
        <Wrapper>
          <Profile>
            <Avatar
              size="large"
              theme="isDark"
              src={feed ? feed.imageUrl : ""}
              isloading={isloading}
            ></Avatar>
            <ProfileName>
              <Typography text={feed ? feed.name : ""} type="body2" />
            </ProfileName>
          </Profile>
        </Wrapper>

        <Wrapper>
          <Contents>
            <PlaceWrapper>
              <Place isloading={isloading}>
                {feed ? (
                  <>
                    <Icon
                      icon="locationOn"
                      width="12"
                      height="12"
                      minX="0"
                      minY="0"
                      viewBoxWidth="12"
                      viewBoxHeight="12"
                      fill={colors.white}
                    />
                    <PlaceName>
                      <Typography
                        text={feed ? feed.placeTitle : ""}
                        type="body2"
                      />
                    </PlaceName>
                  </>
                ) : null}
              </Place>
              <BookMark
                onClick={() => handleBookMark(feed ? feed.recordNumber : "")}
              >
                <Icon
                  icon="bookmark"
                  fill={bookmarkYn === "Y" ? "white" : "none"}
                />
              </BookMark>
            </PlaceWrapper>

            <DescriptWrapper>
              <Title isloading={isloading}>
                <Typography text={feed ? feed.title : ""} type="h3" />
              </Title>
              <Description isloading={isloading}>
                <Typography text={feed ? feed.description : ""} type="body1" />
              </Description>
              {feed ? (
                <Ellipse>
                  {feed.images.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => handleImage(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <Icon
                        icon="ellipse"
                        viewBoxWidth="10"
                        viewBoxHeight="10"
                        width="10"
                        height="10"
                        fill={imageIndex === index ? "#FFFFFF" : colors.gray600}
                      />
                    </span>
                  ))}
                </Ellipse>
              ) : null}
            </DescriptWrapper>
          </Contents>
        </Wrapper>
      </Container>
      {feed ? (
        feed.images[imageIndex].type.startsWith("video") ? (
          <Video src={feed.images[imageIndex].path} />
        ) : (
          <Image src={feed.images[imageIndex].path} />
        )
      ) : null}
    </>
  );
});

export default FeedItem;
