import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 85%;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background-color: ${(props) => props.theme["background"]};

  nav {
    display: flex;
    color: ${(props) => props.theme["purple-dark"]};
    gap: 0.7rem;
  }

  a {
    border: 0 transparent;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 6.5rem; /* A altura do seu cabeçalho */
`;

export const LocationContainer = styled.div`
  border-radius: 10%;
  width: 6.313rem;
  display: flex;
  background-color: ${(props) => props.theme["purple-light"]};
  padding: 0.5rem;
  width: 100%;
  white-space: nowrap;
  gap: 0.5rem;
`;

export const ShoppingCartIconContainer = styled.div`
  background-color: ${(props) => props.theme["yellow-light"]};
  display: flex;
  padding: 0.5rem;

  justify-content: center;
  position: relative;

  border-radius: 10%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    left: 26px;
    bottom: 26px;

    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["yellow-dark"]};
    font-weight: bold;
    font-size: 0.75rem;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1000px;
  }
`;
