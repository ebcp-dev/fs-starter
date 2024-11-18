"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import AuthLinks from "./auth-links";

const BG_IMG_DARK = "/images/landing-bg-dark.jpg";
const BG_IMG_LIGHT = "/images/landing-bg-light.jpg";

export const Landing: FC = () => {
  const { resolvedTheme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState(BG_IMG_DARK);

  // ensure the theme is resolved on the client
  useEffect(() => {
    setBackgroundImage(resolvedTheme === "light" ? BG_IMG_LIGHT : BG_IMG_DARK);
  }, [resolvedTheme]);

  return (
    <div className="relative h-screen w-full">
      <Image
        src={backgroundImage}
        alt="Landing Background"
        fill={true}
        style={{ objectFit: "cover" }}
        quality={80} // Compress the image
        priority // Load the image immediately
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Auth</h1>
          <p className="text-xl mb-6">
            A secure and simple way to manage your account.
          </p>
          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Landing;
