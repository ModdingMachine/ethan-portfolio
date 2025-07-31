# Ethan Orr - AI Automation Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite, featuring an AI-powered chat assistant.

## 🚀 Features

- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS
- **AI Chat Assistant**: Powered by OpenAI GPT-4o-mini
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Chat**: Interactive AI assistant for portfolio inquiries
- **Professional Sections**: Hero, About, Skills, Experience, Projects, and Contact

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **AI**: OpenAI GPT-4o-mini (direct API integration)
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [bun](https://bun.sh/)
- [Git](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ethan-ai-forge
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

### 3. Environment Setup

1. Copy the example environment file:
```bash
cp env.example .env.local
```

2. Edit `.env.local` and add your configuration:
```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI API Key (required for chat assistant)
VITE_OPENAI_API_KEY=your_openai_api_key

# Development Server Configuration
VITE_DEV_SERVER_PORT=3000
VITE_DEV_SERVER_HOST=localhost
```

### 4. Get Required API Keys

#### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Add it to your `.env.local` file

**Note**: The app now uses direct OpenAI API integration, so no backend setup is required.

### 5. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using bun
bun dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
ethan-ai-forge/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ChatAssistant.tsx
│   │   └── EmbeddedChatAssistant.tsx
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   │   └── chat.ts         # Local chat functionality
│   └── assets/             # Static assets
├── public/                 # Public assets
└── dist/                   # Build output
```

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### Other Platforms
The app can be deployed to any static hosting platform that supports React applications.

## 🔧 Configuration

### Customizing the Portfolio

1. **Personal Information**: Update content in the component files:
   - `src/components/HeroSection.tsx`
   - `src/components/AboutSection.tsx`
   - `src/components/SkillsSection.tsx`
   - `src/components/ExperienceSection.tsx`
   - `src/components/ProjectsSection.tsx`
   - `src/components/ContactSection.tsx`

2. **AI Assistant**: Edit the system prompt in `src/lib/chat.ts`

3. **Styling**: Customize Tailwind classes and CSS variables in `src/index.css`

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OPENAI_API_KEY` | OpenAI API key | Yes (for chat) |
| `VITE_DEV_SERVER_PORT` | Development server port | No (default: 3000) |
| `VITE_DEV_SERVER_HOST` | Development server host | No (default: localhost) |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `.env.local` or kill the process using the port
2. **API key errors**: Ensure your OpenAI API key is valid and has sufficient credits
3. **Build errors**: Clear `node_modules` and reinstall dependencies
4. **Chat not working**: Check that your OpenAI API key is set correctly

### Getting Help

If you encounter any issues:
1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure all dependencies are installed
4. Try clearing your browser cache

## 📞 Support

For support or questions, please open an issue on GitHub or contact Ethan Orr directly.

---

**Built with ❤️ by Ethan Orr** 