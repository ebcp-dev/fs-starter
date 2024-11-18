"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MenubarContent, MenubarItem, MenubarTrigger } from "@fs-starter/ui";

export const ThemeToggle: FC = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <MenubarTrigger className="cursor-pointer">
        <>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </>
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem onClick={() => setTheme("light")}>Light</MenubarItem>
        <MenubarItem onClick={() => setTheme("dark")}>Dark</MenubarItem>
        <MenubarItem onClick={() => setTheme("system")}>System</MenubarItem>
      </MenubarContent>
    </>
  );
};
