import { ShoppingCart } from "phosphor-react";
import { CardsContainer, CoffeListContainer } from "../../pages/Home/styles";

import {
  CardContainer,
  CounterContainer,
  CustomTagContainer,
  RealSign,
} from "./styles";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../contexts/ProductsContext";
import { coffees } from "../../database/Coffees/coffees";

export const Card = () => {
  const BRL = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const { shoppingCartItems, handleProduct } = useAppContext();

  function itemCartQuantity(id: number) {
    const itemIndex = shoppingCartItems.findIndex(
      (item) => item.coffeeId === id
    );

    if (itemIndex === -1) return 0;

    return shoppingCartItems[itemIndex].count;
  }

  type TagType = string | { tag1: string; tag2: string };

  const CustomTag = ({ tag }: { tag: TagType }) => {
    if (typeof tag === "object") {
      return (
        <CustomTagContainer>
          <h3>{tag.tag1}</h3>
          <h3>{tag.tag2}</h3>
        </CustomTagContainer>
      );
    }
    return <h3>{tag}</h3>;
  };

  return (
    <CardsContainer>
      <h1>Nossos cafés</h1>
      <CoffeListContainer>
        {coffees.map((card, index) => {
          return (
            <CardContainer key={index}>
              <img src={card.image} />
              <CustomTag tag={card.tag} />
              <h2>{card.name}</h2>
              <span>{card.description}</span>
              <div>
                <p>
                  <RealSign>R$ </RealSign>
                  {BRL.format(card.price)}
                </p>
                <nav>
                  <CounterContainer>
                    <p onClick={() => handleProduct(card.id, -1)}>-</p>
                    <span>{itemCartQuantity(card.id)}</span>
                    <p onClick={() => handleProduct(card.id, 1)}>+</p>
                  </CounterContainer>
                  <div>
                    <NavLink to="/checkout" title="Checkout">
                      <ShoppingCart
                        weight="fill"
                        color="white"
                        size={19}
                        cursor="pointer"
                      />
                    </NavLink>
                  </div>
                </nav>
              </div>
            </CardContainer>
          );
        })}
      </CoffeListContainer>
    </CardsContainer>
  );
};
