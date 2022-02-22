import React from "react";
import { Container, ImageView, TitleView, Title } from "./styles";

interface Props {
  title: string;
  src: string;
}
export function BlogCard({ title, src }: Props) {
  return (
    <Container>
      <ImageView>
        <img src={src} alt="" width={200} height={200} />
      </ImageView>
      <TitleView>
        <Title>{title}</Title>
      </TitleView>
    </Container>
  );
}
