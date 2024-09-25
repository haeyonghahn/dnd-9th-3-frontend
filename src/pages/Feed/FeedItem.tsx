import Avatar from "@/components/Avatar";
import Typography from "@/foundations/Typography";
import Icon from "@/foundations/Icon";
import { memo, useState } from "react";
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

interface FeedItemProps {
  feed: IFeed;
}

const FeedItem: React.FC<FeedItemProps> = memo(({ feed }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleImage = (index: number) => {
    setImageIndex(index);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Profile>
            <Avatar size="large" theme="isDark" src={feed.imageUrl}></Avatar>
            <ProfileName>
              <Typography text={feed.name} type="body2" />
            </ProfileName>
          </Profile>
        </Wrapper>

        <Wrapper>
          <Contents>
            <PlaceWrapper>
              <Place>
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
                  <Typography text={feed.placeTitle} type="body2" />
                </PlaceName>
              </Place>
              <BookMark>
                <Icon icon="bookmark" />
              </BookMark>
            </PlaceWrapper>

            <DescriptWrapper>
              <Title>
                <Typography text={feed.title} type="h3" />
              </Title>
              <Description>
                <Typography text={feed.description} type="body1" />
              </Description>
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
            </DescriptWrapper>
          </Contents>
        </Wrapper>
      </Container>
      {feed.images[imageIndex].type.startsWith("video") ? (
        <Video src={feed.images[imageIndex].path} />
      ) : (
        <Image src={feed.images[imageIndex].path} />
      )}
    </>
  );
});

export default FeedItem;
