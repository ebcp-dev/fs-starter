"use client";

import { Button } from "@fs-starter/ui";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { FC } from "react";

export const HomeMenuLink: FC = () => {
  return (
    <Link href="/">
      <Button variant="link">
        <HomeIcon />
      </Button>
    </Link>
  );
};
