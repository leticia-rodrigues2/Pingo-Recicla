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
} from './styles';

const Login = () => {
  const passwordRef = useRef<any>();

  const Submit = () => {};
  return (
    <Container>
      <Header>
        <ImageContent>
          <ImgLogo source={require('../../assets/Logo.jpeg')} />
        </ImageContent>
      </Header>

      <Content>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text: string) => {}}
          icon={<IconUser fill="#513826" width={16} height={16} />}
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
          icon={<IconPassword fill="#513826" width={16} height={16} />}
        />
      </Content>

      <View>
        <Button>
          <TextButton>Entrar</TextButton>
        </Button>

        <Text
          onPress={() => {
            Submit();
          }}>
          Cadastrar
        </Text>
        <Text onPress={() => {}}>Esqueci a senha !</Text>
      </View>
    </Container>
  );
};

export default Login;
