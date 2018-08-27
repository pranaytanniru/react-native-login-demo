/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import LoginScreen from './App/Screens/LoginScreen'

class App extends Component<Props> {
  render() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000' }}>
          <View style={{flex:1,backgroundColor:'#FFF'}}>
            <LoginScreen/>
          </View>
        </SafeAreaView>
    );
  }
}
export default App;
