#!/usr/bin/env node

/**
 * Email Setup Script
 * This script helps you configure the email integration for your portfolio
 */

const fs = require('fs');
const path = require('path');

console.log('📧 Email Integration Setup');
console.log('========================\n');

// Check if .env.local exists
const envLocalPath = path.join(process.cwd(), '.env.local');
const envExamplePath = path.join(process.cwd(), 'env.example');

if (fs.existsSync(envLocalPath)) {
  console.log('✅ .env.local file already exists');
} else {
  console.log('📝 Creating .env.local file for local development...');
  
  // Read from env.example
  if (fs.existsSync(envExamplePath)) {
    const envExample = fs.readFileSync(envExamplePath, 'utf8');
    fs.writeFileSync(envLocalPath, envExample);
    console.log('✅ Created .env.local file from env.example');
  } else {
    // Create basic .env.local
    const basicEnv = `# Email Configuration
# Choose ONE email service (EmailJS or SendGrid)

# EmailJS Configuration (Recommended for simplicity)
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here

# SendGrid Configuration (Alternative option)
# VITE_SENDGRID_API_KEY=your_api_key_here
# VITE_SENDGRID_FROM_EMAIL=your-verified-email@domain.com
# VITE_SENDGRID_TO_EMAIL=ethan@example.com

# OpenAI Configuration (for chat assistant)
VITE_OPENAI_API_KEY=your_openai_api_key

# Debug Mode (optional)
VITE_DEBUG_EMAIL=false
`;
    fs.writeFileSync(envLocalPath, basicEnv);
    console.log('✅ Created basic .env.local file');
  }
}

console.log('\n📋 Next Steps:');
console.log('1. Follow the EMAIL_SETUP.md guide to set up EmailJS or SendGrid');
console.log('2. Update your .env.local file with your actual credentials');
console.log('3. Add the same credentials as GitHub repository secrets for production');
console.log('4. Test locally with: npm run dev');
console.log('5. Deploy with: git push (will trigger GitHub Actions)');

console.log('\n🔐 GitHub Secrets to Add:');
console.log('- VITE_EMAILJS_SERVICE_ID');
console.log('- VITE_EMAILJS_TEMPLATE_ID');
console.log('- VITE_EMAILJS_USER_ID');
console.log('- VITE_SENDGRID_API_KEY (if using SendGrid)');
console.log('- VITE_SENDGRID_FROM_EMAIL (if using SendGrid)');
console.log('- VITE_SENDGRID_TO_EMAIL (if using SendGrid)');

console.log('\n📖 For detailed instructions, see: EMAIL_SETUP.md'); 