import { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import TailwindScrollBar from 'tailwind-scrollbar';

const config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: { extend: { fontFamily: { sans: ['Lato', ...fontFamily.sans] } } },
	plugins: [TailwindScrollBar],
} satisfies Config;

export default config;
