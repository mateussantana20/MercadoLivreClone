import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import menu from '../imgs/icons/menu.png';
import caixaPostal from '../imgs/caixaPostal.png'
export default class Perguntas extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  render() {
    return (
      <View style={styles.principal}>
        <View style={{backgroundColor:'#fff159'}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('tela')}  >
          <View style = {{paddingBottom:10,marginLeft:10,marginTop:15,flexDirection:'row'}}>
            <Image style={styles.ImgMenu} source={menu}/>
            <Text style = {styles.txtConta}>Perguntas</Text>
          </View>
        </TouchableOpacity>
        </View>
        
        <View style={styles.view2}>
        <Image source={caixaPostal}/>
            <Text style={styles.font}>Você não tem perguntas</Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal:{
    flex:1,
    backgroundColor:'white'
  },
  icon:{
    height:30,
    width:25,
  },
  ImgMenu:{
    height:25,
    width:25,
  },
  txtConta:{
    marginLeft:30,
    fontSize:15
},
  view2:{
    justifyContent:'center',
    alignItems:'center'
},
   font:{
    fontSize:20
   }
})