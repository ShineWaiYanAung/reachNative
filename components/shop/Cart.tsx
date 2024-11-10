import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Cart() {
  return (
    <View style={{flexDirection:'row'}}>
        <Ionicons name="cart" size={24} color="black" />
      <View style={sytle.container}>

      <Text style={sytle.badge}>13</Text>
      </View>
      
    </View>
  )
}
const sytle = StyleSheet.create({
    badge:{
        fontSize:11,
        fontWeight: '200',
        
    },
    container:{
        backgroundColor :'red',
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius : 10,
        marginLeft:-10,
        marginTop:-10,
     
    }
})