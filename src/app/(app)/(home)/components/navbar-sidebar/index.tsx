import { NavbarsidebarProps } from "./data";
import { NavbarSidebar as Layout } from "./Layout";

const NavbarSidebar = (props: NavbarsidebarProps) => {
  const layoutProps = {
    ...props,
  }

  return <Layout {...layoutProps} />;
};

export { NavbarSidebar };
