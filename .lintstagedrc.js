export default {
    'src/**/*.{ts,tsx}': [
        () => 'npm run ts-check',
        'npm run lint-files',
    ],
    'src/**/*.{js,jsx}': ['npm run lint-files'],
    'src/**/*': ['npm run format-files'],
};