/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                brand: '#ff0000',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
