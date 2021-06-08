import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from './screens/Home';
import Detail from './screens/Detail';
import Drawer from './screens/Components/Drawer';

const HomeStack=createStackNavigator({
    Home:{screen:Home}
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'red'
        }
    
    }
})
const DetailStack=createStackNavigator({
    Detail:{screen:Detail}
})

const AppBottomNavigator=createBottomTabNavigator({
    Home:{
        screen:HomeStack,
        navigationOptions:{
            title:'Ana Sayfa'
        }
    },
    Detail:{
        screen:DetailStack,
        navigationOptions:{
            title:'Detay'
        }
    }
},{
    tabBarOptions:{
        activeTintColor:'#ddd',
        inactiveTintColor:'red'
    }
})

const AppNavigator=createDrawerNavigator({
    Home:AppBottomNavigator
},{
    contentComponent:Drawer
});

export default createAppContainer(AppNavigator);