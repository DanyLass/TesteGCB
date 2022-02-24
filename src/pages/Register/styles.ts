import styled from "styled-components";
import illustrationImg from "../../images/Illustration.svg";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  margin-left: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;

  h1 {
    margin-bottom: 10px;
    color: #1d164d;
    font-size: 23px;
  }

  input {
    background: #c9e2f4;
    border-radius: 10px;
    border: 1px solid #232129;
    padding: 10px;
    width: 200px;
    height: 30px;

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
    width: 80%;
    font-weight: 500;
    margin-top: 10px;
    margin-left: 8px;
  }
`;

export const Form = styled.div`
  margin: 60px 0;
  width: 400px;
  text-align: center;
  line-height: 10px;
`;

export const RegisterImage = styled.img.attrs({
  src: `${illustrationImg}`,
})`
  background-size: cover;
  flex: 1;
  width: 10px;
`;
