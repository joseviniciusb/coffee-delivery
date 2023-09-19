import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressContainer = styled.div`
display: flex;
gap: 1.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutTitle = styled.p`
  font-family: "Baloo 2";
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const SelectedCoffeesContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 25px;
  border-radius: 6px 44px 6px 44px;
`;
