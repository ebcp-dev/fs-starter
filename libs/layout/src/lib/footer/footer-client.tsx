"use client";

import { PropsWithChildren } from "react";
import styles from "./footer.module.scss";

export function FooterClient({ children }: PropsWithChildren) {
  return <div className={styles["container"]}>{children}</div>;
}

export default FooterClient;
