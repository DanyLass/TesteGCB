import React from "react";
import { Container } from "./styles";
import { Button } from "../Button";

export function SearchInput() {
  return (
    <Container>
      <input type="text" placeholder="Search healthy recipes" />

      <Button title="Ok" buttonBackground="#a7df63" />
    </Container>
  );
}
