import React, {useState, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

import {Container, TextLogo, AreaInput, SubmitBtn, Textbtn, Link, TextLink} from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

import {AuthContext} from '../../Context/auth';



export default function SignIn() {

    const navigation = useNavigation();  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   // Criando o context para a tela ter acesso ao value user.
   const {signIn} = useContext(AuthContext);

    
  function accessSignIn(){
      signIn(email, password);
  }


 return (
   <Container
   //Verifica o sistema operacional que está usando
   behavior={Platform.OS === 'ios' ? 'padding' : ''}
   //Já comeco como True
   enabled
   >
       <StatusBar/>
       {/* <TextLogo>AppTarefaEd</TextLogo> */}
       <FontAwesome5 name="clipboard-list" size={90} color="black"/>

       <AreaInput
       style={{marginTop: 50}}
       placeholder="Email"
       autoCorrect={false}
       autoCapitalize='none'
       value={email}
       onChangeText={ (text) => setEmail(text)}
       />

       <AreaInput
       placeholder="Password"
       autoCorrect={false}
       autoCapitalize='none'
       value={password}
       onChangeText={ (text) => setPassword(text)}
       />

       <SubmitBtn onPress={accessSignIn}>
           <Textbtn>
               Acessar
           </Textbtn>
       </SubmitBtn>

       <Link onPress={() => navigation.navigate('SignUp')}>
           <TextLink>
               Não tem conta ?
           </TextLink>
       </Link>
   </Container>
 );
}