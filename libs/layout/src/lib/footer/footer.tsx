"use client";

import { PropsWithChildren } from "react";
import styles from "./footer.module.scss";

export function Footer({ children }: PropsWithChildren) {
  return (
    <div className={styles["container"]}>
      <h1>Footer Component</h1>
      {children}
    </div>
  );
}

export default Footer;
