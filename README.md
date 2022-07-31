# Next JS Template

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

To start:

```bash
npm install
npm run dev
```

## Demo

https://ahsan-nextjs-template.vercel.app/

## Table of Contents

1. [Components](#components)
    1. [Generate Components](#generate-components)
    1. [Page](#page)
    1. [AnimatedPage](#animatedpage)
    1. [Nav](#nav)
    1. [FormInput](#forminput)
    1. [FormikInput](#formikinput)
    1. [Anchor](#anchor)
    1. [Head](#head)
    1. [Footer](#footer)
    1. [TextButton](#textbutton)
    1. [Link](#link)
    1. [Socials](#socials)
    1. [Contact](#contact-optional) (optional)
1. [Theming](#theming)
1. [CMS](#cms)
1. [Testing](#testing)
1. [Animations](#animations)
1. [SVG](#svg)
1. [Icons](#icons)
1. [CI/CD](#cicd)

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

### Generate Components

There is a script to generate components with all the required files. Use it like this:

```bash
npm run gen-component ComponentName
```

### Page

A utility component that contains a [`Head`](#head), a [`Nav`](#nav) and a [`Footer`](#footer).

```tsx
<Page title="About">
    <p>Page content</p>
</Page>
```

#### Props

-   `title: string`: The title of the page
-   `description: string`: The description of the page to be used in meta tags
-   `imageUrl: string`: The URL of the image to use in the meta tags
-   `robots: string`: The robots meta tag value

### AnimatedPage

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

#### Props

-   `animationVariants: PageAnimation`: The animation variants to use for the page. Includes three [`Variant`](https://www.framer.com/docs/animation/#variants) objects: `enter`, `exit` and `animate`.
-   `animateContentOnly: boolean`: Whether to animate the content only or the whole page (content + footer + nav).

### Nav

A simple nav component with a logo and links.

```tsx
<Nav />
```

A collapsible, full-screen nav for mobile devices is also available:

```tsx
<CollapsibleNav />
```

To switch to the collapsible navbar on mobile (this has already been done by default in the template):

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

A wrapper around the Chakra `Input` component. It adds a label, an error message as well as options to change label and error styles. There is also a `FormTextArea` component for text area input.

#### Props

-   `label: string`: The label text
-   `error: string`: The error message
-   `labelPosition : 'top' | 'placeholder'`: `top` is the conventional label position above the input, `placeholder` puts the label as a placeholder inside the input.
-   `errorPosition : 'bottom' | 'icon'`: `bottom` puts the error message below the input, `icon` puts the error message inside the input as an icon.

```tsx
const [value, setValue] = useState('')
...
return (
    <FormInput
        label="Name"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        isInvalid={value === ''}
        error="This field is required" />
    <FormTextArea label="Message" />
)
```

### FormikInput

A wrapper around the [`FormInput`](#forminput) component that uses the [Formik](https://jaredpalmer.com/formik/) library. There is also `FormikTextArea` for text area input.

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
        <FormikTextArea name="message"/>
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

A wrapper around [`NextHead`](https://nextjs.org/docs/api-reference/next/head). Adds a title as well as common meta tags such as `robots`, `og`, `twitter` etc. Customize it to your needs. It is already included in the [`Page`](#page) component.

```tsx
<Head
    title="About"
    description="This is my about page"
    imageUrl="/public/img.png"
    robots="noimageindex"
/>
```

#### Props

-   `title: string`: The title of the page
-   `description: string`: The description of the page to be used in meta tags
-   `imageUrl: string`: The URL of the image to use in the meta tags
-   `robots: string`: The robots meta tag value

### Footer

A basic footer with a logo, socials and a copyright message. It is already included in the [`Page`](#page) component.

```tsx
<Footer />
```

### TextButton

A clickable plain text button with an underline animation on hover.

```tsx
<TextButton label="Click Me" onClick={()=>{...}}>
```

### Link

A wrapper around [`Anchor`](#anchor) and [`TextButton`](#textbutton). If the current page is the same as the link, the link is underlined.

```tsx
<Link label="About" href="/about">
```

### Socials

A stack of social icons. Customize the icons and hrefs to your needs.

```tsx
<Socials direction="column" spacing="1rem" />
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

The email is sent to your email address through an intermediary address. This is a rudimentary method. You should consider replacing it with a email service like [Mailgun](https://mailgun.com/) or [SendGrid](https://sendgrid.com/).

To specify the required email info, copy the `env.local.example` file to a `env.local` file and fill out the variables.

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
npm run gen-sanity-types
```

To start the studio:

```bash
npm run cms
```

To use the client:

```tsx
import sanity from "@/cms/sanityClient";

// `posts` is a schema
const posts = await sanity.getAll("posts");
```

Example usage in getStaticProps:

```tsx
import sanity from "@/cms/sanityClient";
import { UnwrapPromise } from "@/types/unwrapPromise";

export const getStaticProps = async () => {
    const posts = await sanity.getAll("posts");
    return {
        props: {
            posts,
        },
    };
};

// Get typings for the static props
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

const Articles: NextPage<Props> = (props) => {
    return(
            {props.posts.map((post) => (
                <Heading>
                    {post.title}
                </Heading>
                <Text>
                    {post.body}
                </Text>
            ))}
    )
}
```

The default client is a [sanity-codegen](https://www.sanity.io/plugins/sanity-codegen) client that allows us to use typescript for our schemas. You can use any other client you want like [next-sanity](https://github.com/sanity-io/next-sanity).

## Testing

[Cypress](https://cypress.io/) is installed as the default testing tool for e2e, component and unit testing.
To start cypress:

```bash
npm run dev # Your project should be running for e2e tests
npm run e2e
```

Check out the [docs](https://docs.cypress.io/) for more info on how to use cypress.

## Animations

[Framer Motion](https://framer.com/motion) is used for animations. The `AnimatePresence` component that allows exit animations has already been setup in `/pages/_app.tsx`.

## SVG

[SVGR](https://react-svgr.com/) is used to import SVG files. To import an SVG file, add it to the `/public` directory (ideally in the `svg` folder):

```
📁 public
    📁 svg
        📄 logo.svg
```

Then, in your component, import the SVG file:

```tsx
import Logo from "@/public/svg/logo.svg";
...
<Logo width="5rem"/>
```

## Icons

[React Icons](https://react-icons.github.io/react-icons/) is used for icons. You can search for icons [here](https://react-icons.github.io/react-icons/search) and click to copy the icon name. Then import them like:

```tsx
import { FaTwitter } from "@/icons/fa";
import { IoIosArrowForward } from "@/icons/io";
import { MdArrowBack } from "@/icons/md";
// And so on...
...
<FaTwitter/>
<IoIosArrowForward/>
<MdArrowBack/>
```

To use the Chakra theme with the icons:

```tsx
import { FaTwitter } from "@/icons/fa";
import { Icon } from "chakra/react"
...
<Icon
    as={FaTwitter}
    width="1.5rem"
    height="1.5rem"
    color="brand.primary"
/>
```

## CI/CD

[Github Actions](https://docs.github.com/en/actions/get-started) is used for CI. A `run-cypress-tests.yml` file is included in `.github/workflows/` that runs cypress tests on each push.

Another workflow file is added when you run `npm run init-cms` in `.github/workflows/deploy-cms.yml` that deploys the Sanity CMS on each push. You can customize it to your needs.
