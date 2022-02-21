import React from "react";
import { Header } from "../../components/Sections/Header";
import { Recipes } from "../../components/Sections/Recipes";
import { ServiceSection } from "../../components/Sections/ServiceSection";
import { ReadBlog } from "../../components/Sections/ReadBlog";
import { Membership } from "../../components/Sections/Membership";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Recipes />
      <ServiceSection />
      <ReadBlog />
      <Membership />
    </Container>
  );
}
