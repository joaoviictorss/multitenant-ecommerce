export interface NavbarsidebarItem {
  href: string;
  children: React.ReactNode;
}

export interface NavbarsidebarProps {
  items: NavbarsidebarItem[];
  isOpen: boolean;
  onOpenChange: () => void;
}

export interface NavbarSidebarData extends NavbarsidebarProps {}
