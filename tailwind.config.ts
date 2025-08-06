import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
			},
			colors: {
				// Legacy support
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Apple System Colors
				'apple-blue': {
					DEFAULT: 'hsl(var(--apple-blue))',
					light: 'hsl(var(--apple-blue-light))',
					dark: 'hsl(var(--apple-blue-dark))',
					bg: 'hsl(var(--apple-blue-bg))',
					'bg-light': 'hsl(var(--apple-blue-bg-light))'
				},
				'apple-gray': {
					DEFAULT: 'hsl(var(--apple-gray))',
					light: 'hsl(var(--apple-gray-light))',
					medium: 'hsl(var(--apple-gray-medium))',
					'light-bg': 'hsl(var(--apple-gray-light-bg))',
					bg: 'hsl(var(--apple-gray-bg))'
				},
				'apple-green': {
					DEFAULT: 'hsl(var(--apple-green))',
					light: 'hsl(var(--apple-green-light))',
					bg: 'hsl(var(--apple-green-bg))'
				},
				'apple-orange': {
					DEFAULT: 'hsl(var(--apple-orange))',
					light: 'hsl(var(--apple-orange-light))',
					bg: 'hsl(var(--apple-orange-bg))'
				},
				'apple-red': {
					DEFAULT: 'hsl(var(--apple-red))',
					light: 'hsl(var(--apple-red-light))',
					bg: 'hsl(var(--apple-red-bg))'
				},
				'apple-purple': {
					DEFAULT: 'hsl(var(--apple-purple))',
					light: 'hsl(var(--apple-purple-light))',
					bg: 'hsl(var(--apple-purple-bg))'
				},
				// Apple System Backgrounds
				'apple-bg': {
					primary: 'hsl(var(--apple-bg-primary))',
					secondary: 'hsl(var(--apple-bg-secondary))',
					tertiary: 'hsl(var(--apple-bg-tertiary))'
				},
				// Apple System Text
				'apple-text': {
					primary: 'hsl(var(--apple-text-primary))',
					secondary: 'hsl(var(--apple-text-secondary))',
					tertiary: 'hsl(var(--apple-text-tertiary))'
				},
				// Apple System Borders
				'apple-border': {
					primary: 'hsl(var(--apple-border-primary))',
					secondary: 'hsl(var(--apple-border-secondary))'
				}
			},
			boxShadow: {
				'apple-sm': 'var(--apple-shadow-sm)',
				'apple-md': 'var(--apple-shadow-md)',
				'apple-lg': 'var(--apple-shadow-lg)',
				'apple-xl': 'var(--apple-shadow-xl)',
				'glow': 'var(--shadow-glow)',
				'soft': 'var(--shadow-soft)',
				'card': 'var(--shadow-card)'
			},
			borderRadius: {
				'apple-sm': 'var(--apple-radius-sm)',
				'apple-md': 'var(--apple-radius-md)',
				'apple-lg': 'var(--apple-radius-lg)',
				'apple-xl': 'var(--apple-radius-xl)',
				'apple-2xl': 'var(--apple-radius-2xl)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'apple-xs': 'var(--apple-spacing-xs)',
				'apple-sm': 'var(--apple-spacing-sm)',
				'apple-md': 'var(--apple-spacing-md)',
				'apple-lg': 'var(--apple-spacing-lg)',
				'apple-xl': 'var(--apple-spacing-xl)',
				'apple-2xl': 'var(--apple-spacing-2xl)',
				'apple-3xl': 'var(--apple-spacing-3xl)'
			},
			transitionDuration: {
				'apple-fast': 'var(--apple-transition-fast)',
				'apple-normal': 'var(--apple-transition-normal)',
				'apple-slow': 'var(--apple-transition-slow)',
				'2000': '2000ms'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'apple-fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'apple-scale-in': {
					from: {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'apple-float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-8px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'apple-fade-in': 'apple-fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'apple-scale-in': 'apple-scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'apple-float': 'apple-float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
