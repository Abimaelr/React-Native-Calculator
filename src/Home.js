import { NativeAppEventEmitter, SliderComponent } from "react-native"
import React, {useState} from 'react'
import {Button,View,StyleSheet} from 'react-native'
import Botao from './Components/button'


export default () => 
{

return(
    <View style={style.view}>

        

        <Botao value={'C'}/>
        <Botao value={'+/-'}/>
        <Botao value={'%'}/>
        <Botao value={'/'}/>

        <Botao value={'x'}/>
        <Botao value={9}/>
        <Botao value={8}/>
        <Botao value={7}/>  

        <Botao value={'-'}/>
        <Botao value={6}/>
        <Botao value={5}/>
        <Botao value={4}/>  

        <Botao value={'+'}/>
        <Botao value={3}/>
        <Botao value={2}/>
        <Botao value={1}/> 

        <Botao value={'='}/>
        <Botao value={'.'}/>
        <Botao value={0}/>
 
    </View>
)
}

const style = StyleSheet.create({
    view:{
        flexDirection:'row-reverse',
        alignContent:'flex-end',
        flexWrap:'wrap',
    }

})
