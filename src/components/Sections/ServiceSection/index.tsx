import React from "react";
import { Container, Title, ImageService, Text, Content } from "./style";

export function ServiceSection() {
  return (
    <Container>
      <ImageService />
      <Title>The best services ready to serve you</Title>
      <Content>
        <Text>
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
        </Text>
      </Content>
    </Container>
  );
}
