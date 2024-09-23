import { colors } from "@/_shared/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

interface RecordImageWrapperProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

export const RecrodContainer = styled.div`
  overflow: auto;
`;

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

export const RecordImageWrapper = styled.div<RecordImageWrapperProps>`
  width: calc(100% - 20px);
  height: 300px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? colors.errorOpacity200
      : props.isDraggingFromThis
      ? colors.black
      : "transparent"};
  margin-top: 7%;
  margin-left: 20px;
  margin-bottom: 7%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;

  &::-webkit-scrollbar {
    height: 3px;
  }
`;

export const RecordInputBox = styled.div`
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const RecordDescription = styled.div`
  margin-bottom: 3%;
`;

export const RecordStateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RecordStateMessageBox = styled.div`
  color: ${colors.gray500};
  font-size: small;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const RecordButtonBox = styled.div`
  margin-top: 10%;
  margin-bottom: 3%;
`;
