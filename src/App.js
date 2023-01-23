import HomePage from "./pages/home";
import themeData from "./constants/themes";
import useThemeMode from "./hooks/use-theme";
import { GlobalStyles } from "./global-styles";
import { ThemeProvider } from "styled-components";
import Resume from "./pages/resume";
import { Routes, Route, HashRouter } from "react-router-dom";
import PageLayout from "./features/ui/layout";

function App() {
  const { themeMode, switchTheme } = useThemeMode();

  return (
    <ThemeProvider theme={themeData[themeMode]}>
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout switchTheme={switchTheme} themeMode={themeMode} />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="resume" element={<Resume />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
