"use client";

import { Menubar, MenubarMenu } from "@fs-starter/ui";
import { AccountMenu } from "./account-menu";
import { HomeMenuLink } from "./home-menu-link";
import { ProjectsMenu } from "./projects-menu";
import { ViewMenu } from "./view-menu";

export function NavigationMenubar() {
  return (
    <Menubar style={{ flex: 1 }}>
      <MenubarMenu>
        <HomeMenuLink />
      </MenubarMenu>
      <MenubarMenu>
        <ProjectsMenu />
      </MenubarMenu>
      <MenubarMenu>
        <ViewMenu />
      </MenubarMenu>
      <MenubarMenu>
        <AccountMenu />
      </MenubarMenu>
    </Menubar>
  );
}

export default NavigationMenubar;
