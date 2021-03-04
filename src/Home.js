import React, {useState, Component} from 'react'
import {View,SafeAreaView,StyleSheet} from 'react-native'
import Botao from './Components/button'
import Display from './Components/display'



export default class App extends Component 
    {
        state = {
        displayValue: '3',
    }

    clearDisplay = () =>{
        this.setState({displayValue: '0'})
    }

    alerta = () =>{

    }
    render(){
        return(
            <SafeAreaView style = {style.container} >


                <Display value = {this.state.displayValue} />

                <View style={style.buttonView}>
                    <Botao func value={'C'}  onClick={() => this.clearDisplay()}  />
                    <Botao func value={'+/-'}   />
                    <Botao func value={'%'}     />
                    <Botao func value={'/'}     />

                    <Botao func value={'x'}     />
                    <Botao value={9}    />
                    <Botao value={8}    />
                    <Botao value={7}    />  

                    <Botao func value={'-'}     />
                    <Botao value={6}    />
                    <Botao value={5}    />
                    <Botao value={4}    />  

                    <Botao func value={'+'}     />
                    <Botao value={3}        />
                    <Botao value={2}        />
                    <Botao value={1}        /> 

                    <Botao func value={'='}/>
                    <Botao value={'.'}/>
                    <Botao zero value={0}/>
                </View>
        
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    buttonView:{
        flexDirection:'row-reverse',
        alignContent:'flex-end',
        flexWrap:'wrap',
    }

})
