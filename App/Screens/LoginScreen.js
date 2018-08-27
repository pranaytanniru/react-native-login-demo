import React, { Component } from 'react';
import { ImageBackground,Text, TouchableOpacity,StyleSheet, View ,Image ,KeyboardAvoidingView ,Dimensions ,TextInput} from 'react-native';
import Modal from 'react-native-modal';
var FBLoginButton = require('./FBLoginButton');
var LinkedinLoginButton = require('./LinkedinLogin');
var screen=Dimensions.get('window')
class LoginScreen extends Component {
state={
  selected:'',
  modalVisible:false
}
render(){
  return(
    <View style={{flex:1}}>
    <ImageBackground source={require('../Assets/login_bg.jpg')} style={{flex:1}}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{backgroundColor:'#FFF',width:100,height:100, alignItems:'center',justifyContent:'center'}}>
        <Text>ME</Text>
        </View>
      </View>

      <View>
        <View style={{
        height:150,
        backgroundColor:'white',
        }}>
          <View style={{
          opacity:1,//animated
          alignItems:'flex-start',
          marginTop:25,//animated
          paddingHorizontal:25,
          }}>
            <Text style={{
            color:'#000',
            fontSize:24,
            }}> Welcome to your App</Text>
          </View>

          <View style={{alignItems:'flex-start',flexDirection:'row',flexDirection:'row',flex:1,marginTop:25,paddingHorizontal:25}}>
            <Image source={require('../Assets/india.png')} style={{width:28,height:24,resizeMode:'contain'}} />
            <View style={{flex:1,flexDirection:'row'}}>
            <Text style={{fontSize:17,color:'#000',paddingHorizontal:10}}>+91</Text>
          </View>
          </View>
        </View>
      </View>
    </ImageBackground>
      <View style={{flex:0.1}}>
        <TouchableOpacity style={{
          height:70,
          backgroundColor:'white',
          alignItems:'flex-start',
          justifyContent:'center',
          borderTopColor:'#e8e8ec',
          borderTopWidth:1,
          paddingHorizontal:25
        }}
        onPress={()=>{
          this.setState({modalVisible:true})
        }}
        >
          <Text style={{
            color:'#5a7fdf',
            fontWeight:'bold',
          }}>or connect using social media</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={this.state.modalVisible}
        onRequestClose={()=>{
          this.setState({modalVisible:false})
        }}
        onBackdropPress={()=>this.setState({ modalVisible: false })}
        >
        <View style={localStyles.modalContent}>
          <FBLoginButton />
          <LinkedinLoginButton/>
          <TouchableOpacity
            onPress={() => {
            this.setState({modalVisible:false});
            }}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
  }
}

const localStyles = StyleSheet.create({
  modalContent: {
    padding:'5%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height:'30%',

  },
  modalStyle:{
    alignItems:'center',
    justifyContent:'center',
  }
});

export default LoginScreen;
