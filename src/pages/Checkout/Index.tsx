import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import AddressForm from "./components/AddressForm/Index";
import { CheckoutCartItems } from "./components/CheckoutCartItems/Index";
import {
  AddressAndPaymentContainer,
  AddressContainer,
  AmountContainer,
  AmountText,
  CheckoutContainer,
  CheckoutTitle,
  ConfirmOrderButton,
  MethodsOfPaymentContainer,
  PaymentContainer,
  SelectedCoffeesContainer,
  StyledMethodOfPayment,
  TitleContainer,
  TotalPriceContainer,
} from "./styles";
import {
  InfoContainer,
  InfoSubTitle,
  InfoTitle,
  TextContainer,
} from "./components/AddressForm/styles";
import { useState } from "react";

export const Checkout = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <CheckoutContainer>
      <TitleContainer>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      </TitleContainer>

      <AddressContainer>
        <AddressAndPaymentContainer>
          <AddressForm />
          <PaymentContainer>
            <InfoContainer>
              <CurrencyDollarSimple color="#8047F8" size={20} />
              <TextContainer>
                <InfoTitle>Pagamento</InfoTitle>
                <InfoSubTitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </InfoSubTitle>
              </TextContainer>
            </InfoContainer>

            <MethodsOfPaymentContainer>
              <StyledMethodOfPayment
                isSelected={selectedMethod === "method1"}
                onClick={() => handleMethodSelect("method1")}
              >
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </StyledMethodOfPayment>
              <StyledMethodOfPayment
                isSelected={selectedMethod === "method2"}
                onClick={() => handleMethodSelect("method2")}
              >
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </StyledMethodOfPayment>
              <StyledMethodOfPayment
                isSelected={selectedMethod === "method3"}
                onClick={() => handleMethodSelect("method3")}
              >
                <Money size={16} />
                DINHEIRO
              </StyledMethodOfPayment>
            </MethodsOfPaymentContainer>
          </PaymentContainer>
        </AddressAndPaymentContainer>

        <SelectedCoffeesContainer>
          <CheckoutCartItems />

          <TotalPriceContainer>
            <AmountContainer>
              <AmountText>Total de itens</AmountText>
              <AmountText>R$ 29,70</AmountText>
            </AmountContainer>

            <AmountContainer>
              <AmountText>Entrega</AmountText>
              <AmountText>R$ 3,50</AmountText>
            </AmountContainer>

            <AmountContainer>
              <AmountText>Total</AmountText>
              <AmountText>R$ 33,20</AmountText>
            </AmountContainer>
          </TotalPriceContainer>

          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </SelectedCoffeesContainer>
      </AddressContainer>
    </CheckoutContainer>
  );
};
