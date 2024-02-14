import React from 'react'
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Image,
  } from "react-native";
import { Route } from 'react-router-dom';

export default function TrendingScreen({ route }) {
    const {image,county,country,description} = route.params;
  return (
    <View>
         <Image source={image}/>
    </View>
  )
}
