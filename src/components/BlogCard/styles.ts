import styled from "styled-components";

export const Container = styled.div`
  align-items: stretch;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const ImageView = styled.div`
  margin-bottom: 5px;
  padding: 50px;
  text-align: center;
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
  line-height: 20px;
  text-align: left;
  margin-top: -60px;
  font-weight: bold;
`;
