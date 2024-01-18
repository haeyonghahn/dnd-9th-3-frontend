import { useRouter } from "@/hooks/useRouter";
import { SidebarElement } from "@/types/sidebar";
import { User } from "@/types/user";
import {
  SideBar,
  SideBarTitle,
  SideBarMenu,
  SideBarFooter,
} from "./Sidebar.styled";
import Typography from "@/foundations/Typography/Typography";

interface SidebarProps {
  sidebarContent: SidebarElement[];
  userProfile: User | null;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarContent, userProfile }) => {
  const { currentPath, routeTo } = useRouter();

  const sidebarMenuClickHandler = (path: string) => {
    routeTo(path);
  };

  return (
    <SideBar>
      <SideBarTitle>Gooding</SideBarTitle>
      <ul>
        {sidebarContent.map((element) => {
          return (
            <SideBarMenu
              key={element.path}
              className={currentPath === element.path ? "selected" : ""}
              onClick={() => sidebarMenuClickHandler(element.path)}
            >
              <Typography text={element.label} type="h3" />
            </SideBarMenu>
          );
        })}
      </ul>
      <div>
        {userProfile ? (
          <SideBarFooter className="sidebar-footer">
            님 환영합니다.
          </SideBarFooter>
        ) : (
          <SideBarFooter>로그인이 필요합니다.</SideBarFooter>
        )}
      </div>
    </SideBar>
  );
};

export default Sidebar;
