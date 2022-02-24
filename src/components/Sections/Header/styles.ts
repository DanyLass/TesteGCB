import React from "react";
import styled from "styled-components";
import imageHeader from "../../../images/Illustration.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  input {
    background: #ffff;
    border-radius: 5px;
    border: 1px solid #1d164d;
    padding: 20px;
    width: 70%;
    height: 5%;
    margin-left: 10%;
  }
  h1 {
    color: #a7df63;
    margin-left: 20%;
    margin-top: 10%;
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

  h3 {
    font-size: 30px;
    font-weight: bold;
    color: #1d164d;
    margin-top: 200px;
    margin-left: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    background: #ffff;

    color: #a7df63;

    border: 1px solid #a7df63;
    margin-left: -300px;
    padding: 20px 30px;
    border-radius: 5px;
  }
`;

export const RightHeaderImage = styled.img.attrs({
  src: `${imageHeader}`,
})`
  background-size: cover;
  flex: 1;
`;
