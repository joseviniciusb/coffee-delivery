import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { LayoutContainer } from "./styles/layouts/DefaultLayout/styles";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { Intro } from "./components/IntroContainer/Intro";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutContainer>
        <Header />
        <Intro />
      </LayoutContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
