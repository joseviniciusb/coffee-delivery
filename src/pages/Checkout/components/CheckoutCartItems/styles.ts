import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  gap: 2rem;
  margin: 25px;
`;

export const ProductIcon = styled.img`
  height: 64px;
  width: 64px;
`;

export const ProductName = styled.p`
  font-weight: 600;
`;

export const InfoProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: ${(props) => props.theme["base-button"]};
  padding: 0.3rem 0.5rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const BaseCounterButton = styled.span`
  color: ${(props) => props.theme["purple"]};
  font-size: 1.5rem;
  cursor: pointer;
 
`;
export const IncrementButton = styled(BaseCounterButton)``;
export const DecrementButton = styled(BaseCounterButton)``;

export const Counter = styled.p`
  font-size: 16px;
`;

export const RemoveButton = styled.button`
  display: inline-flex;
  padding: 0.4rem;
  align-items: center;
  background: ${(props) => props.theme["base-button"]};
  border: 0;
`;

export const ProductPrice = styled.p`
  position: relative;
  right: -5px;
  white-space: nowrap;
  font-weight: bold;
`;
