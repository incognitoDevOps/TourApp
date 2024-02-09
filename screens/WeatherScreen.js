import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WeatherScreen = () => {
  const [location, setLocation] = useState('Kisumu'); // Default location
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const apiKey = '1952d6e552174f11b9e200321240902';
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weather Information</Text>

      {weatherData && (
        <>
          <Text>Country: {weatherData.location.country}</Text>
          <Text>County: {weatherData.location.region}</Text>
          <Text>Wind Speed: {weatherData.current.wind_kph} kph</Text>
          <Text>Humidity: {weatherData.current.humidity}%</Text>
          <Text>Cloudy: {weatherData.current.cloud}%</Text>
          <Text>Rainy: {weatherData.current.precip_mm > 0 ? 'Yes' : 'No'}</Text>
          <Text>Sunny: {weatherData.current.is_day ? 'Yes' : 'No'}</Text>
          <Text>Feels Like: {weatherData.current.feelslike_c} °C</Text>
        </>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <Button title="Get Weather" onPress={fetchWeatherData} />

      {/* Additional styling */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
});

export default WeatherScreen;
