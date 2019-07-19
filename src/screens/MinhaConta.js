import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import user from '../imgs/icons/user.png';
import menu from '../imgs/icons/menu.png';
import Perguntas from '../imgs/icons/perguntas.png'
import compras from '../imgs/icons/compras.png'
export default class MinhaConta extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static navigationOptions = {
      drawerLabel:'Minha Conta',
      drawerIcon:() => (
        <Image source={require('../imgs/icons/user.png')}style={styles.icon}  />
      ),
    }
  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.viewInput}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}  >
          <View style = {{marginLeft:10,marginTop:15,flexDirection:'row'}}>
            <Image style={styles.ImgMenu} source={menu}/>
            <Text style = {styles.txtConta}>Minha Conta</Text>
          </View>
        </TouchableOpacity>
        </View>


        <View>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Perguntas')}  >
          <View style = {{marginLeft:10,marginTop:15,flexDirection:'row'}}>
            <Image style={styles.ImgMenu} source={Perguntas}/>
            <Text style = {styles.txtConta}>Perguntas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate('compras')}  >
          <View style = {{marginLeft:10,marginTop:15,flexDirection:'row'}}>
            <Image style={styles.ImgMenu} source={compras}/>
            <Text style = {styles.txtConta}>Compras</Text>
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
  txtConta:{
    marginLeft:30,
    fontSize:15
},
viewInput:{
  backgroundColor:'#fff159',
  paddingBottom:15
}
})