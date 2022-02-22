import React from "react";
import { Button } from "../../Button";
import {
  Container,
  Title,
  ImageService,
  Text,
  Content,
  ButtonMore,
} from "./style";

export function ServiceSection() {
  return (
    <Container>
      <ImageService />

      <Content>
        <Text>
          <Title>The best services ready to serve you</Title>

          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>

          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ButtonMore>
            <Button title="Know More" buttonBackground="#a7df63" />
          </ButtonMore>
        </Text>
      </Content>
    </Container>
  );
}
