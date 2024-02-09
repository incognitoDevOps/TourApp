// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AttractionsScreen from '../screens/AttractionsScreen';
import AccommodationScreen from '../screens/AccommodationScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import WeatherScreen from '../screens/WeatherScreen';
import AttractionDetailsScreen from '../screens/AttractionDetailsScreen';
import NewsDetails from '../screens/NewsDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Attractions" component={AttractionsScreen} />
        <Stack.Screen name="Accommodation" component={AccommodationScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="AttractionDetails" component={AttractionDetailsScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
