import { HeaderContainer } from "./styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import Logo from "./assets/Logo.svg";
import Location from "./assets/Location.svg";
import shoppingCart from "./assets/shoppingCart.svg";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderContainer>
        <img src={Logo} />
        <nav>
          <div>
            <img src={Location}></img>
            <span>Porto Alegre, RS</span>
          </div>

          <img src={shoppingCart}></img>
        </nav>
      </HeaderContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
