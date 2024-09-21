import { useState } from "react";
import { Container, Handle } from "./Switch.styled";

interface SwitchProps {
  width?: string;
  height?: string;
  handleWidth?: string;
  handleHeight?: string;
  padding?: string;
  callback: () => void;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Switch = ({
  width = "90px",
  height = "50px",
  handleWidth = "30px",
  handleHeight = "30px",
  padding = "10px",
  callback,
}: SwitchProps) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
    callback();
  };

  return (
    <Container
      data-ison={isOn}
      width={width}
      height={height}
      padding={padding}
      onClick={toggleSwitch}
    >
      <Handle
        layout
        transition={spring}
        handleWidth={handleWidth}
        handleHeight={handleHeight}
      />
    </Container>
  );
};

export default Switch;
