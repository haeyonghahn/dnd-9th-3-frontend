import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Typography from "@/foundations/Typography/Typography";
import { useRouter } from "@/hooks/useRouter";
import { Link, Outlet } from "react-router-dom";
import {
  Divider,
  LevelTitle,
  LevelTitleText,
  LevelWrapper,
  MyRecordProfile,
  MyRecordProfileButton,
  MyRecordProfileInfo,
  MyRecordProfileName,
  MyRecordWrapper,
  MyRecordWrapperImage,
  MyRecordWrapperTitle,
  Tab,
  TabIndicator,
  TabTitle,
  Tabs,
  TimeLineArrow,
  TimeLineMonth,
  Wrapper,
} from "./MyRecord.styled";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";

const MyRecord = () => {
  const user = useRecoilValue(userAtom);
  const { currentPath, routeTo } = useRouter();
  const [tabSize, setTabSize] = useState(true);
  const [mouseDownClientY, setMouseDownClientY] = useState(0);
  const [mouseUpClientY, setMouseUpClientY] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientY(e.clientY);
  };
  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseUpClientY(e.clientY);
  };
  const onDoubleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTabSize((prev) => !prev);
  };

  useEffect(() => {
    routeTo("/my/record/timeline");
    if (mouseDownClientY - mouseUpClientY > 0) {
      setTabSize(false);
    } else if (mouseDownClientY - mouseUpClientY < 0) {
      setTabSize(true);
    }
  }, [mouseUpClientY]);

  return (
    <Wrapper onMouseUp={onMouseUp} onMouseDown={onMouseDown}>
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
        <LevelTitle>
          <LevelTitleText>LV1. 초보 낭만러</LevelTitleText>
        </LevelTitle>
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
      <AnimatePresence>
        <Tabs
          onDoubleClick={onDoubleClick}
          style={tabSize ? { position: "" } : { position: "absolute" }}
        >
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
              <TabIndicator
                className={
                  currentPath === "/my/record/timeline" ||
                  currentPath === "/my/record"
                    ? "selected"
                    : ""
                }
              />
            </Tab>
            <Tab
              className={currentPath === "/my/record/save" ? "selected" : ""}
            >
              <Link to="save">저장</Link>
              <TabIndicator
                className={currentPath === "/my/record/save" ? "selected" : ""}
              />
            </Tab>
          </TabTitle>
          <Divider className="line"></Divider>
          <TimeLineMonth>
            2024.08
            <TimeLineArrow src="/images/vector.svg" />
          </TimeLineMonth>
          <Outlet />
        </Tabs>
      </AnimatePresence>
    </Wrapper>
  );
};

export default MyRecord;
