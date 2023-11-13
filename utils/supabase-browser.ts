import { Database } from "@/types/supabase";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export const createClient = () => createPagesBrowserClient<Database>();
