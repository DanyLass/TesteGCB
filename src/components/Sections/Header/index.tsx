import React from "react";
import { Button } from "../../Button";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Content,
  RightHeaderImage,
  Subtitle,
  ButtonWrapper,
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h2>Healthy Food</h2>
        <form>
          <Subtitle>Ready for trying a new recipe?</Subtitle>
        </form>
        <input type="texto" placeholder="Search healthy recipes" />
        <button type="submit">OK</button>
      </Content>

      <ButtonWrapper>
        <button type="submit" onClick={() => navigate("register")}>
          REGISTER
        </button>
      </ButtonWrapper>

      <RightHeaderImage />
    </Container>
  );
}
