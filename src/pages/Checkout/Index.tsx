import AddressForm from "./components/AddressForm/Index";
import {
  AddressContainer,
  CartItemsContainer,
  CheckoutContainer,
  CheckoutTitle,
  TitleContainer,
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
      </AddressContainer>

      <CartItemsContainer></CartItemsContainer>
    </CheckoutContainer>
  );
};
