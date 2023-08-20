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
    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', paddingTop: 20, paddingRight: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Button title="Go to Planets" onPress={handlePlanetButtonPress} />
        <View style={{ flexDirection: 'row' }}>
          <Button title="Login" onPress={handleLoginButtonPress} />
          <Button title="Register" onPress={handleRegisterButtonPress} />
        </View>
      </View>
    </View>
  );
}
