import React, { useRef, useState } from "react";

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
  ImageContent,
  ImgLogo,
  Title,
  ContentTitle,
  TitlePoints,
  TextPoints,
  ContentInfo,
  ImageContentPoints,
  ImgLogoPoint,
  TextContentPoints,
  ContentPoints,
  TextInitial,
  ContainerIcon,
  Line,
} from "./styles";
import { AsyncStorage } from "react-native";

const PageTablePoints = ({ navigation }) => {
  const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
  });

  const submit = () => {};
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
        <Title> Descontos </Title>
      </ContentTitle>

      <ContentPoints>
        <TextPoints>SEUS PONTOS</TextPoints>
        <TitlePoints> 100 </TitlePoints>
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
