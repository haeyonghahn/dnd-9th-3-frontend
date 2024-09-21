import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { useRouter } from "@/hooks/useRouter";
import { Link, Outlet } from "react-router-dom";
import {
  Divider,
  Header,
  LevelTitle,
  LevelTitleText,
  LevelWrapper,
  Profile,
  ProfileInfo,
  ProfileName,
  SettingImage,
  Tab,
  TabIndicator,
  TabTitle,
  Tabs,
  Title,
  Wrapper,
} from "./MyRecord.styled";
import { useEffect, useState } from "react";
import { colors } from "@/_shared/colors";
import { fontSize } from "@/_shared/typography";
import Typography from "@/foundations/Typography";
import { useRecoilValue } from "recoil";
import { useAnimation } from "framer-motion";

const MyRecord = () => {
  const user = useRecoilValue(userAtom);
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
      <Header>
        <Title>
          <span>마이 굳잉</span>
        </Title>
        <SettingImage onClick={() => routeTo("/setting")}>
          <img src="/images/settings.svg" />
        </SettingImage>
      </Header>
      <LevelWrapper>
        <img src="/images/level.svg" />
        <LevelTitle>
          <LevelTitleText>LV1. 초보 낭만러</LevelTitleText>
        </LevelTitle>
      </LevelWrapper>
      <Profile>
        <ProfileInfo>
          <Avatar
            size="large"
            theme="isDark"
            src={user ? user.imageUrl : ""}
          ></Avatar>
          <ProfileName>
            <Typography text={user ? user.name : ""} type="h3" />
          </ProfileName>
        </ProfileInfo>
        <div>
          <Button
            text="프로필 수정"
            width="100%"
            fontSize={fontSize.body1}
            color={colors.white}
            bordercolor="#3E4049"
            backgroundcolor="#3E4049"
            none="true"
          ></Button>
        </div>
      </Profile>
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
    </Wrapper>
  );
};

export default MyRecord;
