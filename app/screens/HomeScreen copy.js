import React, { Component } from "react";
import { BackHandler, Alert } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends Component {
  WEBVIEW_REF = React.createRef();

  state = {
    canGoBack: false,
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
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
      <WebView
      source={{ uri: 'https://shasonline.com/Mobile_app' }} style={{ marginTop: 25 }}
        ref={this.WEBVIEW_REF}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}