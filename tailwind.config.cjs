/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"gridTemplateColumns": {
				"responsive-sm": "repeat(auto-fit, minmax(16ch, 1fr));",
				"responsive-md": "repeat(auto-fit, minmax(24ch, 1fr));",
				"responsive-lg": "repeat(auto-fit, minmax(32ch, 1fr));",
			},
			"fontSize": {
				"responsive-title": "clamp(2rem, 6vw, 10rem)",
			},
			"colors": {
				"srgb-red": "color(srgb 100% 0% 0% / 100%)",
				"srgb-green": "color(srgb 0% 100% 0% / 100%)",
				"srgb-blue": "color(srgb 0% 0% 100% / 100%)",
				"srgb-yellow": "color(srgb 100% 100% 0% / 100%)",
				"srgb-cyan": "color(srgb 0% 100% 100% / 100%)",
				"srgb-purple": "color(srgb 50% 0% 50% / 100%)",
				"srgb-pink": "color(srgb 100% 0% 50% / 100%)",
				"p3-red": "color(display-p3 100% 0% 0% / 100%)",
				"p3-green": "color(display-p3 0% 100% 0% / 100%)",
				"p3-blue": "color(display-p3 0% 0% 100% / 100%)",
				"p3-yellow": "color(display-p3 100% 100% 0% / 100%)",
				"p3-cyan": "color(display-p3 0% 100% 100% / 100%)",
				"p3-purple": "color(display-p3 50% 0% 50% / 100%)",
				"p3-pink": "color(display-p3 100% 0% 50% / 100%)",
			}
		},
	},
	plugins: [],
}
