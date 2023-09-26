import { useRef } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  Money,
  SmileySad,
} from "phosphor-react";
import AddressForm from "./components/AddressForm/AddressForm";
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
  ConfirmOrderButtonContainer,
  EmptyShoppingCart,
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
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentMethods } from "../../types/PaymentMethods";

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

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethods | null>(
    null
  );

  const handleMethodSelect = (method: PaymentMethods) => {
    setSelectedMethod(method);
  };

  type Inputs = {
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    exampleRequired: string;
  };

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const adressFormRef = useRef(null);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate("/order-confirmation", {
      state: { formData: data, selectedMethod },
    });
  };

  const adressFormProps = {
    register,
    errors,
    adressFormRef,
    handleSubmit: handleSubmit(onSubmit),
    getValues,
    setValue,
  };

  return (
    <CheckoutContainer>
      <TitleContainer>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      </TitleContainer>

      <AddressContainer>
        <AddressAndPaymentContainer>
          <AddressForm {...adressFormProps} />
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
                selected={selectedMethod === PaymentMethods.CREDIT}
                onClick={() => handleMethodSelect(PaymentMethods.CREDIT)}
              >
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </S.PaymentMethod>
              <S.PaymentMethod
                selected={selectedMethod === PaymentMethods.DEBIT}
                onClick={() => handleMethodSelect(PaymentMethods.DEBIT)}
              >
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </S.PaymentMethod>
              <S.PaymentMethod
                selected={selectedMethod === PaymentMethods.MONEY}
                onClick={() => handleMethodSelect(PaymentMethods.MONEY)}
              >
                <Money size={16} />
                DINHEIRO
              </S.PaymentMethod>
            </S.PaymentMethodContainer>
          </PaymentContainer>
        </AddressAndPaymentContainer>

        <div>
          <SelectedCoffeesContainer>
            <CheckoutCartItems />
            {shoppingCartItems.length === 0 ? (
              <EmptyShoppingCart>
                <SmileySad color="#8047F8" size={40} />
                <p>Seu carrinho de compras está vazio</p>
                <p>
                  Dê um propósito a ele — preencha-o com nossos deliciosos
                  cafés.
                </p>
              </EmptyShoppingCart>
            ) : (
              <TotalPriceContainer>
                <AmountContainer>
                  <AmountText>Total de itens</AmountText>
                  <AmountText>R$ {BRL.format(totalPrice)}</AmountText>
                </AmountContainer>

                <AmountContainer>
                  <AmountText>Entrega</AmountText>
                  <AmountText>{BRL.format(deliveryFee)}</AmountText>
                </AmountContainer>

                <AmountContainer>
                  <AmountText>Total</AmountText>
                  <AmountText>
                    {BRL.format(totalPrice + deliveryFee)}
                  </AmountText>
                </AmountContainer>
              </TotalPriceContainer>
            )}

            <ConfirmOrderButtonContainer>
              <ConfirmOrderButton
                onClick={() => {
                  if (!shoppingCartItems.length) return;
                  adressFormRef.current.requestSubmit();
                }}
              >
                CONFIRMAR PEDIDO
              </ConfirmOrderButton>
            </ConfirmOrderButtonContainer>
          </SelectedCoffeesContainer>
          {Object.keys(errors).length > 0 && (
            <div>
              {Object.entries(errors).map(([inputName, error]) => (
                <p key={inputName}>O campo {inputName} é obrigatório</p>
              ))}
            </div>
          )}
        </div>
      </AddressContainer>
    </CheckoutContainer>
  );
};
