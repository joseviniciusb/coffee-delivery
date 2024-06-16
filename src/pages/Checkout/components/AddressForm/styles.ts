import styled from "styled-components";

type BaseInputProps = {
  $inputError: boolean;
};

const BaseInput = styled.input<BaseInputProps>`
  height: 2.5rem;
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;

  border: ${({ $inputError }) => ($inputError ? "1px solid red" : "0")};
  margin: 0.5rem;

  color: ${(props) => props.theme["text-base"]};

  &::placeholder {
    color: ${(props) => props.theme["text-base"]};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }
`;

export const AddressInput = styled(BaseInput)`
  background: ${(props) => props.theme["base-input"]};
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const CepContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 240px;

  svg {
    position: absolute;
    right: 12px;
    top: 12px;
  }

  input {
    text-align: left !important;
  }
`;

export const FormContainer = styled.div`
  height: 400px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  background-color: ${(props) => props.theme["base-card"]};

  padding: 2.5rem;

  input:nth-child(2) {
    width: 96%;
  }

  input:nth-child(4) {
    width: 52%;
  }

  input:last-child {
    width: 9%;
    text-align: center;
  }

  input {
    border-radius: 6px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  line-height: 130%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const InfoSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
