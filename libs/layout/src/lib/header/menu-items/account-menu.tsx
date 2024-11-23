"use client";

import { useAuthContext } from "@fs-starter/auth-state";
import {
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarTrigger,
} from "@fs-starter/ui";
import { AvatarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

export const AccountMenu: FC<PropsWithChildren> = ({ children }) => {
  const accountInfo = useAuthContext((auth) => auth.accountInfo);

  const isSignedIn = !!accountInfo;

  return isSignedIn ? (
    <>
      <MenubarTrigger className="cursor-pointer">
        <span className="hidden md:inline"> {accountInfo.name}</span>
        <AvatarIcon className="h-[1.2rem] w-[1.2rem] scale-100 md:hidden" />
      </MenubarTrigger>
      <MenubarContent>
        <MenubarGroup>
          <MenubarItem asChild>
            <Link href="/profile">Settings</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="/sign-out">Sign Out</Link>
          </MenubarItem>
        </MenubarGroup>
        {children}
      </MenubarContent>
    </>
  ) : (
    <Link href="/sign-in" className="px-3 py-1 text-sm font-medium">
      Sign In
    </Link>
  );
};
