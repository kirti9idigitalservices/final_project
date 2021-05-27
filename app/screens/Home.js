import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';


const Home = props => {

    return(

        <View style ={Styles.container}>
            <Text>home</Text>
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