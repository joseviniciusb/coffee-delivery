import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

import IllustrationDeliveryRider from "../../assets/IllustrationDeliveryRider.svg";

const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const OrderInfoContainer = styled.div`
  background-color: ${(props) => props.theme["background"]};
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 3rem 2rem 3rem 2rem;
  gap: 1.5rem;
`;

const BorderWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 10rem;

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
  overflow: hidden;
`;

const InfoTextContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 400px;

  div :nth-child(2) {
    font-weight: bold;
  }
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

const InfoText = styled.p``;

export const OrderConfirmation = () => {
  const location = useLocation();

  console.log(location.state);

  return (
    <OrderConfirmationContainer>
      <div>
        <StyledTitle>Uhu! Pedido confirmado</StyledTitle>
        <StyledSubTitle>
          Agora é só aguardar que logo o café chegará até você
        </StyledSubTitle>
      </div>

      <FlexContainer>
        <BorderWrap>
          <OrderInfoContainer>
            <InfoTextContainer>
              <MapPin size={32} weight="fill" color="purple" />
              <div>
                <InfoText>
                  Entrega em <span> Rua João Daniel Martinelli, 102</span>
                </InfoText>
                <InfoText>Farrapos - Porto Alegre, RS</InfoText>
              </div>
            </InfoTextContainer>

            <InfoTextContainer>
              <Timer size={32} weight="fill" color="yellow" />
              <div>
                <InfoText>Previsão de entrega</InfoText>
                <p>20 min - 30 min</p>
              </div>
            </InfoTextContainer>

            <InfoTextContainer>
              <CurrencyDollar size={32} />
              <div>
                <InfoText>Pagamento na entrega</InfoText>
                <InfoText>Cartão de crédito</InfoText>
              </div>
            </InfoTextContainer>
          </OrderInfoContainer>
        </BorderWrap>

        <DeliveryRiderIlustrationContainer>
          <img src={IllustrationDeliveryRider}></img>
        </DeliveryRiderIlustrationContainer>
      </FlexContainer>
    </OrderConfirmationContainer>
  );
};
