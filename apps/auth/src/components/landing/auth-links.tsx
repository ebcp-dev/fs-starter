import Link from "next/link";
import { FC } from "react";

import { Button } from "@fs-starter/ui";

const AuthLinks: FC = () => {
  return (
    <>
      <Button variant="ghost" className="text-lg m-1" asChild>
        <Link href="/sign-in">Sign In</Link>
      </Button>
      <Button variant="secondary" className="text-lg m-1" asChild>
        <Link href="/create-account">Create Account</Link>
      </Button>
    </>
  );
};

export default AuthLinks;
