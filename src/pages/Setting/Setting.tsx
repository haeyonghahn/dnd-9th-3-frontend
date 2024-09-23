import Typography from "@/foundations/Typography";
import {
  Box,
  Container,
  Content,
  Header,
  HeaderWrapper,
  IconWrapper,
  Indicator,
  SwitchWrapper,
  Title,
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
        <HeaderWrapper>
          <Header>
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
            <Title>
              <Typography text="설정" type="h1" />
            </Title>
          </Header>
          <Indicator />
        </HeaderWrapper>
        <Container>
          <Box>
            <Content>
              <Typography text="내 계정 설정" type="h1" />
              <Icon icon="rightArrow" minY="-7" height="35" width="35" />
            </Content>
          </Box>
          <Box>
            <Content>
              <Typography text="푸쉬 알림" type="h1" />
              <SwitchWrapper>
                <Switch
                  callback={handlePush}
                  width="70px"
                  height="40px"
                  padding="5px"
                />
              </SwitchWrapper>
            </Content>
          </Box>
          <Box>
            <Content>
              <Typography text="서비스 소개" type="h1" />
              <Icon icon="rightArrow" minY="-7" height="35" width="35" />
            </Content>
          </Box>
          <Box>
            <Content>
              <Typography text="개인정보 처리 방침" type="h1" />
              <Icon icon="rightArrow" minY="-7" height="35" width="35" />
            </Content>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Setting;
