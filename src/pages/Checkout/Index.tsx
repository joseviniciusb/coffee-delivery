import AddressForm from "./components/AddressForm/Index";
import { SelectedCoffee } from "./components/SelectedCoffee/Index";
import {
  AddressContainer,
  AmountContainer,
  AmountText,
  CheckoutContainer,
  CheckoutTitle,
  ConfirmOrderButton,
  SelectedCoffeesContainer,
  TitleContainer,
  TotalPriceContainer,
} from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <TitleContainer>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      </TitleContainer>

      <AddressContainer>
        <AddressForm />
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
