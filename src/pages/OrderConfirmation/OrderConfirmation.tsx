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

  const { cep, rua, numero, complemento, bairro, cidade, estado } = location.state.formData;
  let { selectedMethod } = location.state;

  console.log(cep, rua, numero, complemento, bairro, cidade, estado);
  console.log("a", selectedMethod);

  if (selectedMethod == 0) selectedMethod = "Cartão de crédito";
  if (selectedMethod == 1) selectedMethod = "Cartão de débito";
  else selectedMethod = "Dinheiro";

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
                  Entrega em{" "}
                  <span>
                    {rua}, {numero}
                  </span>
                </InfoText>
                <InfoText>{bairro} - {cidade}, {estado}</InfoText>
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
                <InfoText>{selectedMethod}</InfoText>
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
