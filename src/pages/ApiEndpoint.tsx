import { useEffect, useState } from 'react'
import { supabase, LogEntry } from '@/lib/supabase'

const ApiEndpoint = () => {
  const [status, setStatus] = useState<string>('Ready')
  const [lastLog, setLastLog] = useState<LogEntry | null>(null)

  useEffect(() => {
    // Handle POST requests from Apple Shortcuts
    const handlePostRequest = async (event: MessageEvent) => {
      if (event.data && event.data.type === 'APPLE_SHORTCUT_LOG') {
        try {
          setStatus('Processing...')
          
          const logData: LogEntry = {
            name: event.data.name,
            timestamp: event.data.timestamp || new Date().toISOString(),
            activity: event.data.activity,
            dopamine: event.data.dopamine
          }

          const { data, error } = await supabase
            .from('logs')
            .insert([logData])
            .select()

          if (error) {
            console.error('Error inserting log:', error)
            setStatus(`Error: ${error.message}`)
          } else {
            console.log('Log inserted successfully:', data)
            setLastLog(logData)
            setStatus('Success!')
            
            // Reset status after 3 seconds
            setTimeout(() => setStatus('Ready'), 3000)
          }
        } catch (error) {
          console.error('Error processing log:', error)
          setStatus(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
        }
      }
    }

    // Listen for messages from Apple Shortcuts
    window.addEventListener('message', handlePostRequest)

    // Also handle direct POST requests (for testing)
    const handleDirectPost = async (request: Request) => {
      if (request.method === 'POST') {
        try {
          const body = await request.json()
          const logData: LogEntry = {
            name: body.name,
            timestamp: body.timestamp || new Date().toISOString(),
            activity: body.activity,
            dopamine: body.dopamine
          }

          const { data, error } = await supabase
            .from('logs')
            .insert([logData])
            .select()

          if (error) {
            return new Response(JSON.stringify({ error: error.message }), {
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            })
          }

          return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          })
        } catch (error) {
          return new Response(JSON.stringify({ error: 'Invalid request' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          })
        }
      }

      return new Response('Method not allowed', { status: 405 })
    }

    // Expose the handler globally for service worker or direct access
    ;(window as any).handleDirectPost = handleDirectPost

    return () => {
      window.removeEventListener('message', handlePostRequest)
    }
  }, [])

  // This page is hidden from normal navigation
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">API Endpoint</h1>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-300 mb-2">Status: <span className="text-green-400">{status}</span></p>
          <p className="text-xs text-gray-400">Endpoint: /api/log</p>
        </div>
        
        {lastLog && (
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Last Log Entry:</h2>
            <div className="text-sm space-y-1">
              <p><strong>Name:</strong> {lastLog.name}</p>
              <p><strong>Activity:</strong> {lastLog.activity}</p>
              <p><strong>Dopamine:</strong> {lastLog.dopamine}</p>
              <p><strong>Timestamp:</strong> {new Date(lastLog.timestamp).toLocaleString()}</p>
            </div>
          </div>
        )}

        <div className="mt-6 text-xs text-gray-400">
          <p>This endpoint accepts POST requests with JSON data:</p>
          <pre className="bg-gray-800 p-2 rounded mt-2 text-xs">
{`{
  "name": "string",
  "timestamp": "ISO string (optional)",
  "activity": "string", 
  "dopamine": number
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default ApiEndpoint
