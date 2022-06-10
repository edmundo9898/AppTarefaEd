import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import {
  Container,
  TextLogo,
  AreaInput,
  SubmitBtn,
  Textbtn,
  Link,
  TextLink,
} from "./styles";

import { AuthContext } from "../../Context/auth";

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Criando o context para a tela ter acesso ao value user.
  const { signIn, loadingAuth } = useContext(AuthContext);

  function accessSignIn() {
    signIn(email, password);
  }

  return (
    <Container
      //Verifica o sistema operacional que está usando
      behavior={Platform.OS === "ios" ? "padding" : ""}
      //Já comeco como True
      enabled
    >
      <StatusBar backgroundColor="orange" />
      {/* <TextLogo>AppTarefaEd</TextLogo> */}
      <TextLogo>AppTaskList</TextLogo>
      <AreaInput
        style={{ marginTop: 20 }}
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <AreaInput
        placeholder="***********"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <SubmitBtn onPress={accessSignIn}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#fff" />
        ) : (
          <Textbtn>Acessar</Textbtn>
        )}
      </SubmitBtn>

      <Link onPress={() => navigation.navigate("SignUp")}>
        <TextLink>Não tem conta ?</TextLink>
      </Link>
    </Container>
  );
}
