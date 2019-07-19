// In App.js in a new project
import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator, createAppContainer,createStackNavigator } from "react-navigation";
import Home from './Home';
import MinhaConta from './MinhaConta';
import MinhaCarteira from './MinhaCarteira';
import aviso from './Avisos';
import compras from './compras';

const AppNavigator = createDrawerNavigator({
  MinhaCarteira:{
    screen:MinhaCarteira
  },
  Home: {
    screen: Home
  },
  MinhaConta: {
    screen: MinhaConta
  },
  compras: {
    screen: compras
  },
  aviso: {
    screen: aviso
  },

},{initialRouteName:'Home'});

 
export default createAppContainer(AppNavigator);