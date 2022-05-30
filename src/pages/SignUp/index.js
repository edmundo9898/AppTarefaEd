import React, {useState, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';

import {Container, TextLogo, AreaInput, BtnLogin, Textbtn, Link, TextLink, SubmitBtn} from '../SignIn/styles';

import { FontAwesome5 } from '@expo/vector-icons';

import {AuthContext} from '../../Context/auth';
 


export default function SignUp() {

    const navigation = useNavigation();
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // chamando a função de cadastro na pasta Context 
    const {signUp} = useContext(AuthContext);

   
   //chamando a função Para cadastrar no firebase
   function register(){
       signUp(email, password, nome)
   }


 return (
   <Container>
       <StatusBar/>

       {/* <TextLogo>AppTarefaEd</TextLogo> */}
       <FontAwesome5 name="clipboard-list" size={90} color="black"/>

       <AreaInput
       style={{marginTop: 50}}
       placeholder="Nome"
       autoCorrect={false}
       autoCapitalize='none'
       value={nome}
       onChangeText={ (text) => setNome(text)}
       />

       <AreaInput
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

       <SubmitBtn  onPress={register} >
           <Textbtn>
               Cadastrar
           </Textbtn>
       </SubmitBtn>

       <Link onPress={() => navigation.navigate('Login')}>
           <TextLink>
               Já tem conta?
           </TextLink>
       </Link>
   </Container>
 );
}