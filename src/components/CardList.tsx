// src/components/CardList.tsx

import React from "react";
import { ShoppingCart } from "phosphor-react";

import { NavLink } from "react-router-dom";
import { useAppContext } from "../contexts/ProductsContext";
import { CardsContainer, CoffeListContainer } from "../pages/Home/styles";

import {
  CustomTagContainer,
  CardContainer,
  RealSign,
  CounterContainer,
} from "./Card/styles";

import { Coffee } from "../domain/entities/Coffee";

interface CardListProps {
  coffees: Coffee[];
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

const CardList: React.FC<CardListProps> = ({ coffees }) => {
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

  return (
    <CardsContainer>
      <h1>Nossos cafés</h1>
      <CoffeListContainer>
        {coffees.map((coffee) => (
          <CardContainer key={coffee.name}>
            <img src={coffee.image} alt={coffee.image} />
            <CustomTag tag={coffee.tag} />
            <h2>{coffee.name}</h2>
            <span>{coffee.description}</span>
            <div>
              <p>
                <RealSign>R$ </RealSign>
                {BRL.format(coffee.price)}
              </p>
              <nav>
                <CounterContainer>
                  <p onClick={() => handleProduct(Number(coffee.id), -1)}>-</p>
                  <span>{itemCartQuantity(Number(coffee.id))}</span>
                  <p onClick={() => handleProduct(Number(coffee.id), 1)}>+</p>
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
        ))}
      </CoffeListContainer>
    </CardsContainer>
  );
};

export default CardList;
