import React, { useState } from "react";
import { StatusBar, TouchableWithoutFeedback } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Container, TextName, ButtonTask } from "./styles";

export default function TesteList({ data, testarModal, deleteItem }) {
  return (
    <Container>
      <ButtonTask onPress={() => testarModal(data)}>
        <AntDesign name="edit" size={35} color="#009933" />
      </ButtonTask>
      <ButtonTask onPress={() => deleteItem(data.key)}>
        <AntDesign name="delete" size={35} color="#009933" />
      </ButtonTask>
      <TextName>{data.nome}</TextName>
    </Container>
  );
}
