import { colors } from "@/_shared/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

interface PositionProps {
  position: string;
}

interface VariantsProps {
  top: PositionProps;
  bottom: PositionProps;
}

interface TabsProps {
  variants?: VariantsProps;
}

interface TabItemProps {
  isactive: string;
}

interface DividerProps {
  activeindex: number;
  width: number;
  left: number;
}

export const Container = styled(motion.div)<TabsProps>`
  height: 100%;
  width: 100%;
  background-color: #282932;
  border-radius: 24px 24px 0px 0px;
  position: relative;
  overflow: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  color: #75777b;
`;

export const TabItem = styled.div<TabItemProps>`
  margin: 20px;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  color: ${(props) => (props.isactive === "true" ? colors.white : null)};
`;

export const DividerWrapper = styled.div`
  height: 2px;
  position: relative;
  background-color: #3e4049;
`;

export const Divider = styled.div<DividerProps>`
  width: ${(props) => props.width}px;
  position: absolute;
  height: 2px;
  background-color: ${colors.white};
  left: ${(props) => (props.activeindex === 0 ? 0 : props.left - 20)}px;
  transition: 800ms;
`;
