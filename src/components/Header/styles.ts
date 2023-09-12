import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 6.5rem;
  gap: 800px;
  margin-top: -50px;
  margin-bottom: 5rem;

  nav {
    display: flex;
    color: ${(props) => props.theme["purple-dark"]};
    gap: 0.7rem;
  }
`;

export const LocationContainer = styled.div`
  border-radius: 10%;
  width: 6.313rem;
  display: flex;
  background-color: ${(props) => props.theme["purple-light"]};
  padding: 0.5rem;
  width: 9.975rem;
  gap: 0.5rem;
`;

export const ShoppingCartIconContainer = styled.div`
  background-color: ${(props) => props.theme["yellow-light"]};
  display: flex;
  padding: 0.5rem;

  border-radius: 10%;
`;
