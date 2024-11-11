"use client";

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@fs-starter/ui";
import { useAuthStore } from "@fs-starter/auth-state";
import { PropsWithChildren } from "react";
import Link from "next/link";

export function AccountMenu({ children }: PropsWithChildren) {
  const authStore = useAuthStore();
  const isSignedIn = !!authStore.accountInfo;

  return (
    <MenubarMenu>
      <MenubarTrigger style={{ marginLeft: "auto" }}>Account</MenubarTrigger>
      <MenubarContent>
        {children}
        {isSignedIn ? (
          <>
            <Link href="#">
              <MenubarItem>Settings</MenubarItem>
            </Link>
            <Link href="#">
              <MenubarItem>Sign Out</MenubarItem>
            </Link>
          </>
        ) : (
          <MenubarItem>
            <Link href="/sign-in">
              <MenubarItem>Sign In or Create Account</MenubarItem>
            </Link>
          </MenubarItem>
        )}
      </MenubarContent>
    </MenubarMenu>
  );
}
