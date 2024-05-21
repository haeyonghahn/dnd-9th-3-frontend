import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Typography from "@/foundations/Typography/Typography";
import { useRouter } from "@/hooks/useRouter";
import { Link, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Divider,
  LevelTitle,
  LevelWrapper,
  MyRecordProfile,
  MyRecordProfileButton,
  MyRecordProfileInfo,
  MyRecordProfileName,
  MyRecordWrapper,
  MyRecordWrapperImage,
  MyRecordWrapperTitle,
  Tab,
  TabTitle,
  Tabs,
  TimeLineArrow,
  TimeLineMonth,
  Wrapper,
} from "./MyRecord.styled";
import { useEffect } from "react";

const MyRecord = () => {
  const user = useRecoilValue(userAtom);
  const { currentPath, routeTo } = useRouter();

  useEffect(() => {
    routeTo("/my/record/timeline");
  }, []);

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
          <Tab
            className={
              currentPath === "/my/record/timeline" ||
              currentPath === "/my/record"
                ? "selected"
                : ""
            }
          >
            <Link to="timeline">타임라인</Link>
          </Tab>
          <Tab className={currentPath === "/my/record/save" ? "selected" : ""}>
            <Link to="save">저장</Link>
          </Tab>
        </TabTitle>
        <Divider className="line"></Divider>
        <TimeLineMonth>
          2024.08
          <TimeLineArrow src="/images/vector.svg" />
        </TimeLineMonth>
        <Outlet />
      </Tabs>
    </Wrapper>
  );
};

export default MyRecord;
