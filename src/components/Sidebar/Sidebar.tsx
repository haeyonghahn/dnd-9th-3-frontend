import { useRouter } from "@/hooks/useRouter";
import { SidebarElement } from "@/types/sidebar";
import { Container, Content, Footer, List, Menu } from "./Sidebar.styled";
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
    routeTo(path);
  };

  return (
    <>
      <Container>
        <Content>{children}</Content>
        <Footer>
          <List>
            {sidebarContent.map((element) => {
              if (element.withSidebar) {
                return (
                  <Menu
                    key={element.path}
                    className={
                      currentPath.startsWith(element.path) ? "selected" : ""
                    }
                    onClick={() => sidebarMenuClickHandler(element.path)}
                  >
                    {element.image}
                    <Typography text={element.label} type="body2" />
                  </Menu>
                );
              } else {
                return null;
              }
            })}
          </List>
        </Footer>
      </Container>
    </>
  );
};

export default Sidebar;
