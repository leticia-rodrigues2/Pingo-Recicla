import React, {useRef} from 'react';

import {Input} from '../../components';
import IconBack from '../../assets/icon-back.svg';
import IconUser from '../../assets/icon-user.svg';
import IconPassword from '../../assets/icon-password.svg';

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
} from './styles';

const Register = () => {
  const passwordRef = useRef<any>();

  return (
    <Container>
      <Header>
        <ImageContent>
          <ImgLogo source={require('../../assets/Logo.jpeg')} />
        </ImageContent>
      </Header>
      <ContentTitle>
        <Title> Cadastro</Title>
      </ContentTitle>

      <Content>
        <Input
          placeholder="Nome Completo"
          keyboardType="email-address"
          onChangeText={(text: string) => {}}
          icon={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          placeholder="Cpf"
          keyboardType="email-address"
          onChangeText={(text: string) => {}}
          icon={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text: string) => {}}
          icon={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          inputRef={passwordRef}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text: string) => {}}
          returnKeyType="done"
          onSubmitEditing={() => console.log('Chamando api de login')}
          icon={false}
        />
        <Input
          inputRef={passwordRef}
          placeholder="Confirmar Senha"
          secureTextEntry
          onChangeText={(text: string) => {}}
          returnKeyType="done"
          onSubmitEditing={() => console.log('Chamando api de login')}
          icon={false}
        />
      </Content>
      <View>
        <Button>
          <TextButton>Entrar</TextButton>
        </Button>
      </View>
    </Container>
  );
};

export default Register;
