import Link from "next/link";
import { Poppins } from "next/font/google";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { NavbarData, NavbarItemProps } from "../data";
import { NavbarSidebar } from "../../navbar-sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export const NavbarItem = ({ children, href, isActive }: NavbarItemProps) => {
  return (
    <Button
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export const Navbar = ({
  navbarItems,
  handleSidebarNabarOpen,
  isSidebarOpen,
  pathname,
}: NavbarData) => {
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Bazar.io
        </span>
      </Link>

      <NavbarSidebar
        isOpen={isSidebarOpen}
        onOpenChange={handleSidebarNabarOpen}
        items={navbarItems}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant={"secondary"}
          className="border-0 border-l px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href={"/sign-in"}>Entrar</Link>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          className="border-0 border-l px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href={"/sign-up"}>Comece a vender</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant={"ghost"}
          className="size-12 border-transparent bg-white"
          onClick={handleSidebarNabarOpen}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
