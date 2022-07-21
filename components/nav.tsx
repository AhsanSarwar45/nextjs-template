import React, { useCallback, useEffect } from "react";

interface NavProps {
  setOnMenuOpenScrollPos: (onMenuOpenScrollPos: number) => void;
}

const Nav = (props: NavProps) => {
  const handleScroll = useCallback(() => {}, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return <></>;
};

export default Nav;
