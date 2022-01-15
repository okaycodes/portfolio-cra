import HeaderContainer from "./containers/header";
import HomeContainer from "./containers/home";
import AboutMeContainer from "./containers/about";
import {COLORS, FONTS} from './constants/styles';
import {ThemeProvider} from "styled-components";

function App() {
  return (
    <ThemeProvider theme={{colors: COLORS, fonts: FONTS}}>
      <HeaderContainer/>
      <HomeContainer/>
      <AboutMeContainer/>
    </ThemeProvider>
  );
}

export default App;
