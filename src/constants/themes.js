import { green, neutral } from "./colors";
import { fontSize, fontFamily } from "./typography";
import { breakpoints } from "./breakpoints";

const theme = {
  fontSize,
  fontFamily,
  bp: breakpoints,
};

const darkTheme = {
  ...theme,
  colors: {
    bg: neutral[300],
    text: neutral[100],
    linkText: green[200],
    selectText: neutral[300],
    primary: green[200],
    disabled: neutral[200],
  },
};

const lightTheme = {
  ...theme,
  colors: {
    bg: neutral[100],
    text: neutral[300],
    linkText: green[300],
    selectText: neutral[300],
    primary: green[400],
    disabled: neutral[200],
  },
};

export default { darkTheme, lightTheme };
