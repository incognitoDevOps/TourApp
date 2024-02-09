import React from 'react'
import { View, Text,StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, ScrollView,Linking } from 'react-native';

export default function NewsDetails({ route }) {
  const { title, description,description2,description3,describe, image,image2,image3 } = route.params;

  return (
    <View>
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Image source={image} style={styles.image} />
    <Text style={styles.describe}>{describe}</Text>
    <Text style={styles.description}>{description}</Text>
    <Image source={image2} style={styles.image} />
    <Text style={styles.description}>{description2}</Text>
    <Image source={image3} style={styles.image} />
    <Text style={styles.description}>{description3}</Text>
  </View>
  </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      padding: 16,
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      borderRadius: 8,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 16,
    },
    describe: {
      fontSize: 16,
      marginBottom: 16,
      fontWeight: 'bold',
    },
   
  });
