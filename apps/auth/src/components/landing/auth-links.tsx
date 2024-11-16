import { Button } from "@fs-starter/ui";
import Link from "next/link";
import { FC } from "react";

const AuthLinks: FC = () => {
  return (
    <>
      <Link href="/sign-in">
        <Button variant="ghost" className="text-lg m-1">
          Sign In
        </Button>
      </Link>
      <Link href="/create-account">
        <Button variant="secondary" className="text-lg m-1">
          Create Account
        </Button>
      </Link>
    </>
  );
};

export default AuthLinks;
