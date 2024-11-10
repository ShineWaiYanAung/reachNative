import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

// export type titleProps ={
//   title: String;
//   action:String;
// }
// const Title : React.FC<titlePropso>=({title, action})=>{
//   <View style={style.container}>
// <Pressable>
//   <Text></Text>
// </Pressable>

//   </View>
// }
export default function Title({title,action}:{title:String ,action :String}) {
  return (
    <View style={style.container}>
      <Text style ={style.cateogry}>{title}</Text>
      <Pressable>
        <Text style={style.action}>{action}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  cateogry :{

    fontSize :15,
    fontWeight: 'bold',
  },
  action:{
    color:"grey"
  }
});
