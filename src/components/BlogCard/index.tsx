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
        <img src={src} alt="" width={280} height={280} />
      </ImageView>
      <TitleView>
        <Title>{title}</Title>
      </TitleView>
    </Container>
  );
}
