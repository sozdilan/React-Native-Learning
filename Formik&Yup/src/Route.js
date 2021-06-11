import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Login from './screens/Login';
import Register from './screens/Register';


const AuthenticateStack=createStackNavigator({
    Home:{screen:Login,
        navigationOptions:{
            headerShown:false
        }
    },
    Detail:{screen:Register,
    navigationOptions:{
        headerShown:false
    }
}
});

export default createAppContainer(AuthenticateStack);