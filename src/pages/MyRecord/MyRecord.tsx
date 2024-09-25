import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { useRouter } from "@/hooks/useRouter";
import {
  Header,
  LevelTitle,
  LevelTitleText,
  LevelWrapper,
  Profile,
  ProfileInfo,
  ProfileName,
  SettingImage,
  Title,
  Wrapper,
} from "./MyRecord.styled";
import { colors } from "@/_shared/colors";
import { fontSize } from "@/_shared/typography";
import Typography from "@/foundations/Typography";
import { useRecoilValue } from "recoil";
import Tab from "@/components/Tab/Tab";
import BookMark from "../BookMark";
import MyTimeLine from "../MyTimeLine";

const MyRecord = () => {
  const user = useRecoilValue(userAtom);
  const { routeTo } = useRouter();

  return (
    <Wrapper>
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
      <Tab
        tabItem={[
          { index: 0, tabTitle: "타임라인", tabItem: <MyTimeLine /> },
          { index: 1, tabTitle: "저장", tabItem: <BookMark /> },
        ]}
      />
    </Wrapper>
  );
};

export default MyRecord;
