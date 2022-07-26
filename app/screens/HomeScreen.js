import React, { Component } from "react";
import * as Permissions from 'expo-permissions';
import {  BackHandler, Alert, View, Text, TouchableOpacity, Dimensions,StyleSheet, Image, StatusBar, RefreshControl,ActivityIndicator,} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import { WebView } from "react-native-webview";


export default class App extends Component {
  WEBVIEW_REF = React.createRef();

  state = {
    canGoBack: false,
    netinfo : false
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);


    NetInfo.fetch().then(state => {
      // console.log('Connection type', state.type);
       //console.log('Is connected?', state.isConnected);
     
       if(state.isConnected == true)
       {
        this.setState({
          netinfo: null
        });     
       
         
       } 
       else
       {    
                
        this.setState({
          netinfo: 'Not null'
        }); 
       }

      });

  }

  componentWillUnmount() {
   // BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {

   // alert(this.state.canGoBack)
   
     
   
   if(this.state.canGoBack == false) 
   {
           
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      }


      this.WEBVIEW_REF.current.goBack();
      return true;
  };

  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  };

  render() {
    return (

      this.state.netinfo == null ?
      (   

      <WebView
      source={{ uri: 'https://shasonline.com/Mobile_app' }} style={{ marginTop: 25 }}
        ref={this.WEBVIEW_REF}
        onNavigationStateChange={this.onNavigationStateChange}
      />
      )
      :
      (
        <View style={{alignContent:'center',alignItems:'center',alignSelf:'center',justifyContent:'center'}}> 

        <Image style={styles.netimg} source={require('../assets/netcon.png')}  />   

        <Text style={styles.netimgtxt}>No Internet Connection</Text>

        <Text style={styles.netimgtxt1}>Seems like you are offline, Please check you internet connection</Text>

       </View>
      )
    );
  }
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