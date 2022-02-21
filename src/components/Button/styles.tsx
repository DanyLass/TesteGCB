import styled from "styled-components";

interface ContainerProps {
  buttonBackground: string;
}

export const Container = styled.button<ContainerProps>`
  width: 100px;
  font-size: 14px;
  color: #a7df63;
  text-transform: uppercase;
  border: 0px;
  background-color: ${(props) => props.buttonBackground};
  padding: 8px;
  border-radius: 5px;
`;
