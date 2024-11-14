import { PropsWithChildren } from "react";
import styles from "./sign-in.module.scss";

export function SignIn({ children }: PropsWithChildren) {
  return (
    <div className={`${styles["container"]} h-screen`}>
      <h1>Sign In Page</h1>
      {children}
    </div>
  );
}

export default SignIn;
