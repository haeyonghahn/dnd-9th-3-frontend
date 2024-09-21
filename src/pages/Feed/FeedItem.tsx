import Avatar from "@/components/Avatar";
import Typography from "@/foundations/Typography";
import Icon from "@/foundations/Icon";
import { memo, useState } from "react";
import { colors } from "@/_shared/colors";
import { IFeed } from "@/types/feed";
import {
  BookMark,
  EllipseWrapper,
  FeedBottomWrapper,
  FeedContentWrapper,
  FeedDescription,
  FeedImage,
  FeedItemWrapper,
  FeedLocation,
  FeedLocationName,
  FeedLocationWrapper,
  FeedProfile,
  FeedProfileName,
  FeedTitle,
} from "./FeedItem.styled";

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
      <FeedContentWrapper>
        <FeedItemWrapper>
          <FeedProfile>
            <Avatar size="large" theme="isDark" src={feed.imageUrl}></Avatar>
            <FeedProfileName>
              <Typography text={feed.name} type="body2" />
            </FeedProfileName>
          </FeedProfile>
        </FeedItemWrapper>

        <FeedItemWrapper>
          <div style={{ width: "100%" }}>
            <FeedLocationWrapper>
              <FeedLocation>
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
                <FeedLocationName>
                  <Typography text={feed.placeTitle} type="body2" />
                </FeedLocationName>
              </FeedLocation>
              <BookMark>
                <Icon icon="bookmark" />
              </BookMark>
            </FeedLocationWrapper>

            <FeedBottomWrapper>
              <FeedTitle>
                <Typography text={feed.title} type="h3" />
              </FeedTitle>
              <FeedDescription>
                <Typography text={feed.description} type="body1" />
              </FeedDescription>
              <EllipseWrapper>
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
              </EllipseWrapper>
            </FeedBottomWrapper>
          </div>
        </FeedItemWrapper>
      </FeedContentWrapper>
      <FeedImage src={feed.images[imageIndex].path} />
    </>
  );
});

export default FeedItem;
