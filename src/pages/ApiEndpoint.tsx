import { useEffect, useState } from 'react'
import { logActivity, handleShortcutRequest, LogEntry } from '@/lib/api-client'

const ApiEndpoint = () => {
  const [status, setStatus] = useState<string>('Ready')
  const [lastLog, setLastLog] = useState<LogEntry | null>(null)

  useEffect(() => {
    // Handle Apple Shortcut requests via URL parameters
    const handleURLRequest = () => {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.has('name') && urlParams.has('activity') && urlParams.has('dopamine')) {
        setStatus('Processing...')
        
        const result = handleShortcutRequest()
        if (result.success && result.data) {
          setLastLog(result.data as LogEntry)
          setStatus('Success!')
          setTimeout(() => setStatus('Ready'), 3000)
        } else {
          setStatus(`Error: ${result.error}`)
        }
      }
    }

    // Handle direct API calls (for testing)
    const handleDirectAPI = async (data: any) => {
      try {
        setStatus('Processing...')
        const result = await logActivity(data)
        
        if (result.success) {
          setLastLog(data)
          setStatus('Success!')
          setTimeout(() => setStatus('Ready'), 3000)
        } else {
          setStatus(`Error: ${result.error}`)
        }
      } catch (error) {
        setStatus(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      }
    }

    // Expose the API globally for testing
    ;(window as any).logActivity = handleDirectAPI

    // Check for URL parameters on load
    handleURLRequest()

    return () => {
      // Cleanup if needed
    }
  }, [])

  // This page is hidden from normal navigation
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">API Endpoint</h1>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-300 mb-2">Status: <span className="text-green-400">{status}</span></p>
          <p className="text-xs text-gray-400">Endpoint: /api/log (GitHub Pages compatible)</p>
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
          <p>This endpoint accepts URL parameters for Apple Shortcuts:</p>
          <pre className="bg-gray-800 p-2 rounded mt-2 text-xs">
{`https://ethanorr.me/api/log?name=John&activity=Workout&dopamine=8`}
          </pre>
          <p className="mt-2">Or direct API calls:</p>
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
