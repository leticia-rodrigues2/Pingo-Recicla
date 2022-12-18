import React, { useRef, useState, useEffect } from "react";

import { Input } from "../../components";
import axios from "axios";
import IconLogout from "../../assets/logout.svg";
import {
  Container,
  Header,
  Content,
  View,
  Text,
  Button,
  TextButton,
  Title,
  ContentTitle,
  ContainerIcon,
  TextErro,
  ImageContent,
  ImgLogo,
} from "./styles";
import { AsyncStorage, Alert } from "react-native";

const PagePoints = ({ navigation }) => {
  const [points, setPoints] = useState("000");
  const [isValidCPF, setIsValidCPF] = useState(true);
  const [cpf, setCpf] = useState("");
  const [pontos, setPontos] = useState("");
  const passwordRef = useRef<any>();

  const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
  });

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

    return rest(10) === values[9] && rest(11) === values[10];
  }

  const Submit = (action: "increment" | "decrement") => {
    const isValid = validCPF(cpf);
    setIsValidCPF(isValid);
    if (!isValid) return;
    let p = Math.abs(parseInt(pontos));
    if (action === "decrement") p = -p;
    console.log(action, action === "decrement", cpf, p);
    api
      .post(`/${cpf}/increase`, { points: p })
      .then(({ data }) => {
        const { msg } = data;
        console.log(msg);
        Alert.alert("Sucesso", msg);
      })
      .catch((err) => {
        const { msg } = err.response.data;
        console.log(msg);
        Alert.alert("Erro", msg);
      });
  };

  useEffect(() => {
    AsyncStorage.getItem("Token").then((value) => {
      api
        .get("/points", { headers: { authorization: `Bearer ${value}` } })
        .then((resp) => {
          setPoints(resp.data.pontos);
        })
        .catch((erro) => {
          console.log(erro);
        });
    });
  }, []);

  const Logout = () => {
    return AsyncStorage.setItem("Token", "null").then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <Container>
      <Header>
        <ContainerIcon onPress={Logout}>
          <Text>Sair</Text>
          {<IconLogout fill="#050200" width={26} height={26} />}
        </ContainerIcon>

        <ImageContent>
          <ImgLogo source={require("../../assets/Logo.jpeg")} />
        </ImageContent>
      </Header>
      <ContentTitle>
        <Title> Pontuar Clientes</Title>
      </ContentTitle>

      <Content>
        <Input
          placeholder="Digite o CPF do cliente"
          keyboardType="cpf"
          onChangeText={setCpf}
          icon={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        {!isValidCPF && <TextErro>Cpf não é válido.Tente novamente !</TextErro>}
        <Input
          placeholder="Digite a quantidade de pontos"
          keyboardType="number-pad"
          onChangeText={setPontos}
          icon={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
      </Content>
      <View>
        <Button onPress={() => Submit("increment")}>
          <TextButton>Inserir pontos +</TextButton>
        </Button>
        <Button onPress={() => Submit("decrement")}>
          <TextButton>Remover ponto -</TextButton>
        </Button>
      </View>
    </Container>
  );
};

export default PagePoints;
