/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'xl-cyan':
                    '0 20px 25px -5px hsla(180, 29%, 50%, 20%), 0 8px 10px -6px hsla(180, 29%, 50%, 20%);',
            },
            backgroundImage: {
                'header-bg-desktop': "url('/svg/bg-header-desktop.svg')",
                'header-bg-mobile': "url('/svg/bg-header-mobile.svg')",
            },
            fontFamily: {
                'league-spartan': [
                    'League Spartan',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                primary: {
                    'desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
                },
                neutral: {
                    'light-grayish-cyan': 'hsl(180, 52%, 96%)', // Background
                    'light-grayish-cyan': 'hsl(180, 31%, 95%)', // Filter Tablets
                    'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
                    'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
