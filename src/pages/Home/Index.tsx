import {
  ImageContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
  CardContainer,
  CoffeListContainer,
  CounterContainer,
} from "./styles";
import banner from "../../assets/banner.svg";

import shoppingCartItems from "../../assets/shoppingCartItems.svg";
import packaging from "../../assets/packaging.svg";
import IconTime from "../../assets/Icontime.svg";
import IconCoffe from "../../assets/Iconcoffe.svg"

import TradicionalExpressoIcon from "../../assets/coffes/TradicionalExpressoIcon.svg"

import { ShoppingCart } from "phosphor-react";

export const Home = () => {
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
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
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
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
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
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
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
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
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
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
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
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
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
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
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
      name: "Café Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
  ];

  const items = [
    {
      icon: shoppingCartItems,
      description: "Compra simples e segura",
    },
    {
      icon: packaging,
      description: "Embalagem mantém o café intacto",
    },
    {
      icon: IconTime,
      description: "Entrega rápida e rastreada",
    },
    {
      icon: IconCoffe,
      description: "O café chega fresquinho até você",
    },
  ];

  return (
    <>
    <IntroContainer>
      <section>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>

        <ItemsContainer>
          {items.map((item) => {
            return (
              <div>
                <img src={item.icon} />
                <span>{item.description}</span>
              </div>
            );
          })}
        </ItemsContainer>
      </section>

      <ImageContainer>
        <img src={banner}></img>
      </ImageContainer>

 
    </IntroContainer>

<h1>Nossos cafés</h1>
<CoffeListContainer>
  {coffes.map((card) => {
    return (
      <CardContainer>
        <img src={card.image} />
        <h3>{card.tag}</h3>
        <h2>{card.name}</h2>
        <span>{card.description}</span>
        <div>
          <p>R$ {card.price}</p>
          <nav>
            <CounterContainer>
              <p>-</p>
              <p>0</p>
              <p>+</p>
            </CounterContainer>
            <ShoppingCart size={38} />
          </nav>
        </div>
      </CardContainer>
    );
  })}
</CoffeListContainer>
    </>
    
  );
};
