import React, {useState, createContext, useEffect} from 'react';
import firebase from '../services/FirebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
//criando o contexto Context
export const AuthContext = createContext({});
     

// 
function AuthProvider({children}){
   
    
    // a const user dentro do authContext servira para da acesso ao user em outras páginas do aplicativo
    const [user, setUser] = useState()  
    const [loading, setLoading] = useState(true)



    useEffect(() => {
         async function loadStorage(){
             const storageUser = await AsyncStorage.getItem('Auth_user');
             
             // está verificando se tiver items na página irá manter mesmo atualizando o App   jason.parse: convertendo para JSON denovo, 
             if(storageUser){
                 setUser(JSON.parse(storageUser));
                 setLoading(false);
             }
             setLoading(false);
         }

         loadStorage();

    }, []);
    
    // cadastrando usuario
    async function signUp(email, password, nome){
        //criando usuario no firebase
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        // se criou tudo certo vai cair no then
        .then( async (value) => {
            let uid = value.user.uid;
            
            //caminho para criação do usuario no firebase
            await firebase.database().ref('users').child(uid).set({
                nome: nome,
                email: email
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                };
                setUser(data);
                storageUser(data);
            })

        })
        .catch((error) => {
            alert(error.code);
        })
    }

     // função para acessar 
    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then( async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email
                }
                setUser(data);
                 //está salvando os dados só quando acessa ou faz o cadastro. 
                storageUser(data);
            })
            .catch((error) => {
                alert(error.code);
            })
        })
    }
 
    async function storageUser(data){
        // JASON.stringfy esta convertendo o DATA para string
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }
    
    async function signOut(){
        // Irá deslogar o usuario, levando ele para á tela de login
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            alert('Deslogando Com sucesso!!');
            setUser(null);
            
        })
    }

    
   


  // tudo dentro de  authcontext.provider vai poder acessar o USER

    return (                        // convertendo user para bolean (false) 
        <AuthContext.Provider value={{signed: !!user , user, signIn, signUp, loading, signOut }}>
         {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider;