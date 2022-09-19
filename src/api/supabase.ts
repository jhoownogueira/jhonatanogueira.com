import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://didvdztmtyxqdrlsjdit.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZHZkenRtdHl4cWRybHNqZGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM1OTE0MTIsImV4cCI6MTk3OTE2NzQxMn0.S6TPSNFYP0rtlrpwKrKDLVwqXncTkXGy4oAyxWEFCAM"
    )
