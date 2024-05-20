import { colors } from "@/_shared/colors";
import { fontWeight } from "@/_shared/typography";
import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button";
import Typography from "@/foundations/Typography/Typography";
import { useRouter } from "@/hooks/useRouter";
import { Link, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MyRecordWrapper = styled.div`
  margin: 10% 0px 10% 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${fontWeight.semiBold};
  font-size: 18px;
`;

const MyRecordWrapperTitle = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 30px;
`;

const MyRecordWrapperImage = styled.div`
  float: right;
  margin-right: 10px;
`;

const LevelWrapper = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LevelTitle = styled.div`
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;
  margin: 20px 0px;
  width: fit-content;
  font-weight: 600;
  font-size: 12px;
`;

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

const Tabs = styled.div`
  height: 30%;
  background-color: #282932;
  border-radius: 24px 24px 0px 0px;
  overflow: auto;
`;

const TabTitle = styled.div`
  display: flex;
  color: #75777b;
`;

const Tab = styled.div`
  margin: 20px;
  font-weight: 600;
  font-size: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #3e4049;
`;

const TimeLineMonth = styled.div`
  margin: 20px;
  font-weight: 600;
  font-size: 18px;
`;

const TimeLineArrow = styled.img`
  margin-left: 10px;
`;

const TimeLineDescription = styled.div`
  text-align: center;
  color: #75777b;
  font-weight: 600;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  margin: 20px;
  text-align: center;
`;

const MyRecord = () => {
  const user = useRecoilValue(userAtom);
  const { currentPath } = useRouter();
  const tabClickHandler = (path: string) => {
    console.log(path);
  };
  return (
    <Wrapper>
      <MyRecordWrapper>
        <MyRecordWrapperTitle>
          <span>마이 굳잉</span>
        </MyRecordWrapperTitle>
        <MyRecordWrapperImage>
          <img src="/images/settings.svg" />
        </MyRecordWrapperImage>
      </MyRecordWrapper>
      <LevelWrapper>
        <img src="/images/level.svg" />
        <LevelTitle>LV1. 초보 낭만러</LevelTitle>
      </LevelWrapper>
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
      <Tabs>
        <TabTitle>
          <Tab>
            <Link to="timeline">타임라인</Link>
          </Tab>
          <Tab>
            <Link to="save">저장</Link>
          </Tab>
        </TabTitle>
        <Divider className="line"></Divider>
        <TimeLineMonth>
          2023.08
          <TimeLineArrow src="/images/vector.svg" />
        </TimeLineMonth>
        <TimeLineDescription>
          이번달의 첫번째 굳이데이 기록을 남겨보세요.
        </TimeLineDescription>
        <ButtonWrapper>
          <Button width="100%" text="기록하기"></Button>
        </ButtonWrapper>
      </Tabs>
      <Outlet />
    </Wrapper>
  );
};

export default MyRecord;
