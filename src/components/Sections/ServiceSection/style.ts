import styled from "styled-components";
import imageService from "../../../images/bloco_services.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 80px;
  height: 100vh;
  align-items: stretch;
`;

export const Title = styled.text`
  margin-left: 50px;

  font-weight: bold;
  font-size: 20px;
  color: #1d164d;
`;

export const Text = styled.text`
  color: #cdc5bf;
  font-size: 12px;
  text-align: right;
  display: inline;
  margin-right: 400px;
  margin-top: 100px;
`;

export const Content = styled.div`
  display: flex;
`;
export const ButtonMore = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 20px 50px;
`;

export const ImageService = styled.img.attrs({
  src: `${imageService}`,
})`
  width: 500px;
`;
