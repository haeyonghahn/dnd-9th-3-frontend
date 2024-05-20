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
        children.element
      )}
      {/* <Switch /> */}
    </>
  );
};

export default Layout;
