import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const maat = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.texto}>MAAT</Text>
        </View>
        )
};

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        color:'white',
        fontSize: 18
    }
})

export default maat;