import styled from "styled-components";
import imageHeader from "../../../images/Illustration.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  h2 {
    color: #a7df63;
  }
`;

export const Content = styled.div`
  input {
    background: #ffff;
    border-radius: 5px;
    border: 1px solid #1d164d;
    padding: 20px;
    width: 70%;
    height: 10%;
  }

  button {
    background-color: #a7df63;
    height: 40px;
    border-radius: 5px;
    border: 0;

    color: #ffffff;
    width: 10%;

    margin-left: 10px;
    margin-top: 50px;
  }

  form {
    font-size: 30px;
    font-weight: bold;
    color: #1d164d;
    margin-top: 200px;
  }
`;

export const Subtitle = styled.text``;

export const ButtonWrapper = styled.div``;

export const RightHeaderImage = styled.div`
  flex: 1;
  background: url(${imageHeader}) no-repeat center;
  background-size: cover;
`;
