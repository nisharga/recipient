/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['Outfit_400Regular'], // Add 'Outfit-Bold' if needed
                outfitSemibold: ['Outfit_600SemiBold'], // Add 'Outfit-Bold' if needed
                allan: ['Allan_400Regular'] // Add 'Outfit-Bold' if needed
            }
        }
    },
    plugins: []
};
