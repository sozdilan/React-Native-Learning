import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';


class DrawerNavigation extends React.Component{
    render(){
        return(
            <View>
                <Text>Drawer Navigator Page1</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.openDrawer("Detail")}>
                    <Text>
                        TIKLA
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
class DrawerNavigator2 extends React.Component{
    render(){
        return(
            <View>
                <Text>Drawer Navigator Page2</Text>
            </View>
        )
    }
}
class Drawer extends React.Component{
    render(){
        return(
            <View>
                <Text>Drawer Navigator Content</Text>
            </View>
        )
    }
}

const HomeStack=createStackNavigator({
    Home:{screen:DrawerNavigation}
})
const DetailStack=createStackNavigator({
    Detail:{screen:DrawerNavigator2}
})


const AppBottomNavigator=createBottomTabNavigator({
    Home:HomeStack,
    Detail:DetailStack
})

const AppNavigator=createDrawerNavigator({
    Home:AppBottomNavigator
},{
    contentComponent:Drawer
});

export default createAppContainer(AppNavigator);