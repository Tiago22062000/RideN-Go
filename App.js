import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons';

import ChatScreen from './screens/ChatScreen';
import PostScreen from './screens/PostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import firebaseConfig from './config';
import * as firebase from 'firebase';

import meo_sw from './Eventos/Festivais/meo_sw';
import vodaf_coura from './Eventos/Festivais/vodaf_coura';
import superR_superB from './Eventos/Festivais/superR_superB';
import rock_in_rio from './Eventos/Festivais/rock_in_rio';
import nos from './Eventos/Festivais/nos';
import edp_cool_jazz from './Eventos/Festivais/edp_cool_jazz';
import Maratona from './Eventos/Festivais/Maratona';

  const AppContainer = createStackNavigator(
    {
      default: createBottomTabNavigator(
        {
            Home: {
              screen: HomeScreen,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={30} color={tintColor}></Ionicons>
              }
            },
            Chat: {
              screen: ChatScreen,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-chatboxes' size={30} color={tintColor}> </Ionicons>
              }
            },
            Home: {
              screen: HomeScreen,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={30} color={tintColor} style={{
                  shadowColor:'#E9446A', 
                  shadowOffset:{
                   width:0, 
                   heigth:0, 
                   shadowRadius:10, 
                   shadowOpacity:0.3}}}></Ionicons>
              }
            },
            Post: {
              screen: PostScreen,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => 
                <Ionicons name='ios-add-circle' 
                  size={48} color={tintColor}>
                </Ionicons>
              }
            },
            Notification: {
              screen: NotificationScreen,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-notifications' size={30} color={tintColor}> </Ionicons>
              }
            },
            Profile: {
              screen: ProfileScreen,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-person' size={30} color={tintColor}> </Ionicons>
              }
            }
          },
          {
            defaultNavigationOptions:{
              tabBarOnPress: ({navigation, defaultHandler}) => {
                if (navigation.state.key === 'Post') {
                  navigation.navigate('postModal')
                } else {
                  defaultHandler()
                }
              }
            },
            tabBarOptions: {
              activeTintColor: '#FFA200',
              inactiveTintColor: '#999999',
              activeBackgroundColor: "#333333",
              inactiveBackgroundColor: '#333333',
              showLabel: false
            }
          }
      ),
      postModal: {
        screen: PostScreen
      }
    },
    {
      mode: 'modal',
      headerMode:'none'
    }
  )

  const AuthStack= createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
  })

  const EventsStack = createStackNavigator(
    {
    MeoSW: meo_sw,
    Vodafone: vodaf_coura,
    NOSAlive: nos,
    RockinRio: rock_in_rio,
    SuperBSuperR: superR_superB,
    EDP: edp_cool_jazz,
    Maratona: Maratona
    },

    {
      defaultNavigationOptions : {
        
        header: null,
        headerTitleAlign: "center",
        headerTintColor: '#333333',
        tintColor: '#333333',
        color: '#232122',
        activeBackgroundColor: '#232122',
        inactiveBackgroundColor: '#232122',
        inactiveTintColor: '#232122',
        ColorPropType: '#232122',
        alignItems: ''
      

      }
    }
  )

  export default createAppContainer(
    createSwitchNavigator(
      {
        Loading: LoadingScreen,
        App: AppContainer,
        Auth: AuthStack,
        Events: EventsStack,
      },
      {
        initialRouteName: 'Loading'
      }     
    )
  )
