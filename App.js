/**
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   View,

 } from 'react-native';


 import StackNavigator from './Navigation/StackNavigator';
 import BottomNavigator from './Navigation/BottomTabNavigation'
 import DrawerNavigation from './Navigation/Drawer'

import Route from './src/Route'

export default class App extends React.Component{
  render(){
    return(
      //<StackNavigator/>
      //<BottomNavigator></BottomNavigator>
      //<DrawerNavigation/>
      //<Route/>
      <View><Text>ANA SAYFA</Text></View>

    )
  }
}