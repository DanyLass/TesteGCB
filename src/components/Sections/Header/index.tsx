import React from "react";
import { Button } from "../../Button";

import {
  Container,
  Content,
  RightHeaderImage,
  Subtitle,
  ButtonWrapper,
} from "./styles";

export function Header() {
  return (
    <Container>
      <h2>Healthy Food</h2>
      <Content>
        <form>
          <Subtitle>Ready for trying a new recipe?</Subtitle>
        </form>
        <input type="texto" placeholder="Search healthy recipes" />
        <button type="submit">OK</button>
      </Content>

      <ButtonWrapper>
        {/* <Button title="Healthy" buttonBackground="white" /> */}
        {/* <Button title="Blog" />
          <Button title="Join" />
          <Button title="Register" /> */}
      </ButtonWrapper>

      <RightHeaderImage />
    </Container>
  );
}
