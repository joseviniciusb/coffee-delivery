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
      <ProductContainer>
        <ProductIcon src={TradicionalExpressoIcon} />

        <InfoProductsContainer>
          <ProductName>Expresso Tradicional</ProductName>
          <ActionsContainer>
            <CounterContainer>
              <DecrementButton>-</DecrementButton>
              <Counter>10</Counter>
              <IncrementButton>+</IncrementButton>
            </CounterContainer>

            <RemoveButton>
              <Trash size={18} color="#4B2995" />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </InfoProductsContainer>

        <ProductPrice>R$ 9,90</ProductPrice>
      </ProductContainer>

      <hr></hr>

      <ProductContainer>
        <ProductIcon src={TradicionalExpressoIcon} />

        <InfoProductsContainer>
          <ProductName>Expresso Tradicional</ProductName>
          <ActionsContainer>
            <CounterContainer>
              <DecrementButton>-</DecrementButton>
              <Counter>10</Counter>
              <IncrementButton>+</IncrementButton>
            </CounterContainer>

            <RemoveButton>
              <Trash size={18} color="#4B2995" />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </InfoProductsContainer>

        <ProductPrice>R$ 9,90</ProductPrice>
      </ProductContainer>

      <hr></hr>

      <ProductContainer>
        <ProductIcon src={TradicionalExpressoIcon} />

        <InfoProductsContainer>
          <ProductName>Expresso Tradicional</ProductName>
          <ActionsContainer>
            <CounterContainer>
              <DecrementButton>-</DecrementButton>
              <Counter>10</Counter>
              <IncrementButton>+</IncrementButton>
            </CounterContainer>

            <RemoveButton>
              <Trash size={18} color="#4B2995" />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </InfoProductsContainer>

        <ProductPrice>R$ 9,90</ProductPrice>
      </ProductContainer>

      <hr></hr>

      <ProductContainer>
        <ProductIcon src={TradicionalExpressoIcon} />

        <InfoProductsContainer>
          <ProductName>Expresso Tradicional</ProductName>
          <ActionsContainer>
            <CounterContainer>
              <DecrementButton>-</DecrementButton>
              <Counter>10</Counter>
              <IncrementButton>+</IncrementButton>
            </CounterContainer>

            <RemoveButton>
              <Trash size={18} color="#4B2995" />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </InfoProductsContainer>

        <ProductPrice>R$ 9,90</ProductPrice>
      </ProductContainer>

      <hr></hr>
    </>
  );
};
