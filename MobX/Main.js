import React from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';

import MainStore from './MainStore';

import { observer } from 'mobx-react';
@observer
export default class MainObser extends React.Component{
    render(){
        return(
        <View>
            <Text style={{fontSize:20,textAlign:"center"}}>{MainStore.name}</Text>

            <TouchableOpacity onPress={()=>MainStore.setName("Ali")}>
                <Text style={{fontSize:20,textAlign:"center"}}>Press Here</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>MainStore.setName("Mehmet")}>
                <Text style={{fontSize:20,textAlign:"center"}}>Press Here</Text>
            </TouchableOpacity>

            <Text style={{fontSize:20,textAlign:"center"}}>{MainStore.fullName}</Text>


        </View>)
    }
}