import Logo from "@/foundations/Logo/Logo";
import styled from "styled-components";
import { fontSize, fontWeight } from "@/_shared/typography";
import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";
import Button from "@/components/Button";
import { useRouter } from "@/hooks/useRouter";

const HomeTitle = styled.h1`
  text-align: center;
`;

const HomeDescription = styled.p`
  font-size: ${fontSize.body1};
  font-weight: ${fontWeight.regular};
`;

const Home = () => {
  const { routeTo } = useRouter();

  return (
    <div className="non-logged-in-body">
      <Logo />
      <HomeTitle>Gooding</HomeTitle>
      <HomeDescription>
        바쁜 일상을 보내다 보면 때로는 고된 일상에서 벗어나 나를 위한 하루를
        보내고 싶은 적 있지 않으셨나요?
        <br />
        굳잉은 ‘굳이데이'를 통해 바쁜 일상 속 나를 위한 낭만적인 날을 기록하고
        공유할 수 있는 서비스입니다. 굳잉을 통해 나만의 굳이데이 기록을
        남겨보세요!
      </HomeDescription>
      <div className="center">
        {getAccessTokenFromLocalStorage() ? (
          <Button
            width="100%"
            onClick={() => routeTo("/my/record/timeline")}
            text="페이지로 이동"
          />
        ) : (
          <Button
            width="100%"
            onClick={() => routeTo("/login")}
            text="로그인 하러 가기"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
