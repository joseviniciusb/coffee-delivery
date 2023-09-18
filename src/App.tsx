import { GlobalStyle } from "./styles/global";
import { LayoutContainer } from "./styles/layouts/DefaultLayout/styles";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AppProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LayoutContainer>
          <AppProvider>
            <Router />
          </AppProvider>
        </LayoutContainer>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
