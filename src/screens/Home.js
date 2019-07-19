import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';
import menu from '../imgs/icons/menu.png';
import pesquisa from '../imgs/icons/pesquisa.png';
import adds from '../imgs/adds.png'
import qr from '../imgs/icons/qr.png'
import desconto from '../imgs/icons/desconto.png'
import carro from '../imgs/icons/carro.png'
import relogio from '../imgs/icons/relogio.png'
import roupa from '../imgs/icons/roupa.png'

import produtocarro from '../imgs/carro.png'
import tv from '../imgs/tv.jpg'
import relogio1 from '../imgs/relogio.jpg'
import bike from '../imgs/bike.jpg'
import moto from '../imgs/moto.jpg'
import smart from '../imgs/smart.jpg'
import notebook from '../imgs/notebook.jpg'
import pc from '../imgs/pc.jpg'






export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    static navigationOptions = {
      drawerLabel:'Página Inicial',
      drawerIcon:() => (
        <Image source={require('../imgs/icons/pesquisa.png')} style={styles.icon} />
      )
    }
  render() {
    return (
      <View style={styles.principal}>
        <ScrollView>
        <View style={styles.viewInput}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}  >
          <View style = {{padding:15,flexDirection:'row'}}>
            <Image style={styles.ImgMenu} source={menu}/>
            <Text style = {styles.txtConta}>Mercado Livre</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('pesquisar')}>
          <Image source={pesquisa} style={styles.iconPesquisar}/>
          </TouchableOpacity>

        </View>


        <View>
          <Image source={adds}  style={{width:420,height:200}}/>
        </View>



        <View style={{backgroundColor:'#DCDCDC'}}>
        <ScrollView horizontal={true}>
          
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('')}>
          <View style={styles.iconInput}>
            <Image source={qr} style={styles.iconMenu}/>
            <Text>Pagar com QR</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('')}>
          <View style={styles.iconInput}>
            <Image source={desconto} style={styles.iconMenu}/>
            <Text>Descontos </Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('')}>
          <View style={styles.iconInput}>
            <Image source={carro} style={styles.iconMenu}/>
            <Text>Carros, Motos</Text>
          </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=> this.props.navigation.navigate('')}>
          <View style={styles.iconInput}>
            <Image source={relogio} style={styles.iconMenu}/>
            <Text>O seu histórico</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('')}>
          <View style={styles.iconInput}>
            <Image source={roupa} style={styles.iconMenu}/>
            <Text>Roupas</Text>
          </View>
          </TouchableOpacity>
          
          </ScrollView>
        </View>


        <View style={styles.viewTouch}>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.touchaProdutos}>
            <Image  style={styles.produtos} resizeMode="contain" source={produtocarro}/>
            <Text style={{fontSize:15}}>R$ 43.000</Text>
            <Text style={{fontSize:13}}>HB20 2018</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchaProdutos}>
            <Image  style={styles.produtos} resizeMode="contain" source={moto}/>
            <Text style={{fontSize:15}}>R$ 20.000</Text>
            <Text style={{fontSize:13}}>Suzuki Gsx-s 1000Fa</Text>
          </TouchableOpacity>
          </View>


          <View style={{flexDirection:'row',justifyContent:'space-around'}}>  
          <TouchableOpacity style={styles.touchaProdutos}>
            <Image  style={styles.produtos} resizeMode="contain" source={tv}/>
            <Text style={{fontSize:15}}>R$ 1400</Text>
            <Text style={{fontSize:13}}>Tv 42P</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchaProdutos}>
            <Image  style={styles.produtos} resizeMode="contain" source={smart}/>
            <Text style={{fontSize:15}}>R$ 800</Text>
            <Text style={{fontSize:13}}>SmartPhone Samsung J6</Text>
          </TouchableOpacity>
          </View>


          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.touchaProdutos}>
            <Image  style={styles.produtos} resizeMode="contain" source={relogio1}/>
            <Text style={{fontSize:15}}>R$ 700</Text>
            <Text style={{fontSize:13}}>Relógio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchaProdutos}>
            <Image  style={styles.produtos} resizeMode="contain" source={bike}/>
            <Text style={{fontSize:15}}>R$ 1100</Text>
            <Text style={{fontSize:13}}>Bike</Text>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.touchaProdutos}>
            <Image  style={styles.produtos} resizeMode="contain" source={notebook}/>
            <Text style={{fontSize:15}}>R$ 1550</Text>
            <Text style={{fontSize:13}}>Notebook Samsung</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchaProdutos}>
            <Image  style={styles.produtos} resizeMode="contain" source={pc}/>
            <Text style={{fontSize:15}}>R$ 2350</Text>
            <Text style={{fontSize:13}}>Pc Gamer</Text>
          </TouchableOpacity>
          </View>


          
          
        </View>
        


        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal:{
    flex:1,
    backgroundColor:'#fff159'
  },
  viewInput:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  iconPesquisar:{
    padding:10,
    margin: 5,
    height: 25,
    width: 25,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  icon:{
    height:30,
    width:30,
  },
  ImgMenu:{
    height:25,
    width:25,
  },
  txtConta:{
    marginLeft:30,
    fontSize:15
},
  iconMenu:{
    width:65,
    height:65,
},
  iconInput:{
    margin:15,
    alignItems:'center'
},
  touchaProdutos:{
    backgroundColor:'white',
    marginLeft:10,
    marginRight:10,
    borderRadius:2,
    borderColor:'#D3D3D3',
    borderWidth:3
},
  produtos:{
    width:190,
    height:150,
    
},
  viewTouch:{
    backgroundColor:'#DCDCDC',
    flex:1,
    
}
  

})