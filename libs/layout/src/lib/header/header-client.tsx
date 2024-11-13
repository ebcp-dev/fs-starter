"use client";

import { PropsWithChildren } from "react";
import styles from "./header.module.scss";

export function HeaderClient({ children }: PropsWithChildren) {
  return (
    <div className={styles["container"]}>
      <div className="flex justify-between w-full">{children}</div>
    </div>
  );
}

export default HeaderClient;
