import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 6.5rem;
  gap: 500px;

  nav {
    display: flex;
    color: ${(props) => props.theme['purple-dark']};
    gap: 0.5rem;
  
    div {
      border-radius: 10%;
      width: 6.313rem;
      display: flex;
      background-color: ${(props) => props.theme["purple-light"]};
      padding: 0.5rem;
      width: 9.975rem;
      gap: 0.5rem;
    }
  }




`;
