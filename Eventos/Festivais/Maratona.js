import * as React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, handleHelpPress, aspect, lineHeight } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { navigate } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import { AuthSession } from 'expo';

export default class Maratona extends React.Component {

  render() {   
    return (     
    <ScrollView styles={{backgroundColor:'#333333'}}>   
        <View style = {styles.header}>
          <View style = {styles.row}>
            <View style = {styles.row3}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Home')}>
                <Ionicons 
                  name='md-arrow-round-back' 
                  style={styles.header}>
                </Ionicons>
            </TouchableOpacity>
            </View>
            <View style = {styles.header}>
              <Text style={styles.header1}>
                  EDP Meia Maratona de Lisboa
              </Text>
            </View>
          </View>
        </View>
        <View>
        <Image
            source={require('../../assets/correr.png')}
            style={styles.image1}
          />
        </View>
         <View style={styles.container}>
            <Text style={styles.container}>
                Localização: Lisboa
            </Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.container}>
                Distância: 17km
            </Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.container}>
                Descrição
            </Text>
        </View>
        <View style={styles.reference}>
          <Text style={styles.reference}>
          A EDP Maratona de Lisboa é já considerada como uma das mais belas maratonas do mundo por entidades internacionais como a Forbes, o Huffington Post e American Express, que elegeram a Maratona de Lisboa como uma prova a não perder. Com início Cascais e meta instalada na simbólica Praça do Comércio, a Maratona de Lisboa tem um percurso 100% à beira mar/rio, oferecendo aos seus atletas um cenário único no mundo.
          </Text>
        </View> 
        <View>
        <Image
            source={require('../../assets/Mapa_Paredes.png')}
            style={styles.image}
          />
        </View>          
    </ScrollView>      
    ); 
  }
}

const styles = StyleSheet.create({
  screen:{
        backgroundColor: 'transparent'
    },
    row3:{
      marginTop:10
    },
    header1:{
        marginTop:5,
        color: 'white',
        fontSize: 20,
        marginTop:20,
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        marginRight:40,
    },
    row:{
      flexDirection:'row'
    },
  header:{
        marginRight:15,
        width:'100%',
        height:90,
        backgroundColor: '#333333',
        justifyContent: 'center',
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 20,
        textDecorationColor: 'white'
    },
    title: {
        backgroundColor: "#333333",
        fontSize: 30,
        color: 'white',
        textAlignVertical: 'center'
    },
    text:{
        textAlignVertical: "center",
        textAlign: 'center',
        color:'white',
        fontSize: 18 
    },
    image:{
        flex:1,
        width: '100%',
        height: 375,
        alignItems:'center',
        justifyContent:'center'
    },
    container: {
        paddingHorizontal: '2.5%',
        backgroundColor: '#232122',
        height: 55,
        borderTopWidth:0.3,
        borderBottomWidth: 0.3,
        borderColor: '#FFA200',
        color:'white',
        fontSize: 18,
        justifyContent: 'flex-start',
        textAlign: 'left',
        textAlignVertical: 'center',
        lineHeight: 27,
    },
    text: {
      paddingHorizontal: '2.5%',
      backgroundColor: "#232122",
      alignItems: 'center',
      color:'white',
      fontSize: 16,
      fontWeight: '100',
      textAlignVertical: 'center',
      lineHeight: 23,
      textAlign: "justify",
      borderBottomWidth: 5,
      borderColor: '#232122'
    },
    reference: {
      paddingHorizontal: '2.5%',
      backgroundColor: "#232122",
      alignItems: 'center',
      color:'white',
      fontSize: 14,
      fontWeight: '100',
      textAlignVertical: 'center',
      lineHeight: 23,
      textAlign: "justify",
      borderBottomWidth: 15,
      borderColor: '#232122'
    },
    image1:{
      flex:1,
      width: '100%',
      height: 200,
      alignItems:'center',
      justifyContent:'center'
  }
});
