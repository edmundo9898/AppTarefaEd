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
    const {user} = useContext(AuthContext);
    //Navegação para tela de cadastro


    function TesteNave(){
        navigation.navigate('SignUp');

    }
    
    //Navegação para a tela Home se o usuario e senha for verdadeiro
    function TesteHome(){
        navigation.navigate('Home')
        console.log(user.nome);
        console.log(user.uid);
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

       <SubmitBtn onPress={() => TesteHome()}>
           <Textbtn>
               Acessar
           </Textbtn>
       </SubmitBtn>

       <Link onPress={() => TesteNave()}>
           <TextLink>
               Não tem conta ?
           </TextLink>
       </Link>
   </Container>
 );
}