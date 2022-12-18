import React, { useEffect, useState } from "react";

import axios from "axios";
import IconLogout from "../../assets/logout.svg";
import {
  Container,
  Header,
  Content,
  Text,
  ImageContent,
  ImgLogo,
  Title,
  ContentTitle,
  TitlePoints,
  TextPoints,
  ContentInfo,
  ImageContentPoints,
  TextContentPoints,
  ContentPoints,
  TextInitial,
  ContainerIcon,
  Line,
} from "./styles";
import { AsyncStorage } from "react-native";

const PageTablePoints = ({ navigation }) => {
  const [points, setPoints] = useState("000");
  const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
  });

  const Logout = () => {
    return AsyncStorage.setItem("Token", "null").then(() => {
      navigation.navigate("Login");
    });
  };
  useEffect(() => {
    AsyncStorage.getItem("Token").then((value) => {
      api
        .get("/points", { headers: { authorization: `Bearer ${value}` } })
        .then((resp) => {
          // AQUI RETORNA PRO STATE O VALOR
          setPoints(resp.data.pontos);
        })
        .catch((erro) => {
          console.log(erro);
        });
    });
  }, []);
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
        <Title> Descontos </Title>
      </ContentTitle>

      <ContentPoints>
        <TextPoints>SEUS PONTOS</TextPoints>
        <TitlePoints> {points} </TitlePoints>
      </ContentPoints>

      <Content>
        <ContentInfo>
          <ImageContentPoints>
            <TitlePoints> 200 </TitlePoints>
            <TextPoints> PONTOS</TextPoints>
          </ImageContentPoints>
          <TextContentPoints>
            <Text>Ganhe desconto de : </Text>
            <TextInitial>R$:15,00</TextInitial>
          </TextContentPoints>
        </ContentInfo>
        <Line></Line>
        <ContentInfo>
          <ImageContentPoints>
            <TitlePoints> 100 </TitlePoints>
            <TextPoints> PONTOS</TextPoints>
          </ImageContentPoints>
          <TextContentPoints>
            <Text>Ganhe desconto de : </Text>
            <TextInitial>R$:7,00</TextInitial>
          </TextContentPoints>
        </ContentInfo>
        <Line></Line>
        <ContentInfo>
          <ImageContentPoints>
            <TitlePoints> 50 </TitlePoints>
            <TextPoints> PONTOS</TextPoints>
          </ImageContentPoints>
          <TextContentPoints>
            <Text>Ganhe desconto de : </Text>
            <TextInitial>R$:3,00</TextInitial>
          </TextContentPoints>
        </ContentInfo>
      </Content>
    </Container>
  );
};

export default PageTablePoints;
