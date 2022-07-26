import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
const HomeStack = createStackNavigator();

const HomeStackScreen= ({navigation}) => (


  <HomeStack.Navigator >  
  
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />    
      
  </HomeStack.Navigator> 


  );


export default HomeStackScreen;



 