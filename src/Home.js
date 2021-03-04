import React, {useState, Component} from 'react'
import {View,SafeAreaView,StyleSheet} from 'react-native'
import Botao from './Components/button'
import Display from './Components/display'

const initialState = {
    displayValue: '0',
    digit: '',
    buffer: '0',
    infor: [0,0],
    mem: false,
    currentOp :'',
    nOp: false
    }

export default class App extends Component 
    {
       state =  {...initialState}
      

    clearDisplay = () =>{
   
        this.setState({
            displayValue: '0',
            digit: '',
            infor: [0,0],
            mem: false,
            currentOp :''
            })
        
    }
    addDigit = digit =>{

        if(digit == '0' && this.state.displayValue == '0')return
        if(digit == '.' && this.state.displayValue.includes('.'))return
        

        
        if(digit == '.' && this.state.displayValue){
            this.state.digit += '.'
        }
        else {
            this.state.digit += `${digit}`
           
        }
        this.setState({displayValue: this.state.digit})
    }
    equal = () => {
        if(!this.state.infor[0] && !this.state.infor[1]) return
        if(this.state.infor[0] && !this.state.infor[1]){
            let result = `${this.state.infor[0]}`
             this.setState({displayValue: result})
             this.setState({
                 digit: '',
                 infor: [0,0],
                 mem: false,
                 currentOp :''
                 })
        }
        this.state.infor[1] = this.state.digit
        let result = eval(`${this.state.infor[0]} ${this.state.currentOp} ${this.state.infor[1]}`)
        this.setState({displayValue: result})
        this.setState({
            digit: '',
            infor: [0,0],
            mem: false,
            currentOp :''
            })
    }
    setOperation = op =>{
        this.setState({currentOp: op})
        if(!this.state.mem ){
            this.state.infor[0] = this.state.digit
            this.state.digit = ''
            this.state.mem = true
        }
        else{
            this.state.infor[1] = this.state.digit
            //console.warn(`${this.state.infor[0]}  ${this.state.currentOp} ${this.state.infor[1]} `)
            if(!this.state.infor[1]) return
            let buffer = eval(`${this.state.infor[0]} ${this.state.currentOp} ${this.state.infor[1]}`)
            this.state.digit = `${buffer}`

            this.setState({displayValue: this.state.digit})
            //Salva o valor na variável Infor e depois limpa o this.state.digit para a nova operacao
            this.setState({currentOp: op,infor : [buffer, '']})  
            this.state.currentOp = '';  
            this.state.digit = '';   
        }

    }


    render(){
        return(
            <SafeAreaView style = {style.container} >


                <Display value = {this.state.displayValue} />

                <View style={style.buttonView}>
                   
                    <Botao func value={'/'}           onClick={this.setOperation}   />
                    <Botao func clear value={'C'}     onClick={() => this.clearDisplay()}  />

                    <Botao func value={'x'}     onClick={() => this.setOperation('*')}  />
                    <Botao value={9}            onClick={this.addDigit}/>
                    <Botao value={8}            onClick={this.addDigit}/>
                    <Botao value={7}            onClick={this.addDigit}/>  

                    <Botao func value={'-'}     onClick={this.setOperation}   />
                    <Botao value={6}            onClick={this.addDigit}/>
                    <Botao value={5}            onClick={this.addDigit} />
                    <Botao value={4}            onClick={this.addDigit}/>  

                    <Botao func value={'+'}     onClick={this.setOperation}    />
                    <Botao value={3}            onClick={this.addDigit}  />
                    <Botao value={2}            onClick={this.addDigit} />
                    <Botao value={1}            onClick={this.addDigit}  /> 

                    <Botao func value={'='}     onClick={() => this.equal()}/>
                    <Botao value={'.'}          onClick={this.addDigit}/>
                    <Botao zero value={0}       onClick={this.addDigit}/>
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
