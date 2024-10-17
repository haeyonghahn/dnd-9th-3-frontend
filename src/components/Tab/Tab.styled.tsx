import { colors } from "@/_shared/colors";
import { motion } from "framer-motion";
import styled from "styled-components";

interface TabItemProps {
  isactive: string;
}

interface DividerProps {
  activeindex: number;
  width: number;
  left: number;
}

export const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: #282932;
  border-radius: 24px 24px 0px 0px;
  position: relative;
  overflow: auto;
  &.expanded {
    position: absolute;
  }
`;

export const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Bar = styled.div`
  background-color: #d3d3d3;
  width: 60px;
  margin-top: 12px;
  padding: 2px;
  border-radius: 10px;
  cursor: pointer;
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
