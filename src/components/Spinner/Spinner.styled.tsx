import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

export const Svg = styled(motion.svg)`
  display: block;
  margin: 0 auto;
`;
