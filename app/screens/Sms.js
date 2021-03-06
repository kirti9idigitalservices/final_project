import * as React from 'react';
import {Text, View ,StyleSheet, Button, Image, Alert,} from 'react-native';
import { StatusBar } from "expo-status-bar";

function Sms({ navigation }) {

    const createTwoButtonAlert = () =>
    Alert.alert(
      "SMS",
      "Allow to send sms and view SMS messages",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return (
      <View style={styles.container}>
        <View style= {{flexDirection:'column',}}>
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
        <Image style={styles.image} source={require("../../assets/Blue_Logo.png")} />
 
          <StatusBar style="auto" />
             <Text> allow sms permission</Text>
         <Text>
             <Button
               title="Turn on"
               onPress={createTwoButtonAlert} 
        
            />
 </Text>
        
      </View>
    );
  }
  export default Sms;


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30,
    },
   
    image: {
      marginBottom: 180,
      width: 200,
      height: 120,
    },
  });