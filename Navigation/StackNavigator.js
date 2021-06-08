import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';

class StackNavigator extends React.Component{
    render(){
        return(
            <View>
                <Text>StackNavigator Page 1</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text>TIKLA</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

class StackNavigator2 extends React.Component{
    render(){
        return(
            <View>
                <Text>StackNavigator Page 2</Text>
            </View>
        )
    }
}

const AppNavigator =createStackNavigator({
    Home:{
        screen:StackNavigator
    },
    Detail:{
        screen:StackNavigator2
    }
});
export default createAppContainer(AppNavigator)