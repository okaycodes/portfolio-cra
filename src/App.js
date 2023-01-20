import HeaderContainer from "./features/header/header.container";
import HeroContainer from "./features/hero/hero.container";
import SkillSetContainer from "./containers/skills";
import { ThemeProvider } from "styled-components";
import useThemeMode from "./hooks/use-theme";
import themeData from "./constants/themes";
import { GlobalStyles } from "./global-styles";
import ProjectContainer from "./features/projects/projectsList";
import { useEffect, useState } from "react";

function App() {
  const [scrollPastHeader, setScrollPastHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrollPastHeader(true);
      } else {
        setScrollPastHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { themeMode, switchTheme } = useThemeMode();
  return (
    <ThemeProvider theme={themeData[themeMode]}>
      <GlobalStyles />
      <HeaderContainer
        switchTheme={switchTheme}
        themeMode={themeMode}
        scrollPastHeader={scrollPastHeader}
      />
      <HeroContainer />
      <ProjectContainer />
      <SkillSetContainer />
    </ThemeProvider>
  );
}

export default App;
