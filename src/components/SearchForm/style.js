import styled from "styled-components";

export const Form = styled.form`
  margin-top: 60px;
  margin-left: 20px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0px;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    width: 100%;
    max-width: 120px;
    height: 50px;
    background: #4ebbcb;
    color: #fff;
    border: 0px;
    margin: 15px;
    border-radius: 5px;
    font-weight: bold;
    margin-right: 10px;
    &:hover {
      background-color: white;
      color: #4ebbcb;
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
