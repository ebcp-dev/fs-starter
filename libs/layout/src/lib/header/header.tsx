"use client";

import { Menubar, MenubarMenu } from "@fs-starter/ui";
import { FC, useEffect, useState } from "react";

import {
  HomeMenuLink,
  ProjectsMenu,
  ViewMenu,
  AccountMenu,
  ThemeToggle,
} from "./menu-items";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between w-full">
        <Menubar
          className={`flex-1 rounded-none transition-colors duration-300 ${
            isScrolled ? "bg-white/10 backdrop-blur-0" : "bg-transparent"
          }`}
        >
          <MenubarMenu>
            <HomeMenuLink />
          </MenubarMenu>
          <MenubarMenu>
            <ProjectsMenu />
          </MenubarMenu>
          <MenubarMenu>
            <ViewMenu />
          </MenubarMenu>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MenubarMenu>
              <ThemeToggle />
            </MenubarMenu>
            <MenubarMenu>
              <AccountMenu />
            </MenubarMenu>
          </div>
        </Menubar>
      </div>
    </div>
  );
};

export default Header;
