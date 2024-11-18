"use client";

import { create } from "zustand";

export type AccountInfo = {
  loginId: string;
  name: string;
} | null;

type AuthState = {
  accountInfo: AccountInfo;
  setAccountInfo: (newAccountInfo: AccountInfo) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accountInfo: null,
  setAccountInfo: (newAccountInfo: AccountInfo) => {
    set({ accountInfo: newAccountInfo });
  },
}));
