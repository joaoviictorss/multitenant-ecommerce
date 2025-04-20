"use client";

import { usePathname } from "next/navigation";
import { Navbar as Layout } from "./Layout";
import { NavbarProps } from "./data";
import { useState } from "react";

const navbarItems = [
  {
    href: "/",
    children: "Home",
    isActive: true,
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/blog",
    children: "Blog",
  },
];

const Navbar = (props: NavbarProps) => {
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarNabarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const layoutProps = {
    navbarItems,
    isSidebarOpen,
    handleSidebarNabarOpen,
    pathname,
    ...props,
  };

  return <Layout {...layoutProps} />;
};

export { Navbar };
