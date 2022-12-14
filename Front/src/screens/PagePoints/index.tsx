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
  ContainerButtton,
} from "./styles";
import { AsyncStorage } from "react-native";

const PagePoints = ({ navigation }) => {
  const [points, setPoints] = useState("000");

  const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
  });

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

  const submit = () => {
    navigation.navigate("PageTablePoints");
  };
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
          <ImgLogo source={require("../../assets/IMAGE2.png")} />
        </ImageContent>
      </Header>
      <ContentTitle>
        <Title> Pingo Recicla</Title>
      </ContentTitle>

      <ContentPoints>
        <TextPoints>SEUS PONTOS</TextPoints>
        <TitlePoints> {points} </TitlePoints>
      </ContentPoints>

      <Content>
        <ContentInfo>
          <ImageContentPoints>
            <ImgLogoPoint source={require("../../assets/info1.png")} />
          </ImageContentPoints>
          <TextContentPoints>
            <TextInitial>Devolva a taça</TextInitial>
            <Text>Ganhe desconto!</Text>

            <TextInitial>80 PONTOS</TextInitial>
          </TextContentPoints>
        </ContentInfo>

        <ContentInfo>
          <ImageContentPoints>
            <ImgLogoPoint source={require("../../assets/info2.png")} />
          </ImageContentPoints>
          <TextContentPoints>
            <TextInitial>Devolva a base</TextInitial>
            <Text>Ganhe desconto!</Text>
            <TextInitial>30 PONTOS</TextInitial>
          </TextContentPoints>
        </ContentInfo>
        <ContentInfo>
          <ImageContentPoints>
            <ImgLogoPoint source={require("../../assets/info3.png")} />
          </ImageContentPoints>
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

export default PagePoints;
