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
    title: "Nyamira Manga Hills",
    describe:
      "Discover the latest tourist attraction in Nyamira.",
      image: require("../assets/attraction1.jpeg"),
      image2: require("../assets/hotel1.jpeg"),
    image3: require("../assets/hotel1.jpeg"),
    description:`Welcome to the enchanting Nyamira Manga Hills, a captivating tourist attraction nestled in the heart of Nyamira County, Kenya. Immerse yourself in the breathtaking beauty of this picturesque destination, where lush greenery, rolling hills, and vibrant landscapes create a mesmerizing tapestry of nature's wonders.

      Nyamira Manga Hills offers a serene retreat for nature enthusiasts and adventure seekers alike. As you ascend the hills, you'll be treated to panoramic views that stretch as far as the eye can see. The undulating terrain, adorned with tea plantations and indigenous flora, adds to the allure of this idyllic setting.

      `,
      description2:`
      The air is crisp and invigorating, making it the perfect escape from the hustle and bustle of everyday life. Whether you're an avid hiker or simply seeking a peaceful getaway, Nyamira Manga Hills has something for everyone. Hike along well-maintained trails, where every step unveils new vistas and the opportunity to connect with the unspoiled beauty of the Kenyan countryside.
      
      The charm of Nyamira Manga Hills isn't limited to its natural splendor; the local culture adds an extra layer of richness to the experience. Engage with the warm and welcoming communities that call this region home, and discover the traditions and customs that have been passed down through generations.
      `,
      description3:`
     For those looking to capture the magic of Nyamira Manga Hills, don't forget your camera. Sunrise and sunset paint the hills in hues of gold and pink, creating a captivating spectacle that's sure to leave a lasting impression.`,
  },
  {
    id: "2",
    title: "Travel Tips for an Amazing Experience",
    describe:
      "Get valuable tips to make your travel experience unforgettable.",
      image: require("../assets/attraction2.jpeg"),
      image2: require("../assets/hotel1.jpeg"),
      image3: require("../assets/hotel1.jpeg"),
      description:`Welcome to the enchanting Nyamira Manga Hills, a captivating tourist attraction nestled in the heart of Nyamira County, Kenya. Immerse yourself in the breathtaking beauty of this picturesque destination, where lush greenery, rolling hills, and vibrant landscapes create a mesmerizing tapestry of nature's wonders.
  
        Nyamira Manga Hills offers a serene retreat for nature enthusiasts and adventure seekers alike. As you ascend the hills, you'll be treated to panoramic views that stretch as far as the eye can see. The undulating terrain, adorned with tea plantations and indigenous flora, adds to the allure of this idyllic setting.
  
        `,
        description2:`
        The air is crisp and invigorating, making it the perfect escape from the hustle and bustle of everyday life. Whether you're an avid hiker or simply seeking a peaceful getaway, Nyamira Manga Hills has something for everyone. Hike along well-maintained trails, where every step unveils new vistas and the opportunity to connect with the unspoiled beauty of the Kenyan countryside.
        
        The charm of Nyamira Manga Hills isn't limited to its natural splendor; the local culture adds an extra layer of richness to the experience. Engage with the warm and welcoming communities that call this region home, and discover the traditions and customs that have been passed down through generations.
        `,
        description3:`
       For those looking to capture the magic of Nyamira Manga Hills, don't forget your camera. Sunrise and sunset paint the hills in hues of gold and pink, creating a captivating spectacle that's sure to leave a lasting impression.`,
    },
  {
    id: "3",
    title: "Special Discounts on Accommodations",
    describe: "Explore exclusive discounts on top-rated accommodations.",
    image: require("../assets/hotel2.jpeg"),
    image2: require("../assets/hotel1.jpeg"),
    image3: require("../assets/hotel1.jpeg"),
    description:`Welcome to the enchanting Nyamira Manga Hills, a captivating tourist attraction nestled in the heart of Nyamira County, Kenya. Immerse yourself in the breathtaking beauty of this picturesque destination, where lush greenery, rolling hills, and vibrant landscapes create a mesmerizing tapestry of nature's wonders.

      Nyamira Manga Hills offers a serene retreat for nature enthusiasts and adventure seekers alike. As you ascend the hills, you'll be treated to panoramic views that stretch as far as the eye can see. The undulating terrain, adorned with tea plantations and indigenous flora, adds to the allure of this idyllic setting.

      `,
      description2:`
      The air is crisp and invigorating, making it the perfect escape from the hustle and bustle of everyday life. Whether you're an avid hiker or simply seeking a peaceful getaway, Nyamira Manga Hills has something for everyone. Hike along well-maintained trails, where every step unveils new vistas and the opportunity to connect with the unspoiled beauty of the Kenyan countryside.
      
      The charm of Nyamira Manga Hills isn't limited to its natural splendor; the local culture adds an extra layer of richness to the experience. Engage with the warm and welcoming communities that call this region home, and discover the traditions and customs that have been passed down through generations.
      `,
      description3:`
     For those looking to capture the magic of Nyamira Manga Hills, don't forget your camera. Sunrise and sunset paint the hills in hues of gold and pink, creating a captivating spectacle that's sure to leave a lasting impression.`,
  },
];


