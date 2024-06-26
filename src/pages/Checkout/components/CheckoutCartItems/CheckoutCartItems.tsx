import { useTheme } from "styled-components";
import { Trash } from "phosphor-react";

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
import { coffees } from "../../../../data/datasources/coffees";
import { useAppContext } from "../../../../contexts/ProductsContext";

export const CheckoutCartItems = () => {
  const { shoppingCartItems, handleProduct, removeProduct, filterCoffeesById } =
    useAppContext();

  const theme = useTheme();

  const BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const filteredCoffees = filterCoffeesById(coffees, shoppingCartItems);

  return (
    <>
      {filteredCoffees.map((coffee, index) => {
        if (coffee.count)
          return (
            <>
              <ProductContainer key={coffee.id}>
                <ProductIcon src={coffee.image} />

                <InfoProductsContainer>
                  <ProductName>{coffee.name}</ProductName>
                  <ActionsContainer>
                    <CounterContainer>
                      <DecrementButton
                        onClick={() => handleProduct(coffee.id, -1)}
                      >
                        -
                      </DecrementButton>
                      <Counter>{coffee.count}</Counter>
                      <IncrementButton
                        onClick={() => handleProduct(coffee.id, 1)}
                      >
                        +
                      </IncrementButton>
                    </CounterContainer>

                    <RemoveButton onClick={() => removeProduct(index)}>
                      <Trash size={18} color={theme["purple-dark"]} />
                      Remover
                    </RemoveButton>
                  </ActionsContainer>
                </InfoProductsContainer>

                <ProductPrice>
                  {BRL.format(coffee.price * coffee.count)}
                </ProductPrice>
              </ProductContainer>
              <hr></hr>
            </>
          );
      })}
    </>
  );
};
