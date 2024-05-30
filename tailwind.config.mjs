/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"green": "#00E16F",
				'dark-blue': '#000C5C',
				'light-blue': '#00C2FF'
			},
			fontFamily: {
				"Baibamjuree": 'BaiBamjuree',
			},
			backgroundImage: {
				'Planos': "url('./images/bgPlanos.png')"
			}
		},
	},
	plugins: [],
}
