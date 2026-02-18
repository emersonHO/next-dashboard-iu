import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        ehkSky:"#C3EBFA",
        ehkSkyLight:"#EDF9FD",
        ehkPurple:"#CFCEFF",
        ehkPurpleLight:"#F1F0FF",
        ehkYellow:"#FAE27C",
        ehkYellowLight:"#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;
