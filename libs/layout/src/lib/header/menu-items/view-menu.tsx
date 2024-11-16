"use client";

import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@fs-starter/ui";
import { FC } from "react";

export const ViewMenu: FC = () => {
  return (
    <>
      <MenubarTrigger className="cursor-pointer">View</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
        <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarItem inset>
          Reload <MenubarShortcut>⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled inset>
          Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>Toggle Fullscreen</MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>Hide Sidebar</MenubarItem>
      </MenubarContent>
    </>
  );
};
