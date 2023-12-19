import { fontWeight } from "@/_shared/typography";
import { social } from "@/_shared/icons";
import IconSocial from "@/foundations/IconSocial/IconSocial";
import styled from "styled-components";
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from "@/api/const";
import { Link } from "react-router-dom";

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoginTitle = styled.h1`
  text-align: center;
`;

const LoginDescription = styled.p`
  text-align: center;
  font-weight: ${fontWeight.regular};
  color: #a4a6aa;
`;

const Login = () => {
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  return (
    <div className="non-logged-in-body">
      <LoginTitle>Gooding</LoginTitle>
      <LoginDescription>
        로그인하고 나만의 굳이데이 기록을 남겨보세요!
      </LoginDescription>
      <ButtonBox>
        <IconSocial icon={social.google} />
        <Link to={kakaoUrl}>
          <IconSocial icon={social.kakao} />
        </Link>
      </ButtonBox>
    </div>
  );
};

export default Login;
