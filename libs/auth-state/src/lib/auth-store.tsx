"use client";

import { getCookie, remove, setCookie } from "tiny-cookie";
import { create } from "zustand";

export type AccountInfo = {
  loginId: string;
  name: string;
} | null;

export type AuthProps = {
  accountInfo: AccountInfo;
};

export type AuthState = AuthProps & {
  setAccountInfo: (newAccountInfo: AccountInfo) => void;
};

export type AuthStore = ReturnType<typeof createAuthStore>;

export const createAuthStore = (initProps?: Partial<AuthProps>) => {
  const DEFAULT_PROPS: AuthProps = {
    accountInfo: null,
  };

  if (typeof document !== "undefined") {
    try {
      const parsedData = getCookie("account", JSON.parse);
      DEFAULT_PROPS.accountInfo = parsedData;
    } catch (error: unknown) {
      // Type assertion to ensure 'error' is of type 'Error'
      if (error instanceof Error) {
        console.error("Parsing error:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }

  return create<AuthState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setAccountInfo: (newAccountInfo: AccountInfo) => {
      if (newAccountInfo === null) {
        remove("account");
      } else {
        setCookie("account", newAccountInfo, JSON.stringify, {
          expires: "5m",
          samesite: "Strict",
          secure: true,
        });
      }

      set({ accountInfo: newAccountInfo });
    },
  }));
};
