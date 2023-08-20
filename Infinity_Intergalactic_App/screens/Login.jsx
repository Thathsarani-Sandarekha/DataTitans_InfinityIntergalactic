import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ImageBackground } from 'react-native'; // Import ImageBackground
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!validateInputs()) {
      return;
    }

    if (username === 'user' && password === 'password') {
      Alert.alert('Success', 'Login successful!');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const handleRegisterLinkPress = () => {
    navigation.navigate('Register');
  };

  const validateInputs = () => {
    if (username.trim() === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password.');
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
        <Text style={{color: "#0A6E73", marginBottom: 20, fontSize: 20,fontWeight: 'bold'}}>Login Page</Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor={'#0A6E73'}
          value={username}
          onChangeText={setUsername}
          style={{ marginBottom: 10, width: 150, borderWidth: 1, fontSize: 15,padding: 5}}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={'#0A6E73'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ marginBottom: 10, width: 150, borderWidth: 1, fontSize: 15,padding: 5}}
        />

        <Button title="Login" onPress={handleLogin}
                  style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 5,
                  }}
                  color="#0A6E73" />
        <Text style={{ marginBottom: 5,color: "#0A6E73",fontSize: 15 }}>Don't have an account?</Text>
        <Button title="Register" onPress={handleRegisterLinkPress}
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