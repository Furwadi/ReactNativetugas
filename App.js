import React,{Component} from 'react'
import { View } from 'react-native'
import { StackNavigator } from "react-navigation"; 

import ListProduct from './src/pages/listproducts'
import Main from './src/pages/Main'



export default class App extends Component {
  render() {
    return(
      <Main />
    )
  }
}