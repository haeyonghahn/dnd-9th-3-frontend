import { colors } from "@/_shared/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ScoreContainer = styled.div`
  overflow: auto;
`;

export const ScoreBack = styled.div`
  margin-left: 5%;
  margin-top: 5%;
`;

export const ScoreIndicator = styled(motion.div)`
  height: 4px;
  width: 100%;
  margin-top: 20px;
  background-color: ${colors.green50};
`;

export const ScoreWrapper = styled.div`
  margin: 5%;
  text-align: center;
`;

export const ScoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const ScoreCardWrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
`;
