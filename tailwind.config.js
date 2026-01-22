/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#FF7043',    // Naranja principal
                    dark: '#E64A19',      // Hover
                    light: '#FFAB91',     // Bordes suaves
                    soft: '#FFF3E0',      // Fondos de sección
                    text: '#4A4A4A',      // Gris de lectura
                    bg: '#F8F9FA',        // Fondo general
                    black: '#1A1A1B',     // Hero / Footer
                }
            },
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            boxShadow: {
                premium: '0 15px 35px rgba(0, 0, 0, 0.1)',
            }
        },
    },
    plugins: [],
}