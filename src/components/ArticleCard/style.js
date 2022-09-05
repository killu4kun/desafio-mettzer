import styled from "styled-components";

export const ListArticles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  margin: 10px 20px;
  padding: 20px;
  border-radius: 15px;
  div:first-child {
    padding-bottom: 20px;
    h1 {
      font-size: 18px;
      color: #010202;
    }
    p {
      font-size: 14px;
      color: #010202;
      margin-top: 4px;
    }
  }
  section {
    margin-top: 10px;
    strong {
      font-size: 18px;
      color: #010202;
    }
    p {
      font-size: 14px;
      color: #010202;
      margin-top: 4px;
    }
    h2 {
      margin-top: 10px;
      color: #010202;
      font-size: 16px;
    }
    p:nth-of-type(2) {
      font-style: italic;
    }
  }
  button {
    border: none;
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 10px;
  }
`;
