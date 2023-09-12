import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { LayoutContainer } from "./styles/layouts/DefaultLayout/styles";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { Intro } from "./components/Intro/Intro";
import { Card, CoffeListContainer } from "./styles";
import { ShoppingCart } from "phosphor-react";

import TradicionalExpressoIcon from "./assets/coffes/TradicionalExpressoIcon.svg";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutContainer>
        <Header />
        <Intro />
        <CoffeListContainer>
          <h1>Nossos cafés</h1>

          <Card>
            <img src={TradicionalExpressoIcon} />
            <p>Tradicional</p>
            <p>Coffe Name</p>
            <p>This is a Coffe description</p>
            <div>
              <p>R$ 9,90</p>
              <div>
                <span>-</span>
                <span>0</span>
                <span>+</span>
                <ShoppingCart size={38} />
              </div>
            </div>
          </Card>
        </CoffeListContainer>
      </LayoutContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
