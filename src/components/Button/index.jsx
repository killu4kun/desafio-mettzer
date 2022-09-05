import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();

  return (
    <>
      <S.Button onClick={() => navigate("search")}>Acessar plataforma</S.Button>
      ;
    </>
  );
}
