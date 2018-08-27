/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View,TouchableOpacity,Text,Image } from 'react-native';

export default class LinkedinLogin extends Component {
  linkedinButtonAction(){
    console.warn('LinkedinLogin');
  }
  render() {
    return (
      <View style={{backgroundColor:'#0277BD',margin:15}}>
        <TouchableOpacity onPress={()=>this.linkedinButtonAction()} style={{flexDirection:'row',margin:5}}>
          <Image source={require('../Assets/linkedIn.png')} style={{padding:0,marginRight:5,width:25,height:25}}/>
          <Text style={{color:'#FFF'}}>Continue with linkedIn</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

module.exports = LinkedinLogin;
