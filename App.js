// In App.js in a new project
import React from "react";
import { View, Text ,Image,StyleSheet} from "react-native";
import { createDrawerNavigator, createAppContainer,createStackNavigator} from "react-navigation";
import Home from './src/screens/Home';
import MinhaConta from './src/screens/MinhaConta';
import aviso from './src/screens/Avisos';
import tela from './src/screens/StackNavigator'
import Perguntas from './src/screens/Perguntas';
import compras from './src/screens/compras';
import pesquisar from './src/screens/pesquisar';

const AppNavigator = createStackNavigator({
  tela:{
    screen:tela
  },
  Perguntas:{
    screen:Perguntas
  },
  compras:{
    screen:compras
  },
  pesquisar:{
    screen:pesquisar
  }

},{headerMode:'none'});

export default createAppContainer(AppNavigator);