import React from 'react';
import {Text,View,ScrollView,StyleSheet,Image,TextInput,TouchableOpacity, Touchable, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Formik} from 'formik';
import * as Yup from 'yup';


export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            hidepassword:true

        }
    }
    _handleSubmit=()=>{
        Alert.alert('Form Post edildi')

    }
    render(){
        return(
            <ScrollView style={style.body}>
                <View style={style.header}>
                    <Text style={style.title}>Sign In</Text>
                </View>
                <View style={style.logo_area}>
                    <Image style={{width:80,height:116}} resizeMode={"contain"} source={require('../../../../assets/images/home.png')}></Image>
                </View>

                <View style={style.board}>

                    <Formik 
                    initialValues={{
                        username:'',
                        password:''
                    }} 
                    onSubmit={this._handleSubmit}
                    validationSchema={Yup.object().shape({
                        username:Yup.string().required("Username Gereklidir."),
                        password:Yup.string().required("Şifre Gereklidir")
                    })}
                    >
                    {({
                        values,
                        handleSubmit,
                        handleChange,
                        errors
                    })=>(
                    <View>
                    <View style={style.item}>
                        <TextInput
                        value={values.username}
                        onChangeText={handleChange('username')}
                        style={style.input} 
                        placeholder={"Username"}/>
                        {(errors.username)&& <Text style={style.alert}>{errors.username}</Text>}
                    </View>
                    <View style={style.item}>
                        <TextInput
                        value={values.password}
                        onChangeText={handleChange('password')}
                        style={style.input} 
                        //şifrelenmiş metin halinde gösterir
                        secureTextEntry={this.state.hidepassword}
                        placeholder={"Password"}
                        //şifrenin açık halini gösterme işlemini;
                        />
                        <TouchableOpacity onPressOut={()=>this.setState({hidepassword:!this.state.hidepassword})} style={{position:'absolute',right:10,top:15}}>
                            <Icon name={(this.state.hidepassword)?"eye-slash":"eye"} size={18}/>
                        </TouchableOpacity>
                        {(errors.password) &&<Text style={style.alert}>{errors.password}</Text>}
                    </View>

                    <View style={[style.item,{flexDirection:'row',justifyContent:'flex-end'}]}>
                      <Text>Forgot your password?</Text>
                    </View>
                    <View style={style.item}>
                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                            <Text style={style.button_text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    </View>)}
                    </Formik>
                    <View style={[style.item],{marginbottom:10,justifyContent:'center',alignItems:'center'}}>
                        <Text>Or</Text>
                    </View>
                    <View style={style.social}>
                        <TouchableOpacity style={style.social_item}>
                            <Icon name={"facebook"} color={"#3b5999"} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.social_item}>
                            <Icon name={"twitter"} color={"#55acee"} size={20}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.social_item}> 
                        <Icon name={"linkedin"} color={"#0077B5"} size={20}/>
                        </TouchableOpacity>

                    </View>


                    <View style={style.item}>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                            <Text>Don't have an account?<Text style={{color:'#FFB19D'}}> Sing Up</Text> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const style=StyleSheet.create({
    body:{backgroundColor:"white",flex:1},
    header:{padding:15,justifyContent:'center',alignItems:'center'},
    title:{fontWeight:'500',fontSize:20,color:'#525464'},
    logo_area:{alignItems:'center',marginTop:40},
    board:{marginTop:30,paddingHorizontal:20},
    item:{marginBottom:15},
    input:{borderWidth:1,borderColor:'#B0B0C3',backgroundColor:'#F7F7F7',paddingVertical:10,paddingHorizontal:30,height:50},
    button:{
        backgroundColor:'#20C3AF',
        paddingVertical:20,
        justifyContent:'center',
        alignItems:'center'
    },
    button_text:{textAlign:'center',color:'white',fontSize:17,fontWeight:'700'},
    social:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    social_item:{
        padding:10,
        width:100,
        height:60,
        borderWidth:1,
        borderColor:'#E2E2E0',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    alert:{color:'red',fontSize:15}

});