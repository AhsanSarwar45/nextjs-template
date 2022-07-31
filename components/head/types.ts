export interface HeaderProps {
    title: string;
    description: string;
    /** Description that appears on social media cards. If not specified, the `description` prop will be used */
    socialDescription: string;
    keywords: string;
    imageUrl: string;
    robots: string;
    /** See https://ogp.me/#types */
    type: string;
    language: string;
    creatorTwitterUsername: string;
}
