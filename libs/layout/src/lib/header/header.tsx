import {
  HomeMenuLink,
  ProjectsMenu,
  ViewMenu,
  AccountMenu,
} from "./menu-items";
import styles from "./header.module.scss";
import { Menubar, MenubarMenu } from "@fs-starter/ui";

export function Header() {
  return (
    <div className={`${styles["container"]} sticky top-0 z-50`}>
      <div className="flex justify-between w-full">
        <Menubar className="flex-1 rounded-none">
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
      </div>
    </div>
  );
}

export default Header;
