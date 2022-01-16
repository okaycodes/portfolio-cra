import HeaderContainer from "./containers/header";
import HomeContainer from "./containers/home";
import AboutMeContainer from "./containers/about";
import SkillSetContainer from "./containers/skills";
import {COLORS, FONTS} from './constants/styles';
import {ThemeProvider} from "styled-components";

function App() {
  return (
    <ThemeProvider theme={{colors: COLORS, fonts: FONTS}}>
      <HeaderContainer/>
      <HomeContainer/>
      <AboutMeContainer/>
      <SkillSetContainer />
    </ThemeProvider>
  );
}

export default App;
