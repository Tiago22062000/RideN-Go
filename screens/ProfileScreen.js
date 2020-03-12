import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Button, ScrollView} from 'react-native';
import * as firebase from 'firebase';

export default class ProfileScreen extends React.Component {
    state = {
        email: '',
        displayName: ''
    };

    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;

        this.setState({ email, displayName});
    } 

    signOutUser = () => {
        firebase.auth().signOut();
    }
    
render() {
    return (   
      <ScrollView>
        <View style={styles.ecra}>
            <View style={styles.card}>
                <Image style={styles.SWAG1} source={require('../assets/Simão.png')}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.nome}>Simão Sil</Text>
                    <Image source={require('../assets/volante.png')} style={styles.images}/>
                </View>
                <View style={styles.descricao2}>
                    <Text style={styles.descricao}>A verdadeira definição de um kanguru festivaleiro ;D</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.Localidade}>Localidade:  Espinho</Text>                   
                </View>       
            </View> 
            
            <View style={styles.interesses}>
                <Text style={styles.interesses4}>Interesses:</Text>
                <Text style={{color:'white', fontSize:14, width:400, marginTop:6, marginLeft: 5}}>Cultura, Musica e Recreação Histórica</Text>
            </View>

            <View style={{color:'white',marginLeft:-30, flexDirection:'row', marginTop:-36}}>
                <Text style={styles.interesses1}>Avaliação:</Text>
                <Image source={require('../assets/Star.png')} style={styles.images5}/>
                <Image source={require('../assets/Star.png')} style={styles.images5}/>
                <Image source={require('../assets/Star.png')} style={styles.images5}/>
                <Image source={require('../assets/Star.png')} style={styles.images5}/>
                <Image source={require('../assets/Star.png')} style={styles.images5}/>
                <Text style={styles.texto}>(7)</Text>
            </View>

            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/simao_carro.png')} style={styles.foto1} />
              <Image source={require('../assets/simao.png')} style={styles.foto2} />
            </View>
            
            <View style={styles.descricao3}>
              <TouchableOpacity onPress={this.signOutUser} style={styles.botao}>
                  <Text style={styles.texto_botao}>Sair</Text>
              </TouchableOpacity>            
            </View>
        </View>
      </ScrollView>
    )
  };
}

//<Text style={styles.interesses2}>Música</Text>
//<Text style={styles.interesses2}>Recreação Histórica</Text>

const styles=StyleSheet.create({
  ecra:{
    flex:1,
    alignItems:'center',
    backgroundColor: '#232122',
    paddingTop: 30
  },
  SWAG1:{
    marginTop:10,
    borderRadius:300,
    width:150,
    height:150,
    borderWidth: 1.5,
    borderColor: 'white'
  },
  nome:{
    fontSize:25,
    color:'white'
  },
  descricao:{
    marginTop:15,
    fontSize:14,
    color:'white'
  },
  descricao1:{
    marginTop:15,
    color:'#FFA200',
    alignItems: 'flex-start'
  },
  descricao2:{
    marginTop:-10
  },
  card:{
    width: '100%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    shadowRadius: 20,
    shadowOpacity: 0.26,
    backgroundColor: '#333333',
    elevation:5,
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    borderWidth: 1,
    borderColor: '#FFA200'

  },
  Localidade:{
    marginLeft:-170,
    marginTop:15,
    justifyContent:'flex-start',
    color:'white',
    padding:5,
    fontSize:15

  },
  descricao3:{
      flex:1,
      marginTop: 100
  }, 
  botao:{
    marginHorizontal: 30,
    backgroundColor: '#FFA200',
    borderRadius: 4,
    height:52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30,
    width: 200
  },
  texto_botao:{
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  localidade:{
      justifyContent:'flex-start',
      marginLeft:-50
  },
  interesses:{
      padding: 60,
      marginTop:-45,
      flexDirection:'row',
      marginLeft:300
  },
  interesses1:{
    color:'white',
    fontSize:20,
    marginLeft:-67
  },
  interesses4:{
    color:'white',
    fontSize:20,
    marginLeft:-140
  },
  interesses2:{ 
      color:'white',
      fontSize:15,
      marginLeft: -90,
      width: '80%',
      backgroundColor: '#555555', 
      borderRadius: 50,
      paddingHorizontal: 16,
      fontSize: 16
  },
  images:{
      marginTop:8,
      marginLeft: 5,
      width:20,
      height:20
  },
  images5:{
    marginTop:4,
    marginLeft: 5,
    width:20,
    height:20
},
  images1:{
    width:50,
    height:50
},
foto1:{
  width:200,
  height:200,
  marginTop: 10,
  marginLeft:0
},
texto:{
  color:'white',
  marginLeft:10,
  marginTop:5
},
foto2:{
  width:200,
  height:200,
  marginTop: 10
}
})