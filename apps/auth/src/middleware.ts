import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (request: NextRequest): NextResponse => {
  const authCookie = request.cookies.get("account");
  // List of protected routes
  const protectedRoutes = ["/profile"];
  // Don't allow if user is authenticated
  const authRoutes = ["/sign-in", "/create-account"];

  // Check if the request is for a protected route
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!authCookie) {
      console.log("unauthenticated");
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/sign-in", request.url));
    } else if (
      authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
    ) {
      console.log("already authenticated: ", authCookie);
      // Redirect to index page if authenticated
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Allow access if authenticated or route is not protected
  return NextResponse.next();
};

export const config = {
  matcher: ["/profile/:path*", "/sign-in/:path*", "/create-account/:path*"],
};

export default middleware;
