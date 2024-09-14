import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #3e4049;
  background-color: #3e4049;
  box-sizing: border-box;
  margin-right: 3%;
  margin-bottom: 3%;
  padding: 8px 14px 8px 6px;
  border-radius: 33px;
  cursor: pointer;

  &.selected {
    outline: ${colors.green50} solid 1px;
  }
`;
