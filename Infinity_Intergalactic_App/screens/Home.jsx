import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const handlePlanetButtonPress = () => {
    navigation.navigate('Planets');
  };

  const handleLoginButtonPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterButtonPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to Planets" onPress={handlePlanetButtonPress} />
      <Button title="Go to Login" onPress={handleLoginButtonPress} />
      <Button title="Go to Register" onPress={handleRegisterButtonPress} />
    </View>
  );
}
