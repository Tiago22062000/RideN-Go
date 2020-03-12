import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function edp_cool_jazz() {
  return (
    <View style={styles.header}>
      <Text style={styles.texto}>EDP Cool Jazz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
