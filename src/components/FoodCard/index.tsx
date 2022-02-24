import React from "react";
import { Button } from "../Button";

import { Container, ImageView, TitleView, Title } from "./styles";

interface Props {
  title: string;
  src: string;
  buttonTitle: string;
  buttonColor: string;
}

export function FoodCard({ title, src, buttonTitle, buttonColor }: Props) {
  return (
    <Container>
      <ImageView>
        <img src={src} alt="" width={230} height={230} />
      </ImageView>
      <TitleView>
        <Title>{title}</Title>
        <Button title={buttonTitle} buttonBackground="#a7df63" />
      </TitleView>
    </Container>
  );
}
