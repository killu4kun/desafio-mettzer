import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  flex-direction: column;

  img {
    width: 50%;
    height: 50%;
  }
`;
