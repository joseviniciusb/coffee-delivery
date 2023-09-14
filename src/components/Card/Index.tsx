import { ShoppingCart } from "phosphor-react";
import { CoffeListContainer } from "../../pages/Home/styles";

import TradicionalExpressoIcon from "../../assets/coffes/TradicionalExpressoIcon.svg";
import { useState } from "react";
import { CardContainer, CounterContainer, CustomTagContainer } from "./styles";

export const Card = () => {
  const coffes = [
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Expresso Americano",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Expresso Cremoso",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: { tag1: "Tradicional", tag2: "Gelado" },
      name: "Expresso Gelado",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café com Leite",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Latte",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Capuccino",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Macchiato",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Mocaccino",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Cubano",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Havaiano",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Árabe",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Irlandês",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
  ];

  let BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const [counters, setCounters] = useState(Array(coffes.length).fill(0));

  const handleCounter = (index: number, increment: number) => {
    const newCounters = [...counters];
    newCounters[index] += increment;

    newCounters[index] < 0
      ? newCounters[(index = 0)]
      : setCounters(newCounters);
  };

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
    <>
      <h1>Nossos cafés</h1>
      <CoffeListContainer>
        {coffes.map((card, index) => {
          return (
            <CardContainer key={index}>
              <img src={card.image} />
              <CustomTag tag={card.tag} />
              <h2>{card.name}</h2>
              <span>{card.description}</span>
              <div>
                <p>{BRL.format(card.price)}</p>
                <nav>
                  <CounterContainer>
                    <p onClick={() => handleCounter(index, -1)}>-</p>
                    <span>{counters[index]}</span>
                    <p onClick={() => handleCounter(index, 1)}>+</p>
                  </CounterContainer>
                  <ShoppingCart size={38} cursor="pointer" />
                </nav>
              </div>
            </CardContainer>
          );
        })}
      </CoffeListContainer>
    </>
  );
};
