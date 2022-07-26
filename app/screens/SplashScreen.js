import React, { useEffect, useState } from 'react';
import * as Permissions from 'expo-permissions';
import {  Alert, View, Text, TouchableOpacity, Dimensions,StyleSheet, Image, StatusBar, RefreshControl,ActivityIndicator,} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const SplashScreen = ({ navigation }) => {
  const [networkinfo, setnetworkinfo] = useState(null);
  

  useEffect(() => {

    NetInfo.fetch().then(state => {
     // console.log('Connection type', state.type);
      //console.log('Is connected?', state.isConnected);
    
      if(state.isConnected == true)
      {
      
         
        setTimeout(() => {
     
          // setRefreshing(false);
           navigation.navigate('HomeScreen');
         
         }, 2000);
        
      } 
      else
      {    
               
        setnetworkinfo('not null');    
      }

    });

  });


 
    return (

      <View style={styles.container}>
       {

       networkinfo == null ?
        (   

            <View>
             <Image    
                    
            source={require('../assets/shas.jpg')}
            style={styles.logo}
           
            />
            <ActivityIndicator size="large" color="#ed1e24" />
            </View>

        )
        :
        (

         


          <View style={{alignContent:'center',alignItems:'center',alignSelf:'center',justifyContent:'center'}}> 

              <Image style={styles.netimg} source={require('../assets/netcon.png')}  />   

              <Text style={styles.netimgtxt}>No Internet Connection</Text>

              <Text style={styles.netimgtxt1}>Seems like you are offline, Please check you internet connection</Text>

          </View>

        

        )
        }
          
      </View> 


    )

  
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.10;
const height_net = height * 0.40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  netimg: {
    width: height_net,
    height: height_net
    },

    logo: {
      width: height_logo,
      height: height_logo
  },

netimgtxt: {
 fontWeight:'bold',
 fontSize:16,
 alignItems: 'center',
 justifyContent: 'center',
},
netimgtxt1: {
  fontWeight:'normal',
  fontSize:11,
  color:'#2C3539',
  marginTop:10,
  alignItems: 'center',
  justifyContent: 'center',
 },

});


export default SplashScreen;