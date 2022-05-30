import React, {useContext} from 'react';
import {View, ActivityIndicator, Text}  from 'react-native';
import { AuthContext} from '../Context/auth';


import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


function Routes(){

    const {signed, loading} = useContext(AuthContext);

    //condição se a página estiver carregando irá mostrar o indicador
    if(loading){
       return(
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <Text>Aguarde</Text>
           <ActivityIndicator size="large" color="#131313"/>
         </View>

       )
   }
    
    // redenrização condicional: se o usuario tiver logado vai para AppRoutes(tela Home), senão vai para AuthRoutes(Tela de login)
    return(
      signed ? <AppRoutes/> : <AuthRoutes/>
   )
}

export default Routes;