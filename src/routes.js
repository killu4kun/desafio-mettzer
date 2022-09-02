import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search/styles";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Router>
  );
}
