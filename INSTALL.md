# 🚀 Quick Installation Guide

## Prerequisites
- Node.js (v18 or higher) - [Download here](https://nodejs.org/)
- Git (optional, for version control)

## Windows Setup (Easiest)

1. **Double-click `setup.bat`** to set up environment variables
2. **Install dependencies**: Open Command Prompt/PowerShell and run:
   ```
   npm install
   ```
3. **Configure API Key**: Edit `.env.local` and add your OpenAI API key
4. **Start the app**: Double-click `start.bat` or run:
   ```
   npm run dev
   ```
5. **Open browser**: Go to `http://localhost:3000`

## Manual Setup (All Platforms)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment**:
   ```bash
   cp env.example .env.local
   ```

3. **Add your OpenAI API key** to `.env.local`:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**: Go to `http://localhost:3000`

## Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Add it to your `.env.local` file

## Troubleshooting

- **Port already in use**: Change port in `.env.local` or kill the process
- **API key errors**: Ensure your OpenAI API key is valid
- **Build errors**: Delete `node_modules` and run `npm install` again

## Need Help?

- Check the full `README.md` for detailed instructions
- Open an issue on GitHub
- Contact Ethan Orr directly

---

**That's it! Your portfolio website should now be running locally.** 🎉 