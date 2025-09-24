import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/sessions";

// Routes that anyone can access (no authentication required)
const publicRoutes = ["/", "/admin/login", "/admin/signup"];

// Routes that require authentication
const protectedRoutes = ["/admin/dashboard", "/admin/dashboard/products"];

// Routes that require admin role
const adminOnlyRoutes = ["/admin/dashboard/users"];

// Routes that unapproved users can access
const unapprovedUserRoutes = [
  "/",
  "/admin/login",
  "/admin/signup",
  "/admin/approve_msg",
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  // Check if user is logged in
  const isLoggedIn = !!session?.userId;

  // Check user approval status
  const isApproved = session?.approve_yn !== false;

  // Check user role
  const isAdmin = session?.userRole === "admin";

  // Route classifications
  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAdminOnlyRoute = adminOnlyRoutes.includes(path);
  const isUnapprovedUserRoute = unapprovedUserRoutes.includes(path);

  // Handle unapproved users first
  if (isLoggedIn && !isApproved) {
    if (!isUnapprovedUserRoute) {
      return NextResponse.redirect(new URL("/admin/approve_msg", req.url));
    }
    // Allow access to unapproved user routes
    return NextResponse.next();
  }

  // Handle admin-only routes
  if (isAdminOnlyRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
  }

  // Handle protected routes
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Handle public routes - redirect logged in users away from login/signup
  if (isLoggedIn && (path === "/admin/login" || path === "/admin/signup")) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}
