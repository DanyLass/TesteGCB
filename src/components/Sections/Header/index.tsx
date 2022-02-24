import React from "react";

import { useNavigate } from "react-router-dom";

import { Container, Content, ButtonWrapper, RightHeaderImage } from "./styles";

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h1>Healthy Food</h1>
        <form>
          <h3>Ready for trying a new recipe?</h3>
        </form>
        <input type="texto" placeholder="Search healthy recipes" />
        <button type="submit">OK</button>
      </Content>

      <RightHeaderImage />
      <ButtonWrapper>
        <button type="submit" onClick={() => navigate("register")}>
          REGISTER
        </button>
      </ButtonWrapper>
    </Container>
  );
}
