import { useRouter } from "@/hooks/useRouter";
import { SidebarElement } from "@/types/sidebar";
import {
  SideBar,
  SideBarMenu,
  SideBarFooter,
  SideBarContent,
  SideBarList,
} from "./Sidebar.styled";
import Typography from "@/foundations/Typography/Typography";
import React from "react";
import { IUser } from "@/types/user";

interface SidebarProps {
  children: React.ReactNode;
  sidebarContent: SidebarElement[];
  userProfile: IUser | null;
}

const Sidebar: React.FC<SidebarProps> = ({ children, sidebarContent }) => {
  const { currentPath, routeTo } = useRouter();

  const sidebarMenuClickHandler = (path: string) => {
    if (path === "/my/record") {
      routeTo("/my/record/timeline");
    } else {
      routeTo(path);
    }
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
                    className={
                      currentPath.startsWith(element.path) ? "selected" : ""
                    }
                    onClick={() => sidebarMenuClickHandler(element.path)}
                  >
                    {element.image}
                    <Typography text={element.label} type="body2" />
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
