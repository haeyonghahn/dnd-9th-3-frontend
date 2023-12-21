import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "@/_shared/colors";

export const Container = styled.div`
  width: 90px;
  height: 50px;
  background-color: #3e4049;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  &[data-isOn="true"] {
    justify-content: flex-end;
    background-color: ${colors.green50};
  }
`;

export const Handle = styled(motion.div)`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 40px;
`;
