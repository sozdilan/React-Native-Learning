import { assertTSExternalModuleReference } from '@babel/types';
import React from 'react';
import {View,Text,Platform, Alert} from 'react-native';
import {requestNotifications,checkNotifications,check,checkMultiple,PERMISSIONS,request,requestMultiple, RESULTS,openSettings} from 'react-native-permissions';

export default class Main extends React.Component{
    componentDidMount(){
    
        //CHECKNOTIFICATIONS

        requestNotifications(['alert','sound']).then(({status,settings})=>{
            console.log(status,settings);
        })

        checkNotifications().then(({status,settings})=>{
            console.log(status,settings)
        })


        //OPENSETTİNGS
        //-------------s
        /*const CameraPermissions=Platform.select({
            android:PERMISSIONS.ANDROID.CAMERA,
            ios:PERMISSIONS.IOS.CAMERA
        });
        check(Platform.select({
            android:PERMISSIONS.ANDROID.CAMERA,
            ios:PERMISSIONS.IOS.CAMERA
        }))
        .then((res)=>{
            if(res=='denied'){
                openSettings().catch((e)=>Alert.alert(e));
            }
        }).catch((e)=>console.log(e));

        request(CameraPermissions).then((result)=>{
            Alert.alert(result);
      })*/

        //REQUEST
        //-------------------
        /*const CameraPermissions=Platform.select({
            android:PERMISSIONS.ANDROID.CAMERA,
            //ios:PERMISSIONS.IOS.CAMERA
        });
        request(CameraPermissions).then((result)=>{
              Alert.alert(result);
        })*/
        

        /*const CameraPermissions=Platform.select({
            android:PERMISSIONS.ANDROID.CAMERA,
            //ios:PERMISSIONS.IOS.CAMERA
        });
        const MicrophonePermissions=Platform.select({
            android:PERMISSIONS.ANDROID.RECORD_AUDIO,
            //ios:PERMISSIONS.IOS.MICROPHONE
        })
        requestMultiple([CameraPermissions,MicrophonePermissions]).then((status)=>{
            Alert.alert("Kamera",status[MicrophonePermissions])
            Alert.alert("Micophone",status[MicrophonePermissions])
        })*/

        //CHECK
        
        /*const CameraPermissions=Platform.select({
            android:PERMISSIONS.ANDROID.CAMERA,
            ios:PERMISSIONS.IOS.CAMERA
        });
        const MicrophonePermissions=Platform.select({
            android:PERMISSIONS.ANDROID.RECORD_AUDIO,
            ios:PERMISSIONS.IOS.MICROPHONE
        })
        checkMultiple([CameraPermissions,MicrophonePermissions])
        .then((status)=>{
            console.log("Camera",status[CameraPermissions]);
            console.log("Microphone",status[MicrophonePermissions]);
        })*/


        /*check(Platform.select({
            android:PERMISSIONS.ANDROID.CAMERA,
            ios:PERMISSIONS.IOS.CAMERA
        }))
        .then((res)=>{
            console.log(res);
        }).catch((e)=>console.log(e))*/



    }
    render(){
        return(
            <View>
                <Text>İzinler</Text>
            </View>
        )
    }
}