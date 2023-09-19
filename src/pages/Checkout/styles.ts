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

export const TotalPriceContainer = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  div:nth-last-child(1) {
    span {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const AmountText = styled.span`
  font-size: 0.875rem;
`;
