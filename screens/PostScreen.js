import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Fire from '../Fire';
import {PermissionsAndroid} from 'react-native';

const firebase = require('firebase');
require('firebase/firestore');

export default class PostScreen extends React.Component {
    state = {
        text: '',
        image: null
    };

    componentDidMount() {
        this.requestCameraPermission();
    }

    requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can access the external storage');
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
    };

    pickImage = async () => {
        ImagePicker.launchImageLibrary({aspect: [4, 3], mediaType: 'photo'}, (response) => {
            console.log('Response =', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
            this.setState({
                image: response.uri,
            });
            }
        });
    }

    handlePost = () => {
        Fire.shared.addPost({ text: this.state.text.toString(), localUri: this.state.image}).then(ref => {
            this.setState({ text: '', image: null});
            this.props.navigation.goBack();
        }).catch(error => {
            alert(error);
        });
    };

    render() {
        return(
            
            <View style={styles.container}>
                
            
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Ionicons name='md-arrow-round-back' size={24} color='white'></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePost}>
                        <Text style={{fontWeight: '500', color:'white', fontSize:20, textAlignVertical: 'center'}}>Post</Text>
                    </TouchableOpacity>
                </View> 

                <View style={styles.inputContainer}>
                    <Image source={require('../assets/simao.png')} style={styles.avatar}/>
                    <TextInput autoFocus={true} multiline={true}  numberOfLines={4} style={{flex:1, fontSize: 17, color:'white'}} placeholder='O que vais partilhar?' onChangeText={text => this.setState({text})} value={this.state.text}/>
                </View>

                <TouchableOpacity style={styles.photo} onPres={this.pickImage}>
                    <Ionicons name='md-camera' size={32} color='#FFA200'></Ionicons>
                </TouchableOpacity>

                <View style={{marginHorizontal: 32, marginTop:32, height: 150}}>
                    <Image source={{uri: this.state.image}} style={{width: '100%', height: '100%'}}></Image>
                </View>
                
            </View>
        );
    }
}

const styles =StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#232122",       
    },
  
    header:{
        backgroundColor: "#333333",
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:32,
        paddingVertical:12,
        borderBottomWidth:0,
        borderBottomColor: '#D8D9DB',
        borderTopWidth:40,
        borderColor:"#333333"
    },
    inputContainer:{
        margin:30,
        flexDirection:'row'
    }, 
    avatar:{
        width: 80,
        height: 80,
        borderRadius:100,
        marginRight:16,
        borderWidth: 1,
        borderColor: 'white'
    },
    photo:{
        alignItems: 'flex-end',
        marginHorizontal:28
    }
})