import { useState } from "react";
import themeData from "../constants/themes";

export default function useTheme() {
  const [themeMode, setThemeMode] = useState("darkTheme");
  const theme = themeData[themeMode];

  const switchTheme = (theme) => {
    setThemeMode(theme);
  };

  return { theme, switchTheme };
}
