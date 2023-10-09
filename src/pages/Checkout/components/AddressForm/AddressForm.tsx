import axios from "axios";
import {
  AddressInput,
  FormContainer,
  InfoContainer,
  InfoSubTitle,
  InfoTitle,
  TextContainer,
} from "./styles";

import { MapPin } from "phosphor-react";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";

interface Address {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface AddressFormProps {
  register: ReturnType<typeof useForm>["register"];
  formState: ReturnType<typeof useForm>["formState"];

  adressFormRef: React.RefObject<HTMLFormElement>;
  getValues: ReturnType<typeof useForm>["getValues"];
  setValue: ReturnType<typeof useForm>["setValue"];
}

const AddressForm: React.FC<AddressFormProps> = ({
  register,

  adressFormRef,
  getValues,
  setValue,
}) => {
  const [addressData, setAddressData] = useState<Address | null>(null);
  let YELLOW_DARK = "#C47F17";

  const { errors } = useFormState();

  function handleCEP() {
    const inputValue = getValues("cep");
    var cleanedInput = inputValue.replace(/\D/g, "");

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
    var cleanedInput = inputValue.replace(/\D/g, "");

    if (cleanedInput.length === 8) {
      const address = await fetchAddressByCEP(cleanedInput);

      if (address) {
        setAddressData(address);

        setValue("rua", address.logradouro);
        setValue("bairro", address.bairro);
        setValue("cidade", address.localidade);
        setValue("uf", address.uf);
      }
    } else {
      setAddressData(null);
      setValue("rua", "");
      setValue("bairro", "");
      setValue("cidade", "");
      setValue("uf", "");
    }
  }

  console.log(addressData);

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

        <form ref={adressFormRef} onSubmit={(e) => e.preventDefault()}>
          <AddressInput
            {...register("cep", {
              required: true,
              onChange: () => {
                handleCEP();
                handleCEPChange();
              },
            })}
            placeholder="CEP"
            error={!!errors["cep"]}
          />
          <AddressInput
            {...register("rua", { required: true })}
            placeholder="Rua"
            error={!!errors["rua"]}
          />
          <AddressInput
            {...register("numero", { required: true })}
            placeholder="Número"
            error={!!errors["numero"]}
          />
          <AddressInput
            {...register("complemento")}
            placeholder="Complemento"
            error={!!errors["complemento"]}
          />
          <AddressInput
            {...register("bairro", { required: true })}
            placeholder="Bairro"
            error={!!errors["bairro"]}
          />
          <AddressInput
            {...register("cidade", { required: true })}
            placeholder="Cidade"
            error={!!errors["cidade"]}
          />
          <AddressInput
            {...register("uf", { required: true })}
            placeholder="UF"
            error={!!errors["uf"]}
          />
        </form>
      </FormContainer>
    </>
  );
};

export default AddressForm;
