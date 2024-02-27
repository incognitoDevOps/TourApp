// RestaurantScreen.js
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const dummyRestaurantsData = [
  {
    id: "1",
    name: "Italian Delight",
    cuisine: "Italian",
    location: "Downtown, Rome",
    rating: 4.5,
    image: require("../assets/restaurant1.jpeg"),
  },
  {
    id: "2",
    name: "Sushi Paradise",
    cuisine: "Japanese",
    location: "Shibuya, Tokyo",
    rating: 4.8,
    image: require("../assets/restaurant2.jpeg"),
  },
  // Add more restaurants
];

const cuisineFilters = ["Italian", "Japanese", "Mexican", "Thai"];

const RestaurantScreen = ({ navigation }) => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const BookResturant = (BookResturant) => {
    navigation.navigate("BookResturant", BookResturant);
  };
  const toggleCuisineFilter = (cuisine) => {
    setSelectedCuisine(cuisine === selectedCuisine ? null : cuisine);
  };

  const renderCuisineFilter = (cuisine) => (
    <TouchableOpacity
      key={cuisine}
      onPress={() => toggleCuisineFilter(cuisine)}
      style={[
        styles.filterButton,
        cuisine === selectedCuisine && styles.selectedFilterButton,
      ]}
    >
      <Text style={styles.filterButtonText}>{cuisine}</Text>
    </TouchableOpacity>
  );

  const renderRestaurantItem = ({ item }) => (
    <View style={styles.restaurantItem}>
      <Image source={item.image} style={styles.restaurantImage} />
      <View style={styles.container}>
      <Text style={styles.restaurantName}>{item.name}</Text>
      <TouchableOpacity onPress={() => BookResturant(item)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Book</Text>
        </View>
      </TouchableOpacity>
      </View>
      <Text style={styles.restaurantCuisine}>{item.cuisine}</Text>
      <Text style={styles.restaurantLocation}>{item.location}</Text>
      <Text style={styles.restaurantRating}>{`Rating: ${item.rating}`}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View>
      <Image
          source={require("../assets/attractions_header.jpeg")}
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filtersContainer}>
            {cuisineFilters.map(renderCuisineFilter)}
          </View>
        </ScrollView>
        <FlatList
          data={dummyRestaurantsData.filter((restaurant) =>
            selectedCuisine ? restaurant.cuisine === selectedCuisine : true
          )}
          keyExtractor={(item) => item.id}
          renderItem={renderRestaurantItem}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  restaurantItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  restaurantImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },
  restaurantCuisine: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  restaurantLocation: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  restaurantRating: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
    marginBottom: 8,
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#3498db",
    marginHorizontal: 8,
    marginVertical: 8,
  },
  selectedFilterButton: {
    backgroundColor: "#2980b9",
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    // fontSize:15,
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',  
    alignItems: 'center',
    marginTop: 5,
    // padding: 10,
  },
});

export default RestaurantScreen;
