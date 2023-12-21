import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 90vh;
  align-content: center;
`;

export const Svg = styled(motion.svg)`
  display: block;
  margin: 0 auto;
`;
