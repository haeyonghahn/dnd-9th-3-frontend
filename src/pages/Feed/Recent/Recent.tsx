import Avatar from "@/components/Avatar";
import {
  FeedHeaderWrapper,
  FeedProfile,
  FeedProfileName,
} from "../Feed.styled";
import Typography from "@/foundations/Typography";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/atoms/user";
import {
  BookMark,
  EllipseWrapper,
  FeedDescription,
  FeedLocation,
  FeedLocationName,
  FeedLocationWrapper,
  FeedTitle,
  RecentWrapper,
} from "./Recent.styled";
import Icon from "@/foundations/Icon";
import { colors } from "@/_shared/colors";

const Recent = () => {
  const user = useRecoilValue(userAtom);
  return (
    <RecentWrapper>
      <FeedHeaderWrapper>
        <FeedProfile>
          <Avatar
            size="large"
            theme="isDark"
            src={user ? user.imageUrl : ""}
          ></Avatar>
          <FeedProfileName>
            <Typography text={user ? user.name : ""} type="body2" />
          </FeedProfileName>
        </FeedProfile>
      </FeedHeaderWrapper>
      <FeedHeaderWrapper>
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
                <Typography text="사하라 사막" type="body2" />
              </FeedLocationName>
            </FeedLocation>
            <BookMark>
              <Icon icon="bookmark" />
            </BookMark>
          </FeedLocationWrapper>
          <FeedTitle>
            <Typography text="나의 첫 굳이데이 기록!" type="h3" />
          </FeedTitle>
          <FeedDescription>
            <Typography
              text="오늘은 예리나랑 나의 첫 굳이데이를 즐겼다! 서울에서는 가"
              type="body1"
            />
          </FeedDescription>
          <EllipseWrapper>
            <Icon
              icon="ellipse"
              viewBoxWidth="10"
              viewBoxHeight="10"
              width="10"
              height="10"
              fill="#FFFFFF"
            />
            <Icon
              icon="ellipse"
              viewBoxWidth="10"
              viewBoxHeight="10"
              width="10"
              height="10"
              fill={colors.gray650}
            />
            <Icon
              icon="ellipse"
              viewBoxWidth="10"
              viewBoxHeight="10"
              width="10"
              height="10"
              fill={colors.gray650}
            />
            <Icon
              icon="ellipse"
              viewBoxWidth="10"
              viewBoxHeight="10"
              width="10"
              height="10"
              fill={colors.gray650}
            />
            <Icon
              icon="ellipse"
              viewBoxWidth="10"
              viewBoxHeight="10"
              width="10"
              height="10"
              fill={colors.gray650}
            />
            <Icon
              icon="ellipse"
              viewBoxWidth="10"
              viewBoxHeight="10"
              width="10"
              height="10"
              fill={colors.gray650}
            />
          </EllipseWrapper>
        </div>
      </FeedHeaderWrapper>
    </RecentWrapper>
  );
};

export default Recent;
