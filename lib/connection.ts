import { SupabaseClient, createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseSecretKey = process.env.SUPABASE_KEY

export const supabase: SupabaseClient = createClient(
  supabaseUrl!,
  supabaseSecretKey!
)
