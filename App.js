import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/Context/auth';
// Importando Routes (de onde vem as telas do App)
import Routes from './src/Routes';


// agora tudo dentro de AuthProvider terá o acesso / repassando  do User

export default function App(){

  return(
    <NavigationContainer>
      <AuthProvider>
       <Routes />
      </AuthProvider>
    </NavigationContainer>
  
      

  );
}