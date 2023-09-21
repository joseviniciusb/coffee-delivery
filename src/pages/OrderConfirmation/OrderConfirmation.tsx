import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import styled from "styled-components";

import IllustrationDeliveryRider from "../../assets/IllustrationDeliveryRider.svg";

export const OrderConfirmation = () => {
  const OrderConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `;

  const OrderInfoContainer = styled.div`
    background: linear-gradient(white, white) padding-box,
      linear-gradient(
          to right,
          ${(props) => props.theme["yellow-dark"]},
          ${(props) => props.theme["purple-dark"]}
        )
        border-box;

    border: 2px solid transparent;
    border-radius: 6px 36px 6px 36px;
  `;

  const DeliveryRiderIlustrationContainer = styled.div``;

  const FlexContainer = styled.div`
    display: flex;
    gap: 3rem;
  `;

  const StyledTitle = styled.h1`
    font-family: "Baloo 2";
    font-size: 32px;
    color: ${(props) => props.theme["yellow-dark"]};
  `;

  const StyledSubTitle = styled.p`
    font-size: 20px;
    color: ${(props) => props.theme["base-subtitle"]};
  `;

  return (
    <OrderConfirmationContainer>
      <div>
        <StyledTitle>Uhu! Pedido confirmado</StyledTitle>
        <StyledSubTitle>
          Agora é só aguardar que logo o café chegará até você
        </StyledSubTitle>
      </div>

      <FlexContainer>
        <OrderInfoContainer>
          <div>
            <MapPin size={16} weight="fill" color="purple" />
            <span>
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </span>
          </div>

          <div>
            <Timer />
            <span>Previsão de entrega 20 min - 30 min </span>
          </div>

          <div>
            <CurrencyDollar />
            <span>Pagamento na entrega Cartão de Crédito</span>
          </div>
        </OrderInfoContainer>

        <DeliveryRiderIlustrationContainer>
          <img src={IllustrationDeliveryRider}></img>
        </DeliveryRiderIlustrationContainer>
      </FlexContainer>
    </OrderConfirmationContainer>
  );
};
