


# Earth Angels Finland — Website (React + TypeScript + Vite)

A bilingual (EN/FI) community website and event platform for Earth Angels Finland that showcases the mission and programs (including “Say It Loud”), publishes public event listings and event details, and includes an admin dashboard to manage events and key site content.

## Overview

This project delivers a fast, modern application experience for visitors to learn about Earth Angels Finland, discover upcoming activities, and contact the team to get involved.  
Admins can maintain the site without code changes by managing events and selected public content through the administrative panel.

## Key features

- **Public website**
  - Mission and organization information.
  - Program highlights (e.g., “Say It Loud”).
  - Events listing (upcoming/past) with shareable event detail pages.
  - Contact / get-involved pathways.

- **Admin dashboard**
  - Create, edit, publish/unpublish, and delete events.
  - Manage key public-site content (e.g., announcements / featured sections).

- **Internationalization (EN/FI)**
  - Runtime language switching with i18next.
  - Translated UI text via `useTranslation()`.

- **Routing**
  - Client-side navigation with React Router (e.g., Home, Events, About, Contact).

- **Type-safe development**
  - Built with TypeScript for safer refactoring and maintainability.

## How translations work

1. Initialize i18next in `src/i18n.ts` and import it once in `main.tsx`.
2. In any component that contains text:
   - `const { t } = useTranslation();`
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
