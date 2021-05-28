import * as React from 'react';
import {Text, View ,StyleSheet, Button} from 'react-native';


function Settings({ navigation }) {
    return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <View style= {{flexDirection:'column',}}>
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
        
        
      </View>
    );
  }
  
  export default Settings;