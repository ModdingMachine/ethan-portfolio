# Email Integration Setup Guide

This guide will help you set up the email system for your portfolio contact form. The system supports both EmailJS and SendGrid as email providers.

## 🚀 Quick Setup Options

### Option 1: EmailJS (Recommended for simplicity)

EmailJS is a client-side email service that doesn't require a backend server.

#### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

#### Step 2: Configure EmailJS Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note your **Service ID** (e.g., `service_abc123`)

#### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Submission from {{from_name}}

Hello Ethan,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Contact Form
```

4. Note your **Template ID** (e.g., `template_xyz789`)

#### Step 4: Get Your User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

#### Step 5: Configure GitHub Secrets (for deployment)
Since you're using GitHub Actions for deployment, you need to add these as repository secrets:

1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret" and add these secrets:
   - `VITE_EMAILJS_SERVICE_ID` = your_service_id_here
   - `VITE_EMAILJS_TEMPLATE_ID` = your_template_id_here
   - `VITE_EMAILJS_USER_ID` = your_user_id_here

#### Step 6: Local Development (Optional)
For local development, you can create a `.env.local` file in your project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here

# Other configurations...
VITE_OPENAI_API_KEY=your_openai_api_key
```

**Note**: The `.env.local` file is only for local development. For production deployment, the GitHub Actions workflow will automatically create the `.env` file from your repository secrets.

### Option 2: SendGrid (For more control)

SendGrid is a professional email service with more features and higher sending limits.

#### Step 1: Create SendGrid Account
1. Go to [SendGrid](https://sendgrid.com/) and create an account
2. Verify your domain or use a verified sender

#### Step 2: Get API Key
1. Go to Settings → API Keys
2. Create a new API Key with "Mail Send" permissions
3. Copy the API key

#### Step 3: Configure GitHub Secrets
Add these to your GitHub repository secrets:
- `VITE_SENDGRID_API_KEY` = your_api_key_here
- `VITE_SENDGRID_FROM_EMAIL` = your-verified-email@domain.com
- `VITE_SENDGRID_TO_EMAIL` = ethan@example.com

## 🔧 Environment Configuration

### For Production (GitHub Actions)
Your GitHub Actions workflow automatically creates the `.env` file from repository secrets. No additional configuration needed.

### For Local Development
Create a `.env.local` file in your project root:

```env
# Choose ONE email service (EmailJS or SendGrid)

# EmailJS Configuration (Recommended)
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here

# OR SendGrid Configuration
# VITE_SENDGRID_API_KEY=your_api_key_here
# VITE_SENDGRID_FROM_EMAIL=your-verified-email@domain.com
# VITE_SENDGRID_TO_EMAIL=ethan@example.com

# Other existing configurations...
VITE_OPENAI_API_KEY=your_openai_api_key
```

## 🧪 Testing the Email System

### Development Testing
1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out the form and submit
4. Check the browser console for any errors
5. If EmailJS/SendGrid is not configured, it will show a simulation message

### Production Testing
1. Deploy your site via GitHub Actions
2. Test the contact form with real data
3. Check your email inbox for the test message

## 🔒 Security Considerations

### EmailJS
- ✅ No server required
- ✅ Free tier available (200 emails/month)
- ✅ Easy to set up
- ⚠️ API keys are exposed in client-side code (but this is normal for EmailJS)

### SendGrid
- ✅ More professional features
- ✅ Better analytics and tracking
- ✅ Higher sending limits
- ⚠️ Requires domain verification for production
- ⚠️ API keys should be kept secure

## 🛠️ Troubleshooting

### Common Issues

#### EmailJS Issues
- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID
- **"User ID invalid"**: Check your User ID
- **Emails not sending**: Verify your email service is properly connected

#### SendGrid Issues
- **"Unauthorized"**: Check your API key
- **"From email not verified"**: Verify your sender email
- **"Rate limit exceeded"**: Check your SendGrid plan limits

#### General Issues
- **Form not submitting**: Check browser console for JavaScript errors
- **Environment variables not loading**: Restart your development server
- **CORS errors**: Make sure you're using the correct API endpoints

### Debug Mode
To enable debug logging, add this to your `.env.local`:

```env
VITE_DEBUG_EMAIL=true
```

## 📧 Email Template Customization

### EmailJS Template Variables
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Ethan Orr)

### SendGrid Template
The SendGrid implementation uses a simple HTML template. You can customize the HTML in `src/lib/email.ts` under the `sendEmailViaSendGrid` function.

## 🚀 Deployment Notes

### GitHub Actions (Your Current Setup)
- ✅ Environment variables are automatically injected from GitHub secrets
- ✅ No additional configuration needed
- ✅ Secure handling of sensitive data

### Vercel/Netlify (Alternative)
- Environment variables need to be set in your hosting platform's dashboard
- Make sure to add all required environment variables

## 📞 Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Test with the simulation mode first
4. Check the EmailJS/SendGrid dashboards for any service issues

## 🎯 Next Steps

Once your email system is working:
1. Test with real users
2. Set up email notifications for new submissions
3. Consider adding spam protection (reCAPTCHA)
4. Add email analytics tracking
5. Set up auto-responders for immediate confirmation 