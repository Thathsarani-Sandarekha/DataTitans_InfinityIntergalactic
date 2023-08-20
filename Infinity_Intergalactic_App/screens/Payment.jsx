import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
    navigation.goBack();
  };

  const handleConfirmButtonPress = () => {
    if (!validateInputs()) {
      return;
    }

    // Payment processing logic (mocked with an alert)
    Alert.alert('Success', 'Payment successful! Your ticket is confirmed.');

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
  };

  const validateInputs = () => {
    if (
      cardNumber.trim() === '' ||
      expiryMonth === '' ||
      expiryYear === '' ||
      cardholderName.trim() === '' ||
      cvv === ''
    ) {
      Alert.alert('Error', 'Please fill in all the payment details');
      return false;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      Alert.alert('Error', 'Invalid card number');
      return false;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      Alert.alert('Error', 'Invalid CVV');
      return false;
    }

    return true;
  };

  const futuristicMonths = [
    'Januvium', 'Februvium', 'Marsium', 'Aprilius', 'Maium', 'Junium',
    'Julium', 'Augurium', 'Septemvis', 'Octarium', 'Novemvis', 'Decembra'
  ];

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