const dummyFeaturesData = [
  {
    id: "1",
    county: "Narok",
    country:"Kenya",
    description:
      "Discover the latest tourist attraction in Masai Mara.",
      image: require("../assets/destination1.jpeg"),
  },
  {
    id: "2",
    county: "Nairobi",
    country:"Kenya",
    description:
      "Discover the latest tourist attraction in Masai Mara.",
      image: require("../assets/destination2.jpeg"),
  },
  {
    id: "3",
    county: "Muranga",
    country:"Kenya",
    description:
      "Discover the latest tourist attraction in Masai Mara.",
      image: require("../assets/destination3.jpeg"),
  },
  {
    id: "4",
    county: "Mombasa",
    country:"Kenya",
    description:
      "Discover the latest tourist attraction in Masai Mara.",
      image: require("../assets/destination4.jpeg"),
  },
  {
    id: "5",
    county: "Narok",
    country:"Kenya",
    description:
      "Discover the latest tourist attraction in Masai Mara.",
      image: require("../assets/destination5.jpeg"),
  },
];

const HomeScreen = ({ navigation }) => {
  const navigateToDetails = (NewsDetails) => {
    navigation.navigate('NewsDetails', NewsDetails);
  };
  const navigateToTrendingScreen = (TrendingScreen) => {
    navigation.navigate('TrendingScreen', TrendingScreen);
  };
  

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
        <Text style={{fontWeight:800, padding:15,fontSize:18}}>Trending Destinations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dummyFeaturesData.map((item) => (
        <TouchableOpacity onPress={() => navigateToTrendingScreen(item)}>
            <View horizontal showsHorizontalScrollIndicator={false}
              key={item.id} style={styles.featuredItem}>
              <Image
                source={item.image}
                style={{ width: 150, height: 100, borderRadius: 8 }}
              />
              <View>
                <Text style={{ margin: 8, fontWeight:500 }}>{item.county}, {item.country}</Text>
              </View>
            </View>
            </TouchableOpacity>
          ))}
          
          {/* Add more featured items */}
        </ScrollView>
        {/* News/Updates: */}
        <View style={styles.newsContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
            Latest News
          </Text>
          {dummyNewsData.map((item) => (
            <TouchableOpacity onPress={() => navigateToDetails(item)}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
              key={item.id} style={styles.newsItem}>
              <Image
                source={item.image}
                style={{ width: 120, height: 100, borderRadius: 8, marginRight:15 }}
              />
              <View>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>{item.describe}</Text>
              </View>
            </ScrollView>
            </TouchableOpacity>
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
