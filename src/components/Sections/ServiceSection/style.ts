import styled from "styled-components";
import imageService from "../../../images/bloco_services.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.text`
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #1d164d;
`;

export const Text = styled.text`
  color: #cdc5bf;
  font-size: 12px;
  text-align: right;
`;

export const Content = styled.div`
  display: ;
`;

export const ImageService = styled.img.attrs({
  src: `${imageService}`,
})`
  width: 500px;
`;
