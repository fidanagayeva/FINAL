import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  console.log("Is the token available?", token);

  if (token) {
    return NextResponse.next();
  }

  // const referer = request.headers.get("referer");

  // if (!referer) {
  //   console.log("Referer yoxdur, authpage-ə yönləndirilir.");
  //   return NextResponse.redirect(new URL("/authpage", request.url));
  // }

  console.log("There is a referrer, the link to the page is allowed.");
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/:path*",
    "/blog/:path*",
    "/accessories/:path*",
    "/account/:path*",
    "/admin/:path*",
    "/care/:path*",
    "/cart/:path*",
    "/gifts/:path*",
    "/sale/:path*",
    "/houseplants/:path*",
    "/pages/:path*",
    "/plnts/:path*",
    "/pots/:path*"
  ],
};
