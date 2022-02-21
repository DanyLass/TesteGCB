import React from "react";
import { Button } from "../../Button";
import { SearchInput } from "../../SearchInput";

import {
  Container,
  Title,
  Subtitle,
  SubtitleWrapper,
  LeftHeader,
  RightHeader,
  RightHeaderImage,
  ButtonWrapper,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Title>Healthy Food</Title>
      <LeftHeader>
        <SubtitleWrapper>
          <Subtitle>Ready for trying a new recipe?</Subtitle>
        </SubtitleWrapper>
        <SearchInput />
      </LeftHeader>
      <RightHeader>
        <ButtonWrapper>
          <Button title="Healthy" buttonBackground="white" />
          {/* <Button title="Blog" />
          <Button title="Join" />
          <Button title="Register" /> */}
        </ButtonWrapper>

        <RightHeaderImage />
      </RightHeader>
    </Container>
  );
}
