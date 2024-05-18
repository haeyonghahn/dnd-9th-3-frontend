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

interface SidebarProps {
  children: React.ReactNode;
  sidebarContent: SidebarElement[];
  userProfile: User | null;
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  sidebarContent,
  userProfile,
}) => {
  const { currentPath, routeTo } = useRouter();

  const sidebarMenuClickHandler = (path: string) => {
    routeTo(path);
  };

  return (
    <SideBar>
      <SideBarContent>
        <div>{children}</div>
      </SideBarContent>
      <SideBarFooter>
        <ul>
          {sidebarContent.map((element) => {
            if (element.withSidebar) {
              return (
                <SideBarMenu
                  key={element.path}
                  className={currentPath === element.path ? "selected" : ""}
                  onClick={() => sidebarMenuClickHandler(element.path)}
                >
                  <Typography text={element.label} type="h3" />
                </SideBarMenu>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </SideBarFooter>
    </SideBar>
  );
};

export default Sidebar;
