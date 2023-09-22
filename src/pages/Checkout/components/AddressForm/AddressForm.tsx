import {
  AddressInput,
  FormContainer,
  InfoContainer,
  InfoSubTitle,
  InfoTitle,
  TextContainer,
} from "./styles";

import { MapPin } from "phosphor-react";

const AddressForm = ({
  register,
  errors,
  adressFormRef,
  handleSubmit,
  getValues,
  setValue,
}) => {
  let YELLOW_DARK = "#C47F17";

  function handleCEP() {
    const inputValue = getValues("cep");
    var cleanedInput = inputValue.replace(/\D/g, "");

    if (cleanedInput.length > 5)
      cleanedInput = cleanedInput.slice(0, 5) + "-" + cleanedInput.slice(5);

    setValue("cep", cleanedInput.slice(0, 9));
  }

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

        <form ref={adressFormRef} onSubmit={handleSubmit}>
          <AddressInput
            {...register("cep", {
              required: true,
              onChange: () => {
                handleCEP();
              },
            })}
            placeholder="CEP"
          />
          <AddressInput
            {...register("rua", { required: true })}
            placeholder="Rua"
            error={errors["rua"] !== undefined}
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
        </form>
      </FormContainer>
    </>
  );
};

export default AddressForm;
