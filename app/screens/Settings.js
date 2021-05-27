import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';


const Settings = (navigation) => {

    return(

        <View style ={Styles.container}>
            <Text>Settings</Text>
            <Button title="settings" onPress={()=> navigation.navigate('Home')}/>
            </View>
    );
};
export default Settings;


const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
});