/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				sm: '375px',
				lg: '1440px'
			},
			colors: {
				primary: {
					marineBlue: 'hsl(213, 96%, 18%)',
					purplishBlue: 'hsl(243, 100%, 62%)',
					pastelBlue: 'hsl(228, 100%, 84%)',
					lightBlue: 'hsl(206, 94%, 87%)',
					strawberryRed: 'hsl(354, 84%, 57%)'
				},
				neutral: {
					coolGray: 'hsl(231, 11%, 63%)',
					lightGray: 'hsl(229, 24%, 87%)',
					magnolia: 'hsl(217, 100%, 97%)',
					alabaster: 'hsl(231, 100%, 99%)',
					white: 'hsl(0, 0%, 100%)'
				}
			},
			fontSize: {
				base: '16px'
			},
			backgroundImage: {
				sidebarMobile: 'url("/images/bg-sidebar-mobile.svg")',
				sidebarDesktop: 'url("/images/bg-sidebar-desktop.svg")'
			}
		}
	},
	plugins: []
};
