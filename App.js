import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './app/navigation/index';



const App = () => {

    return (    

  
         <Navigation />    

     
       
               
    ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;