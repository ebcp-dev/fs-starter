import { FC, PropsWithChildren } from "react";
import styles from "./sign-in.module.scss";

export const SignIn: FC<PropsWithChildren> = ({ children }) => (
  <div className={`${styles["sign-in"]} h-screen`}>
    <h1>Sign In Page</h1>
    {children}
  </div>
);
