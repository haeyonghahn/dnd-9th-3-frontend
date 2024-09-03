import Avatar from "@/components/Avatar";
import {
  FeedHeaderWrapper,
  FeedProfile,
  FeedProfileName,
} from "../Header/FeedHeader.styled";
import Typography from "@/foundations/Typography";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/atoms/user";

const Recent = () => {
  const user = useRecoilValue(userAtom);
  return (
    <>
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
    </>
  );
};

export default Recent;
