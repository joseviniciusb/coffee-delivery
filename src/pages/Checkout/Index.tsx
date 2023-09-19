import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import AddressForm from "./components/AddressForm/Index";
import { SelectedCoffee } from "./components/SelectedCoffee/Index";
import {
  AddressAndPaymentContainer,
  AddressContainer,
  AmountContainer,
  AmountText,
  CheckoutContainer,
  CheckoutTitle,
  ConfirmOrderButton,
  MethodOfPayment,
  MethodsOfPaymentContainer,
  PaymentContainer,
  SelectedCoffeesContainer,
  TitleContainer,
  TotalPriceContainer,
} from "./styles";
import {
  InfoContainer,
  InfoSubTitle,
  InfoTitle,
  TextContainer,
} from "./components/AddressForm/styles";

export const Checkout = () => {
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
              <MethodOfPayment>
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </MethodOfPayment>
              <MethodOfPayment>
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </MethodOfPayment>
              <MethodOfPayment>
                <Money size={16} />
                DINHEIRO
              </MethodOfPayment>
            </MethodsOfPaymentContainer>
          </PaymentContainer>
        </AddressAndPaymentContainer>

        <SelectedCoffeesContainer>
          <SelectedCoffee />

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
