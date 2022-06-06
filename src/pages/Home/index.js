import React, {useState , useContext, useEffect} from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import firebase from '../../services/FirebaseConnection';
import { AntDesign } from '@expo/vector-icons';
import {AuthContext} from '../../Context/auth';
import { Container, ContainerTextStart ,TextStart, AreaList, AreaAdd, InputAdd, BtnAdd, BtnAddText } from './styles';
import  TesteList  from '../../TesteList';


export default function Home() {

                     
      const {user, signOut} = useContext(AuthContext);  
      const[tasks, setTasks] = useState([]);

      const [newTask, setnewTask] = useState('');

      // as tarefá vai aparecer ao acessar o aplicativo ( se caso já tiver tarefa cadastrada)
      useEffect(() =>  {
           async function loadTasks(){

             let uid = user.uid
             
             await firebase.database().ref('HistóricoTarefas').child(uid).once('value', (snapshot) => {
               setTasks([]);

               snapshot.forEach((childItem) => {
                 let tarefaLists = {
                   key: childItem.key,
                   nome: childItem.val().nome,
                 };
                 setTasks(oldArray => [...oldArray, tarefaLists])
               })
             })
           }

           loadTasks();
        

      },[])

      // Adicionando Tarefa
     async  function TaskAdd(){   
      //não vai fazer nada se caso o input tiver em branco
      if(newTask === ''){
        return;
      }   
      let uid = user.uid;
    
      let tarefas = await firebase.database().ref('HistóricoTarefas').child(uid)
       // criando uma key para cada tarefa criada dentro do usuario logado
      let chave = tarefas.push().key;
      // cadastrando a tarefa por chave no firebase e mostrando na lista
      tarefas.child(chave).set({
          nome: newTask,
           
      })
     .then(() => {
       const data = {
         key: chave,
         nome: newTask
       };

       setTasks(oldTasks => [...oldTasks, data])

     })
     Keyboard.dismiss();
     setnewTask('');
    }



  return (
    <Container>
      <ContainerTextStart>
        <TextStart>
          Olá, {user && user.nome} !!
        </TextStart>

        <TouchableOpacity onPress={() => signOut()}>
          <AntDesign name="logout" size={30} color="#00cc44" />
        </TouchableOpacity>
      </ContainerTextStart>
      
      <AreaList
      data={tasks}
      keyExtractor={item => item.key}
      renderItem={({item}) =>  (<TesteList data={item} />) }
      
      />
        
      <AreaAdd>
        <InputAdd
        placeholder='Qual tarefa vai fazer hoje?'
        value={newTask}
        onChangeText={(text) => setnewTask(text)}
        />

        <BtnAdd onPress={TaskAdd}>
        <AntDesign name="pluscircle" size={40} color="#00cc44" />
        </BtnAdd>
      </AreaAdd>

      
      
    </Container>
  );
}