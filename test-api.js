// Test script for the API endpoint
const testAPI = async () => {
  const testData = {
    name: "Test User",
    activity: "Testing the API endpoint",
    dopamine: 8
  }

  try {
    console.log('Testing API endpoint...')
    console.log('URL: https://ethanorr.me/api/log')
    console.log('Data:', testData)

    const response = await fetch('https://ethanorr.me/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    })

    const result = await response.json()
    
    if (response.ok) {
      console.log('✅ API test successful!')
      console.log('Response:', result)
    } else {
      console.log('❌ API test failed!')
      console.log('Status:', response.status)
      console.log('Error:', result)
    }
  } catch (error) {
    console.log('❌ API test failed with error:', error.message)
  }
}

// Test health endpoint
const testHealth = async () => {
  try {
    console.log('\nTesting health endpoint...')
    const response = await fetch('https://ethanorr.me/api/health')
    const result = await response.json()
    
    if (response.ok) {
      console.log('✅ Health check successful!')
      console.log('Response:', result)
    } else {
      console.log('❌ Health check failed!')
      console.log('Status:', response.status)
    }
  } catch (error) {
    console.log('❌ Health check failed with error:', error.message)
  }
}

// Run tests
console.log('🚀 Starting API tests...\n')
testHealth().then(() => {
  setTimeout(testAPI, 1000) // Wait 1 second between tests
})
