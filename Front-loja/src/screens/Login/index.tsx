import React, { useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AsyncStorage } from "react-native";

import { Input } from "../../components";
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
  TextErro,
} from "./styles";
import axios from "axios";
import PagePoints from "../PagePoints";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const passwordRef = useRef<any>();

  const Stack = createNativeStackNavigator();

  AsyncStorage.getItem("Token").then((value) => {
    if (value != "null") {
      navigation.navigate("PagePoints");
    }
  });
  const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
  });

  const Register = () => {
    navigation.navigate("Register");
  };

  const Submit = () => {
    api
      .post("/login", { email, senha: password })
      .then((resp) => {
        console.log(resp.data);

        setIsValid(true);

        return AsyncStorage.setItem("Token", resp.data.token).then(() => {
          navigation.navigate("PagePoints");
        });
      })
      .catch((erro) => {
        console.log(erro);
        setIsValid(false);
      });
  };
  return (
    <Container>
      <Header>
        <ImageContent>
          <ImgLogo source={require("../../assets/Logo.jpeg")} />
        </ImageContent>
      </Header>

      <Content>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          icon={<IconUser fill="#513826" width={16} height={16} />}
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
          icon={<IconPassword fill="#513826" width={16} height={16} />}
        />
      </Content>
      {!isValid && (
        <TextErro>* Email e senha invalido , tente novamente !</TextErro>
      )}

      <View>
        <Button onPress={Submit}>
          <TextButton>Entrar</TextButton>
        </Button>
      </View>
    </Container>
  );
};

export default Login;
