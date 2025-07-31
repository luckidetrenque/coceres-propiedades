/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// 1. COLORES PERSONALIZADOS
			colors: {
				'coceres-blue': '#38A6A4',
				'coceres-dark': '#2d8a88',
				'coceres-light': '#8BCDB0',
				'brand': {
					50: '#f0fdfc',
					100: '#ccfbf1',
					500: '#38A6A4',
					600: '#2d8a88',
					900: '#134e4a',
				}
			},
			
			// 2. FUENTES PERSONALIZADAS
			fontFamily: {
				'sans': ['Assistant', 'sans-serif'],
				'heading': ['Montserrat', 'sans-serif'],
			},
			
			// 3. ESPACIADOS CUSTOM
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			
			// 4. BREAKPOINTS PERSONALIZADOS
			screens: {
				'xs': '475px',
				'3xl': '1600px',
			},
			
			// 5. ANIMACIONES CUSTOM
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.3s ease-out',
			},
			
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				}
			},
			
			// 6. SOMBRAS PERSONALIZADAS
			boxShadow: {
				'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'hero': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			},
			
			// 7. UTILIDADES PARA EVITAR FRANJAS BLANCAS
			maxWidth: {
				'full': '100%',
				'screen': '100vw',
				'container': '1200px',
			},
			width: {
				'full': '100%',
				'screen': '100vw',
			}
		},
	},
	plugins: [
		// 8. PLUGINS POPULARES (descomenta para usar)
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/typography'),
		// require('@tailwindcss/aspect-ratio'),
		
		// 9. PLUGIN CUSTOM PARA EVITAR FRANJAS BLANCAS
		function({ addUtilities }) {
			addUtilities({
				'.full-width': {
					width: '100vw',
					marginLeft: 'calc(-50vw + 50%)',
					marginRight: 'calc(-50vw + 50%)',
				},
				'.no-horizontal-scroll': {
					overflowX: 'hidden',
					maxWidth: '100%',
				},
				'.container-content': {
					maxWidth: '1200px',
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingLeft: '1rem',
					paddingRight: '1rem',
				}
			})
		}
	],
}
