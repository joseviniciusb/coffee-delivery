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
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 10rem;
    padding: 2.5rem;
    gap: 2.5rem;
    white-space: normal;

    font-size: 16px;

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

  const InfoTextContainer = styled.div`
    display: flex;
    gap: 1rem;
    max-width: 400px;
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

  const InfoText = styled.p`
    :first-child {
      font-weight: bold;
    }
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
          <InfoTextContainer>
            <MapPin size={32} weight="fill" color="purple" />
            <InfoText>
              Entrega em <span> Rua João Daniel Martinelli, 102</span> Farrapos
              - Porto Alegre, RS
            </InfoText>
          </InfoTextContainer>

          <InfoTextContainer>
            <Timer size={32} weight="fill" color="yellow" />
            <InfoText>
              Previsão de entrega <p>20 min - 30 min</p>
            </InfoText>
          </InfoTextContainer>

          <InfoTextContainer>
            <CurrencyDollar size={32} />
            <InfoText>
              Pagamento na entrega <p>Cartão de crédito</p>
            </InfoText>
          </InfoTextContainer>
        </OrderInfoContainer>

        <DeliveryRiderIlustrationContainer>
          <img src={IllustrationDeliveryRider}></img>
        </DeliveryRiderIlustrationContainer>
      </FlexContainer>
    </OrderConfirmationContainer>
  );
};
