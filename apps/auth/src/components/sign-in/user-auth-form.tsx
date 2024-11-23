"use client";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { FC, HTMLAttributes, SyntheticEvent, useState } from "react";

import { useAuthContext } from "@fs-starter/auth-state";
import { Button, Input, Label } from "@fs-starter/ui";
import { cn } from "@fs-starter/utils";
import { useRouter } from "next/navigation";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

export const UserAuthForm: FC<UserAuthFormProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const setAccountInfo = useAuthContext((auth) => auth.setAccountInfo);

  const onSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const fakeAccount = {
        loginId: "test@test.email",
        name: "Test Account",
      };

      setAccountInfo(fakeAccount);

      setIsLoading(false);

      router.push("/");
    }, 3000);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
          )}{" "}
          GitHub
        </Button>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <LinkedInLogoIcon className="mr-2 h-4 w-4" />
          )}{" "}
          LinkedIn
        </Button>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <InstagramLogoIcon className="mr-2 h-4 w-4" />
          )}{" "}
          Instagram
        </Button>
      </div>
    </div>
  );
};
