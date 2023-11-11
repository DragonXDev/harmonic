import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;

  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/signup";
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/", "/dashboard"], // list all the pages you want protected here
};
