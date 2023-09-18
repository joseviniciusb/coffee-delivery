import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import {
  AddressContainer,
  AddressInput,
  CartItemsContainer,
  CheckoutContainer,
  FormContainer,
  InfoContainer,
} from "./styles";

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

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const methods = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("cep"));

  return (
    <CheckoutContainer>
      <AddressContainer>
        <h1>Complete seu pedido</h1>

        <FormContainer>
          <InfoContainer>
            <h2>Endereço de entrega</h2>
            <p>Informe o endereço de entrega onde deseja receber seu pedido</p>
          </InfoContainer>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <AddressInput {...register("cep")} placeholder="CEP" />
              <AddressInput
                {...register("rua", { required: true })}
                placeholder="Rua"
              />
              <AddressInput
                {...register("numero", { required: true })}
                placeholder="Número"
              />
              <AddressInput
                {...register("complemento", { required: true })}
                placeholder="Complemento"
              />
              <AddressInput
                {...register("bairro", { required: true })}
                placeholder="Bairro"
              />
              <AddressInput
                {...register("cidade", { required: true })}
                placeholder="Cidade"
              />
              <AddressInput
                {...register("uf", { required: true })}
                placeholder="UF"
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </FormProvider>
        </FormContainer>
      </AddressContainer>

      <h1>Cafés selecionados</h1>
      <CartItemsContainer></CartItemsContainer>
    </CheckoutContainer>
  );
};
