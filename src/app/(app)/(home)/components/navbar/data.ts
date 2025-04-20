export interface NavbarProps {}

export interface NavbarData extends NavbarProps {
  navbarItems: NavbarItemProps[];
  isSidebarOpen: boolean;
  handleSidebarNabarOpen: () => void;
  pathname: string;
}

export interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}
