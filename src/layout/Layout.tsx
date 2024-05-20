import GeneralLayout from "./GeneralLayout";

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
        <GeneralLayout withSidebar={children.withSidebar}>
          {children.element}
        </GeneralLayout>
      )}
      {/* <Switch /> */}
    </>
  );
};

export default Layout;
