import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100px;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ImageView = styled.div`
  margin-bottom: 5px;
  padding: 50px;
  text-align: center;
`;

export const TitleView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  color: #ffff;
`;

export const Title = styled.text`
  color: #1d164d;
  font-size: 16px;
  line-height: 30px;
`;
