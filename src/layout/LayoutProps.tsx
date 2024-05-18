import GeneralLayout from "./GeneralLayoutProps";
import SidebarLayout from "./SidebarLayoutProps";

interface LayoutProps {
  children: RouterElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children.withAuth ? (
        <GeneralLayout withSidebar={children.withSidebar}>
          {children.element}
        </GeneralLayout>
      ) : (
        <SidebarLayout withSidebar={children.withSidebar}>
          {children.element}
        </SidebarLayout>
      )}
      {/* <Switch /> */}
    </>
  );
};

export default Layout;
