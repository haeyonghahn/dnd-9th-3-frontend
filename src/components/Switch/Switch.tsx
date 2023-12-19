import { useState } from "react";
import { Container, Handle } from "./Switch.styled";
import { isDarkAtom } from "@/atoms/theme";
import { useSetRecoilState } from "recoil";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
    setDarkAtom((prev) => !prev);
  };

  return (
    <Container data-ison={isOn} onClick={toggleSwitch}>
      <Handle layout transition={spring} />
    </Container>
  );
};

export default Switch;
