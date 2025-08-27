import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vrsfkbcslilvvbolarbe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2ZrYmNzbGlsdnZib2xhcmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMzU3ODEsImV4cCI6MjA3MDcxMTc4MX0.pPPfumXA5cQbCozdwfBkbC-1IIgTO8glUHuU9L80n4k'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface LogEntry {
  name: string
  timestamp: string
  activity: string
  dopamine: number
}
