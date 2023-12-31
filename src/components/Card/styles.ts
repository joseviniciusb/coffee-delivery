import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 25px;
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
    height: 2.375rem;
    gap: 1rem;
    align-items: center;
    margin-top: auto;
    margin-bottom: 1.2rem;

    p {
      font-size: 1.4rem;
      font-weight: bolder;
    }

    nav {
      display: flex;
      gap: 0.5rem;
      height: 2.375rem;

      div {
        background-color: ${(props) => props.theme["base-button"]};
        justify-content: center;
        width: 5rem;
      }

      div:last-child {
        background: ${(props) => props.theme["purple-dark"]};
        border-radius: 6px;
        width: 2rem;
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
    display: inline;
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 4px 2px 4px 2px;
    border-radius: 10%;
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const RealSign = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const CounterContainer = styled.div`
  display: flex;
  width: 4.5rem;

  user-select: none;

  p {
    font-size: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme["purple"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-weight: bold;
  }
`;

export const CustomTagContainer = styled.section`
  display: flex;
  gap: 0.5rem;
`;
