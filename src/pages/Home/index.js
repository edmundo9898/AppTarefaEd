import React, { useState, useContext, useEffect, useRef } from "react";
import { View, TouchableOpacity, Keyboard, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import firebase from "../../services/FirebaseConnection";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../Context/auth";
import {
  Container,
  ContainerTextStart,
  TextStart,
  AreaList,
  AreaAdd,
  InputAdd,
  BtnAdd,
  BtnAddText,
  ContainerCenterModal,
  ContainerModal,
  InputModal,
  ContainerRowButton,
  ButtonModal,
  TextModal,
} from "./styles";

import TesteList from "../../TesteList";

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

  const uid = user && user.uid;

  // Const tasks está usando o flatList como Data e o set para receber
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [visivel, setVisivel] = useState(false);

  const [edit, setEdit] = useState("");
  const [key, setKey] = useState("");

  // as tarefas vão aparecer logo apos a tela carregar
  useEffect(() => {
    async function loadTasks() {
      await firebase
        .database()
        .ref("HistóricoTarefas")
        .child(uid)
        .once("value", (snapshot) => {
          setTasks([]);

          snapshot?.forEach((childItem) => {
            let tarefaLists = {
              key: childItem.key,
              nome: childItem.val().nome,
            };
            setTasks((oldArray) => [...oldArray, tarefaLists]);
          });
        });
    }

    loadTasks();
  }, []);

  // Adicionando Tarefa
  async function taskAdd() {
    //não vai fazer nada se caso o input tiver em branco
    if (newTask === "") {
      return;
    }

    let tarefas = await firebase.database().ref("HistóricoTarefas").child(uid);
    let chave = tarefas.push().key;

    tarefas
      .child(chave)
      .set({
        nome: newTask,
      })
      .then(() => {
        const data = {
          key: chave,
          nome: newTask,
        };
        // Operador Spread
        setTasks((oldTasks) => [...oldTasks, data]);
      });
    Keyboard.dismiss();
    setNewTask("");
  }

  // função que vai editar a tarefa já criada ao clicar no ícone edit.

  async function taskEdit() {
    if (key !== "") {
      await firebase
        .database()
        .ref("HistóricoTarefas")
        .child(uid)
        .child(key)
        .update({
          nome: edit,
        })
        .then(() => {
          const taskIndex = tasks.findIndex((item) => item.key === key);
          let taskClone = tasks;
          taskClone[taskIndex].nome = edit;
          setTasks([...taskClone]);
        });

      Keyboard.dismiss();
      setEdit("");
      setKey("");
      setVisivel(false);
      return;
    }
  }
  
  function taskDelete(key){
    firebase.database().ref('HistóricoTarefas').child(uid).child(key).remove()
    .then(() => {
      const findTasks = tasks.filter( item => item.key !== key )
      setTasks(findTasks)
    })

  }

  //Função na qual irá abrir o modal da tarefa/key selecionada,
  function testeModal(data) {
    setVisivel(true);
    setKey(data.key);
    setEdit(data.nome);
  }

  return (
    <Container>
      <StatusBar backgroundColor="orange" />
      <ContainerTextStart>
        <TextStart>Olá, {user && user.nome} !!</TextStart>

        <TouchableOpacity onPress={() => signOut()}>
          <AntDesign name="logout" size={30} color="#00cc44" />
        </TouchableOpacity>
      </ContainerTextStart>

      <AreaList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TesteList data={item} testarModal={testeModal} deleteItem={taskDelete} />
        )}
      />

      <AreaAdd>
        <InputAdd
          placeholder="Qual tarefa vai fazer hoje?"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />

        <BtnAdd onPress={() => taskAdd()}>
          <AntDesign name="pluscircle" size={40} color="#00cc44" />
        </BtnAdd>
      </AreaAdd>

      {/* Modal */}
      <Modal animationType="slide" visible={visivel} transparent={true}>
        <ContainerCenterModal>
          <ContainerModal>
            <InputModal
              placeholder="Digite para editar"
              value={edit}
              onChangeText={(text) => setEdit(text)}
            />

            <ContainerRowButton>
              <ButtonModal onPress={() => taskEdit()}>
                <TextModal>Editar</TextModal>
              </ButtonModal>
              <ButtonModal onPress={() =>  setVisivel(false) }>
                <TextModal>Fechar</TextModal>
              </ButtonModal>
            </ContainerRowButton>
          </ContainerModal>
        </ContainerCenterModal>
      </Modal>
    </Container>
  );
}
