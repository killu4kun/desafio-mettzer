import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;

export const theme = {
  colors: {
    black: "#000",
    white: "#f5f5f5",
    mettzer_blue: "#4ebbcb",
  },
};
