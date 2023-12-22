import Switch from "@/components/Switch";
import GeneralLayout from "./GeneralLayoutProps";

interface LayoutProps {
  children: RouterElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children.withAuth ? (
        <GeneralLayout>{children.element}</GeneralLayout>
      ) : (
        children.element
      )}
      <Switch />
    </>
  );
};

export default Layout;
