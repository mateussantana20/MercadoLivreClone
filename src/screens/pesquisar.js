import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image,TextInput} from 'react-native';
import menu from '../imgs/icons/menu.png';
import caixaPostal from '../imgs/caixaPostal.png'
import arrow from '../imgs/icons/arrow.png'
export default class Pesquisar extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  render() {
    return (
      <View style={styles.principal}>
        <View style={{backgroundColor:'white'}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('tela')}  >
          <View style = {{paddingBottom:0,marginLeft:30,marginTop:30,flexDirection:'row'}}>
            <Image style={styles.ImgMenu} source={arrow}/>
            <TextInput style={styles.input} placeholder="Busca em Mercado Livre"/>
          </View>
        </TouchableOpacity>
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
  view2:{
    justifyContent:'center',
    alignItems:'center'
},
   font:{
    fontSize:20
   },
   input:{
    marginLeft:40,
    paddingLeft:25,
    borderBottomWidth:1,
    borderBottomEndRadius:50,
    borderBottomColor:'black'
   }
})