import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase = createClient(
  url || 'https://shcrxrznccfddmclxxkc.supabase.co',
  anonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoY3J4cnpuY2NmZGRtY2x4eGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMzUzNTMsImV4cCI6MjA5OTgxMTM1M30.4YipSYuO481TDmi2wTz5NhEoXrOdYF49kCiqsKsHxy0',
  {
    auth: { persistSession: false },
  },
);
