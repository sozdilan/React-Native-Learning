import React from 'react';
import {View,Text, Alert,TouchableOpacity} from 'react-native';


export default class Drawer extends React.Component{
    render(){
        return(
            <View>
                <Text>Drawer Navigator Content</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail',{
                    id:8,
                    name:'dilan'
                })}> 
                   <Text>Go</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
