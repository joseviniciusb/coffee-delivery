import AddressForm from "./components/AddressForm/Index";
import { SelectedCoffee } from "./components/SelectedCoffee/Index";
import {
  AddressContainer,
  CheckoutContainer,
  CheckoutTitle,
  SelectedCoffeesContainer,
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
        <SelectedCoffeesContainer>
          <SelectedCoffee />
        </SelectedCoffeesContainer>
      </AddressContainer>
    </CheckoutContainer>
  );
};
