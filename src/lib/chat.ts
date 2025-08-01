// Function to read system prompt from text file
async function getSystemPrompt(): Promise<string> {
  try {
    const response = await fetch('/src/lib/system-prompt.txt');
    if (!response.ok) {
      throw new Error('Failed to load system prompt');
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading system prompt:', error);
    // Fallback system prompt if file cannot be loaded
    return `You are an AI assistant for Ethan's portfolio website. You help visitors learn about Ethan's work, skills, and projects. Ethan is an automation engineer and entrepreneur based in Colorado Springs, specializing in AI integration and IoT systems. Be helpful and professional. - Note that you are unable to access all of ethan's information currently, but it is being resolved...`;
  }
}

// Local chat function to replace Supabase
export async function sendChatMessage(message: string): Promise<string> {
  const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  // Debug logging
  console.log('API Key check:', {
    hasKey: !!openAIApiKey,
    keyLength: openAIApiKey?.length,
    keyStartsWith: openAIApiKey?.substring(0, 7),
    envKeys: Object.keys(import.meta.env).filter(key => key.includes('OPENAI'))
  });
  
  if (!openAIApiKey) {
    // Fallback responses when API key is not configured
    const fallbackResponses = [
      "(AI API Unavaliable) I'd be happy to help! Since the AI integration isn't fully configured yet, here are some key things about Ethan:\n\n**Background:** Ethan is an automation engineer and entrepreneur based in Colorado Springs, specializing in AI integration and IoT systems.\n\n**Current Projects:** He's working on HydroQube (smart hydration tracking) and an AI lecture transcription system.\n\n**Skills:** Python, AutoCAD, ESP32, Unity, and various automation tools.\n\nFeel free to reach out to Ethan directly for more detailed conversations!",
      "(AI API Unavaliable) Great question! Ethan is currently focused on building innovative IoT solutions and AI-powered automation systems. His latest project, HydroQube, uses ESP32 sensors to track hydration levels in a 3cm cube.\n\n**Key Strengths:**\n- Start-to-finish product development\n- Embedded systems and IoT\n- AI integration and automation\n- Game design and Unity development\n\nFor specific technical questions or collaboration opportunities, Ethan would love to connect directly!",
      "(AI API Unavaliable) Ethan is a detail-oriented automation engineer who loves solving complex problems with elegant solutions. He's currently working on several projects including an AI-powered lecture transcription system and smart IoT devices.\n\n**Recent Work:**\n- HydroQube: Smart hydration tracking device\n- Cookbook AI: Recipe generation app\n- Mini Hydroponics Tower: Automated growing system\n\nHis approach emphasizes organization, clarity, and functional decomposition. He's always eager to discuss new opportunities!",
      "(AI API Unavaliable) Ethan is an automation engineer and entrepreneur who believes in 'solving problems with products.' He has experience with Python, AutoCAD automation, ESP32 development, and AI integration.\n\n**Current Focus:** Building innovative IoT solutions and AI-powered automation systems. He's particularly interested in projects that combine hardware and software to solve real-world problems.\n\nFor detailed discussions about his work or potential collaborations, Ethan would be happy to connect directly!"
    ];
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a random fallback response
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }

  try {
    // Get system prompt from text file
    const systemPrompt = await getSystemPrompt();
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-nano',
        messages: [
          { 
            role: 'system', 
            content: systemPrompt
          },
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
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error in chat function:', error);
    throw error;
  }
} 