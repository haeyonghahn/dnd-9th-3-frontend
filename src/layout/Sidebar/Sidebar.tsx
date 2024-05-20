import { useRouter } from "@/hooks/useRouter";
import { SidebarElement } from "@/types/sidebar";
import { User } from "@/types/user";
import {
  SideBar,
  SideBarMenu,
  SideBarFooter,
  SideBarContent,
} from "./Sidebar.styled";
import Typography from "@/foundations/Typography/Typography";
import styled from "styled-components";
import React from "react";

interface SidebarProps {
  children: React.ReactNode;
  sidebarContent: SidebarElement[];
  userProfile: User | null;
}

const SideBarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Sidebar: React.FC<SidebarProps> = ({ children, sidebarContent }) => {
  const { currentPath, routeTo } = useRouter();

  const sidebarMenuClickHandler = (path: string) => {
    routeTo(path);
  };

  return (
    <>
      <SideBar>
        <SideBarContent>{children}</SideBarContent>
        <SideBarFooter>
          <SideBarList>
            {sidebarContent.map((element) => {
              if (element.withSidebar) {
                return (
                  <SideBarMenu
                    key={element.path}
                    className={currentPath === element.path ? "selected" : ""}
                    onClick={() => sidebarMenuClickHandler(element.path)}
                  >
                    {element.image}
                    <Typography text={element.label} type="cpation3" />
                  </SideBarMenu>
                );
              } else {
                return null;
              }
            })}
          </SideBarList>
        </SideBarFooter>
      </SideBar>
    </>
  );
};

export default Sidebar;
