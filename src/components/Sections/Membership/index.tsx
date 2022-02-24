import React from "react";

import { Container, Content, ImageMembership } from "./style";

export function Membership() {
  return (
    <Container>
      <Content>
        <form>
          <h3>Join our membership to get special offer</h3>
        </form>
        <input type="text" placeholder=" Enter your email address" />

        <button type="submit">Join</button>
      </Content>

      <ImageMembership />
    </Container>
  );
}
