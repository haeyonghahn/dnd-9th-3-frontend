import styled from "styled-components";
import { colors } from "@/_shared/colors";
import { fontSize, fontWeight } from "@/_shared/typography";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  max-width: 500px;
  padding: 3% 1% 0% 1%;
  z-index: 1;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize.body0};
  font-weight: ${fontWeight.semiBold};
  color: white;
  margin: 0% 0% 2% 0%;
`;

export const HeaderCol = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderItem = styled.li`
  margin-right: 20px;
  color: ${colors.gray500};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &.selected {
    color: ${colors.white};
  }
  cursor: pointer;
`;

export const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
  cursor: pointer;
`;
