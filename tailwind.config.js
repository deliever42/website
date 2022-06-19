/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.vue', 'index.html'],
    theme: {
        extend: {
            screens: {
                xs: '440px'
            },
            colors: {
                blurple: '#5865F2'
            }
        }
    }
};
