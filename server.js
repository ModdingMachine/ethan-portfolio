const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3001;

// Supabase configuration
const supabaseUrl = 'https://vrsfkbcslilvvbolarbe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2ZrYmNzbGlsdnZib2xhcmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMzU3ODEsImV4cCI6MjA3MDcxMTc4MX0.pPPfumXA5cQbCozdwfBkbC-1IIgTO8glUHuU9L80n4k';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint for Apple Shortcuts
app.post('/api/log', async (req, res) => {
  try {
    const { name, timestamp, activity, dopamine } = req.body;

    // Validate required fields
    if (!name || !activity || dopamine === undefined) {
      return res.status(400).json({
        error: 'Missing required fields: name, activity, and dopamine are required'
      });
    }

    // Validate dopamine is a number
    if (typeof dopamine !== 'number' || dopamine < 0 || dopamine > 10) {
      return res.status(400).json({
        error: 'Dopamine must be a number between 0 and 10'
      });
    }

    const logData = {
      name,
      timestamp: timestamp || new Date().toISOString(),
      activity,
      dopamine
    };

    const { data, error } = await supabase
      .from('logs')
      .insert([logData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({
        error: 'Failed to insert log entry',
        details: error.message
      });
    }

    console.log('Log entry inserted successfully:', data);
    res.status(200).json({
      success: true,
      message: 'Log entry created successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/log`);
});
