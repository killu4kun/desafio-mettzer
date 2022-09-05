import Button from "../../components/Button";
import HomeContainer from "../../components/HomeContainer";
import HomeLogo from "../../components/HomeLogo";

import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <HomeContainer>
        <HomeLogo />
        <Button />
      </HomeContainer>
    </S.Container>
  );
}
