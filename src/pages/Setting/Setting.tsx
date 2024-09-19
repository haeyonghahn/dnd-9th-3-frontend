import Typography from "@/foundations/Typography";
import {
  IconWrapper,
  SettingBox,
  SettingContent,
  SettingHeader,
  SettingHeaderWrapper,
  SettingIndicator,
  SettingWrapper,
  TitleWrapper,
} from "./Setting.styled";
import Icon from "@/foundations/Icon";
import Switch from "@/components/Switch";
import { useRouter } from "@/hooks/useRouter";

const Setting = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.goBack();
  };
  const handlePush = () => {};
  return (
    <>
      <div>
        <SettingHeaderWrapper>
          <SettingHeader>
            <IconWrapper>
              <Icon
                icon="leftArrow"
                minX="0"
                minY="-5"
                viewBoxHeight="18"
                viewBoxWidth="18"
                width="30"
                height="35"
                onClick={handleGoBack}
              />
            </IconWrapper>
            <TitleWrapper>
              <Typography text="설정" type="h1" />
            </TitleWrapper>
          </SettingHeader>
          <SettingIndicator />
        </SettingHeaderWrapper>
        <SettingWrapper>
          <SettingBox>
            <SettingContent>
              <Typography text="내 계정 설정" type="h1" />
              <Icon icon="rightArrow" minY="-7" height="35" width="35" />
            </SettingContent>
          </SettingBox>
          <SettingBox>
            <SettingContent>
              <Typography text="푸쉬 알림" type="h1" />
              <div style={{ paddingRight: "20px" }}>
                <Switch
                  callback={handlePush}
                  width="70px"
                  height="40px"
                  padding="5px"
                />
              </div>
            </SettingContent>
          </SettingBox>
          <SettingBox>
            <SettingContent>
              <Typography text="서비스 소개" type="h1" />
              <Icon icon="rightArrow" minY="-7" height="35" width="35" />
            </SettingContent>
          </SettingBox>
          <SettingBox>
            <SettingContent>
              <Typography text="개인정보 처리 방침" type="h1" />
              <Icon icon="rightArrow" minY="-7" height="35" width="35" />
            </SettingContent>
          </SettingBox>
        </SettingWrapper>
      </div>
    </>
  );
};

export default Setting;
