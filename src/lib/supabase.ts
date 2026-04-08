import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const supabaseConfigured = Boolean(
  url?.trim() && anonKey?.trim(),
)

/** Only set when URL + anon key are in `.env` — enables shared feedback wall. */
export const supabase: SupabaseClient | null = supabaseConfigured
  ? createClient(url!, anonKey!)
  : null
