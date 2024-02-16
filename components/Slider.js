import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import image1 from '../assets/hotel1.jpeg';
import image2 from "../assets/kit-mikayi-poster.jpg";
import image3 from "../assets/hotel2.jpeg";


export default function Slider() {

//   const images = [image1, image2,image3];
  const images = [
    { image: image1, text: 'Welcome to your app' },
    { image: image2, text: 'Welcome to your app' },
    { image: image3, text: 'Welcome to your app' },
  ];
  const timer = 5000
  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}
    autoplayTimeout={10} key={`swiper-${Math.random()}`}>
      {images.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.overlay}>
              <Text style={styles.text}>{item.text}</Text>
              <TextInput style={styles.TextInput} placeholder="Search"/>
            </View>
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 200,
      },
      slideContainer: {
        flex: 1,
      },
      slide: {
        flex: 1,
        position: 'relatfive',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        
      },
      text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft:25,
        paddingTop:50,
      },
      TextInput:{
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        margin:25,
        width:'60%',
        color:'white',
        padding:5,
        fontSize:14,
      },
    

});
