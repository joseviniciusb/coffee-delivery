import { GlobalStyle } from "./styles/global";
import { LayoutContainer } from "./styles/layouts/DefaultLayout/styles";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home/Index";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutContainer>
        <Header />
        <Home />
      </LayoutContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
