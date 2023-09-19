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
  const { shoppingCartItems } = useAppContext();

  let BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function filterCoffeesById(coffees: Coffee[], shoppingCartItems: CartItem[]) {
    return shoppingCartItems.map(({ coffeeId, count }) => {
      const coffee = coffees.find((c) => c.id === coffeeId);
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
      {filteredCoffees.map((coffee) => {
        return (
          <>
            <ProductContainer>
              <ProductIcon src={TradicionalExpressoIcon} />

              <InfoProductsContainer>
                <ProductName>{coffee.name}</ProductName>
                <ActionsContainer>
                  <CounterContainer>
                    <DecrementButton>-</DecrementButton>
                    <Counter>{coffee.count}</Counter>
                    <IncrementButton>+</IncrementButton>
                  </CounterContainer>

                  <RemoveButton>
                    <Trash size={18} color="#4B2995" />
                    Remover
                  </RemoveButton>
                </ActionsContainer>
              </InfoProductsContainer>

              <ProductPrice>
                {coffee.price ? BRL.format(coffee.price) : ""}
              </ProductPrice>
            </ProductContainer>
            <hr></hr>
          </>
        );
      })}
    </>
  );
};
