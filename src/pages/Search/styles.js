import styled from "styled-components";

export const Content = styled.div`
  width: 720px;
  margin-left: 20px;
  margin-top: 40px;
  padding-bottom: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.black};
  width: 100%;
  min-height: 100vh;

  h1 {
    text-align: center;
    padding-top: 40px;
    color: ${(props) => props.theme.colors.white};
    font-size: 30px;
  }
`;
