import { colors } from "@/_shared/colors";
import { fontWeight } from "@/_shared/typography";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IPositionProps {
  position: string;
}

interface IVariantsProps {
  initial: IPositionProps;
  animate: IPositionProps;
  exit: IPositionProps;
}

interface ITabsProps {
  variants?: IVariantsProps;
  initial?: string;
  animate?: string;
  exit?: string;
  layoutid?: string | null;
  style: IPositionProps;
}

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
`;

export const MyRecordWrapper = styled.div`
  margin: 10% 0px 10% 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${fontWeight.semiBold};
  font-size: 18px;
`;

export const MyRecordWrapperTitle = styled.div`
  flex: 1;
  text-align: center;
  margin-left: 30px;
`;

export const MyRecordWrapperImage = styled.div`
  float: right;
  margin-right: 10px;
`;

export const LevelWrapper = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LevelTitle = styled.div`
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;
  margin: 20px 0px;
  width: fit-content;
  font-weight: 600;
  font-size: 12px;
`;

export const MyRecordProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const MyRecordProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const MyRecordProfileName = styled.div`
  padding-left: 10px;
`;

export const MyRecordProfileButton = styled.div``;

export const MyRecordContents = styled.div``;

export const Tabs = styled(motion.div)<ITabsProps>`
  height: 100%;
  width: 100%;
  background-color: #282932;
  border-radius: 24px 24px 0px 0px;
  overflow: auto;
`;

export const TabTitle = styled.div`
  display: flex;
  color: #75777b;
`;

export const Tab = styled.div`
  margin: 20px;
  font-weight: 600;
  font-size: 16px;
  &.selected {
    color: ${colors.white};
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #3e4049;
`;

export const TimeLineMonth = styled.div`
  margin: 20px;
  font-weight: 600;
  font-size: 18px;
`;

export const TimeLineArrow = styled.img`
  margin-left: 10px;
`;
