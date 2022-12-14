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
} from "./styles";
import { AsyncStorage } from "react-native";

const PageTablePoints = ({ navigation }) => {
  const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
  });

  const submit = () => {};
  const Logout = () => {
    console.log("oiii");
  };
  return (
    <Container>
      <Header>
        <ContainerIcon onPress={Logout}>
          {<IconLogout fill="#050200" width={26} height={26} />}
        </ContainerIcon>
        <ImageContent>
          <ImgLogo source={require("../../assets/IMAGE2.png")} />
        </ImageContent>
      </Header>
      <ContentTitle>
        <Title> Pingo Recicla</Title>
      </ContentTitle>

      <ContentPoints>
        <TextPoints>SEUS PONTOS</TextPoints>
        <TitlePoints> 100 </TitlePoints>
      </ContentPoints>

      <Content>
        <ContentInfo>
          <ImageContentPoints></ImageContentPoints>
          <TextContentPoints>
            <TextInitial>Devolva a taça</TextInitial>
            <Text>Ganhe desconto!</Text>

            <TextInitial>80 PONTOS</TextInitial>
          </TextContentPoints>
        </ContentInfo>

        <ContentInfo>
          <ImageContentPoints></ImageContentPoints>
          <TextContentPoints>
            <TextInitial>Devolva a base</TextInitial>
            <Text>Ganhe desconto!</Text>
            <TextInitial>30 PONTOS</TextInitial>
          </TextContentPoints>
        </ContentInfo>
        <ContentInfo>
          <ImageContentPoints></ImageContentPoints>
          <TextContentPoints>
            <TextInitial>Devolva a caixa</TextInitial>
            <Text>Ganhe desconto!</Text>
            <TextInitial>10 PONTOS</TextInitial>
          </TextContentPoints>
        </ContentInfo>
      </Content>
      <View>
        <Button
          onPress={() => {
            submit();
          }}
        >
          <TextButton>VER DESCONTOS</TextButton>
        </Button>
      </View>
    </Container>
  );
};

export default PageTablePoints;
