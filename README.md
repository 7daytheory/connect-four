# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
"# connect-four" 

## Tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer

```bash
npx tailwindcss init -p

<p>Configure your tailwind config file to specify where tailwind should look for your html, jsx, components</p>
```bash
"./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",

<p>Add to a css file that is imported into main or app.jsx</p>
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;

