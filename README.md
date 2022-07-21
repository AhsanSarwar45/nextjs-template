# Next JS Portfolio Template

A template built on the following stack:

-   [Next.js](https://nextjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Chakra UI](https://chakra-ui.com/) for styled components
-   [Framer Motion](https://framer.com/motion/) for animations
-   [Cypress](https://cypress.io/) for e2e, component and unit testing
-   [Formik](https://jaredpalmer.com/formik/) for form validation
-   [React-icons](https://react-icons.netlify.com/) for icons

Also contains common components that I use in my projects. You can delete them if you don't need them.

The components follow the following conventions:

```ts
-folderName | // in camelCase
    -index.js | // to export components and types
    -types.ts | // for types and interfaces
    -animations.ts | // for animations
    -componentName.ts; // where the component is implemented (in camelCase)
```

There is a script to generate components with all the required files. Use it like this:

```bash
npm run gen-component ComponentName
```
