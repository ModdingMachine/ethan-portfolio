#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Ethan Orr Portfolio Setup\n');

// Check if .env.local already exists
if (fs.existsSync('.env.local')) {
  console.log('⚠️  .env.local already exists. Skipping environment setup.');
  console.log('You can manually edit .env.local if needed.\n');
} else {
  console.log('📝 Setting up environment variables...\n');
  
  // Copy env.example to .env.local
  if (fs.existsSync('env.example')) {
    fs.copyFileSync('env.example', '.env.local');
    console.log('✅ Created .env.local from env.example');
    console.log('📋 Please edit .env.local and add your OpenAI API key for chat functionality.\n');
  } else {
    console.log('❌ env.example not found. Please create .env.local manually.');
  }
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  console.log('Run: npm install (or yarn install / bun install)\n');
} else {
  console.log('✅ Dependencies already installed');
}

console.log('🎯 Next steps:');
console.log('1. Edit .env.local and add your OpenAI API key');
console.log('2. Run: npm run dev');
console.log('3. Open http://localhost:3000 in your browser\n');

console.log('📚 For more information, see README.md');

rl.close(); 