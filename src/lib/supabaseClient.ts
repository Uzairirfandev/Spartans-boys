// Supabase client setup.
//
// The site works WITHOUT Supabase too: if these env vars are missing, the
// match-score feature automatically falls back to the browser's localStorage
// (see matchStore.ts). Once you add the two values below, every visitor on
// every device sees the same scores.
//
// Add these to a `.env.local` file in the project root (and to your Netlify
// site's environment variables for production):
//
//   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi....
//
// See SUPABASE_SETUP.md for the full step-by-step guide.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// `true` when both keys are present → shared online database mode.
export const isSupabaseConfigured = Boolean(url && anonKey);

// Created once and reused. `null` when not configured (localStorage fallback).
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;
