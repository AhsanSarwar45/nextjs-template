# Next JS Portfolio Template

A template built on the following stack:

-   [Next.js](https://nextjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Chakra UI](https://chakra-ui.com/) for styled components
-   [Framer Motion](https://framer.com/motion/) for animations
-   [Cypress](https://cypress.io/) for e2e, component and unit testing
-   [Formik](https://jaredpalmer.com/formik/) for form validation
-   [React-icons](https://react-icons.netlify.com/) for icons
-   [SVGR](https://react-svgr.com/) for SVG
-   [Sanity](https://www.sanity.io/) for content management (optional)

## Table of Contents

1. [Components](#components)
    1. [Generate Components](#generate-components)
    1. [Page](#page)
    1. [Nav](#nav)
1. [Theming](#theming)
1. [CMS](#cms)
1. [Testing](#testing)

## Components

The template contains common components that I use in my projects. You can delete them if you don't need them.

The component files follow the following conventions (all files and directories are in camelCase):

```
📁 folderName
    📄 index.js # to export components and types
    📄 types.ts # for types and interfaces
    📄 animations.ts # for animations
    📄 componentName.ts # implementation
```

## Generate Components

There is a script to generate components with all the required files. Use it like this:

```bash
npm run gen-component ComponentName
```

### Page

A utility component that contains a Head, a [Navbar](#nav) and a Footer.

```ts
<Page title="About">
    <p>Page content</p>
</Page>
```

An animated variant is also available:

```ts
<AnimatedPage title="About">
    <p>Page content</p>
</AnimatedPage>
```

It has a fade animation by default. The animations are powered by [Framer Motion](https://framer.com/motion/). You can specify your own animation using the `animationVariants` prop.

```ts
<AnimatedPage
    title="About"
    animationVariants=
    {
        enter: { opacity: 0 },
        exit: { opacity: 0 },
        animate: { opacity: 1 },
    }
>
    <p>Page content</p>
</AnimatedPage>
```

### Nav

A simple nav component with a logo and links.

```ts
<Nav />
```

A collapsible, full-screen nav for mobile devices is also available:

```ts
<CollapsibleNav />
```

To switch to the collapsible navbar on mobile (this has already been done by default in the template)

```ts
const isSmallScreen = useBreakpointValue({
    base: true,
    xs: true,
    md: false,
});

return isSmallScreen ? <CollapsibleNav /> : <Nav />;
```

You can edit the breakpoints in `theme/core/breakpoints.ts`

## Theming

The project already has Chakra's [recommended](https://chakra-ui.com/docs/styled-system/customize-theme#scaling-out-your-project) theme directory structure set up.

```
📁 theme
    📄 index.js  # Theme entrypoint
    📄 styles.js  # Global style overrides
    📁 core
        📄 borders.js  # Border overrides
        📄 colors.js  # Color overrides
        📄 # and so on...
    📁 components
        📄 button.js  # Button overrides
        📄 input.js  # Input overrides
        📄 # and so on...
```

Check out the Chakra [docs](https://chakra-ui.com/docs/styled-system/customize-theme) on how to customize the theme.
Theme typings have already been set up.

## CMS

You can use any CMS with this template. There is a script that sets up a [Sanity](https://www.sanity.io/) CMS for you. Use it like this:

```bash
npm run init-cms
```

It sets up the Sanity studio inside the `cms` directory. It also sets up types generation for your schema. You can update the types like so:

```bash
npx sanity-codegen
```

To start the studio:

```bash
sanity start
```

To use the client:

```ts
import sanity from "@/cms/sanityClient";
export const getStaticProps = async () => {
    // `posts` is a schema
    const posts = await sanity.getAll("posts");
    return {
        props: {
            galleryImages,
        },
    };
};
```

## Testing

[Cypress](https://cypress.io/) is installed as the default testing tool for e2e, component and unit testing.
