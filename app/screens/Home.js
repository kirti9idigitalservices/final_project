import * as React from 'react';
import {Text, View ,StyleSheet, Button} from 'react-native';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style= {{flexDirection:'row',}}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Splash" onPress={() => navigation.navigate('Splash')} />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        </View>
        <Text>Home Screen</Text>
        
      </View>
    );
  }
  export default Home;