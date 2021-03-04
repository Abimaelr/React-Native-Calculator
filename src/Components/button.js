import React from 'react'
import {TouchableHighlight, Text, StyleSheet, Dimensions, ProgressViewIOSComponent} from 'react-native'


export default (props) => {

    const styleButton = [style.button]
    if(props.zero)
    {
        styleButton.push(style.zero)
    } 
    if(props.func) {
        styleButton.push(style.func)
    }
    if(props.clear) {
        styleButton.push(style.clear)
    }


    return(
        <TouchableHighlight style={styleButton} onPress={() => props.onClick(props.value)}>
            <Text style={style.pad}>{props.value}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        width: Dimensions.get('window').width/4,
        height: Dimensions.get('window').width/4,
    },
    pad:{
        fontSize: 50,
    },
    zero:{
        width: Dimensions.get('window').width/2
    },
    func:{
        backgroundColor:'#fcb206'
    },
    clear:{
        width: (Dimensions.get('window').width/4)*3,
        backgroundColor:'#D04'
    }



})