import React from "react";
import { BlogCard } from "../../BlogCard";
import { Container, Title, Text, FoodView, Top } from "./styles";
import nutsiImage from "../../../images/blog_image_1.svg";
import healthImage from "../../../images/bloco_image_2.svg";
import eatingImage from "../../../images/bloco_image_3.svg";

export function ReadBlog() {
  return (
    <Container>
      <Title>Red Our Blog</Title>
      <Text>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </Text>

      <FoodView>
        <Top>
          <BlogCard
            src={nutsiImage}
            title="Quick-start guide
            to nuts and seeds "
          />
          <BlogCard
            src={healthImage}
            title="Classic Beef Nutrition: Tips for
            Improving Your Health"
          />
          <BlogCard
            src={eatingImage}
            title="The top 10 benefits
            of eating healthy"
          />
        </Top>
      </FoodView>
    </Container>
  );
}
