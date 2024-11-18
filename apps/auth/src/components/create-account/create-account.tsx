import { FC, PropsWithChildren } from "react";

import styles from "./create-account.module.scss";

export const CreateAccount: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${styles["create-account"]} h-screen`}>
      <h1>Create Account Page</h1>
      {children}
    </div>
  );
};

export default CreateAccount;
