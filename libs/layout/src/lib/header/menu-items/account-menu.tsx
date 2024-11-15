"use client";

import { MenubarContent, MenubarItem, MenubarTrigger } from "@fs-starter/ui";
import { useAuthStore } from "@fs-starter/auth-state";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";

export const AccountMenu: FC<PropsWithChildren> = ({ children }) => {
  const authStore = useAuthStore();
  const isSignedIn = !!authStore.accountInfo;

  return (
    <>
      <MenubarTrigger>
        <Link href="#">{isSignedIn ? "Account" : "Sign In"}</Link>
      </MenubarTrigger>
      <MenubarContent>
        {children}
        {isSignedIn ? (
          <>
            <MenubarItem>
              <Link href="#">Settings</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="#">Sign Out</Link>
            </MenubarItem>
          </>
        ) : (
          <MenubarItem>
            <MenubarItem>
              <Link href="/sign-in">Sign In or Create Account</Link>
            </MenubarItem>
          </MenubarItem>
        )}
      </MenubarContent>
    </>
  );
};
