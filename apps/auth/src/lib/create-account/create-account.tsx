import styles from "./create-account.module.scss";
import { FC, PropsWithChildren } from "react";

export const CreateAccount: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${styles["create-account"]} h-screen`}>
      <h1>Create Account Page</h1>
      {children}
    </div>
  );
};
