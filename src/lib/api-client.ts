import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vrsfkbcslilvvbolarbe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2ZrYmNzbGlsdnZib2xhcmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMzU3ODEsImV4cCI6MjA3MDcxMTc4MX0.pPPfumXA5cQbCozdwfBkbC-1IIgTO8glUHuU9L80n4k'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface LogEntry {
  name: string
  timestamp: string
  activity: string
  dopamine: number
}

export async function logActivity(data: Omit<LogEntry, 'timestamp'>): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const logData: LogEntry = {
      ...data,
      timestamp: data.timestamp || new Date().toISOString()
    }

    // Validate required fields
    if (!logData.name || !logData.activity || logData.dopamine === undefined) {
      return {
        success: false,
        error: 'Missing required fields: name, activity, and dopamine are required'
      }
    }

    // Validate dopamine is a number
    if (typeof logData.dopamine !== 'number' || logData.dopamine < 0 || logData.dopamine > 10) {
      return {
        success: false,
        error: 'Dopamine must be a number between 0 and 10'
      }
    }

    const { data: result, error } = await supabase
      .from('logs')
      .insert([logData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return {
        success: false,
        error: `Failed to insert log entry: ${error.message}`
      }
    }

    console.log('Log entry inserted successfully:', result)
    return {
      success: true,
      data: result[0]
    }

  } catch (error) {
    console.error('API error:', error)
    return {
      success: false,
      error: `Internal error: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}

// Function to handle Apple Shortcut requests via URL parameters
export function handleShortcutRequest(): { success: boolean; data?: any; error?: string } {
  const urlParams = new URLSearchParams(window.location.search)
  const name = urlParams.get('name')
  const activity = urlParams.get('activity')
  const dopamine = urlParams.get('dopamine')
  const timestamp = urlParams.get('timestamp')

  if (!name || !activity || !dopamine) {
    return {
      success: false,
      error: 'Missing required parameters: name, activity, and dopamine are required'
    }
  }

  const dopamineNum = parseFloat(dopamine)
  if (isNaN(dopamineNum) || dopamineNum < 0 || dopamineNum > 10) {
    return {
      success: false,
      error: 'Dopamine must be a number between 0 and 10'
    }
  }

  // Log the activity
  logActivity({
    name,
    activity,
    dopamine: dopamineNum,
    timestamp: timestamp || undefined
  }).then(result => {
    if (result.success) {
      // Show success message
      alert('Activity logged successfully! 🎉')
    } else {
      // Show error message
      alert(`Error: ${result.error}`)
    }
  })

  return {
    success: true,
    data: { name, activity, dopamine: dopamineNum, timestamp }
  }
}
