import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box
  }
  button {
    border: none
  }
  li {
    list-style: none
  }
`;

export default GlobalStyle;
