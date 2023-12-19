import Switch from "@/components/Switch/Switch";
import GeneralLayout from "./GeneralLayoutProps";

interface LayoutProps {
  withAuth?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ withAuth, children }) => {
  return (
    <>
      {withAuth ? <GeneralLayout>{children}</GeneralLayout> : children}
      <Switch />
    </>
  );
};

export default Layout;
