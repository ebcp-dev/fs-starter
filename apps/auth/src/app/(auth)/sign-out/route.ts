import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  // Create a response object to manage cookies and redirection
  const response = NextResponse.redirect(new URL("/sign-in", request.url));

  // Unset the "account" cookie
  response.cookies.set("account", "", {
    maxAge: 0, // Expire immediately
    path: "/", // Apply to the entire domain
  });

  return response;
};
