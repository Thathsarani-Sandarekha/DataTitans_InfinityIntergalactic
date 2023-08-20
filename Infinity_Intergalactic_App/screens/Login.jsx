import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!validateInputs()) {
      return;
    }

    // Add your actual login logic here
    // For now, let's just simulate successful login
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

    // You can add more advanced validation rules here if needed

    return true;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Page</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <Button title="Login" onPress={handleLogin} />
      <Text style={{ marginTop: 10 }}>Don't have an account?</Text>
      <Button title="Register" onPress={handleRegisterLinkPress} />
    </View>
  );
}
