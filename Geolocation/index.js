import Geolocation from "@react-native-community/geolocation";
import React from "react";
import { View,Text,SafeAreaView, TouchableOpacity} from "react-native";

export default class GeolocationClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude:'',
            longitude:''
        }
    }
    componentDidMount(){
        //Geolocation.requestAuthorization();
        /*Geolocation.getCurrentPosition(
            position=>{
                const{coords:{latitude,longitude}}=position;
                this.setState({latitude,longitude})
            
            },error=>{
                console.log(error);
            }
        )*/

        /*Geolocation.watchPosition(
            position=>{
                //console.log(position);
                const{coords:{latitude,longitude}}=position;
                this.setState({latitude,longitude});
            
            },error=>{
                console.log(error);

            }
        )*/

        this.wathId=Geolocation.watchPosition(
            position=>{
                const{coords:{latitude,longitude}}=position;
                this.setState({latitude,longitude})

            },error=>{
                console.log(error);
            }
        );
        console.log(this.wathId);

    }
    _stop=()=>{
        Geolocation.stopObserving();
    };
    componentWillUnmount=()=>{
        Geolocation.clearWatch(this.wathId)
    }
   
    render(){
        const{latitude,longitude}=this.state;
        return(
            <SafeAreaView>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text>Latitude:{latitude}</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text>Longitude:{longitude}</Text>
                </View>

                <View style={{justifyContent:'center',alignItems:'center'}}>
                   <TouchableOpacity onPress={this._stop}>
                       <Text>STOP</Text>
                   </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}