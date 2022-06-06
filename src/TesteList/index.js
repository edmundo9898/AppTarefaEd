import React, {useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, Modal, Button } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Container, TextName, ButtonTask,  } from './styles';


export default function TesteList({data}) {

    const [visible, setVisible] = useState(false);

    const [edit, setEdit] = useState('');

   
  return (
   <Container>
       
       <ButtonTask onPress={() => {setVisible(true)}}>
          <AntDesign name="edit" size={30} color="#009933" />
       </ButtonTask>

       <ButtonTask onPress={() => alert('Editar ?')}>
          <AntDesign name="delete" size={30} color="#009933" />  
       </ButtonTask>

       <TextName>{data.nome}</TextName>    
     
       
        <Modal
        animationType='fade'
        visible={visible}
        transparent={true}

       >   
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
           <View style={{height: 400, width: '90%', backgroundColor: '#404040', borderRadius: 10, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#FFF', fontSize: 30, fontWeight: 'bold'}}>Editando Tarefa</Text>
              <TextInput
              placeholderTextColor='#121212'
              placeholder='Editando Tarefa....'
              style={{width: '95%', height: 45, backgroundColor: '#fff', borderRadius: 20, marginTop: 20, marginBottom: 50, padding: 10,}}
              />

              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{ marginHorizontal: 20, height: 50, width: '40%', backgroundColor: '#009900', borderRadius: 20, alignItems:'center', justifyContent: 'center'}}  onPress={() => {setVisible(false)}}>
                 <Text style={{color: '#fff', fontSize: 18}}>Editar</Text>
              </TouchableOpacity >
              <TouchableOpacity style={{marginHorizontal: 20, height: 50, width: '40%', backgroundColor: '#009900', borderRadius: 20, alignItems:'center', justifyContent: 'center'}} onPress={() => {setVisible(false)}}>
                 <Text style={{color: '#fff', fontSize: 18}}>Fechar</Text>
              </TouchableOpacity>
              
              </View>
           </View>
         </View>
        </Modal>

   
       
   </Container>
  );
}