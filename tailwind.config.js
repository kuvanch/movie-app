const primary = '#E30B13'
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
	content: [
		'./pages/**/*.{js, ts, jsx, tsx}',
		'./app/components/**/*.{js, ts, jsx, tsx}',
	],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			yellow: {
				700: '#F5C521',
			},
			gray: {
				300: '#D9DAE8',
				500: '#999AA5',
				600: '#66676E',
				700: '#39393F',
				800: '#242529',
				900: '#101215',
			},
		},
		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {
				fade: {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s easy-in-out',
				scaleIn: 'scaleIn .35s easy-in-outs',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: primary,
					color: '#fff',
					borderRadius: '0.65rem',
					transition: 'background-color .3s easy-in-out',
					'&:hover': {
						backgroundColor: '#ff0009',
					},
				},
				'.text-link': {
					textUnderlineOffset: 4,
					color: 'rgba(255,255,255, 0.9)',
					transition: 'text-decoration-color .3 easy-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255,255,255, .2)',
					'&:hover': {
						textDecorationColor: 'rgba(255,255,255, .9)',
					},
				},
				'.air-block': {
					borderRadius: theme('borderRadius.layout'),
					backgroundColor: theme('colors.gray.950'),
					color: theme('colors.white'),
					boxShadow: theme('boxShadow.lg'),
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0,0,0, .4)',
					},
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},
					'.flex-center-between': {
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					},
					'.image-like-lg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
