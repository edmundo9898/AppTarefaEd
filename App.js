import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/pages/SignIn';
import  SignUp  from './src/pages/SignUp';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name='Home'   component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  
      

  );
}