/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View,TouchableOpacity,Text,Image } from 'react-native';
import FBSDK, { AccessToken,LoginManager} from 'react-native-fbsdk'

export default class FBLoginButton extends Component {
  facebookButtonAction(){
    const that = this
    LoginManager.logInWithReadPermissions(['public_profile','user_photos'])
    .then(
      function(result) {
        if (result.isCancelled) {
          } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              let accessToken = data.accessToken;
              console.warn(accessToken);
            })
          }
      },
     function(error) {
        console.warn('Login fail with error: ',error);
     });
  }
  render() {
    return (
      <View style={{backgroundColor:'#0277BD',margin:15}}>
        <TouchableOpacity onPress={()=>this.facebookButtonAction()} style={{flexDirection:'row',margin:5}}>
          <Image source={require('../Assets/facebook.png')} style={{padding:0,marginRight:5,width:25,height:25}}/>
          <Text style={{color:'#FFF'}}>Continue with facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

module.exports = FBLoginButton;
