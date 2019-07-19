import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import menu from '../imgs/icons/menu.png';
import dinheiro from '../imgs/icons/dinheiro.png'
export default class MinhaCarteira extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static navigationOptions = {
      drawerLabel:'Minha Carteira',
      drawerIcon:() => (
        <Image source={require('../imgs/icons/dinheiro.png')}style={styles.icon}  />
      ),
    }
  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.viewInput}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}  >
          <View style = {{marginLeft:10,marginTop:15,flexDirection:'row'}}>
            <Image style={styles.ImgMenu} source={menu}/>
          </View>
        </TouchableOpacity>
        </View>

        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#eaed85'}}>
            <Text >Meu dinheiro no Mercado Pago</Text>
            <Text style={{fontSize:25}}>R$ 1000</Text>
            <Text>Todo seu dinheiro rendendo </Text>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                <View style={styles.opacity}>
                    <Text style={styles.textAR}>Adicionar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opacity}>
                <View>
                    <Text style={styles.textAR} >Retirar</Text>
                </View>
            </TouchableOpacity>
            </View>

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
    backgroundColor:'#eaed85',
  paddingBottom:15
},
textAR:{
    color:'#769de3'
},opacity:{marginRight:30,marginTop:30}
})