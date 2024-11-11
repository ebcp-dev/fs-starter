"use client";

import { create } from "zustand";

export type AccountInfo = {
  loginId: string;
  name: string;
};

type AuthState = {
  accountInfo: AccountInfo | null;
  setAccountInfo: (newAccountInfo: AccountInfo) => void;
};

function createAuthState() {
  return create<AuthState>((set) => ({
    accountInfo: null,
    setAccountInfo: function (newAccountInfo: AccountInfo) {
      set({ accountInfo: newAccountInfo });
    },
  }));
}

export const useAuthStore = createAuthState();
