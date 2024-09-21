import Icon from "@/foundations/Icon";
import { Layout, Title } from "./OnboardCard.styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { interestAtom } from "@/atoms/user";
import { isDarkAtom } from "@/atoms/theme";

interface CardProps {
  icon: string;
  interestCode: string;
  interestName: string;
  disabled?: boolean;
}

const OnboardCard = ({
  icon,
  interestCode,
  interestName,
  disabled = false,
}: CardProps) => {
  const isDark = useRecoilValue(isDarkAtom);
  const theme: string = isDark ? "dark" : "light";
  const [interests, setInterests] = useRecoilState(interestAtom);
  const [className, setClassName] = useState<string>("");
  const selectInterest = (
    event: React.MouseEvent<HTMLElement>,
    interestCode: string
  ) => {
    const {
      currentTarget: { classList },
    } = event;
    setInterests((oldInterests) => {
      const targetIndex = oldInterests.findIndex(
        (interest) => interest.interestCode === interestCode
      );
      if (classList.contains("selected")) {
        setClassName("");
        return [
          ...oldInterests.slice(0, targetIndex),
          ...oldInterests.slice(targetIndex + 1),
        ];
      } else {
        setClassName("selected");
        const newInterest = {
          interestCode: interestCode,
          interestName: interestName,
        };
        return [...oldInterests, newInterest];
      }
    });
  };

  useEffect(() => {
    const targetIndex = interests.findIndex(
      (interest) => interest.interestCode === interestCode
    );
    if (targetIndex !== -1) {
      setClassName("selected");
    }
  }, [interests]);

  return (
    <>
      <Layout
        onClick={(event) => selectInterest(event, interestCode)}
        theme={theme}
        className={className}
        disabled={disabled}
      >
        <Icon
          icon={icon}
          minX="10"
          minY="10"
          viewBoxWidth="30"
          viewBoxHeight="30"
        />
        <Title theme={theme}>{interestName}</Title>
      </Layout>
    </>
  );
};

export default OnboardCard;
