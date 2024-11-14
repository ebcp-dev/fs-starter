import styles from "./create-account.module.scss";
import { PropsWithChildren } from "react";

export function CreateAccount({ children }: PropsWithChildren) {
  return (
    <div className={`${styles["container"]} h-screen`}>
      <h1>Create Account Page</h1>
      {children}
    </div>
  );
}

export default CreateAccount;
