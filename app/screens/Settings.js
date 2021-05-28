import * as React from 'react';
import {Text, View ,StyleSheet, Button} from 'react-native';


function Settings({ navigation }) {
    return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style= {{flexDirection:'row',}}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.push('Settings')}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Go to Splash" onPress={() => navigation.navigate('Splash')} />
        </View>
        <Text>Settings Screen</Text>
        
      </View>
    );
  }
  
  export default Settings;