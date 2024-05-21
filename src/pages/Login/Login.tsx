import { social } from "@/_shared/icons";
import IconSocial from "@/foundations/IconSocial/IconSocial";
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from "@/api/const";
import { Link } from "react-router-dom";
import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";
import { useRouter } from "@/hooks/useRouter";
import { useEffect } from "react";
import Spinner from "@/components/Spinner/Spinner";
import {
  ButtonBox,
  LoginContent,
  LoginDescription,
  LoginTitle,
} from "./Login.styled";

const Login = () => {
  const { routeTo } = useRouter();
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    if (getAccessTokenFromLocalStorage()) {
      routeTo("/onboarding");
    }
  }, []);

  return (
    <>
      {getAccessTokenFromLocalStorage() ? (
        <Spinner />
      ) : (
        <div className="non-logged-in-body">
          <LoginContent>
            <LoginTitle>Gooding</LoginTitle>
            <LoginDescription>
              굳잉과 함께 나만의 굳이데이 기록을 남겨보세요!
            </LoginDescription>
          </LoginContent>
          <ButtonBox>
            <IconSocial icon={social.google} />
            <Link to={kakaoUrl}>
              <IconSocial icon={social.kakao} />
            </Link>
          </ButtonBox>
        </div>
      )}
    </>
  );
};

export default Login;
