import styled, { keyframes } from "styled-components";

const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
  svg {
    animation: ${spin} 1s infinite;
    fill: ${(props) => props.theme.colors.mettzer_blue};
    font-size:1.5rem;
  }
`;
