import React from 'react';
import {View,Text, Alert} from 'react-native';

import {observable,action,computed,makeObservable, autorun,reaction,when} from "mobx";
class SecondStore{

     @observable name="dilan söz";

     constructor(){
         makeObservable(this);

     }
     @action getName(){
         return this.name;
     }

    @action setName(name){
        this.name=name;

    }
 }
 export default new SecondStore();
