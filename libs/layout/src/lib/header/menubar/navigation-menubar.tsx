import { Menubar } from "@fs-starter/ui";
import { ProjectsMenu } from "./projects-menu";
import { ViewMenu } from "./view-menu";
import { AccountMenu } from "./account-menu";
import { HomeMenuLink } from "./home-menu-link";

export function NavigationMenubar() {
  return (
    <div className="flex justify-between w-full">
      <Menubar style={{ flex: 1 }}>
        <HomeMenuLink />
        <ProjectsMenu />
        <ViewMenu />
        <AccountMenu />
      </Menubar>
    </div>
  );
}

export default NavigationMenubar;
