import React from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';

import MainStore from './MainStore';
import { observer } from 'mobx-react';
@observer
export default class MainObser extends React.Component{
    render(){
        return(
        <View>
            <Text style={{fontSize:20,textAlign:"center"}}>{MainStore.getName()}</Text>
            <TouchableOpacity onPress={()=>MainStore.setName("Cdkfmng")}>
                <Text>Press Here</Text>
            </TouchableOpacity>

        </View>)
    }
}