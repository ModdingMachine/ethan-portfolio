import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// Form validation
export const validateContactForm = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Name validation
  if (!formData.name.trim()) {
    errors.push('Name is required');
  } else if (formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (formData.name.trim().length > 50) {
    errors.push('Name must be less than 50 characters');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!emailRegex.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.push('Message is required');
  } else if (formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (formData.message.trim().length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }

  // Spam protection - check for suspicious patterns
  const suspiciousPatterns = [
    /buy\s+viagra/i,
    /casino/i,
    /loan/i,
    /credit\s+card/i,
    /http:\/\/[^\s]+/i, // URLs (allow https)
    /www\.[^\s]+/i,
    /[A-Z]{5,}/g, // Excessive caps
  ];

  const messageText = formData.message.toLowerCase();
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(messageText)) {
      errors.push('Message contains suspicious content');
      break;
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Rate limiting (simple client-side implementation)
const RATE_LIMIT_KEY = 'contact_form_submissions';
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_HOUR = 3;

const checkRateLimit = (): boolean => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
  
  // Remove old submissions
  const recentSubmissions = submissions.filter((timestamp: number) => 
    now - timestamp < RATE_LIMIT_WINDOW
  );
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    return false;
  }
  
  // Add current submission
  recentSubmissions.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  
  return true;
};

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return {
        success: false,
        message: validation.errors.join(', ')
      };
    }

    // Check rate limiting
    if (!checkRateLimit()) {
      return {
        success: false,
        message: 'Too many submissions. Please try again later.'
      };
    }

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
      console.warn('EmailJS not configured. Using fallback simulation.');
      // Simulate email sending for development
      await new Promise(resolve => setTimeout(resolve, 1500));
      return {
        success: true,
        message: 'Email sent successfully (simulated)'
      };
    }

    // Initialize EmailJS
    emailjs.init(EMAILJS_USER_ID);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Ethan Orr',
        reply_to: formData.email,
      },
      EMAILJS_USER_ID
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email'
    };
  }
};

// Alternative: SendGrid API (if you prefer a different service)
export const sendEmailViaSendGrid = async (formData: ContactFormData): Promise<EmailResponse> => {
  const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY;
  const SENDGRID_FROM_EMAIL = import.meta.env.VITE_SENDGRID_FROM_EMAIL;
  const SENDGRID_TO_EMAIL = import.meta.env.VITE_SENDGRID_TO_EMAIL;

  // Validate form data
  const validation = validateContactForm(formData);
  if (!validation.isValid) {
    return {
      success: false,
      message: validation.errors.join(', ')
    };
  }

  // Check rate limiting
  if (!checkRateLimit()) {
    return {
      success: false,
      message: 'Too many submissions. Please try again later.'
    };
  }

  if (!SENDGRID_API_KEY) {
    console.warn('SendGrid not configured. Using fallback simulation.');
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      success: true,
      message: 'Email sent successfully (simulated)'
    };
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: SENDGRID_TO_EMAIL, name: 'Ethan Orr' }],
            subject: `New Contact Form Submission from ${formData.name}`,
          },
        ],
        from: { email: SENDGRID_FROM_EMAIL, name: 'Portfolio Contact Form' },
        reply_to: { email: formData.email, name: formData.name },
        content: [
          {
            type: 'text/html',
            value: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Message:</strong></p>
              <p>${formData.message.replace(/\n/g, '<br>')}</p>
            `,
          },
        ],
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('SendGrid error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email'
    };
  }
}; 