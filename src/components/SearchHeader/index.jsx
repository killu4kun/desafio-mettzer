import React from "react";
import * as S from "./style";
import logoMettzer from "../../assets/logoMettzer-removebg-preview.png";

export default function SearchHeader() {
  return (
    <S.Header>
      <img src={logoMettzer} alt="logo" />
    </S.Header>
  );
}
