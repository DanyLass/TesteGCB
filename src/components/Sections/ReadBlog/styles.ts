import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;

  h2 {
    color: #1d164d;
    margin-left: 10px;
    font-weight: bold;
    font-size: 30px;
    margin-top: 50px;
  }

  form {
    color: #cfcfcf;
    font-size: 15px;
  }
`;

export const FoodView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1d164d;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
