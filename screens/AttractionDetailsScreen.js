// AttractionDetailsScreen.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MapView, { Marker } from 'react-native-maps';
import { View, Text,StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, ScrollView,Linking } from 'react-native';

const AttractionDetailsScreen = ({ route }) => {
  const { title, description, image,location,phoneNumber } = route.params;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    // Add review to the reviews array
    setReviews([...reviews, { rating, review }]);
    // Optionally, you can send this data to a backend for storage
    // Clear the input fields
    setRating(0);
    setReview('');
  };

  const handleWhatsAppPress = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;

    Linking.openURL(whatsappURL).catch((err) =>
      console.error('Error opening WhatsApp link', err)
    );
  };

  return (
    <ScrollView>
    <View style={styles.container}>
    <Image source={image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} title={title} />
    </MapView>
    {/* <Text style={styles.sectionTitle}>User Reviews</Text>
    {reviews.map((userReview, index) => (
      <View key={index} style={styles.reviewContainer}>
        <Text style={styles.reviewText}>{`Rating: ${userReview.rating}`}</Text>
        <Text style={styles.reviewText}>{userReview.review}</Text>
      </View>
    ))}
   
    <Text style={styles.sectionTitle}>Leave a Review</Text>
    <View style={styles.reviewInputContainer}>
      <TextInput
        placeholder="Your Rating (1-5)"
        keyboardType="numeric"
        style={styles.ratingInput}
        value={rating.toString()}
        onChangeText={(text) => setRating(parseInt(text, 10))}
      />
      <TextInput
        placeholder="Your Review"
        multiline
        style={styles.reviewInput}
        value={review}
        onChangeText={(text) => setReview(text)}
      />
      <Button title="Submit Review" onPress={handleReviewSubmit} />
    </View> */}

    <TouchableOpacity onPress={handleWhatsAppPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Get Tour Guid</Text>
      </View>
    </TouchableOpacity>

  </View>
  </ScrollView>
  );
};

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
    description: {
      fontSize: 16,
      marginBottom: 16,
    },
    map: {
      height: 200,
      marginVertical: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 16,
    },
    reviewContainer: {
      marginBottom: 8,
    },
    reviewText: {
      fontSize: 16,
    },
    reviewInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingInput: {
      flex: 1,
      padding: 8,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      marginRight: 8,
    },
    button: {
      backgroundColor: "#25D366",
      padding: 16,
      borderRadius: 8,
      margin: 8,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      textAlign: "center",
    },
  });

export default AttractionDetailsScreen;
