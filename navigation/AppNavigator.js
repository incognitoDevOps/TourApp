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
import Booking from '../screens/Booking';
import TrendingScreen from '../screens/TrendingScreen';
import BookResturant from '../screens/BookResturant';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Attractions" component={AttractionsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Accommodation" component={AccommodationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Weather" component={WeatherScreen} options={{headerShown: true}}/>
        <Stack.Screen name="AttractionDetails" component={AttractionDetailsScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} options={{headerShown: false}}/>
        <Stack.Screen name="Booking" component={Booking} options={{headerShown: false}}/>
        <Stack.Screen name="TrendingScreen" component={TrendingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="BookResturant" component={BookResturant} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
