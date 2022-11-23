import React, { useRef, useState } from "react";

import { Input } from "../../components";
import axios from "axios";
import IconBack from "../../assets/icon-back.svg";
import IconUser from "../../assets/icon-user.svg";
import IconPassword from "../../assets/icon-password.svg";

import {
  Container,
  Header,
  Content,
  View,
  Text,
  Button,
  TextButton,
  ImageContent,
  ImgLogo,
  Title,
  ContentTitle,
  TextErro,
} from "./styles";

const Register = () => {
  const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
  });
  const passwordRef = useRef<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isValidCPF, setIsValidCPF] = useState(true);
  function validCPF(value: string) {
    value = cpf;
    if (typeof value !== "string") {
      return false;
    }

    value = value.replace(/[^\d]+/g, "");

    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
      return false;
    }

    const values = value.split("").map((el) => +el);
    const rest = (count: number) =>
      ((values
        .slice(0, count - 12)
        .reduce((soma, el, index) => soma + el * (count - index), 0) *
        10) %
        11) %
      10;
    console.log("--2222222---");
    return rest(10) === values[9] && rest(11) === values[10];
  }

  const submit = () => {
    setIsValidCPF(validCPF(cpf));
    if (password === passwordConfirm && isValidCPF) {
      setIsPassword(false);
      api
        .post("/registration", {
          nome: name,
          cpf: cpf,
          email: email,
          senha: password,
        })
        .catch((erro) => {
          console.log(
            erro,
            erro.response,
            erro.request,
            erro.message,
            erro.config
          );
        });
    } else {
      console.log("SENHA NÃO CORRESPONDE");
      setIsPassword(true);
    }
  };

  return (
    <Container>
      <Header>
        <ImageContent>
          <ImgLogo source={require("../../assets/Logo.jpeg")} />
        </ImageContent>
      </Header>
      <ContentTitle>
        <Title> Cadastro</Title>
      </ContentTitle>

      <Content>
        <Input
          placeholder="Nome Completo"
          keyboardType="name"
          onChangeText={setName}
          icon={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          placeholder="Cpf"
          keyboardType="cpf"
          onChangeText={setCpf}
          icon={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        {!isValidCPF && <TextErro>Cpf não é válido.Tente novamente !</TextErro>}
        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          icon={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          inputRef={passwordRef}
          placeholder="Senha"
          secureTextEntry
          onChangeText={setPassword}
          returnKeyType="done"
          onSubmitEditing={() => console.log("Chamando api de login")}
          icon={false}
        />
        {isPassword && (
          <TextErro>As senhas não conferem.Tente novamente !</TextErro>
        )}
        <Input
          inputRef={passwordRef}
          placeholder="Confirmar Senha"
          secureTextEntry
          onChangeText={setPasswordConfirm}
          returnKeyType="done"
          onSubmitEditing={() => console.log("Chamando api de login")}
          icon={false}
        />
      </Content>
      <View>
        <Button
          onPress={() => {
            submit();
          }}
        >
          <TextButton>Entrar</TextButton>
        </Button>
      </View>
    </Container>
  );
};

export default Register;
