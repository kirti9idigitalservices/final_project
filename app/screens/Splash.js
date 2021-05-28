import * as React from 'react';
import {
    Text,
    View ,
    StyleSheet,
    Button,
    Image,
    } from 'react-native';
import { StatusBar } from "expo-status-bar";

function Splash({ navigation }) {
    return (
      <View style={styles.container}>
           <View style= {{flexDirection:'row',}}>
                 
        <Button
          title="Go to Splash"
          onPress={() => navigation.push('Splash')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')} />
          <Button title="Go to Wifi" onPress={() => navigation.navigate('Wifi')} />
             <Button title="Go to Sms" onPress={() => navigation.navigate('Sms')} />
             <Button title="Go to Bluetooth" onPress={() => navigation.navigate('Bluetooth')} />
       
           </View>
          <Image style={styles.image }source={require("../../assets/Splash_Logo.png")} />
          <Text style={styles.box}>Bluetooth</Text>
          <StatusBar style="auto" />
      
      </View>
    );
  }
  
  export default Splash;

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#0a3d91',
      alignItems: 'center',
      justifyContent: 'center',},
    
      box:{
      
        color: 'white',
        paddingTop: 200,
        fontSize:17,
       },

       image:{
        width: 300,
         height: 200,
          marginTop:200

       },
    });
  