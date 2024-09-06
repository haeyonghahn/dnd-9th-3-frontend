import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "@/_shared/colors";

interface ISwitchProps {
  width?: string;
  height?: string;
  handleWidth?: string;
  handleHeight?: string;
  padding?: string;
}

export const Container = styled.div<ISwitchProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #3e4049;
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  &[data-isOn="true"] {
    justify-content: flex-end;
    background-color: ${colors.green50};
  }
`;

export const Handle = styled(motion.div)<ISwitchProps>`
  width: ${(props) => props.handleWidth};
  height: ${(props) => props.handleHeight};
  background-color: #ffffff;
  border-radius: 40px;
`;
