import React from 'react';
import {View,Text} from 'react-native';

import {observable,action} from "mobx";
class MainStore{

     @observable name="dilan söz";

     /*constructor(){
         makeObservable(this);


     }*/
     @action getName(){
         return this.name;
     }

    @action setName(name){
        this.name=name

    }
 }
 export default new MainStore();
