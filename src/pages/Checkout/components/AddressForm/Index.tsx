import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
  AddressInput,
  FormContainer,
  InfoContainer,
  InfoSubTitle,
  InfoTitle,
  TextContainer,
} from "./styles";

import { MapPin } from "phosphor-react";

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

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const methods = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("cep"));

  let YELLOW_DARK = "#C47F17";

  return (
    <>
      <FormContainer>
        <InfoContainer>
          <MapPin size={22} color={YELLOW_DARK} />
          <TextContainer>
            <InfoTitle>Endereço de entrega</InfoTitle>
            <InfoSubTitle>
              Informe o endereço de entrega onde deseja receber seu pedido
            </InfoSubTitle>
          </TextContainer>
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
              {...register("complemento")}
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
    </>
  );
};

export default AddressForm;
