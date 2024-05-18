import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button";
import Typography from "@/foundations/Typography/Typography";
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

const MyRecordProfileButton = styled.div``;

const MyRecord = () => {
  return (
    <MyRecordWrapper>
      <MyReocrdAvatar></MyReocrdAvatar>
      <MyRecordProfile>
        <MyRecordProfileInfo>
          <Avatar size="large" theme="isDark"></Avatar>
          <Typography text="쥐렁이" type="h3" />
        </MyRecordProfileInfo>
        <MyRecordProfileButton>
          <Button text="프로필 수정" width=""></Button>
        </MyRecordProfileButton>
      </MyRecordProfile>
    </MyRecordWrapper>
  );
};

export default MyRecord;
