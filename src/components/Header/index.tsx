import {
  HeaderContainer,
  LocationContainer,
  ShoppingCartIconContainer,
} from "./styles";

import Logo from "../../assets/Logo.svg";
import Location from "../../assets/Location.svg";
import shoppingCart from "../../assets/shoppingCart.svg";
import { useAppContext } from "../../contexts/ProductsContext";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { shoppingCartItems } = useAppContext();

  const arrayTotalItems = shoppingCartItems.map((coffee) => coffee.count);
  const initialValue = 0;

  const totalItemsInCart = arrayTotalItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />{" "}
      </NavLink>

      <nav>
        <LocationContainer>
          <img src={Location}></img>
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <ShoppingCartIconContainer>
          <NavLink to="/checkout">
            <img src={shoppingCart}></img>
            <div>
              <span>{totalItemsInCart}</span>
            </div>
          </NavLink>
        </ShoppingCartIconContainer>
      </nav>
    </HeaderContainer>
  );
};
