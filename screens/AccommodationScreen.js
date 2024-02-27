// AccommodationScreen.js
import React from 'react';
import { useState } from 'react';
import { View,StyleSheet, Text, Image, FlatList,TouchableOpacity,ScrollView } from 'react-native';

const amenitiesFilters = ['Free Wi-Fi', 'Breakfast Included', 'Swimming Pool', 'Gym'];

const dummyAccommodationsData = [
  {
    id: '1',
    name: 'Luxury Hotel',
    location: 'City Center, Paris',
    price: '$200 - $400 per night',
    amenities: ['Free Wi-Fi', 'Swimming Pool', 'Gym'],
    image: require('../assets/hotel1.jpeg'),
  },
  {
    id: '2',
    name: 'Cozy Bed & Breakfast',
    location: 'Countryside, Tuscany',
    price: '$100 - $200 per night',
    amenities: ['Breakfast Included', 'Garden View'],
    image: require('../assets/hotel2.jpeg'),
  },
  // Add more accommodations
];

const AccommodationScreen = ({ navigation }) => {

  const navigateToBooking = (Booking) => {
    navigation.navigate('Booking', Booking);
  };

  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleAmenityFilter = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((selected) => selected !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const renderAmenityFilter = (amenity) => (
    <TouchableOpacity
      key={amenity}
      onPress={() => toggleAmenityFilter(amenity)}
      style={[
        styles.filterButton,
        selectedAmenities.includes(amenity) && styles.selectedFilterButton,
      ]}
    >
      <Text style={styles.filterButtonText}>{amenity}</Text>
    </TouchableOpacity>
  );


  const renderAccommodationItem = ({ item }) => (
    <ScrollView>
    <View style={styles.accommodationItem}>
    <Image source={item.image} style={styles.accommodationImage} />
      <View style={styles.container}>
      <Text style={styles.accommodationName}>{item.name}</Text>
      <TouchableOpacity onPress={() => navigateToBooking(item)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Book</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.accommodationLocation}>{item.location}</Text>
      <Text style={styles.accommodationPrice}>{item.price}</Text>
      <Text style={styles.accommodationAmenities}>{item.amenities.join(', ')}</Text>
      
    </View>
    </ScrollView>
  );

  return (
    <ScrollView>
    <View>
    <Image
          source={require("../assets/attractions_header.jpeg")}
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
        />
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {amenitiesFilters.map(renderAmenityFilter)}
      </ScrollView>
      </View>
      
      <FlatList
        data={dummyAccommodationsData.filter((accommodation) =>
          selectedAmenities.every((amenity) => accommodation.amenities.includes(amenity))
        )}
        keyExtractor={(item) => item.id}
        renderItem={renderAccommodationItem}
      />
    </View>
</ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',  
    alignItems: 'center',
    marginTop: 5,
    // padding: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    // fontSize:15,
  },
  accommodationItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  accommodationImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  accommodationName: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    margin: 8,
  },
  accommodationLocation: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  accommodationPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  accommodationAmenities: {
    fontSize: 14,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 8,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#3498db',
    marginHorizontal: 8,
    marginVertical: 8,
  },
  selectedFilterButton: {
    backgroundColor: '#2980b9',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccommodationScreen;
