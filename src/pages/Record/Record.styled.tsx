import { colors } from "@/_shared/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

export const RecordIndicator = styled(motion.div)`
  height: 4px;
  width: 100%;
  margin-top: 20px;
  background-color: ${colors.green50};
`;
