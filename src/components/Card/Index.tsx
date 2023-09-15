import { ShoppingCart } from "phosphor-react";
import { CoffeListContainer } from "../../pages/Home/styles";

import TradicionalExpressoIcon from "../../assets/coffes/TradicionalExpressoIcon.svg";
import { useState } from "react";
import { CardContainer, CounterContainer, CustomTagContainer } from "./styles";

export const Card = () => {
  const coffees = [
    {
      id: 1,
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      id: 2,
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
    },
    {
      id: 3,
      image: TradicionalExpressoIcon,
      tag: "Tradicional",
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      id: 4,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Tradicional", tag2: "Gelado" },
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
    },
    {
      id: 5,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Tradicional", tag2: "Com leite" },
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
    },
    {
      id: 6,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Tradicional", tag2: "Com leite" },
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
    },
    {
      id: 7,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Tradicional", tag2: "Com leite" },
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
    },
    {
      id: 8,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Tradicional", tag2: "Com leite" },
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
    },
    {
      id: 9,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Tradicional", tag2: "Com leite" },
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
    },
    {
      id: 10,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Especial", tag2: "Com leite" },
      name: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
    },
    {
      id: 11,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Especial", tag2: "Alcoólico" },
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
    },
    {
      id: 12,
      image: TradicionalExpressoIcon,
      tag: "Especial",
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
    },
    {
      id: 13,
      image: TradicionalExpressoIcon,
      tag: "Especial",
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
    },
    {
      id: 14,
      image: TradicionalExpressoIcon,
      tag: { tag1: "Especial", tag2: "Alcoólico" },
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
    },
  ];
  
  console.log(coffees);
  

  let BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const [counters, setCounters] = useState(Array(coffees.length).fill(0));

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
        {coffees.map((card, index) => {
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
                  <div>
                    <ShoppingCart
                      weight="fill"
                      color="white"
                      size={19}
                      cursor="pointer"
                    />
                  </div>
                </nav>
              </div>
            </CardContainer>
          );
        })}
      </CoffeListContainer>
    </>
  );
};
