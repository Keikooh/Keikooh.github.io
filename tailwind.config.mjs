/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'lavanda':'#9c6bef',
				'lavanda-light': "#ae7fff",
				'intense-purple':'#B515DC',
			},
		},
	},
	plugins: [],
}
