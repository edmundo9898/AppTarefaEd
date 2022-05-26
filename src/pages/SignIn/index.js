import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';

import {Container, TextLogo, AreaInput, SubmitBtn, Textbtn, Link, TextLink} from './styles';

import { FontAwesome5 } from '@expo/vector-icons';



export default function SignIn() {

    const navigation = useNavigation();
     
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function TesteNave(){
        navigation.navigate('SignUp');
    }

    function TesteHome(){
        navigation.navigate('Home')
    }



 return (
   <Container>
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