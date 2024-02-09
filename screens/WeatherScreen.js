import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
    <View>
      <Text>Weather Information</Text>
      <Text>Country: {weatherData?.location?.country}</Text>
      <Text>Region: {weatherData?.location?.region}</Text>
      <Text>Wind Speed: {weatherData?.current?.wind_kph} kph</Text>
      <Text>Humidity: {weatherData?.current?.humidity}%</Text>
      <Text>Cloudy: {weatherData?.current?.cloud}%</Text>
      <Text>Rainy: {weatherData?.current?.precip_mm > 0 ? 'Yes' : 'No'}</Text>
      <Text>Sunny: {weatherData?.current?.is_day ? 'Yes' : 'No'}</Text>
      <Text>Feels Like: {weatherData?.current?.feelslike_c} °C</Text>

      <TextInput
        placeholder="Enter location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <Button title="Get Weather" onPress={fetchWeatherData} />
    </View>
  );
};

export default WeatherScreen;
