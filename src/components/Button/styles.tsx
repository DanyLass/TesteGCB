import styled from "styled-components";

interface ContainerProps {
  buttonBackground: string;
}

export const Container = styled.button<ContainerProps>`
  width: 100px;
  font-size: 12px;
  color: #fff;

  text-transform: uppercase;
  border: 0px;
  background-color: ${(props) => props.buttonBackground};
  padding: 13px;
  border-radius: 5px;
`;
