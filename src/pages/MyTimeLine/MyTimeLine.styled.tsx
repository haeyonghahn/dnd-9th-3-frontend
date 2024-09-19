import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const TimeLineWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

export const TimeLineDescription = styled.div`
  text-align: center;
  color: #75777b;
  font-weight: 600;
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  margin: 20px;
  text-align: center;
`;

export const TimeLineArrow = styled.img`
  margin-left: 10px;
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
