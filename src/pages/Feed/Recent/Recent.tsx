import Avatar from "@/components/Avatar";
import {
  FeedHeaderWrapper,
  FeedProfile,
  FeedProfileName,
} from "../Header/FeedHeader.styled";
import Typography from "@/foundations/Typography";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/atoms/user";
import { FeedLocation, FeedLocationName, RecentWrapper } from "./Recent.styled";
import Icon from "@/foundations/Icon";

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
        <FeedLocation>
          <Icon
            icon="locationOn"
            width="12"
            height="12"
            minX="0"
            minY="0"
            viewBoxWidth="12"
            viewBoxHeight="12"
          />
          <FeedLocationName>
            <Typography text="사하라 사막" type="body2" />
          </FeedLocationName>
        </FeedLocation>
      </FeedHeaderWrapper>
    </RecentWrapper>
  );
};

export default Recent;
