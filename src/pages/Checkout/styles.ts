import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div``;

export const AddressContainer = styled.div``;

export const FormContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 3.5rem;
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
    width: 55%;
  }
  input:nth-child(6) {
    width: 42%;
  }
  input:last-child {
    width: 10%;
  }
`;

const BaseInput = styled.input`
  height: 2.5rem;
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;

  border: 0;
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

export const CartItemsContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
`;
