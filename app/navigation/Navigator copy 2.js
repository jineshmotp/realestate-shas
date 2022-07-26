import React, { useEffect, useState } from 'react';
import { View, Platform, ToastAndroid,Linking, ActivityIndicator, Alert } from 'react-native';

import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';


import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';


// Import pages

import HomeStackScreen from './HomeStackScreen';
import SplashStackScreen from './SplashStackScreen';


const Navigator = () => {

// login state variable 
  

const initialLoginState = {
  isLoading: true,
  userToken: null,
};


  // reducer cases

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,       
        };
         
      case 'LOGOUT': 
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
        
    }
  };

 
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // authcontext functions
  
  const authContext = React.useMemo(() => ({

    // signin function 

    signIn: async() => {  
      
        let userToken = 'Shas';       
      
        try {
          await AsyncStorage.setItem('userToken', userToken);         
          
        } catch(e) {
          console.log(e);
        }       

             
       dispatch({ type: 'LOGIN', token: userToken });
        
              
                 
     },
     signOut: async() => {   

     
      try {
        
       

        // remove async storage values or clear memmory    
         
         AsyncStorage.getAllKeys()
         .then(keys => AsyncStorage.multiRemove(keys))
         .then(() => console.log('success'));
 
           dispatch({ type: 'LOGOUT' });     
           
           
          } catch (error) {
            console.log('error signing out: ', error);
        }

   

    },

  
   
  }), []);


  useEffect(() => {

   // load previous user status

   let userToken = null;
     
   
       try {
         userToken = null;
      
       } catch(e) {
         console.log(e);
       }

    
        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });

    

  },[]);
   
 

  if(loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <ActivityIndicator size="large" />
      </View>
    );
  }


  return (
    <PaperProvider >
    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      { loginState.userToken !== null ? (
       
        <HomeStackScreen/>
      )
    :
       <SplashStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

export default Navigator;