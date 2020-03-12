import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const museu_coches = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.texto}>Museu dos Coches</Text>
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

export default museu_coches;