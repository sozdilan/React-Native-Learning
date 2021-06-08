import React from 'react';
import {View,Text, Alert} from 'react-native';

export default class Detail extends React.Component{
    componentDidMount(){
        Alert.alert(this.props.navigation.getParam("name"));
    }
    render(){
        return(
            <View>
                <Text>Detail</Text>
            </View>
        )
    }
}