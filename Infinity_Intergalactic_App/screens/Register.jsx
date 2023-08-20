import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
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

    // Add your actual registration logic here
    // For now, let's just simulate successful registration
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

    // You can add more advanced validation rules here if needed

    return true;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Page</Text>

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

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <Button title="Register" onPress={handleRegister} />
      <Text style={{ marginTop: 10 }}>Already have an account?</Text>
      <Button title="Login" onPress={handleLoginLinkPress} />
    </View>
  );
}
