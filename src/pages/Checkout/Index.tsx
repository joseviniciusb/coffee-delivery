import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import AddressForm from "./components/AddressForm/Index";
import { CheckoutCartItems } from "./components/CheckoutCartItems";
import {
  AddressAndPaymentContainer,
  AddressContainer,
  AmountContainer,
  AmountText,
  CheckoutContainer,
  CheckoutTitle,
  ConfirmOrderButton,
  PaymentContainer,
  SelectedCoffeesContainer,
  TitleContainer,
  TotalPriceContainer,
  StyledCheckout as S,
} from "./styles";
import {
  InfoContainer,
  InfoSubTitle,
  InfoTitle,
  TextContainer,
} from "./components/AddressForm/styles";
import { useState } from "react";
import { useAppContext } from "../../contexts/ProductsContext";
import { coffees } from "../../components/Coffees/coffees";

export const Checkout = () => {
  const { shoppingCartItems, sumTotalPrice, filterCoffeesById } =
    useAppContext();

  let BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const filteredCoffees = filterCoffeesById(coffees, shoppingCartItems);

  const totalPrice = sumTotalPrice(filteredCoffees);
  const deliveryFee = 3.5;

  enum paymentMethods {
    CREDIT,
    DEBIT,
    MONEY,
  }

  const [selectedMethod, setSelectedMethod] = useState<paymentMethods | null>(
    null
  );

  const handleMethodSelect = (method: paymentMethods) => {
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

            <S.PaymentMethodContainer>
              <S.PaymentMethod
                selected={selectedMethod === paymentMethods.CREDIT}
                onClick={() => handleMethodSelect(paymentMethods.CREDIT)}
              >
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </S.PaymentMethod>
              <S.PaymentMethod
                selected={selectedMethod === paymentMethods.DEBIT}
                onClick={() => handleMethodSelect(paymentMethods.DEBIT)}
              >
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </S.PaymentMethod>
              <S.PaymentMethod
                selected={selectedMethod === paymentMethods.MONEY}
                onClick={() => handleMethodSelect(paymentMethods.MONEY)}
              >
                <Money size={16} />
                DINHEIRO
              </S.PaymentMethod>
            </S.PaymentMethodContainer>
          </PaymentContainer>
        </AddressAndPaymentContainer>

        <SelectedCoffeesContainer>
          <CheckoutCartItems />

          <TotalPriceContainer>
            <AmountContainer>
              <AmountText>Total de itens</AmountText>
              <AmountText>R$ {BRL.format(totalPrice)}</AmountText>
            </AmountContainer>

            <AmountContainer>
              <AmountText>Entrega</AmountText>
              <AmountText>R$ {BRL.format(deliveryFee)}</AmountText>
            </AmountContainer>

            <AmountContainer>
              <AmountText>Total</AmountText>
              <AmountText>R$ {BRL.format(totalPrice + deliveryFee)}</AmountText>
            </AmountContainer>
          </TotalPriceContainer>

          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </SelectedCoffeesContainer>
      </AddressContainer>
    </CheckoutContainer>
  );
};
