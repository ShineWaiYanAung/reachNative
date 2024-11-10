import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");

import Cart2 from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import Category from "@/components/shop/Category";
import { FlashList } from "@shopify/flash-list";
import { categories } from "@/Data";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView style={{ minHeight: height, backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/n.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Pressable>
          <Cart2 />
        </Pressable>
      </View>
      <Image
        style={styles.banner}
        source={require("@/assets/images/banner6.png")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View style={{ marginTop: 20 }}>
        <Title title="Shop by Category" action="See All" />
        <FlatList
        horizontal
          data={categories}
          renderItem={({ item }) => <Category {...item}/>}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginLeft: 20,
    marginTop: 30,
  },
  banner: {
    width: width,
    aspectRatio: 20 / 9,
  },
});
