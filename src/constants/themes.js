import { green, neutral } from "./colors";

const theme = {
  fonts: {
    primary: "16px",
    small: "13px",
  },
};

const darkTheme = {
  ...theme,
  colors: {
    bg: neutral[300],
    text: neutral[100],
    linkText: green[200],
    primary: green[200],
  },
};

const lightTheme = {
  ...theme,
  colors: {
    bg: neutral[100],
    text: neutral[300],
    linkText: green[300],
    primary: green[300],
  },
};

export default { darkTheme, lightTheme };
