import { ShoppingCart } from "phosphor-react";
import { CardContainer, CoffeListContainer, CounterContainer } from "../../pages/Home/styles";

import TradicionalExpressoIcon from "../../assets/coffes/TradicionalExpressoIcon.svg"

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
    


    return (
        <>
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
       
    )
}