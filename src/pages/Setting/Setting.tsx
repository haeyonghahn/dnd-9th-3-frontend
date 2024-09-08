import Typography from "@/foundations/Typography";
import {
  SettingBox,
  SettingContent,
  SettingHeaderWrapper,
  SettingIndicator,
  SettingWrapper,
} from "./Setting.styled";
import Icon from "@/foundations/Icon";
import Switch from "@/components/Switch";

const Setting = () => {
  return (
    <>
      <div>
        <SettingHeaderWrapper>
          <Typography text="설정" type="h1" />
          <SettingIndicator />
        </SettingHeaderWrapper>
        <SettingWrapper>
          <SettingBox>
            <SettingContent>
              <Typography text="내 계정 설정" type="h1" />
              <div style={{ paddingTop: "10px" }}>
                <Icon icon="rightArrow" height="35" width="35" />
              </div>
            </SettingContent>
          </SettingBox>
          <SettingBox>
            <SettingContent>
              <Typography text="푸쉬 알림" type="h1" />
              <div style={{ paddingRight: "20px" }}>
                <Switch width="70px" height="40px" padding="5px" />
              </div>
            </SettingContent>
          </SettingBox>
          <SettingBox>
            <SettingContent>
              <Typography text="서비스 소개" type="h1" />
              <div style={{ paddingTop: "10px" }}>
                <Icon icon="rightArrow" height="35" width="35" />
              </div>
            </SettingContent>
          </SettingBox>
          <SettingBox>
            <SettingContent>
              <Typography text="개인정보 처리 방침" type="h1" />
              <div style={{ paddingTop: "10px" }}>
                <Icon icon="rightArrow" height="35" width="35" />
              </div>
            </SettingContent>
          </SettingBox>
        </SettingWrapper>
      </div>
    </>
  );
};

export default Setting;
