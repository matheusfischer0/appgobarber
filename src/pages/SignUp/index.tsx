import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText,
  Icon,
} from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg}></Image>
            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="name" icon="home" placeholder="Name"></Input>
            <Input name="email" icon="mail" placeholder="E-mail"></Input>
            <Input name="password" icon="lock" placeholder="Senha"></Input>
            <Button
              onPress={() => {
                console.log('go');
              }}
            >
              Cadastrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => {}}>
        <Icon name="arrow-left" size={20} color="#fff"></Icon>
        <BackToSignInText>Voltar ao Login</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
