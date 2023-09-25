import styled from "styled-components";


export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 36rem;

  h1 {
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    font-family: "Roboto";
    font-size: 1.2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ItemsContainer = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: "Roboto";
  color: ${(props) => props.theme["base-text"]};
  font-size: 16px;

  div {
    display: flex;
    min-width: 15rem;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 30rem;
  }
`;

export const CoffeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  max-width: 1120px;
  max-height: 1360px;
`;

export const CardsContainer = styled.div`
margin-top: 5rem;

`

