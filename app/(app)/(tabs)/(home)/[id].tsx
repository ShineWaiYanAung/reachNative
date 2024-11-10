import {View,Text} from 'react-native';
import React,{useEffect} from 'react';
import {  Link , useNavigation} from "expo-router";

export default function DetailScreen() {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Link href="index">Go Back</Link>
    </View>
  )
}