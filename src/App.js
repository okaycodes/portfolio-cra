import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import themeData from "./constants/themes";
import useThemeMode from "./hooks/use-theme";
import { GlobalStyles } from "./global-styles";
import HeaderContainer from "./features/header/header.container";
import HeroContainer from "./features/hero/hero.container";
import SkillsContainer from "./features/skills/skillList";
import ProjectContainer from "./features/projects/projectsList";
import ContactsContainer from "./features/contact/contact";

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
      <SkillsContainer />
      <ContactsContainer />
    </ThemeProvider>
  );
}

export default App;
