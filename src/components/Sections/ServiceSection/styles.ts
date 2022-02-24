import styled from "styled-components";
import imageService from "../../../images/bloco_services.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 80px;
  width: 100%;
  align-items: stretch;
`;

export const Content = styled.div`
  margin-left: -70px;

  h2 {
    color: #1d164d;
    margin-top: 90px;
    font-size: 30px;
  }

  form {
    display: block;
    color: #cfcfcf;
    margin-top: 30px;
    margin-left: -90px;
    padding: 10px 100px;
  }
`;

export const ButtonMore = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 20px 50px;
`;

export const ImageService = styled.img.attrs({
  src: `${imageService}`,
})`
  flex: 1;
`;
