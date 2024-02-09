import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherScreen = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Nairobi'); // Default location
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const apiKey = '1952d6e552174f11b9e200321240902';
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
  
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError('Error fetching weather data');
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <ImageBackground
      source={require("../assets/weather.jpeg")} // Replace with your actual background image URL or use a local image
        style={styles.backgroundImage}
      >
          <ScrollView>

        <View style={styles.container}>
          <Text style={styles.heading}>Weather Information</Text>
  
          {loading && <Text style={styles.loadingText}>Loading...</Text>}
  
          {error && <Text style={styles.errorText}>{error}</Text>}
  
          {weatherData && (
            <View style={styles.weatherInfoContainer}>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Continent: </Text>
                <Text style={styles.weatherValue}>{weatherData.location.tz_id}</Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Longitude , Latitude: </Text>
                <Text style={styles.weatherValue}>{weatherData.location.lat} , {weatherData.location.lon}</Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Country:</Text>
                <Text style={styles.weatherValue}>{weatherData.location.country}</Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Name:</Text>
                <Text style={styles.weatherValue}>{weatherData.location.name}</Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Region:</Text>
                <Text style={styles.weatherValue}>
                {weatherData.location.region} 
                </Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Time:</Text>
                <Text style={styles.weatherValue}>
                  {weatherData.location.localtime} 
                </Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Temperature:</Text>
                <Text style={styles.weatherValue}>
                  {weatherData.current.temp_c} °C
                </Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Humidity:</Text>
                <Text style={styles.weatherValue}>
                {weatherData?.current?.humidity}%
                </Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Wind speed:</Text>
                <Text style={styles.weatherValue}>
                {weatherData?.current?.wind_kph} kph
                </Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Sunny:</Text>
                <Text style={styles.weatherValue}>
                {weatherData?.current?.is_day ? 'Yes' : 'No'}
                </Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Cloudy:</Text>
                <Text style={styles.weatherValue}>
                {weatherData?.current?.cloud}%
                </Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Rainy:</Text>
                <Text style={styles.weatherValue}>
                {weatherData?.current?.precip_mm > 0 ? 'Yes' : 'No'}
                </Text>
              </View>
              <View style={styles.weatherRow}>
                <Text style={styles.weatherLabel}>Visibility:</Text>
                <Text style={styles.weatherValue}>
                  {weatherData.current.vis_km} Km
                </Text>
              </View>
              {/* ... (other weather information rows) */}
              
            </View>
          )}
  
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={(text) => setLocation(text)}
            editable={!loading}
          />
          <Button title="Get Weather" onPress={fetchWeatherData} disabled={loading} />
        </View>
        </ScrollView>

      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
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
      color: '#fff',
    },
    loadingText: {
      fontSize: 18,
      marginBottom: 16,
      color: '#fff',
    },
    errorText: {
      fontSize: 18,
      marginBottom: 16,
      color: 'red',
    },
    weatherInfoContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      width: '100%',
    },
    weatherRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    weatherLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    weatherValue: {
      fontSize: 16,
    },
    input: {
      height: 40,
      borderColor: '#fff',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
      width: '100%',
      color: '#fff',
    },
  });

export default WeatherScreen;
