/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A5F",
        secondary: "#1e3a8a",
        accent: "#10B981",
        border: "#E5E7EB",
        black: "#1F2937",
        slate: {
          50: '#F8FAFC',
          100: '#f1f5f9',
          200: '#E5E7EB',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#1F2937',
          950: '#0b0f19',
        }
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(30, 58, 95, 0.08), 0 4px 12px -4px rgba(30, 58, 95, 0.04)',
      }
    },
  },
  plugins: [],
}