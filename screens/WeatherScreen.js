// WeatherScreen.js
import React from 'react';
import { View, Text, Image,StyleSheet, ScrollView,FlatList } from 'react-native';

const dummyForecastData = [
  { id: '1', day: 'Mon', temperature: 28, weatherIcon: require('../assets/sunny.png') },
  { id: '2', day: 'Tue', temperature: 25, weatherIcon: require('../assets/cloudy.jpeg') },
  { id: '3', day: 'Wed', temperature: 22, weatherIcon: require('../assets/rainy.png') },
  // Add more forecast data
];

const WeatherScreen = () => {
  // Dummy data (replace with actual weather data)
  const currentWeather = {
    temperature: 25, // in Celsius
    weatherIcon: require('../assets/sunny.png'), // replace with actual weather icon
    weatherDescription: 'Sunny',
  };

  const renderForecastItem = ({ item }) => (
    <View style={styles.forecastItem}>
      <Text style={styles.forecastDay}>{item.day}</Text>
      <Image source={item.weatherIcon} style={styles.forecastIcon} />
      <Text style={styles.forecastTemperature}>{`${item.temperature}°C`}</Text>
    </View>
  );

  const additionalWeatherDetails = {
    humidity: 60, // in percentage
    windSpeed: 10, // in km/h
    // Add more details as needed
  };

  return (
   <ScrollView>
    <View style={styles.container}>
      {/* ... (existing code) */}
      <Text style={styles.sectionTitle}>5-Day Forecast</Text>
      <FlatList
        data={dummyForecastData}
        keyExtractor={(item) => item.id}
        renderItem={renderForecastItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Additional Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Humidity:</Text>
        <Text style={styles.detailValue}>{`${additionalWeatherDetails.humidity}%`}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Wind Speed:</Text>
        <Text style={styles.detailValue}>{`${additionalWeatherDetails.windSpeed} km/h`}</Text>
      </View>
    </View>
   </ScrollView>
)};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  weatherDescription: {
    fontSize: 20,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  forecastItem: {
    alignItems: 'center',
    margin: 8,
  },
  forecastDay: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  forecastIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginVertical: 4,
  },
  forecastTemperature: {
    fontSize: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: 16,
  },
});

export default WeatherScreen;
