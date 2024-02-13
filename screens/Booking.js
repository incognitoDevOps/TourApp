// BookingScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Booking = ({ route }) => {
  const { name, image, price, location } = route.params;
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  const handleBookingSubmit = () => {
    // Send booking details to the admin dashboard or perform necessary actions
    console.log('Booking submitted:', {
      accommodationName: name,
      accommodationLocation: location,
      userName: nameInput,
      userEmail: emailInput,
      userPhone: phoneInput,
    });
    // You can implement the logic to send this data to your backend or admin dashboard
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.accommodationImage} />
      <Text>Name: {name}</Text>
      <Text>Price: {price}</Text>
      <Text>Location: {location}</Text>

      <Text style={styles.heading}>Booking Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={nameInput}
        onChangeText={setNameInput}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={emailInput}
        onChangeText={setEmailInput}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Phone Number"
        value={phoneInput}
        onChangeText={setPhoneInput}
        keyboardType="phone-pad"
      />

      <Button title="Book Now" onPress={handleBookingSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  accommodationImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default Booking;
