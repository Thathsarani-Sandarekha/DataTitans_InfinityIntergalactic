import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, ImageBackground } from 'react-native';
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

  const futuristicMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  const futuristicYears = Array.from({ length: 50 }, (_, index) => (60 + index).toString());

  return (
    <ImageBackground
      source={require('../assets/images/mainbg.jpg')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 60 }}>
        <Text style={{ color: '#FFFFFF', marginBottom: '10%', fontSize: 25, textAlign:'center'}}>
          Payment Page
        </Text>

        <TextInput
          placeholder="Card Number"
          placeholderTextColor="#0A6E73"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
          style={{ marginBottom: 20, padding: 5, borderWidth: 1, fontSize: 20, color:'#fff', textAlign:'center' }}
        />

        <View style={{ flexDirection: 'row', marginBottom: 10}}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={{ color: '#0A6E73', marginBottom: 5, fontSize: 18}}>Exp Month</Text>
            <Picker
              selectedValue={expiryMonth}
              onValueChange={(itemValue) => setExpiryMonth(itemValue)}
            >
              {futuristicMonths.map((month, index) => (
                <Picker.Item label={month} value={index.toString()} key={index} />
              ))}
            </Picker>
          </View>

          <View style={{ flex: 1, marginBottom: 10}}>
            <Text style={{ color: '#0A6E73', marginBottom: 5, fontSize: 18}}>Exp Year</Text>
            <Picker
              selectedValue={expiryYear}
              onValueChange={(itemValue) => setExpiryYear(itemValue)}
            >
              {futuristicYears.map((year) => (
                <Picker.Item label={year} value={year} key={year} />
              ))}
            </Picker>
          </View>
        </View>

        <TextInput
          placeholder="Cardholder's Name"
          placeholderTextColor="#0A6E73"
          value={cardholderName}
          onChangeText={setCardholderName}
          style={{ marginBottom: 10, padding: 5, borderWidth: 1, fontSize: 20, color:'#fff' }}
        />

        <TextInput
          placeholder="CVV"
          placeholderTextColor="#0A6E73"
          value={cvv}
          onChangeText={setCVV}
          keyboardType="numeric"
          style={{ marginBottom: 10, padding: 5, borderWidth: 1, fontSize: 20, color:'#fff', textAlign:"center" }}
        />

        <Button
          title="Back to Booking"
          onPress={handleBackToBookingPress}
          style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
          color="#0A6E73"
        />

        <Button
          title="Confirm Payment"
          onPress={handleConfirmButtonPress}
          style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
          }}
          color="#0A6E73"
        />
      </View>
    </ImageBackground>
  );
}