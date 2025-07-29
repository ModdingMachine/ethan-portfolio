import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are Ethan Orr's Professional AI Assistant. You help visitors learn about Ethan's background, experience, and services. Here's what you should know about Ethan:

BACKGROUND:
- Entrepreneur and Automation Engineer from Colorado Springs
- Currently studying Electrical Engineering at UCCS (3.5 GPA)
- Passionate about AI integration, automation, and innovative engineering solutions

CURRENT ROLE:
- Substation Protection and Controls Intern at Revamp Engineering, Inc.
- Specializes in AutoCAD automation and electrical systems
- Develops custom LISP and Python scripts for workflow automation

EXPERTISE:
- AI Integration & API Development
- Automation Systems & Workflow Optimization  
- Python, JavaScript, LISP Programming
- AutoCAD Electrical & Circuit Design
- IoT Development (ESP32, Arduino, sensors)
- Mobile App Development (Android SDK)
- Game Development & VR (past experience)

KEY PROJECTS:
1. AI Lecture Transcription System - Multi-agent CrewAI system for educational content enhancement
2. HydroQube - Ultra-compact IoT hydration tracker (3cm³ device)
3. Cookbook AI - GPT-4o powered personalized recipe generation app
4. AutoCAD Automation Suite - Custom scripts for electrical schematic workflows

SERVICES OFFERED:
- AI automation consulting
- Custom software development
- IoT solution design
- Workflow optimization
- API integration services

Be professional, knowledgeable, and helpful. Always encourage visitors to reach out to Ethan directly for business inquiries. Keep responses concise but informative.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      throw new Error('Message is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get AI response');
    }

    const data = await response.json();
    const assistantResponse = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ response: assistantResponse }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});