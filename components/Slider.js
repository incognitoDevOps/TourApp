import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import image1 from '../assets/hotel1.jpeg';
import image2 from "../assets/kit-mikayi-poster.jpg";
import image3 from "../assets/hotel2.jpeg";


export default function Slider() {

  const images = [image1, image2,image3];

  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}
    autoplayTimeout={10} key={`swiper-${Math.random()}`}>
      {images.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={item} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
