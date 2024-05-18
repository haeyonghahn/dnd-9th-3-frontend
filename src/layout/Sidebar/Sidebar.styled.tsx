import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const SideBar = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const SideBarContent = styled.div`
  height: 90%;
`;

export const SideBarFooter = styled.div`
  height: 10%;
  background-color: ${colors.gray900};
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
