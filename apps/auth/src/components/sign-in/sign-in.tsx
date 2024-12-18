import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import { UserAuthForm } from "./user-auth-form";

const BG_IMG_DARK = "/images/landing-bg-dark.jpg";
const BG_IMG_LIGHT = "/images/landing-bg-light.jpg";

export const SignIn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="md:hidden mb-5">
        <Image
          className="block dark:hidden"
          alt="Authentication Image"
          src={BG_IMG_LIGHT}
          width={1280}
          height={843}
          quality={80}
          priority
        />
        <Image
          className="hidden dark:block"
          alt="Authentication Image"
          src={BG_IMG_DARK}
          width={1280}
          height={843}
          quality={80}
          priority
        />
      </div>
      <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Auth Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Authentication and security has never been easier.&rdquo;
              </p>
              <footer className="text-sm">Client</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default SignIn;
