import { useState, useRef, useEffect, Ref, RefObject } from "react";

const useCollapsibleMenu = () => {
    const [isMenuOpen, _setIsMenuOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const onMenuOpenScrollPos = useRef({ x: 0, y: 0 });
    const initialDisplayStyle = useRef("");

    const setIsMenuOpen = (isOpen: boolean) => {
        if (isOpen) {
            onMenuOpenScrollPos.current = {
                x: window.scrollX,
                y: window.scrollY,
            };
            if (contentRef.current) {
                initialDisplayStyle.current = contentRef.current.style.display;
                contentRef.current.style.display = "none";
            }
        } else {
            if (contentRef.current) {
                contentRef.current.style.display =
                    initialDisplayStyle.current as string;
            }
        }

        _setIsMenuOpen(isOpen);
    };

    useEffect(() => {
        if (!isMenuOpen) {
            window.scrollTo(
                onMenuOpenScrollPos.current.x,
                onMenuOpenScrollPos.current.y
            );
        }
    }, [isMenuOpen]);

    return { isMenuOpen, setIsMenuOpen, contentRef };
};

export default useCollapsibleMenu;
