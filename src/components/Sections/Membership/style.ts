import styled from "styled-components";
import imageMembership from "../../../images/bloco_final_image.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 200px;
`;

export const Title = styled.text`
  font-size: 20px;
  font-weight: bold;
  color: #1d164d;
  margin-top: 200px;
  padding: 50px 400px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 400px;
  margin-left: -800px;
`;

export const TitleView = styled.div`
  color: #1d164d;
  font-size: 15px;
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
