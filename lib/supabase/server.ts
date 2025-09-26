// lib/supabase/server.ts
import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-side client (Node runtime). Gebruik deze ALLEEN in API routes / server code.
export function supabaseService() {
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}
