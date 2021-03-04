import React from 'react'
import {Text, StyleSheet, View} from 'react-native'


export default (props) => {

    return(
        <View style={style.display}>
            <Text style={style.text} numberOfLines={1}>{props.value}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor:'#031726',
        alignItems:'flex-end',
    },
    text:{
        fontSize: 100,
        color:'#FFF',
        fontWeight:'100',
    }


})