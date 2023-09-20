import { useTheme } from 'styled-components'
import { Trash } from "phosphor-react";
import TradicionalExpressoIcon from "../../../../assets/coffes/TradicionalExpressoIcon.svg";
import {
  ActionsContainer,
  Counter,
  CounterContainer,
  DecrementButton,
  IncrementButton,
  InfoProductsContainer,
  ProductContainer,
  ProductIcon,
  ProductName,
  ProductPrice,
  RemoveButton,
} from "./styles";
import { coffees } from "../../../../components/Coffees/coffees";
import { useAppContext } from "../../../../contexts/ProductsContext";

import { Coffee } from "../../../../types/Coffee";

interface CartItem {
  coffeeId: number;
  count: number;
}

export const CheckoutCartItems = () => {
  const { shoppingCartItems, handleProduct, removeProduct } = useAppContext();

  const theme = useTheme();

  let BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function filterCoffeesById(coffees: Coffee[], shoppingCartItems: CartItem[]) {
    return shoppingCartItems.map(({ coffeeId, count }) => {
      const coffee = coffees.find((c) => c.id === coffeeId) as Coffee;
      return {
        ...coffee,
        count,
      };
    });
  }

  const filteredCoffees = filterCoffeesById(coffees, shoppingCartItems);

  console.log(filteredCoffees);

  return (
    <>
      {filteredCoffees.map((coffee, index) => {
        return (
          <>
            <ProductContainer>
              <ProductIcon src={TradicionalExpressoIcon} />

              <InfoProductsContainer>
                <ProductName>{coffee.name}</ProductName>
                <ActionsContainer>
                  <CounterContainer>
                    <DecrementButton onClick={() => handleProduct(coffee.id, -1)}>-</DecrementButton>
                    <Counter>{coffee.count}</Counter>
                    <IncrementButton onClick={() => handleProduct(coffee.id, 1)}>+</IncrementButton>
                  </CounterContainer>

                  <RemoveButton onClick={() => removeProduct(index)}>
                    <Trash size={18} color={theme['purple-dark']} />
                    Remover
                  </RemoveButton>
                </ActionsContainer>
              </InfoProductsContainer>

              <ProductPrice>
                {BRL.format(coffee.price)}
              </ProductPrice>
            </ProductContainer>
            <hr></hr>
          </>
        );
      })}
    </>
  );
};
