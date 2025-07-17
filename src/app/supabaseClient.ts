import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vecgoocvhytylevzdxhw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlY2dvb2N2aHl0eWxldnpkeGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNTE4MzgsImV4cCI6MjA1OTgyNzgzOH0.9JiP0jbSGxFx0jfscmo8o5ziAsEFhsa1LT4lSSLb9Ns";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
