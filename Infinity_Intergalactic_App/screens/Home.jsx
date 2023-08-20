import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const handlePlanetButtonPress = () => {
    navigation.navigate('Planets');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to Planets" onPress={handlePlanetButtonPress} />
    </View>
  );
}
