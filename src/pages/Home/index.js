import React, {useContext} from 'react';
import { View, TouchableOpacity } from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import {AuthContext} from '../../Context/auth';

import { Container, ContainerTextStart ,TextStart, AreaList, AreaAdd, InputAdd, BtnAdd, BtnAddText } from './styles';

import  TesteList  from '../../TesteList';

 


 const list = [
   {key: '1', name: 'Estudar ReactNative'},
   {key: '2', name: 'Estudar assuntos da Faculdade e depois jogar jogo de tiru jogo de tiro man'},
   {key: '3', name: 'Planejamento'},
   {key: '4', name: 'Descansar a mente'},
   
   
 ]

export default function Home() {

    const {user, signOut} = useContext(AuthContext);
    
  
   


  return (
    <Container>
      <ContainerTextStart>
        <TextStart>
          Bem vindo  {user && user.nome} !!
        </TextStart>

        <TouchableOpacity onPress={() => signOut()}>
          <AntDesign name="logout" size={30} color="#fff" />
        </TouchableOpacity>
      </ContainerTextStart>
      

      <AreaList
      data={list}
      keyExtractor={item => item.key}
      renderItem={({item}) => ( <TesteList data={item} />) }
      
      />

     
        
      <AreaAdd>
        <InputAdd
        placeholder='Qual tarefa vai fazer hoje?'
        />

        <BtnAdd>
        <AntDesign name="pluscircle" size={40} color="#fff" />
        </BtnAdd>
      </AreaAdd>

      
      
    </Container>
  );
}