import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
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
  TimeLineMonthText,
  Wrapper,
} from "./MyRecord.styled";
import { useEffect, useState } from "react";
import { colors } from "@/_shared/colors";
import { fontSize } from "@/_shared/typography";
import Typography from "@/foundations/Typography";
import { useRecoilValue } from "recoil";
import PopUp from "@/components/PopUp";
import {
  chooseTimeLineMonthAtom,
  deleteRecordPopUpOverAtom,
} from "@/atoms/popup";
import { useAnimation } from "framer-motion";

const MyRecord = () => {
  const user = useRecoilValue(userAtom);
  const isDeleteRecord = useRecoilValue(deleteRecordPopUpOverAtom);
  const timeLineMonth = useRecoilValue(chooseTimeLineMonthAtom);
  const { currentPath, routeTo } = useRouter();
  const navAnimation = useAnimation();
  const [mouseDownClientY, setMouseDownClientY] = useState(0);
  const [mouseUpClientY, setMouseUpClientY] = useState(0);
  const navVariants = {
    top: {
      position: "absolute",
    },
    bottom: {
      position: "",
    },
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientY(e.clientY);
  };
  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseUpClientY(e.clientY);
  };

  useEffect(() => {
    routeTo("/my/record/timeline");
    if (mouseDownClientY - mouseUpClientY > 0) {
      navAnimation.start("top");
    } else if (mouseDownClientY - mouseUpClientY < 0) {
      navAnimation.start("bottom");
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
          <Button
            text="프로필 수정"
            width="100%"
            fontSize={fontSize.body1}
            color={colors.white}
            bordercolor="#3E4049"
            backgroundcolor="#3E4049"
            none="true"
          ></Button>
        </MyRecordProfileButton>
      </MyRecordProfile>
      <Tabs variants={navVariants} animate={navAnimation} initial={"bottom"}>
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
            {currentPath === "/my/record/timeline" && (
              <TabIndicator layoutId="tabIndicator" />
            )}
          </Tab>
          <Tab className={currentPath === "/my/record/save" ? "selected" : ""}>
            <Link to="save">저장</Link>
            {currentPath === "/my/record/save" && (
              <TabIndicator layoutId="tabIndicator" />
            )}
          </Tab>
        </TabTitle>
        <Divider className="line"></Divider>
        <Outlet />
      </Tabs>
      {timeLineMonth ? (
        <PopUp
          state={chooseTimeLineMonthAtom}
          height="40%"
          children={
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>
              <div
                style={{
                  marginTop: "10%",
                  textAlign: "left",
                }}
              >
                <Typography text="월 선택하기" type="h2" />
              </div>
              <TimeLineMonthText className="selected">
                <Typography text="2023.08" type="h2" />
              </TimeLineMonthText>
              <TimeLineMonthText>
                <Typography text="2023.07" type="h2" />
              </TimeLineMonthText>
              <div>
                <Button width="100%" text="선택 완료" />
              </div>
            </div>
          }
        />
      ) : null}
      {isDeleteRecord ? (
        <PopUp
          state={deleteRecordPopUpOverAtom}
          height="40%"
          children={
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>
              <div
                style={{
                  marginBottom: "7%",
                  marginTop: "10%",
                  textAlign: "left",
                }}
              >
                <Typography text="삭제하시겠습니까?" type="h2" />
                <Typography
                  text="삭제된 이미지와 글은 복구가 불가능합니다."
                  type="h2"
                />
              </div>
              <div>
                <Button
                  width="100%"
                  text="삭제하기"
                  color={colors.white}
                  bordercolor={colors.inputTextClor}
                  backgroundcolor={colors.gray850}
                  none="true"
                />
              </div>
            </div>
          }
        />
      ) : null}
    </Wrapper>
  );
};

export default MyRecord;
