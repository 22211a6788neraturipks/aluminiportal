module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: true, // For debugging DaisyUI
    themes: ["light"], // Ensure the light theme is enabled
    base: false, // Disable DaisyUI base styles if needed
  },
};
