import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="" exact element={Home} />
        <Route path="/search" element={Search} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
