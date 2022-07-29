import { extendTheme } from "@chakra-ui/react";

import colors from "@/themes/core/colors";
import fontWeights from "@/themes/core/fontWeights";
import shadows from "@/themes/core/shadows";
import breakpoints from "@/themes/core/breakpoints";
import styles from "@/themes/styles";
import fonts from "@/themes/core/fonts";
import Button from "@/themes/components/button";

const overrides = {
    colors,
    shadows,
    fontWeights,
    breakpoints,
    styles,
    fonts,
    components: { Button },
};

const theme = extendTheme(overrides);

export default theme;
