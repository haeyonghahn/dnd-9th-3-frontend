export interface SidebarElement {
  id: number;
  label: string;
  path: string;
  image?: JSX.Element;
  withSidebar?: boolean;
}
