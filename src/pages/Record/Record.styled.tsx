import { colors } from "@/_shared/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
`;

export const Indicator = styled(motion.div)`
  height: 4px;
  width: 100%;
  margin-top: 20px;
  background-color: ${colors.green50};
`;

export const FileWrapper = styled.div`
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
  cursor: pointer;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    height: 10px;
  }
`;

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const InputBox = styled.div`
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const Description = styled.div`
  margin-bottom: 3%;
`;

export const StateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StateMessageBox = styled.div`
  color: ${colors.gray500};
  font-size: small;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const ButtonBox = styled.div`
  margin-top: 10%;
  margin-bottom: 3%;
`;
