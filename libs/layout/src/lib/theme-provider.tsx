"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps, FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<
  PropsWithChildren<ComponentProps<typeof NextThemesProvider>>
> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
