import React from 'react';
import {Text, View ,StyleSheet, Button} from 'react-native';


const Home = (navigation) => {

    return(

        <View style ={Styles.container}>
            <Text>home</Text>
            <Button title="settings" onPress={()=> navigation.navigate('Settings')}/>
            </View>
    );
};
export default Home;


const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
});