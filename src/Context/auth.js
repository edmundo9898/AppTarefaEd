import React, {useState, createContext} from 'react';
import firebase from '../services/FirebaseConnection';

//criando o contexto Context
export const AuthContext = createContext({});
     

// tods
function AuthProvider({children}){
   
    
    // a const user dentro do authContext servira para da acesso ao user em outras páginas do aplicativo
    const [user, setUser] = useState({
        nome: 'Edmundo',
        uid: '120312032103'
        }
    )  
    
  // tudo dentro de  authcontext.provider vai poder acessar o USER
    return (
        <AuthContext.Provider value={{user}}>
         {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider;