/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            colors: {
                neutral: {
                    'dark-blue': 'hsl(209, 23%, 22%)',
                    'very-dark-blue-bg': 'hsl(207, 26%, 17%)',
                    'very-dark-blue-text': 'hsl(200, 15%, 8%)',
                    'dark-gray': 'hsl(0, 0%, 52%)',
                    'very-light-gray': 'hsl(0, 0%, 98%)',
                    white: 'hsl(0, 0%, 100%)',
                },
            },
            fontFamily: {
                'nunita-sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
