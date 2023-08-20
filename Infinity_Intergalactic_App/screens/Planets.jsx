import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PlanetShortDesc } from './PlanetShortDesc';// Import the image data

export default function Planets() {
  const navigation = useNavigation();

  const navigateToDescription = (planetName) => {
    navigation.navigate('PlanetDescription', { planetName });
  };

  const renderSliderItem = ({ item }) => {
    const imageStyle =
      item.category === 'Recent destination'
        ? { width: 300, height: 300 }
        : { width: 200, height: 200 };
  
    return (
      <TouchableOpacity onPress={() => navigateToDescription(item.name)}>
        <View style={{ alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <Image source={item.image} style={[imageStyle, { margin: 10 }]} resizeMode="cover" />
          
          {/* Name */}
          <Text style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontSize: 16 }}>
            {item.name}
          </Text>
          
          {/* Small Description */}
          {item.category === 'Recent destination' && (
            <View style={{ position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -150 }, { translateY: -15 }], backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10 }}>
              <Text style={{ color: 'white', fontSize: 14 }}>{item.description}</Text>
              <Text style={{ color: 'white', fontSize: 12 }}>{`${item.distance} | ${item.duration}`}</Text>
              <Text style={{ alignSelf: 'flex-end', color: 'white', fontSize: 14 }}>{item.price}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  
  

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        {/* Slider 1 */}
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Recent Destinations</Text>
        <FlatList
          data={PlanetShortDesc.filter((item) => item.category === 'Recent destination')}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={renderSliderItem}
        />

        {/* Slider 2 */}
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Popular Destinations</Text>
        <FlatList
          data={PlanetShortDesc.filter((item) => item.category === 'Popular destinations')}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={renderSliderItem}
        />

        {/* Slider 3 */}
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>All Destinations</Text>
        <FlatList
          data={PlanetShortDesc.filter((item) => item.category === 'All destinations')}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={renderSliderItem}
        />
      </View>
    </ScrollView>
  );
}