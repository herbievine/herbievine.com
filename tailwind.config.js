module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
        },
        extend: {},
    },
    variants: {
        extend: {
            borderRadius: ['first', 'last']
        },
    },
    plugins: [],
}
