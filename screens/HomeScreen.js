import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image} from 'react-native';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, navigate } from 'react-navigation';

export default class HomeScreen extends React.Component {
    state = {
        email: '',
        displayName: ''
    };

    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;

        this.setState({ email, displayName});
    } 
    
    constructor(props) {
      super(props);
      this.state = {    }
        }

    render() {      
        return (
        <View style={styles.screen}>
          <View style={styles.container}>
            <View>
              <Icon name={"ios-search"} style={styles.icon}/>
            </View>
            <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)' 
                      placeholder="Procura aqui"                                                                                                                                                                                                                                                                                              
                      placeholderTextColor = "white"
                      selectionColor="black"
                      keyboardType="default"/>
          </View>
            <ScrollView style={styles.teste}> 
              <Text style={styles.festivais}>Festivais</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.festivais_lista}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('MeoSW')}>
                    <Image source={require('../assets/meo_sudoeste.png')} style={styles.image}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Vodafone')}>
                    <Image source={require('../assets/vodafone_coura.png')} style={styles.image} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <Image source={require('../assets/superbock_superrock.png')} style={styles.image}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <Image source={require('../assets/nos_primavera.png')} style={styles.image}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <Image source={require('../assets/rock_in_rio.png')} style={styles.image}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <Image source={require('../assets/edp_cooljazz.png')} style={styles.image}/>
                  </TouchableOpacity>
                </ScrollView>   
              <Text style={styles.festivais}>Desporto</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.festivais_lista}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <Image source={require('../assets/jamor.png')} style={styles.image}/>
                  </TouchableOpacity>  
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <Image source={require('../assets/euro2020.png')} style={styles.image}/>
                  </TouchableOpacity>    
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Maratona')}>
                    <Image source={require('../assets/maratona_lisboa.png')} style={styles.image}/>
                  </TouchableOpacity>                          
                </ScrollView>                       
          </ScrollView>
        </View>
      );       
    }
  }
      

const styles = StyleSheet.create({
    screen:{
      marginTop: 0,
      flex:1,
      backgroundColor: "#232122"
    },
    teste:{
      flex:1
    },
    icon:{
      fontSize: 40,
      color: '#999999'
    },
    container: {
      shadowColor: 'black',
      shadowOffset: {width:0, height:2},
      shadowRadius: 20,
      shadowOpacity: 0.26,
      backgroundColor: '#333333',
      elevation:1,
      flexDirection:'row',
      alignItems:'center',
      padding:5,
      borderTopWidth: 30,
      borderTopColor: '#555555'
    },
    inputBox:{
      width: '80%',
      backgroundColor: '#555555', 
      borderRadius: 50,
      paddingHorizontal: 16,
      fontSize: 16,
      color: 'black',
      marginVertical: 20,
      marginTop: '6%',
      marginLeft: '2.5%'
    },
    festivais:{
      marginTop:'2%',
      marginLeft:'5%',
      fontSize:18,
      color: 'white',
    },
    image:{
      width:100,
      height:100,
      borderRadius: 300,
      marginTop:10,
      marginLeft:10,
      borderWidth:1.5,
      borderColor: 'white'
    },
    festivais_lista:{
      flexDirection:'row',
      marginTop: 20
    }
});