import React from "react";
import { Container } from "./styles";

interface Props {
  title: string;
  icon?: string;
  buttonBackground: string;
}

export const Button = ({ title, icon, buttonBackground }: Props) => {
  return <Container buttonBackground={buttonBackground}>{title}</Container>;
};
