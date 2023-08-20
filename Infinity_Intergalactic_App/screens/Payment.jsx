import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';// Make sure to provide the correct path to your constants file

export default function PaymentPage({ route }) {
  const { planetName, fromLocation, toLocation, tripDate, returnDate, passengers, selectedClass } = route.params;
  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleBackToBookingPress = () => {
    navigation.goBack(); // Navigate back to the BookingPage
  };

  const handleConfirmButtonPress = () => {
    if (cardNumber === '' || expiryDate === '' || cvv === '') {
      Alert.alert('Error', 'Please fill in all the payment details');
      return;
    }

    // Perform payment processing logic here
    // For demonstration purposes, let's show an alert
    Alert.alert('Success', 'Payment successful! Your ticket is confirmed.');

    // After payment success, navigate to the TicketPrintPage
    navigation.navigate('TicketPrintPage', {
      planetName,
      fromLocation,
      toLocation,
      tripDate,
      returnDate,
      passengers,
      selectedClass,
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Payment Page for {planetName}</Text>
      
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <TextInput
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={setCVV}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <Button title="Back to Booking" onPress={handleBackToBookingPress} />
      <Button title="Confirm Payment" onPress={handleConfirmButtonPress} />
    </View>
  );
}
