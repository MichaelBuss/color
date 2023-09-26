/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				"responsive-sm": "repeat(auto-fit, minmax(16ch, 1fr));",
				"responsive-md": "repeat(auto-fit, minmax(24ch, 1fr));",
				"responsive-lg": "repeat(auto-fit, minmax(32ch, 1fr));",
			},
			fontSize: {
				"responsive-title-xs": "clamp(0.5rem, 1vw, 4rem)",
				"responsive-title-sm": "clamp(1rem, 2vw, 6rem)",
				"responsive-title-md": "clamp(1.5rem, 3vw, 7rem)",
				"responsive-title-lg": "clamp(2rem, 6vw, 10rem)",
				"responsive-title-xl": "clamp(2.5rem, 8vw, 12rem)",
				"responsive-title-2xl": "clamp(3rem, 10vw, 14rem)",
			},
			colors: {
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
			},
			gridTemplateColumns: {
				"min-fr-min": "min-content minmax(0, 1fr) min-content",
				"fr-min": "minmax(0, 1fr) min-content",
				"min-fr": "min-content minmax(0, 1fr)",
			  },
			  gridTemplateRows: {
				"min-fr-min": "min-content minmax(0, 1fr) min-content",
				"fr-min": "minmax(0, 1fr) min-content",
				"min-fr": "min-content minmax(0, 1fr)",
			  },
		},
	},
	plugins: [],
}
