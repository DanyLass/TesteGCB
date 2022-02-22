import styled from "styled-components";
import illustrationImg from "../../images/Illustration.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 60px 0;
    width: 500px;
    text-align: center;
    line-height: 10px;
  }

  h1 {
    margin-bottom: 20px;
    color: #1d164d;
    font-size: 23px;
  }

  input {
    background: #c9e2f4;
    border-radius: 10px;
    border: 1px solid #232129;
    padding: 10px;
    width: 40%;
    height: 15%;

    & + input {
      margin-top: 8px;
      margin-left: 8px;
    }
  }

  button {
    background-color: #a7df63;
    height: 40px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #ffffff;
    width: 40%;
    font-weight: 500;

    margin-left: 8px;
  }
`;

export const ButtonWrapper = styled.div``;

export const RegisterImage = styled.div`
  flex: 1;
  background: url(${illustrationImg}) no-repeat center;
  background-size: cover;
`;
