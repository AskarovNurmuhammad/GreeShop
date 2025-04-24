import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qajhamhjndudulaxdmjo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhamhhbWhqbmR1ZHVsYXhkbWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NzMwNTksImV4cCI6MjA2MDQ0OTA1OX0.7rWXJGhs_b5BtQChzeTx-Zd9Wl9KjxC-QlUZg6B7kwk";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
