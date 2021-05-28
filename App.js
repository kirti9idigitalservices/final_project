import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./app/screens/Home";
import  Settings  from "./app/screens/Settings";
import  Login  from "./app/screens/Login";
import Splash from "./app/screens/Splash";
import Register from './app/screens/Register';
import Bluetooth from './app/screens/Bluetooth';
import Sms from './app/screens/Sms';
import Wifi from './app/screens/Wifi';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Wifi" component={Wifi} />
        <Stack.Screen name="Sms" component={Sms} />
        <Stack.Screen name="Bluetooth" component={Bluetooth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
