import { GlobalStyle } from "./styles/global";
import { LayoutContainer } from "./styles/layouts/DefaultLayout/styles";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LayoutContainer>
        <Router/>
        </LayoutContainer>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
