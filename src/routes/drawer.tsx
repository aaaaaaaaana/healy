import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';


import Home from '../telas/Home'; 
import Menu from '../components/Menu'; 


const Stack = createStackNavigator();




export default function App() {

  return (


    <NavigationContainer>

    

      <Stack.Navigator>



        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} 
        />



        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }} 
        />




      </Stack.Navigator>

    </NavigationContainer>

  );
}