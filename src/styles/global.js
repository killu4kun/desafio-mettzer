import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --pureBlack:#000,
  }

  button {
    cursor: pointer;
  }
`;

export const theme = {
  colors: {
    black: "#000",
  },
};
