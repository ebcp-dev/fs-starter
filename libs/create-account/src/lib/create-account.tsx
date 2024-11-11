"use client";

import { PropsWithChildren } from "react";
import styles from "./create-account.module.scss";

export function CreateAccount({ children }: PropsWithChildren) {
  return (
    <div className={styles["container"]}>
      <h1>Create Account Page</h1>
      {children}
    </div>
  );
}

export default CreateAccount;
