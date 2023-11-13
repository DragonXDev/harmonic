import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/utils/supabase-server";
import SupabaseAuthProvider from "@/components/providers/supabase-auth-provider";
import SupabaseProvider from "@/components/providers/supabase-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Harmonic",
  description: "Bringing mathematics and music together",
};

export default async function RootLayout({ children }) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("SESSION2: ", session ? "true" : "false");
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <SupabaseAuthProvider>{children}</SupabaseAuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
