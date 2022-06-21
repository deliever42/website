/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.vue', 'index.html'],
    theme: {
        extend: {
            screens: {
                xs: '440px'
            }
        },
        container: {
            center: true,
            padding: '0'
        }
    }
};
