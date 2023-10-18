/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        'node_modules/preline/dist/*.js'
    ],
    theme: {
        fontFamily: {
            sans: "'Inter', sans-serif"
        },
        extend: {},
    },
    plugins: [require("daisyui"), require('preline/plugin'),],
}
