import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { Database } from "@/types/supabase";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const routes = ["/login", "/dashboard", "/triangle", "/signup", "/"];

  if (!session && pathname === "/dashboard") {
    console.log("Redirecting to /login");
    const url = new URL(req.url);
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  //   if (session && res) {
  //     const url = new URL(req.url);
  //     url.pathname = "/dashboard";
  //     return NextResponse.redirect(url);
  //   }
  return res;
}
