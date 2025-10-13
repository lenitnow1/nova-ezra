import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Apply to all routes, but don't block unauthenticated users by default.
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
