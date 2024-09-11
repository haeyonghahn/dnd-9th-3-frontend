import { colors } from "@/_shared/colors";
import { fontWeight } from "@/_shared/typography";
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
  font-weight: ${fontWeight.semiBold};
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
  font-weight: ${fontWeight.semiBold};
  border-radius: 12px;
  width: 25px;
  height: 25px;
  color: ${colors.white};
  cursor: pointer;
  text-align: center;
  &.disable {
    color: ${colors.gray500};
    cursor: not-allowed;
  }
  &.selected {
    color: ${colors.black};
    background-color: ${colors.green50};
  }
`;
