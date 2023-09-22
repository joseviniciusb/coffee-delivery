import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

import IllustrationDeliveryRider from "../../assets/IllustrationDeliveryRider.svg";
import {
  OrderConfirmationContainer,
  StyledTitle,
  StyledSubTitle,
  FlexContainer,
  BorderWrap,
  OrderInfoContainer,
  InfoTextContainer,
  InfoText,
  DeliveryRiderIlustrationContainer,
} from "./styles";

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
