# Frontend Infrastructure Homework

Небольшой интерактивный React-сервис: на странице показывается уникальный `UUID v4`, который генерируется при рендере.

## Что реализовано

- React + JSX на Vite.
- Использование внешней библиотеки из `dependencies` (не React): [`uuid`](https://www.npmjs.com/package/uuid).
- `EditorConfig` для единых правил форматирования.
- `ESLint` (flat config) с правилами:
    - `no-const-assign` (ошибка при попытке переопределить `const`);
    - `curly`;
    - `simple-import-sort/imports`;
    - `react/jsx-uses-vars`.
- `Prettier` для форматирования.
- Проверка типов TypeScript (`tsc --noEmit`).
- Pre-commit hook + `lint-staged`:
    - линтит staged `js/jsx/ts/tsx`;
    - форматирует staged файлы;
    - запускает `ts-check` для `ts/tsx`.
- NPM-скрипт деплоя в GitHub Pages: `npm run deploy`.
- GitHub Actions workflow для деплоя из ветки `master` в `gh-pages`.
- Коммиты в рабочей ветке подписаны.

## Технические детали React-части

- Библиотека для функционала: `uuid`.
- Файл генерации: `src/utils/generateUuid.js`.
- Использование в интерфейсе: `src/pages/MainScreen.jsx`.

## Команды

```bash
npm install
npm run dev
npm run ts-check
npm run lint
npm run format:check
npm run build
npm run deploy
```

## Проверка `no-const-assign`

Код:

```js
const foo = 'bar';
foo = 'baz';
```

Должен падать на ESLint с ошибкой `no-const-assign`, поэтому pre-commit не пропустит такой коммит.
