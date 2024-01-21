import { isDarkAtom } from "@/atoms/theme";
import { interestAtom, userAtom } from "@/atoms/user";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "@/hooks/useRouter";
import CardGrid from "@/layout/OnboardCardGrid/OnboardCardGrid";
import { InterestElement, User } from "@/types/user";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

type Status = "default" | "error" | "success";

const Onboarding = () => {
  const { routeTo } = useRouter();
  const isDark = useRecoilValue(isDarkAtom);
  const interests = useRecoilValue<InterestElement[]>(interestAtom);
  const [userProfile, setUserProfile] = useRecoilState<User | null>(userAtom);
  const [status, setStatus] = useState<Status>("default");
  const [errorMessage, setErrorMessage] = useState("");
  const theme: string = isDark ? "dark" : "light";
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (0 < value.length && value.length > 15) {
      setStatus("error");
      setErrorMessage("15자 이내로 입력해주세요.");
    } else {
      setStatus("default");
      setErrorMessage("");
    }
    const newUserProfile = userProfile;
    setUserProfile({
      id: newUserProfile?.id,
      name: value,
      password: newUserProfile?.password,
      emailSet: newUserProfile?.emailSet,
      interestSet: interests,
    });
  };
  const handleClick = () => {
    if (userProfile) {
      if (
        0 < userProfile.name?.length &&
        userProfile.name?.length < 15 &&
        interests.length >= 3
      ) {
        const newUserProfile = userProfile;
        setUserProfile({
          id: newUserProfile?.id,
          name: newUserProfile.name,
          password: newUserProfile?.password,
          emailSet: newUserProfile?.emailSet,
          interestSet: interests,
        });
        routeTo("/welcome");
      }
    }
  };
  return (
    <>
      <div className="non-logged-in-body">
        <h3>
          굳잉에서 사용할 닉네임과 관심있는 활동 카테고리를 <br></br>
          선택해주세요.
        </h3>
        <p>관심있는 카테고리를 3가지 이상 선택해주세요.</p>
        <Input
          status={status}
          message={errorMessage}
          placeholder="닉네임 입력 (15자 이내)"
          theme={theme}
          handleChange={(event) => handleChange(event)}
          value={userProfile?.name}
        ></Input>
        <CardGridWrapper>
          <CardGrid
            data={[
              {
                interestCode: "1",
                icon: "shopping",
                theme: `${theme}`,
                title: "쇼핑",
              },
              {
                interestCode: "2",
                icon: "travel",
                theme: `${theme}`,
                title: "여행",
              },
              {
                interestCode: "3",
                icon: "delicacies",
                theme: `${theme}`,
                title: "미식",
              },
              {
                interestCode: "4",
                icon: "reading",
                theme: `${theme}`,
                title: "독서",
              },
              {
                interestCode: "5",
                icon: "cooking",
                theme: `${theme}`,
                title: "요리",
              },
              {
                interestCode: "6",
                icon: "culture",
                theme: `${theme}`,
                title: "문화",
              },
              {
                interestCode: "7",
                icon: "sports",
                theme: `${theme}`,
                title: "스포츠",
              },
              {
                interestCode: "8",
                icon: "hobby",
                theme: `${theme}`,
                title: "취미",
              },
              {
                interestCode: "9",
                icon: "study",
                theme: `${theme}`,
                title: "학업",
              },
            ]}
          />
        </CardGridWrapper>
        <ButtonBox>
          <Button
            theme={isDark ? "dark" : "light"}
            text="다음"
            width="-webkit-fill-available"
            onClick={() => handleClick()}
          />
        </ButtonBox>
      </div>
    </>
  );
};

const CardGridWrapper = styled.div`
  margin-top: 10%;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 10%;
`;

export default Onboarding;
