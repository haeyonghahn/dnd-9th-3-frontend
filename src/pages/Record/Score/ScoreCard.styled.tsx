import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const ScoreCardContent = styled.div`
  height: 200px;
  background-color: #1c1d27;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  &.selected {
    outline: ${colors.green50} solid 1px;
  }
`;

export const ScoreTextBox = styled.div`
  padding-top: 15%;
`;
