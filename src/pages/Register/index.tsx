import React, { useState } from "react";
import { Container, Content, RegisterImage } from "./styles";
import { api } from "../../services/api";

export function Register() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(): Promise<void> {
    const response = await api.get(`/${cep}`);
    console.log();
  }

  return (
    <Container>
      <Content>
        <form>
          <h1> Faça seu cadastro</h1>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="date"
            placeholder=" Data de nascimento"
            onChange={(e) => setBirthDate(e.target.value)}
            value={birthDate}
          />

          <input
            type="number"
            placeholder=" CPF"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />

          <input
            type="number"
            placeholder="CEP "
            onChange={(e) => setCep(e.target.value)}
            value={cep}
          />

          <input
            type="texto"
            placeholder=" Endereço"
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
          />

          <input
            type="texto"
            placeholder=" Cidade"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />

          <input
            type="number"
            placeholder=" Número"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />

          <input
            type="texto"
            placeholder=" Complemento "
            onChange={(e) => setComplement(e.target.value)}
            value={complement}
          />

          <input
            type="texto"
            placeholder="UF "
            onChange={(e) => setUf(e.target.value)}
            value={uf}
          />

          <button type="submit" onClick={handleRegister}>
            CADASTRAR
          </button>
        </form>
      </Content>
      <RegisterImage />
    </Container>
  );
}
