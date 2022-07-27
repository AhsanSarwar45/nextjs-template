import { useState, useRef, useEffect, Ref, RefObject } from "react";

const useFullScreenMenu = () => {
    const [isMenuOpen, _setIsMenuOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const onMenuOpenScrollPos = useRef({ x: 0, y: 0 });
    const initialStyle = useRef("");

    const setIsMenuOpen = (isOpen: boolean) => {
        const contentElement = contentRef.current
            ? contentRef.current
            : document.documentElement;

        if (isOpen) {
            onMenuOpenScrollPos.current = {
                x: window.scrollX,
                y: window.scrollY,
            };
            initialStyle.current = contentElement.style.overflowY;
            contentElement.style.overflowY = "hidden";
        } else {
            contentElement.style.overflowY = initialStyle.current;
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

export default useFullScreenMenu;
