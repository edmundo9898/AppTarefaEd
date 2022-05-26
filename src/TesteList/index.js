import React from 'react';
import { View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Container, TextName, ButtonTask } from './styles';

export default function TesteList({data}) {
  return (
   <Container>
       <ButtonTask>
          <AntDesign name="edit" size={30} color="#000" />
       </ButtonTask>

       <ButtonTask>
          <AntDesign name="delete" size={30} color="#000" />  
       </ButtonTask>

       <TextName>{data.name}</TextName>    
   </Container>
  );
}