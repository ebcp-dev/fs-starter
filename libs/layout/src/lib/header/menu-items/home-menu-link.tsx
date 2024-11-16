"use client";

import Link from "next/link";
import { FC } from "react";

export const HomeMenuLink: FC = () => {
  return (
    <Link href="/" className="px-3 py-1 text-sm font-medium">
      Home
    </Link>
  );
};
