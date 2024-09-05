import { colors } from "@/_shared/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

export const RecordIndicator = styled(motion.div)`
  height: 4px;
  width: 100%;
  margin-top: 20px;
  background-color: ${colors.green50};
`;

export const RecordWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const RecordImageWrapper = styled.div`
  width: calc(100% - 20px);
  height: 300px;
  background-color: ${colors.black};
  margin-top: 7%;
  margin-left: 20px;
  margin-bottom: 7%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;

  &::-webkit-scrollbar {
    height: 0px;
  }
`;

export const RecordImage = styled.div`
  height: 100%;
  min-width: 250px;
  border-radius: 4px;
  background-color: ${colors.gray500};
  margin-right: 5px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const RecordInputBox = styled.div`
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const RecordDescription = styled.div``;
