import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ImageView = styled.div`
  margin-bottom: 10px;
  padding: 40px;
  flex: 1;
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
  font-size: 20px;
  line-height: 50px;
  font-weight: bold;
`;
