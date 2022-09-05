import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  img {
    width: 250px;
    height: 50px;
  }
`;
