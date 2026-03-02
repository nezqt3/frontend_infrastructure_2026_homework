export default {
    '*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'prettier --write'],
    '*.{css,json,md,html,yml,yaml}': ['prettier --write'],
    'src/**/*.{ts,tsx}': [() => 'npm run ts-check'],
};
