/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'custom-calc': 'calc(100vh - 80px)',
				'custom--calc': 'calc(100vh - 102px)'
			},
			fontFamily: {

			},
			colors: {
				'rose': {
					'50': '#fff0f9',
					'100': '#ffe3f6',
					'200': '#ffc6ec',
					'300': '#ff98db',
					'400': '#ff58c1',
					'500': '#ff27a5',
					'600': '#ff0080',
					'700': '#df0064',
					'800': '#b80053',
					'900': '#980348',
					'950': '#5f0026',
				},

			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
