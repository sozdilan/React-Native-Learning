import React from 'react';
import {View,Text, Alert} from 'react-native';

import {observable,action,computed,makeObservable, autorun,reaction,when} from "mobx";
class MainStore{

     @observable name="dilan";
     @observable surname='Söz';

     constructor(){
         makeObservable(this);

         /*autorun(()=>{
             Alert.alert(this.name)
         })*/
         
         /*reaction(()=>this.name,name=> {
             if(name=="Ali"){
                 Alert.alert("İsim Ali")
             }
         })*/

        /* when(()=>this.name=='Ali',()=>{Alert.alert("Name is ali")});*/

     }

     /*
     @action getName(){
         return this.name;
     }

    @action setName(name){
        this.name=name;
    }
    @computed get fullName(){
        return `${this.name} ${this.surname}`
    }*/
 }
 export default new MainStore();
