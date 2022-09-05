import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 12.5rem;
  height: 3.125rem;

  background-color: ${(props) => props.theme.colors.mettzer_blue};
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  position: relative;
  bottom: 40px;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.mettzer_blue};
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
  }
  @media screen and (max-width: 720px) {
    position: relative;
    top: 100px;
  }
`;
