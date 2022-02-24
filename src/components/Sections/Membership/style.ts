import styled from "styled-components";
import imageMembership from "../../../images/bloco_final_image.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 300px;

  width: 100%;
`;

export const Title = styled.text`
  font-size: 20px;
  font-weight: bold;
  color: #1d164d;
  margin-top: 200px;
  margin-left: -40px;
  padding: 50px 400px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 300px;
  margin-left: -800px;

  input {
    background: #ffff;
    border-radius: 5px;
    border: 1px solid #1d164d;
    padding: 20px;
    width: 100%;
    height: 10%;
    margin-left: -20%;
  }

  button {
    background-color: #a7df63;
    height: 40px;
    border-radius: 5px;
    border: 0;

    color: #ffffff;
    width: 30%;

    margin-left: 50px;
    margin-top: 10px;
  }
`;

export const TitleView = styled.div`
  color: #1d164d;
  font-size: 20px;
  margin-top: 800px;
  margin-left: -800px;
`;

export const SubTitle = styled.text`
  color: #cdc5bf;
  font-size: 10px;
  //text-align: center;
  margin-top: 800px;
`;

export const SubTitleView = styled.div`
  color: #cdc5bf;
  font-size: 10px;
  //text-align: center;
  margin-top: 800px;
`;

export const ImageMembership = styled.img.attrs({
  src: `${imageMembership}`,
})`
  width: 500px;
`;
