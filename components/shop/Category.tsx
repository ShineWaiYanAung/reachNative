// Category.tsx
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Category({ id, name, image }: { id: String; name: string; image: any }) {
  return (
    <View>
      <Image 
        style={style.image}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text>{name}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: 100, // Set an appropriate width for the image
    height: 100, // Set an appropriate height for the image
  },
});
