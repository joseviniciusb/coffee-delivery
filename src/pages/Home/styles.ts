import styled from "styled-components";


export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 6rem;
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
    font-size: 2rem;
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

export const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;
  text-align: center;

  background-color: ${(props) => props.theme["base-card"]};

  div {
    display: flex;
    width: 13rem;
    height: 2.375rem;
    gap: 1rem;
    align-items: center;
    margin-top: auto;
    margin-bottom: 1.2rem;

    nav {
      display: flex;
      gap: 0.5rem;
      width: 7.785rem;
      height: 2.375rem;

      div {
        background-color: ${(props) => props.theme["base-button"]};
        justify-content: center;
        width: 4.5rem;
      }
    }
  }

  img {
    width: 120px;
    margin-top: -15px;
    margin-bottom: 1rem;
  }

  h3 {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 4px 2px 4px 2px;
    border-radius: 10%;
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    color: ${(props) => props.theme["base-label"]};
    margin-top: 0.5rem;
  }
`;


export const CounterContainer = styled.div`
  display: flex;
  width: 4.5rem;
`;
