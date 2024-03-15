const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'header-desktop-light': "url('/images/bg-desktop-light.jpg')",
                'header-mobile-light': "url('/images/bg-mobile-light.jpg')",
                'header-desktop-dark': "url('/images/bg-desktop-dark.jpg')",
                'header-mobile-dark': "url('/images/bg-mobile-dark.jpg')",
            },

            fontFamily: {
                'josephin-sans': [
                    'Josefin Sans',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                primary: {
                    'bright-blue': 'hsl(220, 98%, 61%)',
                },
                lightTheme: {
                    'very-light-gray': 'hsl(0, 0%, 98%)',
                    'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
                    'light-grayish-blue': 'hsl(233, 11%, 84%)',
                    'dark-grayish-blue': 'hsl(236, 9%, 61%)',
                    'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
                },
                darkTheme: {
                    'very-dark-blue': 'hsl(235, 21%, 11%)',
                    'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
                    'light-grayish-blue': 'hsl(234, 39%, 85%)',
                    'light-grayish-blue': 'hsl(236, 33%, 92%)',
                    'dark-grayish-blue': 'hsl(234, 11%, 52%)',
                    'very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
                    'very-dark-grayish-blue': 'hsl(237, 14%, 26%)',
                },
            },
        },
    },
    plugins: [],
};
