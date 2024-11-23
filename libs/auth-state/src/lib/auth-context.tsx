"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";
import { AuthProps, AuthState, AuthStore, createAuthStore } from "./auth-store";

export const AuthContext = createContext<AuthStore | null>(null);

type AuthProviderProps = PropsWithChildren<AuthProps>;

export const useAuthContext = <T,>(selector: (state: AuthState) => T): T => {
  const store = useContext(AuthContext);
  if (!store) throw new Error("Missing AuthContext.Provider in the tree");

  return useStore(store, selector);
};

export const AuthProvider = ({ children, ...props }: AuthProviderProps) => {
  const storeRef = useRef<AuthStore>();
  if (!storeRef.current) {
    storeRef.current = createAuthStore(props);
  }

  return (
    <AuthContext.Provider value={storeRef.current}>
      {children}
    </AuthContext.Provider>
  );
};
