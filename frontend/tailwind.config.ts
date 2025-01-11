import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('daisyui'), // Only daisyUI plugin
  ],
};

// daisyUI configuration
module.exports = {
  ...config,
  daisyui: {
    themes: [ 
      { 
        greenquest: {
          primary: "#4caf50", // Red for buttons and titles
          secondary: "#e53935", // Green for user messages
          neutral: "black", // Dark gray for chat background
          "base-300": "#121212", // Dark black-gray for card background
          "primary-content": "#fefefe", // White for readability
          "secondary-content": "#c8e6c9", // Light green for inputs
          "base-100": "black",
          "base-200": "#121212"
        },
      },
    ],
  },
};

export default config;