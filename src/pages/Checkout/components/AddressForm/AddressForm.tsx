import axios from "axios";
import {
  AddressInput,
  CepContainer,
  FormContainer,
  InfoContainer,
  InfoSubTitle,
  InfoTitle,
  TextContainer,
} from "./styles";

import { MapPin, Warning } from "phosphor-react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { CheckoutInputsTypes } from "../../Checkout";

import { useState } from "react";

interface AddressFormProps {
  register: UseFormRegister<CheckoutInputsTypes>;
  errors: FieldErrors;
  adressFormRef: React.RefObject<HTMLFormElement>;
  getValues: UseFormGetValues<CheckoutInputsTypes>;
  setValue: UseFormSetValue<CheckoutInputsTypes>;
  handleSubmit: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
  register,
  errors,
  adressFormRef,
  getValues,
  setValue,
  handleSubmit,
}) => {
  const [invalidCep, setInvalidCep] = useState(false);
  const YELLOW_DARK = "#C47F17";

  function handleCEP() {
    const inputValue = getValues("cep");
    let cleanedInput = inputValue.replace(/\D/g, "");

    if (cleanedInput.length > 5)
      cleanedInput = cleanedInput.slice(0, 5) + "-" + cleanedInput.slice(5);

    setValue("cep", cleanedInput.slice(0, 9));
  }

  async function fetchAddressByCEP(cep: string) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
      return null;
    }
  }

  async function handleCEPChange() {
    const inputValue = getValues("cep");

    if (inputValue.length === 9) {
      const address = await fetchAddressByCEP(inputValue);

      console.log("address", address.erro);
      if (address.erro && inputValue.length === 9) {
        setInvalidCep(true);
      } else {
        setInvalidCep(false);
      }

      if (address) {
        setValue("rua", address.logradouro);
        setValue("bairro", address.bairro);
        setValue("cidade", address.localidade);
        setValue("uf", address.uf);
      }
    } else {
      setValue("rua", "");
      setValue("bairro", "");
      setValue("cidade", "");
      setValue("uf", "");
    }
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
          <CepContainer>
            <AddressInput
              {...register("cep", {
                required: true,
                onChange: () => {
                  handleCEP();
                  handleCEPChange();
                },
              })}
              placeholder="CEP"
              $inputError={errors.hasOwnProperty("cep")}
            />
            {invalidCep ? <Warning size={28} color="red" weight="fill" /> : ""}
          </CepContainer>

          <AddressInput
            {...register("rua", { required: true })}
            placeholder="Rua"
            $inputError={!!errors["rua"]}
          />
          <AddressInput
            {...register("numero", { required: true })}
            placeholder="Número"
            $inputError={!!errors["numero"]}
          />
          <AddressInput
            {...register("complemento")}
            placeholder="Complemento"
            $inputError={!!errors["complemento"]}
          />
          <AddressInput
            {...register("bairro", { required: true })}
            placeholder="Bairro"
            $inputError={!!errors["bairro"]}
          />
          <AddressInput
            {...register("cidade", { required: true })}
            placeholder="Cidade"
            $inputError={!!errors["cidade"]}
          />
          <AddressInput
            {...register("uf", { required: true })}
            placeholder="UF"
            $inputError={!!errors["uf"]}
          />
        </form>
      </FormContainer>
    </>
  );
};

export default AddressForm;
