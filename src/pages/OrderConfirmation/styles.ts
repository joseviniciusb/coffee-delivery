import styled from "styled-components";

export const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const OrderInfoContainer = styled.div`
  background-color: ${(props) => props.theme["background"]};
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 3rem 2rem 3rem 2rem;
  gap: 1.5rem;
`;

export const BorderWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 10rem;

  gap: 2.5rem;
  white-space: normal;

  font-size: 16px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["yellow-dark"]},
        ${(props) => props.theme["purple-dark"]}
      )
      border-box;

  border: 2px solid transparent;
  border-radius: 6px 36px 6px 36px;
  overflow: hidden;
`;

export const InfoTextContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 400px;

  div :nth-child(2) {
    font-weight: bold;
  }
`;

export const DeliveryRiderIlustrationContainer = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const StyledTitle = styled.h1`
  font-family: "Baloo 2";
  font-size: 32px;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const StyledSubTitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const InfoText = styled.p``;