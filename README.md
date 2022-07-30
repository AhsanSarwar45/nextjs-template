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
    1. [FormInput](#forminput)
    1. [FormikInput](#formikinput)
    1. [Anchor](#anchor)
    1. [Head](#head)
    1. [Footer](#footer)
    1. [TextButton](#textbutton)
    1. [Link](#link)
    1. [Contact](#contact-optional) (optional)
1. [Theming](#theming)
1. [CMS](#cms)
1. [Testing](#testing)

## Components

The template contains common components that I use in my projects. You can delete them if you don't need them.

The component files follow the following conventions (all files and directories are in camelCase):

```
📁 folderName
    📄 componentName.ts # implementation
    📄 index.js # to export components and types
    📄 types.ts # for types and interfaces
    📄 animations.ts # for animations
    📄 # other files as required...
```

## Generate Components

There is a script to generate components with all the required files. Use it like this:

```bash
npm run gen-component ComponentName
```

### Page

A utility component that contains a [`Head`](#head), a [`Nav`](#nav) and a Footer.

```tsx
<Page title="About">
    <p>Page content</p>
</Page>
```

An animated variant with enter and exit animations is also available:

```tsx
<AnimatedPage title="About">
    <p>Page content</p>
</AnimatedPage>
```

It has a fade animation by default. The animations are powered by [Framer Motion](https://framer.com/motion/). You can specify your own animation using the `animationVariants` prop.

```tsx
<AnimatedPage
    title="About"
    animationVariants={{
        enter: { opacity: 0 },
        exit: { opacity: 0 },
        animate: { opacity: 1 },
    }}
>
    <p>Page content</p>
</AnimatedPage>
```

### Nav

A simple nav component with a logo and links.

```tsx
<Nav />
```

A collapsible, full-screen nav for mobile devices is also available:

```tsx
<CollapsibleNav />
```

To switch to the collapsible navbar on mobile (this has already been done by default in the template)

```tsx
const isSmallScreen = useBreakpointValue({
    base: true,
    xs: true,
    md: false,
});

return isSmallScreen ? <CollapsibleNav /> : <Nav />;
```

You can edit the breakpoints in `theme/core/breakpoints.ts`

### FormInput

A wrapper around the Chakra `Input` component. It adds a label, an error message as well as options to change label and error styles.

#### Props

-   `label: string`: The label text
-   `error: string`: The error message
-   `labelPosition : 'top' | 'placeholder'`: `top` is the conventional label position above the input, `placeholder` puts the label as a placeholder inside the input.
-   `errorPosition : 'bottom' | 'icon'`: `bottom` puts the error message below the input, `icon` puts the error message inside the input as an icon.

```tsx
<FormInput label="Name" isInvalid error="This field is required" />
```

### FormikInput

A wrapper around the [`FormInput`](#forminput) component that uses the [Formik](https://jaredpalmer.com/formik/) library.

#### Props

-   `fieldName: string`: The name of the field in the formik state
-   `label: string`: An optional label. If not provided, the `fieldName` is used as the label (capitalized)

```tsx
<Formik
    initialValues={{ name: "", password: "", confirmPassword: "" }}
    ...
>
    {() => (
        <FormikInput name="name"/>
        <FormikInput name="password"/>
        <FormikInput name="confirmPassword" label="Confirm Password"/>
    )}
</Formik>
```

### Anchor

A wrapper around [`NextLink`](https://nextjs.org/docs/api-reference/next/link) and `a`.

#### Props

-   `href: string`: The URL to link to
-   `isExternal: boolean`: Whether the link is external or not. External links are opened in new tabs.

```tsx
<Anchor href="https://www.google.com" isExternal>
    ...
</Anchor>
```

### Head

A wrapper around [`NextHead`](https://nextjs.org/docs/api-reference/next/head). Adds a title as well as common meta tags such as `robots`, `og`, `twitter`. Customize it to your needs. It is already included in the [`Page`](#page) component.

```tsx
<Head
    title="About"
    description="This is my about page"
    imageUrl="/public/img.png"
    robots="noimageindex"
/>
```

### Footer

A basic footer with a logo, socials and a copyright message. It is already included in the [`Page`](#page) component.

```tsx
<Footer />
```

### TextButton

A clickable plain text button with an underline animation.

```tsx
<TextButton label="Click Me" onClick={()=>{...}}>
```

### Link

A wrapper around [`Anchor`](#anchor) and [`TextButton`](#textbutton). If the current page is the same as the link, the link is underlined.

```tsx
<Link label="About" href="/about">
```

### Contact (optional)

If you quickly need a contact form, you can bootstrap a contact component with:

```bash
npm run add-contact
```

This adds

-   `nodejs-nodemailer-outlook` to send email
-   A `Contact` component in `/components` that contains some basic fields using Formik
-   A `contact` api endpoint in `/api` that sends the email
-   A `ContactData` interface in `/interfaces` that defines the contact data

## Theming

The project already has Chakra's [recommended](https://chakra-ui.com/docs/styled-system/customize-theme#scaling-out-your-project) theme directory structure set up.

```
📁 theme
    📄 index.js  # theme entrypoint
    📄 styles.js  # global style overrides
    📁 core
        📄 borders.js  # border overrides
        📄 colors.js  # color overrides
        📄 # and so on...
    📁 components
        📄 button.js  # button overrides
        📄 input.js  # input overrides
        📄 # and so on...
```

Check out the Chakra [docs](https://chakra-ui.com/docs/styled-system/customize-theme) on how to customize the theme.
Theme typings have also already been set up.

## CMS

You can use any CMS with this template. There is a script that sets up a [Sanity](https://www.sanity.io/) CMS for you. Use it like this:

```bash
npm run init-cms
```

It sets up the Sanity studio inside the `cms` directory. It also sets up types generation for your schema. You can update the types like so:

```bash
cd cms
npx sanity-codegen
```

To start the studio:

```bash
npm run cms
```

To use the client:

```ts
import sanity from "@/cms/sanityClient";

// `posts` is a schema
const posts = await sanity.getAll("posts");
```

The default client is a [sanity-codegen](https://www.sanity.io/plugins/sanity-codegen) client that allows us to use typescript for our schemas. You can use any other client you want like [next-sanity](https://github.com/sanity-io/next-sanity).

## Testing

[Cypress](https://cypress.io/) is installed as the default testing tool for e2e, component and unit testing.
