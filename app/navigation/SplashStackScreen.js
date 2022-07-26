import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity} from 'react-native';
import SplashScreen from '../screens/SplashScreen';

import { createStackNavigator } from '@react-navigation/stack';
const SplashStack = createStackNavigator();

const SplashStackScreen = ({navigation}) => (


  <SplashStack.Navigator >  
  
      <SplashStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />    
      
  </SplashStack.Navigator> 


  );


export default SplashStackScreen;



 