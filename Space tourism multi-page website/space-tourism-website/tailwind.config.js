/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
		colors:{
			neutral: {
				'white': 'hsl(0, 0%, 100%)',
				'dark-blue': 'hsl(230, 35%, 7%)',
                'black': 'black'
			},
			primary: {
				'light-purple': 'hsl(231, 77%, 90%)'
			}
		},
		fontFamily: {
			barlow: ['Barlow', ...defaultTheme.fontFamily.sans],
			'barlow-condensed': [
				'Barlow Condensed',
				...defaultTheme.fontFamily.sans,
			],
			bellefair: ['Bellefair', ...defaultTheme.fontFamily.sans],
		},
        screens: {
            'tablet': '375px',
            'desktop': '768px'
        },
        extend: {
			// container: {
            //     center: true,
            //     padding: {
            //         DEFAULT: '1rem',
            //         sm: '2rem',
            //         lg: '4rem',
            //         xl: '5rem',
            //         '2xl': '6rem',
            //     },
            // },
			
        },
    },
    plugins: [],
};
