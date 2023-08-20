import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PlanetDescription({ route }) {
  const { planetName } = route.params;
  const navigation = useNavigation();

  const handleBookButtonPress = () => {
    navigation.navigate('BookingPage', { planetName });
  };

  const handleBackButtonPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Description of {planetName}</Text>
      <Button title="Book" onPress={handleBookButtonPress} />
      <Button title="Back" onPress={handleBackButtonPress} />
    </View>
  );
}