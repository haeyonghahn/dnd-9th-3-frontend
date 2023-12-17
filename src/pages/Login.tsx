import { fontWeight } from "@/_shared/typography";
import { login } from "@/api/login";
import { social } from "@/_shared/icons";
import IconSocial from "@/foundations/IconSocial/IconSocial";
import { useRouter } from "@/hooks/useRouter";
import styled from "styled-components";

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
  const { routeTo } = useRouter();
  // const loginSubmitHandler = async (
  //   event: React.FormEvent<HTMLFormElement>
  // ) => {
  //   const formData = new FormData(event.currentTarget);

  //   const loginResult = await login({
  //     username: formData.get("username") as string,
  //     password: formData.get("password") as string,
  //   });

  //   if (loginResult === "fail") {
  //     alert("로그인 실패");
  //     return;
  //   }
  //   routeTo("/page-a");
  // };

  return (
    <div className="non-logged-in-body">
      <LoginTitle>Gooding</LoginTitle>
      <LoginDescription>
        로그인하고 나만의 굳이데이 기록을 남겨보세요!
      </LoginDescription>
      <ButtonBox>
        <IconSocial icon={social.google} />
        <IconSocial icon={social.kakao} />
      </ButtonBox>
    </div>
  );
};

export default Login;
