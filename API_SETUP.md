# API Endpoint Setup for Apple Shortcuts

This setup creates a hidden API endpoint that allows Apple Shortcuts to log activity data to your Supabase database.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the API Server
```bash
npm run server
```

The API server will run on `http://localhost:3001`

### 3. Test the Endpoint
```bash
curl -X POST http://localhost:3001/api/log \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "activity": "Testing the API",
    "dopamine": 7
  }'
```

## 📱 Apple Shortcut Setup

### Step-by-Step Instructions

1. **Open Shortcuts App** on your iPhone/iPad
2. **Create New Shortcut** by tapping the + button
3. **Add the following actions in order:**

#### Action 1: Ask for Input
- **Prompt:** "What's your name?"
- **Variable Name:** `name`

#### Action 2: Ask for Input  
- **Prompt:** "What activity did you do?"
- **Variable Name:** `activity`

#### Action 3: Ask for Input
- **Prompt:** "Dopamine level (0-10)?"
- **Input Type:** Number
- **Variable Name:** `dopamine`

#### Action 4: Get Current Date
- **Format:** ISO 8601
- **Variable Name:** `timestamp`

#### Action 5: Get Contents of URL
- **URL:** `https://ethanorr.me/api/log?name={{name}}&activity={{activity}}&dopamine={{dopamine}}&timestamp={{timestamp}}`
- **Method:** GET

#### Action 6: Show Result
- **Text:** "Activity logged successfully!"

### 4. Test Your Shortcut
Run the shortcut and verify data appears in your Supabase `logs` table.

## 🗄️ Database Schema

Make sure your Supabase `logs` table has the following columns:

```sql
CREATE TABLE logs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  activity TEXT NOT NULL,
  dopamine INTEGER CHECK (dopamine >= 0 AND dopamine <= 10),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🌐 Production Deployment

### For GitHub Pages (Current Setup)
1. The API endpoint is now compatible with GitHub Pages
2. Uses client-side Supabase integration
3. Apple Shortcut uses URL parameters instead of POST requests
4. No server-side code required

### For Other Static Hosts
1. Deploy your React app to any static host
2. The API will work the same way using client-side Supabase
3. No additional configuration needed

## 🔧 Configuration

### Environment Variables (Optional)
```bash
PORT=3001  # Default API server port
```

### API Endpoints

- **POST** `/api/log` - Log activity data
- **GET** `/api/health` - Health check

### Request Format
```json
{
  "name": "string (required)",
  "timestamp": "string (optional, ISO format)",
  "activity": "string (required)", 
  "dopamine": "number (required, 0-10)"
}
```

### Response Format
```json
{
  "success": true,
  "message": "Log entry created successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "timestamp": "2024-01-15T10:30:00Z",
    "activity": "Coding",
    "dopamine": 8
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **"Connection refused"**
   - Make sure the API server is running (`npm run server`)
   - Check the port number in the Apple Shortcut URL

2. **"Missing required fields"**
   - Ensure all required fields (name, activity, dopamine) are provided
   - Check that dopamine is a number between 0-10

3. **"Failed to insert log entry"**
   - Verify your Supabase credentials are correct
   - Check that the `logs` table exists with the correct schema

4. **CORS errors**
   - The server includes CORS headers, but ensure your domain is allowed

### Debug Mode
Run both the API server and React dev server:
```bash
npm run dev:full
```

## 📊 Data Access

You can view your logged data in:
1. **Supabase Dashboard** → Table Editor → `logs` table
2. **Your portfolio website** (if you add a data visualization component)

## 🔒 Security Notes

- The API endpoint is currently open (no authentication)
- Consider adding API key authentication for production use
- The endpoint is hidden from normal website navigation
- Monitor your Supabase usage to avoid rate limits

## 📝 Example Usage

### Via Apple Shortcut
1. Run the shortcut
2. Enter your name: "John"
3. Enter activity: "Morning workout"
4. Enter dopamine level: 8
5. Data is automatically logged to Supabase

### Via cURL
```bash
curl -X POST http://localhost:3001/api/log \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "activity": "Morning workout", 
    "dopamine": 8
  }'
```

## 🎯 Next Steps

1. **Add Data Visualization** - Create charts/graphs to display your activity data
2. **Add Authentication** - Implement API key or user authentication
3. **Add Notifications** - Send notifications when data is logged
4. **Add Analytics** - Track patterns in your dopamine levels over time
