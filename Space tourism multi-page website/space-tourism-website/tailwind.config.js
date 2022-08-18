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
        backgroundImage: {
            'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
            'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
            'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",

            'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
            'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
            'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",

            'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
            'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
            'home-mobile': "url('/assets/home/background-home-mobile.jpg')",

            'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
            'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
            'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')",

            
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
