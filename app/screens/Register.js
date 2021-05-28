import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

function Register({ navigation }) {
    const [username, setUsername,] = useState("");
  const [email, setEmail,] = useState("");
  const [password, setPassword] = useState("");
 const [confirm_password, setComfirm_Password] = useState("");
 const [phone, setPhone] = useState("");

    return (
      <View style={styles.container}>
             
        <Image style={styles.image} source={require("../../assets/Blue_Logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <Image style={styles.lock} source={require("../../assets/user.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="black"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

       <View style={styles.inputView}>
      <Image style={styles.lock} source={require("../../assets/envelope.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
    
        <Image style={styles.lock} source={require("../../assets/padlock.png")} />
          <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Image style={styles.eiew} source={require("../../assets/private.png")} />
       </View>
      
        <View style={styles.inputView}>
    
        <Image style={styles.lock} source={require("../../assets/padlock.png")} />
          <TextInput
          style={styles.TextInput}
          placeholder="Confirm password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(confirm_password) => setComfirm_Password(confirm_password)}
        />
        <Image style={styles.eiew1} source={require("../../assets/private.png")} />
       </View>

       <View style={styles.inputView}>
      <Image style={styles.lock} source={require("../../assets/telephone.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Phone"
          placeholderTextColor="black"
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
 
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

       

       
          <Text>Forgot Password</Text>
          <View style= {{flexDirection:'row',  marginTop:3, marginBottom:3,}}>
        <View style= {{flexDirection:'column',}}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        </View>
        <View style= {{flexDirection:'column',}}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
        </View>
        <View  style= {{flexDirection:'column',}}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Splash" onPress={() => navigation.navigate('Splash')} />
        </View>
        </View>
        
      </View>
    );
  }
  export default Register;


   
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
   
    image: {
      marginBottom: 40,
      width: 200,
      height: 120,
    },
  
    lock:{
      height:20,
      width:20,
      marginTop:8,
      marginLeft:15,
    },
  
    eiew:{
      height:15,
      width:20,
      marginTop:8,
      marginLeft: 60,
    },
  
  eiew1:{
      height:15,
      width:20,
      marginTop:8,
      marginLeft: 60,
    },
  
    
   
    inputView: {
      backgroundColor: '#ccc',
      borderRadius: 30,
      width: '80%',
      height: 40,
      marginBottom: 20,
      flexDirection: 'row',
    
  
    
    },
   
    TextInput: {
      height: 35,
      marginLeft: 5,
      width:'50%',
    },
  
    forgotbutton: {
      height: 20,
      marginBottom: 20,
      backgroundColor: 'white',
    },
   
    loginBtn: {
      width: '80%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      backgroundColor: 'green',
    },
  
    loginText:{
      color: 'white'
    },
  });