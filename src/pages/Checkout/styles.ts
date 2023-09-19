import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutTitle = styled.p`
  font-family: "Baloo 2";
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const CartItemsContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
`;
