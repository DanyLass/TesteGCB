import React, { useEffect, useState, useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { api } from "../../services/api";
import * as Yup from "yup";
import { getValidationErrors } from "../../Utils/getValidationErrors";
import { Container, Content, RegisterImage } from "./styles";
import { Input } from "../../components/Input";

interface User {
  name: string;
  birthDate: string;
  cpf: string;
  cep: string;
  address: string;
  city: string;
  number: string;
  complement: string;
  uf: string;
  district: string;
}

export function Register() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [uf, setUf] = useState("");
  const [district, setDistrict] = useState("");
  const [user, setUser] = useState<User[]>([]);

  const formRef = useRef<FormHandles>(null);

  const handleAdduser = useCallback(
    async (value: object) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome Obrigatório"),
          birthDate: Yup.string().required("Data obrigatório"),
          cpf: Yup.string().required("O cpf é obrigatório"),
          cep: Yup.string().required(" O cep é obrigatório"),
          address: Yup.string().required("O endereço é obrigatório"),
          city: Yup.string().required("A cidade é obrogatória"),
          number: Yup.string().required("O número é obrigatório"),
          uf: Yup.string().required("O uf é obrigatório"),
          district: Yup.string().required("O bairro é obrigatório"),
        });

        await schema.validate(value, { abortEarly: false });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          console.log(errors);

          formRef.current?.setErrors(errors);
        }
      }
      const storedUser = localStorage.getItem("@testgcb:user");
      const currentUser = storedUser ? JSON.parse(storedUser) : [];

      const newUser = {
        name,
        birthDate,
        cpf,
        cep,
        address,
        city,
        number,
        complement,
        uf,
        district,
      };

      const addedUser = [newUser, ...currentUser];

      localStorage.setItem("@testgcb:user", JSON.stringify(addedUser));
      setUser(addedUser);
    },
    [name, birthDate, cpf, cep, address, city, number, complement, uf, district]
  );

  const getCep = useCallback(async () => {
    await api
      .get(`/${cep}/json`)
      .then((response) => {
        const data = response.data;
        setAddress(data.logradouro);
        setCity(data.localidade);
        setUf(data.uf);
        setDistrict(data.bairro);
      })
      .catch((error) => console.log(error));
  }, [cep]);

  useEffect(() => {
    if (cep.length > 7) {
      getCep();
    }
  }, [cep, getCep]);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleAdduser}>
          <h1> Faça seu cadastro</h1>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <Input
            type="date"
            name="birthDate"
            placeholder="Data de nascimento"
            onChange={(e) => setBirthDate(e.target.value)}
            value={birthDate}
          />

          <Input
            type="number"
            name="cpf"
            placeholder="CPF"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />

          <Input
            type="number"
            name="cep"
            placeholder="CEP "
            onChange={(e) => setCep(e.target.value)}
            value={cep}
          />

          <Input
            type="texto"
            name="address"
            placeholder="Endereço"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />

          <Input
            type="texto"
            name="city"
            placeholder="Cidade"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />

          <Input
            type="number"
            name="number"
            placeholder="Número"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />

          <Input
            type="texto"
            name="complement"
            placeholder="Complemento"
            onChange={(e) => setComplement(e.target.value)}
            value={complement}
          />

          <Input
            type="texto"
            name="uf"
            placeholder="UF"
            onChange={(e) => setUf(e.target.value)}
            value={uf}
          />
          <Input
            type="texto"
            name="district"
            placeholder="Bairro"
            onChange={(e) => setDistrict(e.target.value)}
            value={district}
          />
          <button type="submit" onClick={() => handleAdduser(user)}>
            CADASTRAR
          </button>
        </Form>
      </Content>
      <RegisterImage />
    </Container>
  );
}
