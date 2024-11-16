"use client";

import {
  MenubarContent,
  MenubarItem,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@fs-starter/ui";
import { FC } from "react";

export const ProjectsMenu: FC = () => {
  return (
    <>
      <MenubarTrigger className="cursor-pointer">Projects</MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Recent</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Project 1</MenubarItem>
            <MenubarItem>Project 2</MenubarItem>
            <MenubarItem>Project 3</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem>
          New <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </>
  );
};
