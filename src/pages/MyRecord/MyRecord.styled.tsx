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
  margin-left: 50px;
`;

export const MyRecordWrapperImage = styled.div`
  float: right;
  margin-right: 30px;
  cursor: pointer;
`;

export const LevelWrapper = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LevelTitle = styled.div`
  padding: 1px;
  border: 1px solid transparent; /* 기본 border를 투명하게 설정 */
  border-radius: 5px;
  margin: 20px 0px;
  width: fit-content;
  font-weight: 600;
  font-size: 12px;
  background-image: linear-gradient(#1c1d27, #1c1d27),
    /* 내부 배경 */ linear-gradient(to right, #ff59d0, #3cefa3); /* 그라데이션 색상 */
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const LevelTitleText = styled.div`
  padding: 5px;
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
  position: relative;
  overflow: auto;
`;

export const TabTitle = styled.div`
  display: flex;
  color: #75777b;
`;

export const Tab = styled.div`
  margin: 20px 20px 0px 20px;
  font-weight: 600;
  font-size: 16px;
  &.selected {
    color: ${colors.white};
  }
`;

export const TabIndicator = styled.div`
  height: 4px;
  width: 100%;
  margin-top: 20px;
  &.selected {
    background-color: ${colors.white};
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
  cursor: pointer;
`;

export const TimeLineMonthText = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  color: ${colors.gray500};
  &.selected {
    color: ${colors.green50};
  }
`;

export const TimeLineArrow = styled.img`
  margin-left: 10px;
`;
