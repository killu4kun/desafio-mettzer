import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import GlobalStyle, { theme } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
