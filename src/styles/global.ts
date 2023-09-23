import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]}
}

a:active {
    box-shadow: none;
}

a:focus, button:focus  {
    box-shadow: none;
}


body{

background-color: ${(props) => props.theme["background"]} ;
overflow: auto;

}

body, input, textarea, button {
   
    font-weight: 400;
    font-size: 1rem;
}
`;
