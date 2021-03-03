import React from 'react'
import {TouchableHighlight, Text, StyleSheet, Dimensions, ProgressViewIOSComponent} from 'react-native'


export default (props) => {
    return(
        <TouchableHighlight style={style.button} onPress={props.onClick}>
            <Text style={style.pad}>{props.value}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#f6e4ae',
        width: Dimensions.get('window').width/4,
        height: Dimensions.get('window').width/4,
    },
    pad:{
        fontSize: 50,
    }



})