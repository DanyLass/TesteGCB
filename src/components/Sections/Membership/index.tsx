import React from "react";
import { Button } from "../../Button";

import {
  Container,
  Title,
  ButtonWrapper,
  ImageMembership,
  TitleView,
  SubTitle,
  SubTitleView,
} from "./style";

export function Membership() {
  return (
    <Container>
      <Title>Join our membership to get special offer</Title>
      <ButtonWrapper>
        <input type="text" placeholder=" Enter your email address" />
        <Button title=" join" buttonBackground="#a7df63" />
      </ButtonWrapper>
      <ImageMembership />
      <TitleView>© Copyrights 2019 Stack. All Rights Reserved.</TitleView>
      <SubTitle>Privacy Policy</SubTitle>
      <SubTitleView>Terms and Conditions</SubTitleView>
    </Container>
  );
}
