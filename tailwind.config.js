/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            animation: {
                'slide-up': 'slide-up 1s forwards',
                'fade-in': 'fadeIn 1s forwards',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.thin-scrollbar': {
                    'scrollbar-width': 'thin', // Firefox
                    '&::-webkit-scrollbar': {
                        width: '4px', // Chrome, Safari, and Opera
                        height: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888', // Scrollbar thumb color
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#555', // Scrollbar thumb hover color
                    },
                },
            });
        },
    ],
};
