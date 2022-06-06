import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';


//importando as pages para a navegação
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

//
const AuthStack = createStackNavigator();
 
function AuthRoutes(){
    return(
        
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name='SignIn'
            component={SignIn}
            options={{
                headerShown:false
            }}
            />
            <AuthStack.Screen 
            name='SignUp'
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#121212',
                    borderBottomColor: 'orange',
                    borderBottomWidth: 2,
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerTitle: 'Back'
                
            }}
            />


        </AuthStack.Navigator>

    )
}


export default AuthRoutes;