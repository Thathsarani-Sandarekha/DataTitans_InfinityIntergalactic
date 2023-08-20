import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';// Make sure to provide the correct path to your constants file
import response2 from './responseValues'; // Import the response object
import { Picker } from '@react-native-picker/picker'; 

export default function PaymentPage({ route }) {
  const { planetName, fromLocation, toLocation, tripDate, returnDate, passengers, selectedClass } = route.params;
  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cvv, setCVV] = useState('');

  const handleBackToBookingPress = () => {
    navigation.goBack(); // Navigate back to the BookingPage
  };

  const handleConfirmButtonPress = () => {
    if (cardNumber === '' || expiryMonth === '' || expiryYear === '' || cardholderName === '' || cvv === '') {
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
      cardNumber,
      expiryMonth,
      expiryYear,
      cardholderName,
      cvv
    });

    // ... (existing response code)
  };

  // Generate futuristic month options for the year 2160
  const futuristicMonths = [
    "Januvium", "Februvium", "Marsium", "Aprilius", "Maium", "Junium",
    "Julium", "Augurium", "Septemvis", "Octarium", "Novemvis", "Decembra"
  ];

  // Generate a range of futuristic years starting from 2160
  const futuristicYears = Array.from({ length: 50 }, (_, index) => (2160 + index).toString());

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

      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Picker
          selectedValue={expiryMonth}
          onValueChange={(itemValue) => setExpiryMonth(itemValue)}
          style={{ flex: 1, marginRight: 5 }}
        >
          {futuristicMonths.map((month, index) => (
            <Picker.Item label={month} value={index.toString()} key={index} />
          ))}
        </Picker>
        
        <Picker
          selectedValue={expiryYear}
          onValueChange={(itemValue) => setExpiryYear(itemValue)}
          style={{ flex: 1, marginLeft: 5 }}
        >
          {futuristicYears.map((year) => (
            <Picker.Item label={year} value={year} key={year} />
          ))}
        </Picker>
      </View>

      <TextInput
        placeholder="Cardholder's Name"
        value={cardholderName}
        onChangeText={setCardholderName}
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
