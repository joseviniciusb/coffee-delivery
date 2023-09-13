import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { LayoutContainer } from "./styles/layouts/DefaultLayout/styles";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { Intro } from "./components/Intro/Intro";
import { Card, CoffeListContainer, CounterContainer } from "./styles";
import { ShoppingCart } from "phosphor-react";

import TradicionalExpressoIcon from "./assets/coffes/TradicionalExpressoIcon.svg";

function App() {
  const coffes = [
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutContainer>
        <Header />
        <Intro />
        <h1>Nossos cafés</h1>
        <CoffeListContainer>
          {coffes.map(() => {
            return (
              <Card>
                <img src={TradicionalExpressoIcon} />
                <h3>Tradicional</h3>
                <h2>Café Tradicional</h2>
                <span>
                  O tradicional café feito com água quente e grãos moídos
                </span>
                <div>
                  <p>R$ 9,90</p>
                  <nav>
                    <CounterContainer>
                      <p>-</p>
                      <p>0</p>
                      <p>+</p>
                    </CounterContainer>
                    <ShoppingCart size={38} />
                  </nav>
                </div>
              </Card>
            );
          })}
        </CoffeListContainer>
      </LayoutContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
