export default {
    '*.{js,jsx,ts,tsx}': ['npm run lint-files -- --fix', 'npm run format-files --'],
    '*.{css,json,md,html,yml,yaml}': ['npm run format-files --'],
    'src/**/*.{ts,tsx}': [() => 'npm run ts-check'],
};
