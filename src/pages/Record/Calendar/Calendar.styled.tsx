import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const CalendarWrapper = styled.div`
  overflow: auto;
`;

export const CalendarHeader = styled.div`
  margin: 5%;
`;

export const CalendarSelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;

export const DayDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;

export const DayDate = styled.span`
  width: 25px;
  height: 25px;
  color: ${colors.gray500};
  text-align: center;
`;

export const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;

export const Day = styled.div`
  width: 25px;
  height: 25px;
  color: ${colors.white};
  cursor: pointer;
  text-align: center;
  &.selected {
    color: ${colors.gray500};
    cursor: not-allowed;
  }
`;
