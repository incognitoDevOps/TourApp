// HomeScreen.js
import React from "react";
import { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";

const dummyAttractionsData = [
  {
    id: "1",
    title: "Nyamira Manga Hills",
    category: 'Natural',
    description: "Iconic Manga Hills located in Nyamira, Kenya.",
    image: require("../assets/attraction1.jpeg"),
    location: { latitude: 46.858844, longitude: 5.294350 },
    phoneNumber: '+254 111524408',
  },
  {
    id: "2",
    title: "Nairobi",
    category: 'Modern',
    description: "Incan citadel set high in the Mau Mountains in Nairobi.",
    image: require("../assets/attraction2.jpeg"),
    location: { latitude: 30.858844, longitude: 2.294350 },
    phoneNumber: '+254 113017255',
  },
  // Add more attractions
];

const categories = ["All", "Historical", "Natural", "Modern", "Cultural"];

const AttractionsScreen = ({ navigation }) => {

  const navigateToDetails = (attraction) => {
    navigation.navigate('AttractionDetails', attraction);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAttractions =
    selectedCategory === 'All'
      ? dummyAttractionsData
      : dummyAttractionsData.filter(
          (attraction) => attraction.category === selectedCategory
        );

  const renderAttractionItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
    <View style={styles.attractionItem}>
      <Image source={item.image} style={styles.attractionImage} />
      <Text style={styles.attractionTitle}>{item.title}</Text>
      <Text style={styles.attractionDescription}>{item.description}</Text>
    </View>
    </TouchableOpacity>
  );

  const renderCategoryButton = (category) => (
    <TouchableOpacity
      key={category}
      onPress={() => setSelectedCategory(category)}
      style={[
        styles.categoryButton,
        category === selectedCategory && styles.selectedCategoryButton,
      ]}
    >
      <Text style={styles.categoryButtonText}>{category}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View>
        <Image
          source={require("../assets/attractions_header.jpeg")}
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesContainer}>
            {categories.map(renderCategoryButton)}
          </View>
        </ScrollView>

        <FlatList
        data={filteredAttractions}
        keyExtractor={(item) => item.id}
        renderItem={renderAttractionItem}
      />

        {/* ... other components */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // ... (existing styles)
  attractionItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  attractionImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  attractionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },
  attractionDescription: {
    fontSize: 16,
    margin: 8,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#3498db",
    marginHorizontal: 8,
  },
  selectedCategoryButton: {
    backgroundColor: "#2980b9",
  },
  categoryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AttractionsScreen;
