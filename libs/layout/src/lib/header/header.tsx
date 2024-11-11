"use client";

import { PropsWithChildren } from "react";
import styles from "./header.module.scss";
import { NavigationMenubar } from "./menubar";

export function Header({ children }: PropsWithChildren) {
  return (
    <div className={styles["container"]}>
      <NavigationMenubar />
      {children}
    </div>
  );
}

export default Header;
