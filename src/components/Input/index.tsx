import React, { InputHTMLAttributes, useRef } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = ({ ...rest }: InputProps) => {
  const inputRef = useRef(null);

  return (
    <Container>
      <input ref={inputRef} {...rest} />
    </Container>
  );
};
