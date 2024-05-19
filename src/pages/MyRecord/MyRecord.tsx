import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button";
import Typography from "@/foundations/Typography/Typography";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const MyRecordWrapper = styled.div``;

const MyReocrdAvatar = styled.div``;

const MyRecordProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const MyRecordProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const MyRecordProfileName = styled.div`
  padding-left: 10px;
`;

const MyRecordProfileButton = styled.div``;

const MyRecord = () => {
  const user = useRecoilValue(userAtom);
  return (
    <MyRecordWrapper>
      <MyReocrdAvatar></MyReocrdAvatar>
      <MyRecordProfile>
        <MyRecordProfileInfo>
          <Avatar
            size="large"
            theme="isDark"
            src={user ? user.imageUrl : ""}
          ></Avatar>
          <MyRecordProfileName>
            <Typography text={user ? user.name : ""} type="h3" />
          </MyRecordProfileName>
        </MyRecordProfileInfo>
        <MyRecordProfileButton>
          <Button text="프로필 수정" width=""></Button>
        </MyRecordProfileButton>
      </MyRecordProfile>
    </MyRecordWrapper>
  );
};

export default MyRecord;
