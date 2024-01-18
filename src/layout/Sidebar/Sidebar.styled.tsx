import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const SideBar = styled.div`
  width: 240px;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.2);
`;

export const SideBarTitle = styled.h3`
  padding: 18px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  margin: 0 0;
`;

export const SideBarMenu = styled.li`
  list-style: none;
  padding: 18px;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
  &.selected {
    color: ${colors.green200};
    background-color: ${colors.green50};
  }
`;

export const SideBarFooter = styled.div`
  padding: 36px 18px 24px;
  font-size: 14px;
`;
