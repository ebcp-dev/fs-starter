"use client";

import { PropsWithChildren } from "react";
import styles from "./header.module.scss";

export function Header({ children }: PropsWithChildren) {
  return (
    <div className={styles["container"]}>
      <h1>Header Component</h1>
      {children}
    </div>
  );
}

export default Header;
