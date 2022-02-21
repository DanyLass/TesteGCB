import styled from "styled-components";
import imageHeader from "../../../images/Illustration.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftHeader = styled.div`
  max-width: 50%;
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  justify-content: center;
`;

export const RightHeader = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.text`
  color: #a7df63;
  font-weight: bold;
  font-size: 20px;
  padding: 20px 50px;
`;

export const Subtitle = styled.text`
  font-size: 38px;
  font-weight: bold;
  color: #1d164d;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin: 0 200px;

  display: flex;
  align-items: flex-end;
  position: absolute;
`;

export const RightHeaderImage = styled.img.attrs({
  src: `${imageHeader}`,
})`
  width: 600px;
`;
