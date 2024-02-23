/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				customWhite: '#eeeef2',
				lightWhite: '#b2b4d3',
				customViolet: '#818fe5',
				darkViolet: '#1f2335',
				linktree: '#43e660',
				parraf: '#868a9f',
				importantParraf: '#c2c7e9'
			},
		},
	},
	plugins: [],
}