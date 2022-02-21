import React from "react";

import { FoodCard } from "../../FoodCard";

import brocolliImage from "../../../images/comida_1.svg";
import burgersImage from "../../../images/comida_2.svg";
import PotatoImage from "../../../images/comida_3.svg";
import GrillImage from "../../../images/comida_4.svg";

import { Container, LeftHeader, Text, FoodView, Top, Bottom } from "./styles";

export function Recipes() {
  return (
    <Container>
      <p>
        <LeftHeader> Our Best Recipes</LeftHeader>
      </p>
      <Text>
        <p>Far far away, behind the word mountains, far from the countries</p>

        <p>Vokalia and Consonantia, there live the blind texts.</p>
      </Text>

      <FoodView>
        <Top>
          <FoodCard
            src={brocolliImage}
            title="Brocolli Salad with Bacon"
            buttonTitle="See Recipe"
            buttonColor="green"
          />
          <FoodCard
            src={burgersImage}
            title="Classic Beef Burgs"
            buttonTitle="See Recipe"
            buttonColor="green"
          />
        </Top>
        <Bottom>
          <FoodCard
            src={PotatoImage}
            title="Classic Potato Salad"
            buttonTitle="See Recipe"
            buttonColor="green"
          />
          <FoodCard
            src={GrillImage}
            title="Cherry Cobbler on the Grill "
            buttonTitle="See Recipe"
            buttonColor="green"
          />
        </Bottom>
      </FoodView>
    </Container>
  );
}
