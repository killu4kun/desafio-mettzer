import React from "react";
import * as S from "./style";
import logoMettzer from "../../assets/logoMettzer.png";

export default function SearchHeader() {
  return (
    <S.Header>
      <img src={logoMettzer} alt="logo" />
    </S.Header>
  );
}
