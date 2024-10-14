import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ipedcabdbezwbextwjqx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwZWRjYWJkYmV6d2JleHR3anF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5OTgxMzAsImV4cCI6MjA0MTU3NDEzMH0.s7dw-pKwDV1f7FQ_ciQFSqa6vfIND4NFV3iEW52nIXQ";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;
