import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';


class BottomNavigator extends React.Component{
    render(){
        return(
            <View>
                <Text>Bottom Navigator Page1</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Detail")}>
                    <Text>
                        TIKLA
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
class BottomNavigator2 extends React.Component{
    render(){
        return(
            <View>
                <Text>Bottom Navigator Page2</Text>
            </View>
        )
    }
}

const HomeStack=createStackNavigator({
    Home:{screen:BottomNavigator}
})
const DetailStack=createStackNavigator({
    Detail:{screen:BottomNavigator2}
})

const AppNavigator=createBottomTabNavigator({
    Home:HomeStack,
    Detail:DetailStack
});

export default createAppContainer(AppNavigator);