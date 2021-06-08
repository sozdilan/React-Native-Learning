import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class Home extends React.Component{

    static navigationOptions=({navigation})=>{
        return{
            title:"Ana Sayfa",
            headerLeft:<Text>GERİ</Text>,
            headerRight:<Text>EKLE</Text>
        }
    };

    render(){
        return(
            <View>
                <Text>Home</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.openDrawer('Drawer')}>
                    <Text>TIKLA</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}