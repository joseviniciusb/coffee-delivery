import {
  HeaderContainer,
  LocationContainer,
  ShoppingCartIconContainer,
} from "./styles";

import Logo from "../../assets/Logo.svg";
import Location from "../../assets/Location.svg";
import shoppingCart from "../../assets/shoppingCart.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <nav>
        <LocationContainer>
          <img src={Location}></img>
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <ShoppingCartIconContainer>
          <img src={shoppingCart}></img>
        </ShoppingCartIconContainer>
      </nav>
    </HeaderContainer>
  );
};
