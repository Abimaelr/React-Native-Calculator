import { NativeAppEventEmitter, SliderComponent } from "react-native"
import React, {useState} from 'react'
import {Button,View,Text} from 'react-native'



export default () => 
{


  const [a,setA] = useState(0)
  function executar(){
      setA(a+1)
  }
  console.warn(a);

return(
    <View>
        <Text>{a}</Text>
        <Button
            title="Hello World!"
            onPress={executar}
        />

    </View>




)
}