import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ImageBackground } from 'react-native'; // Import ImageBackground
import { useNavigation } from '@react-navigation/native';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    if (!validateInputs()) {
      return;
    }

    Alert.alert('Success', 'Registration successful!');
  };

  const handleLoginLinkPress = () => {
    navigation.navigate('Login');
  };

  const validateInputs = () => {
    if (username.trim() === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', 'Please fill in all the registration details.');
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return false;
    }

    return true;
  };

  return (
    <ImageBackground
      source={require('../assets/images/mainbg.jpg')} // Replace with the actual path to your image
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{  backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 60  }}>
        <Text style={{color: "#0A6E73", marginBottom: 20, fontSize: 20,fontWeight: 'bold'}}>Register Page</Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor={'#0A6E73'}
          value={username}
          onChangeText={setUsername}
          style={{marginBottom: 10, width: 150, borderWidth: 1, fontSize: 15,padding: 5}}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={'#0A6E73'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ marginBottom: 10, width: 150, borderWidth: 1, fontSize: 15,padding: 5}}
        />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={'#0A6E73'}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={{marginBottom: 10, width: 150, borderWidth: 1, fontSize: 15,padding: 5 }}
        />

        <Button title="Register" onPress={handleRegister}
                          style={{
                            backgroundColor: 'red',
                            padding: 10,
                            borderRadius: 5,
                          }}
                          color="#0A6E73" />
        <Text style={{ marginBottom: 5,color: "#0A6E73",fontSize: 15 }}>Already have an account?</Text>
        <Button title="Login" onPress={handleLoginLinkPress}
                          style={{
                            backgroundColor: 'red',
                            padding: 10,
                            borderRadius: 5,
                          }}
                          color="#0A6E73" />
      </View>
    </ImageBackground>
  );
}