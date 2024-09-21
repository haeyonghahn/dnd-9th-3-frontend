import { isDarkAtom } from "@/atoms/theme";
import { interestAtom, userAtom } from "@/atoms/user";
import Button from "@/components/Button";
import Input from "@/components/Input";
import OnboardCardGrid from "@/components/OnboardCardGrid";
import { useRouter } from "@/hooks/useRouter";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  ButtonWarpper,
  CardGridWrapper,
  OnboardingCategory,
  OnboardingDescription,
  OnboardingHeader,
} from "./Onboarding.styled";
import { CATEGORIES } from "@/api/const";
import { IInterest, IUser } from "@/types/user";

type Status = "default" | "error" | "success";

const Onboarding = () => {
  const { routeTo } = useRouter();
  const isDark = useRecoilValue(isDarkAtom);
  const theme: string = isDark ? "dark" : "light";

  const interests = useRecoilValue<IInterest[]>(interestAtom);
  const [userProfile, setUserProfile] = useRecoilState<IUser | null>(userAtom);
  const [status, setStatus] = useState<Status>("default");
  const [errorMessage, setErrorMessage] = useState("");

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
      emails: newUserProfile?.emails,
      interests: interests,
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
          emails: newUserProfile?.emails,
          interests: interests,
        });
        routeTo("/welcome");
      }
    }
  };
  return (
    <>
      <OnboardingDescription>
        <OnboardingHeader>
          굳잉에서 사용할 닉네임과 <br></br> 관심있는 활동 카테고리를
          선택해주세요.
        </OnboardingHeader>
        <OnboardingCategory>
          관심있는 카테고리를 3가지 이상 선택해주세요.
        </OnboardingCategory>
        <Input
          status={status}
          message={errorMessage}
          placeholder="닉네임 입력 (15자 이내)"
          theme={theme}
          handleChange={(event) => handleChange(event)}
          value={userProfile?.name}
        ></Input>
      </OnboardingDescription>
      <CardGridWrapper>
        <OnboardCardGrid
          data={CATEGORIES.filter((category) => category.interestCode !== "10")}
        />
      </CardGridWrapper>
      <ButtonWarpper>
        <Button
          theme={isDark ? "dark" : "light"}
          text="다음"
          width="-webkit-fill-available"
          onClick={() => handleClick()}
        />
      </ButtonWarpper>
    </>
  );
};

export default Onboarding;
