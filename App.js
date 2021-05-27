import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from "react-navigation-sreeens";

enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Home from "./app/screens/Home";
import  Settings from "./app/screens/Settings";



const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
        <Stack.Navigator>
          
           <Stack.Screen name = "Home" component ={Home}/>
           <Stack.Screen name = "Settings" component ={Settings}/>
        </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
