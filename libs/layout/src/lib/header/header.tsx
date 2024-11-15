import {
  HomeMenuLink,
  ProjectsMenu,
  ViewMenu,
  AccountMenu,
  ThemeToggle,
} from "./menu-items";
import styles from "./header.module.scss";
import { Menubar, MenubarMenu } from "@fs-starter/ui";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className={`${styles["header"]} sticky top-0 z-50`}>
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
