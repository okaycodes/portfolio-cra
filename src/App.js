import HeaderContainer from "./containers/header";
import HomeContainer from "./containers/home";
import AboutMeContainer from "./containers/about";
import SkillSetContainer from "./containers/skills";
import { ThemeProvider } from "styled-components";
import useThemeMode from "./hooks/use-theme";

function App() {
  const { theme } = useThemeMode();
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer />
      <HomeContainer />
      <AboutMeContainer />
      <SkillSetContainer />
    </ThemeProvider>
  );
}

export default App;
