import { PropsWithChildren } from "react";
import styles from "./sign-in.module.scss";

export function SignIn({ children }: PropsWithChildren) {
  return (
    <div className={styles["container"]}>
      <h1>Sign In Page</h1>
      {children}
    </div>
  );
}

export default SignIn;
