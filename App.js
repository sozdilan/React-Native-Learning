/**
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   Alert

 } from 'react-native';



 //import StackNavigator from './Navigation/StackNavigator';
 //import BottomNavigator from './Navigation/BottomTabNavigation'
 //import DrawerNavigation from './Navigation/Drawer'

//import Route from './src/Route'
import Route from './Formik&Yup/src/Route'


import {  Formik } from 'formik';
import * as Yup from 'yup'
import AsyncStorage from "@react-native-async-storage/async-storage";


import MainStore from "./MobX/MainStore";
import MainObser from './MobX';


export default class App extends React.Component{

  componentDidMount=async()=>{

    //AsyncStorage.setItem('application_name','MtBB');
    //Veri Alma
    
    /*AsyncStorage.getItem('application_name').then((res)=>{
      console.log(res);
    })*/

    //await kullanarak veri alma işlemi
    /*const application_name= await AsyncStorage.getItem('application_name');
    console.log(application_name);*/

     /*AsyncStorage.setItem('application_array',JSON.stringify(['a','b','c']));
     const application_array=await AsyncStorage.getItem('application_array');
     console.log(JSON.parse(application_array));*/

     //MOBX
     /*console.log(MainStore.name)
     console.log(MainStore.getName())*/

  }
  render(){
    return(
      //<StackNavigator/>
      //<BottomNavigator></BottomNavigator>
      //<DrawerNavigation/>

      //<Route/>
      //<View><Text>ANA SAYFA</Text></View>

      //<Route/>
      //<View><Text>Ana Sayfa </Text></View>
      <MainObser/>
      

   
    )
  }
}

