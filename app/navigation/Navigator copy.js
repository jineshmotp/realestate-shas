import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const StackScreen = createStackNavigator();

const Navigator = ({navigation}) => (

    <NavigationContainer >


      <StackScreen.Navigator > 
        
          <StackScreen.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />    
          <StackScreen.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />   
     </StackScreen.Navigator>  


     </NavigationContainer>  


  );


export default Navigator;



 