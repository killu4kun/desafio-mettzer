import React from "react";
import Button from "../Button";
import HomeLogo from "../HomeLogo";
import * as S from "./style";

export default function HomeContainer() {
  return (
    <S.Container>
      <HomeLogo />
      <Button />
    </S.Container>
  );
}
