// HomeScreen.js
import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";

const dummyNewsData = [
  {
    id: "1",
    title: "New Tourist Attraction Opened",
    description:
      "Discover the latest tourist attraction in the heart of the city.",
  },
  {
    id: "2",
    title: "Travel Tips for an Amazing Experience",
    description:
      "Get valuable tips to make your travel experience unforgettable.",
  },
  {
    id: "3",
    title: "Special Discounts on Accommodations",
    description: "Explore exclusive discounts on top-rated accommodations.",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Image
          source={require("../assets/header-img.jpeg")}
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", margin: 16 }}>
          Welcome to Your Tourist App!
        </Text>
        <TouchableOpacity
          onPress={({ Attractions }) => navigation.navigate("Attractions")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Explore Attractions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={({ Accommodation }) => navigation.navigate("Accommodation")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Accommodation</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={({ Restaurant }) => navigation.navigate("Restaurant")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Restaurant</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={({ Weather }) => navigation.navigate("Weather")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Weather</Text>
          </View>
        </TouchableOpacity>

        {/* Featured Destinations: */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featuredItem}>
            <Image
              source={require("../assets/destination1.jpeg")}
              style={{ width: 150, height: 100, borderRadius: 8 }}
            />
            <Text style={{ margin: 8 }}>Masai Mara, Kenya</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image
              source={require("../assets/destination2.jpeg")}
              style={{ width: 150, height: 100, borderRadius: 8 }}
            />
            <Text style={{ margin: 8 }}>Nairobi, Kenya</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image
              source={require("../assets/destination3.jpeg")}
              style={{ width: 150, height: 100, borderRadius: 8 }}
            />
            <Text style={{ margin: 8 }}>Mt. Kenya, Kenya</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image
              source={require("../assets/destination4.jpeg")}
              style={{ width: 150, height: 100, borderRadius: 8 }}
            />
            <Text style={{ margin: 8 }}>Mombasa, Kenya</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image
              source={require("../assets/destination5.jpeg")}
              style={{ width: 150, height: 100, borderRadius: 8 }}
            />
            <Text style={{ margin: 8 }}>Narok, Kenya</Text>
          </View>
          {/* Add more featured items */}
        </ScrollView>

        {/* News/Updates: */}
        <View style={styles.newsContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
            Latest News
          </Text>
          {dummyNewsData.map((item) => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
              key={item.id} style={styles.newsItem}>
              <Image
                source={require("../assets/destination1.jpeg")}
                style={{ width: 120, height: 100, borderRadius: 8, marginRight:15 }}
              />
              <View>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
              </View>
            </ScrollView>
          ))}
        </View>

        {/* ... other components */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3498db",
    padding: 16,
    borderRadius: 8,
    margin: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  featuredItem: {
    marginRight: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  featuredItemImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  featuredItemText: {
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  newsContainer: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    margin: 8,
  },
  newsItem: {
    marginBottom: 16,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    width:190,
  },
  newsDescription: {
    fontSize: 16,
    width:190,
  },
});

export default HomeScreen;
