export interface PageLink {
    label: string;
    href: string;
}

export interface NavBarProps {
    direction: "row" | "column";
    children?: React.ReactNode;
}

export interface NavProps extends NavBarProps {}
