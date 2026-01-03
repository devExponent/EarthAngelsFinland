


# Earth Angels Finland — Website (React + TypeScript + Vite)

A bilingual (English/Finnish) website for Earth Angels of Finland built with **React**, **TypeScript**, and **Vite**, featuring client-side routing and UI translations powered by i18next/react-i18next. [web:1006]

## Overview

This project provides a modern application experience with fast development/build tooling (Vite) and a structured UI that can be extended as the organization’s content grows.  
The interface supports switching between English and Finnish at runtime using `i18n.changeLanguage(...)`, and components translate using the `useTranslation()` hook. [web:1087][web:1006]

## Key features

- **Internationalization (EN/FI)**
  - Runtime language switch using `i18n.changeLanguage("en" | "fi")`. [web:1087]
  - Component-level translation using `useTranslation()` + `t("key.path")`. [web:1006]
  - Language selection persisted with `localStorage` (so user preference remains after refresh).
- **Routing**
  - Client-side navigation with React Router (e.g., Home, Events, About, Contact).
- **Type-safe development**
  - Built with TypeScript for improved maintainability and safer refactoring.

## How translations work

1. **Initialize i18next** in `src/i18n.ts` and import it once in `main.tsx`.
2. In any component that contains text, use:
   - `const { t } = useTranslation();` [web:1006]
   - Replace hardcoded strings with `t("some.key")`.


## Common tasks

### Install dependencies
```bash
npm install


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
