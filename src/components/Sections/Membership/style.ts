import styled from "styled-components";
import imageMembership from "../../../images/bloco_final_image.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  align-items: stretch;

  width: 100%;
`;

export const Content = styled.div`
  h3 {
    font-size: 30px;
    font-weight: bold;
    color: #1d164d;
    margin-top: 200px;
    margin-left: 30px;
  }

  input {
    background: #ffff;
    border-radius: 5px;
    border: 1px solid #1d164d;
    padding: 20px;
    width: 60%;
    height: 5%;
    margin-left: 90px;
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
`;

export const ImageMembership = styled.img.attrs({
  src: `${imageMembership}`,
})`
  width: 600px;
  background-size: cover;
  flex: 1;
`;
