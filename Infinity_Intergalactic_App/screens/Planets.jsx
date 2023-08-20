import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PlanetShortDesc } from './PlanetShortDesc'; // Import the image data
import backgroundImage from '../assets/images/mainbg.jpg'; // Import the background image
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

        <Text style={item.styles?.nameText}>{item.name}</Text>

          {item.category === 'Recent destination' && (
            <View
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{ translateX: -150 }, { translateY: -15 }],
                backgroundColor: 'transparent',
                padding: 10,
              }}
            >
            <Text style={item.styles.description}>{item.description}</Text>
            <Text style={item.styles.distance}>{`${item.distance} | ${item.duration}`}</Text>
            <Text style={{ alignSelf: 'flex-end', ...item.styles.price }}>{item.price}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={backgroundImage} style={{width: '20px',height: '20px' ,position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} resizeMode="cover" />
      <View style={{ paddingHorizontal: 20 }}>

        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10, color: '#A6A6A6' }}>Recent Destinations</Text>
        <FlatList
          data={PlanetShortDesc.filter((item) => item.category === 'Recent destination')}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={renderSliderItem}
        />

        <Text style={{color: '#A6A6A6', fontSize: 20, fontWeight: 'bold', marginVertical: 10, color: '#A6A6A6' }}>Popular Destinations</Text>
        <FlatList
          data={PlanetShortDesc.filter((item) => item.category === 'Popular destinations')}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={renderSliderItem}
        />

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, color: '#A6A6A6' }}>All Destinations</Text>
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
