"use client";

import {
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarTrigger,
} from "@fs-starter/ui";
import { useAuthStore } from "@fs-starter/auth-state";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";

export const AccountMenu: FC<PropsWithChildren> = ({ children }) => {
  const authStore = useAuthStore();
  const isSignedIn = !authStore.accountInfo;

  return isSignedIn ? (
    <Link href="/sign-in" className="px-3 py-1 text-sm font-medium">
      Sign In
    </Link>
  ) : (
    <>
      <MenubarTrigger className="cursor-pointer">
        Account Settings
      </MenubarTrigger>
      <MenubarContent>
        <MenubarGroup>
          <MenubarItem>
            <Link href="#">Settings</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="#">Sign Out</Link>
          </MenubarItem>
        </MenubarGroup>
        {children}
      </MenubarContent>
    </>
  );
};
