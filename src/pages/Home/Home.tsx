import banner from "../../assets/banner.svg";
import {
  ImageContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
} from "./styles";

import IconCoffe from "../../assets/Iconcoffe.svg";
import IconTime from "../../assets/Icontime.svg";
import packaging from "../../assets/packaging.svg";
import shoppingCartItems from "../../assets/shoppingCartItems.svg";

import CardList from "../../components/CardList";
import { coffees } from "../../data/datasources/coffees";

export const Home = () => {
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
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>

          <ItemsContainer>
            {items.map((item) => {
              return (
                <div key={item.description}>
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

      <CardList coffees={coffees} />
    </>
  );
};
