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
import { AvatarIcon } from "@radix-ui/react-icons";

export const AccountMenu: FC<PropsWithChildren> = ({ children }) => {
  const { accountInfo, setAccountInfo } = useAuthStore();
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
            <Link href="#">Settings</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link href="#" onClick={() => setAccountInfo(null)}>
              Sign Out
            </Link>
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
