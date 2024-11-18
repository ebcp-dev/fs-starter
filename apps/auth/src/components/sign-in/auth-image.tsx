"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const BG_IMG_DARK = "/images/landing-bg-dark.jpg";
const BG_IMG_LIGHT = "/images/landing-bg-light.jpg";

const AuthImage: FC = () => {
  const { resolvedTheme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState(BG_IMG_DARK);

  // ensure the theme is resolved on the client
  useEffect(() => {
    setBackgroundImage(resolvedTheme === "light" ? BG_IMG_LIGHT : BG_IMG_DARK);
  }, [resolvedTheme]);

  return (
    <div className="md:hidden mb-5">
      <Image
        className="block dark:hidden"
        alt="Authentication Image"
        src={backgroundImage}
        width={1280}
        height={843}
        quality={80}
        priority
      />
      <Image
        className="hidden dark:block"
        alt="Authentication Image"
        src={backgroundImage}
        width={1280}
        height={843}
        quality={80}
        priority
      />
    </div>
  );
};

export default AuthImage;
