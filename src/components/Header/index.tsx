import {
  HeaderContainer,
  LocationContainer,
  ShoppingCartIconContainer,
} from "./styles";

import Logo from "../../assets/Logo.svg";
import Location from "../../assets/Location.svg";
import shoppingCart from "../../assets/shoppingCart.svg";
import { useAppContext } from "../../contexts/ProductsContext";

export const Header = () => {
  const { shoppingCartItems } = useAppContext();

  const arrayTotalItems = shoppingCartItems.map((coffee) => {
    return coffee.count;
  });

  const initialValue = 0;

  const totalItemsInCart = arrayTotalItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  
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
          <div>
            <span>{totalItemsInCart}</span>
          </div>
        </ShoppingCartIconContainer>
      </nav>
    </HeaderContainer>
  );
};
