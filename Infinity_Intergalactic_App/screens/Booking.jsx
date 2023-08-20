import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

export default function BookingPage({ route }) {
  const { planetName } = route.params;
  const navigation = useNavigation();

  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [tripDate, setTripDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [passengers, setPassengers] = useState('');
  const [selectedClass, setSelectedClass] = useState('Economy');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleCancelPress = () => {
    navigation.goBack(); // Navigate back to the previous screen (PlanetDescription)
  };

  const handlePaymentPress = () => {
    // Navigate to the PaymentPage or any other payment-related screen
    // You can replace 'PaymentPage' with the actual screen name for payment
    navigation.navigate('PaymentPage', {
      planetName,
      fromLocation,
      toLocation,
      tripDate,
      returnDate,
      passengers,
      selectedClass,
    });
  };

  const handleTripDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setTripDate(selectedDate);
    }
  };

  const handleReturnDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setReturnDate(selectedDate);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Booking Page for {planetName}</Text>
      
      <TextInput
        placeholder="From"
        value={fromLocation}
        onChangeText={setFromLocation}
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <TextInput
        placeholder="To"
        value={toLocation}
        onChangeText={setToLocation}
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <Button title="Select Trip Date" onPress={() => setShowDatePicker(true)} />
      <Text>Trip Date: {tripDate.toDateString()}</Text>

      {showDatePicker && (
        <DateTimePicker
          value={tripDate}
          mode="date"
          onChange={handleTripDateChange}
        />
      )}

      <Button title="Select Return Date" onPress={() => setShowDatePicker(true)} />
      <Text>Return Date: {returnDate.toDateString()}</Text>

      {showDatePicker && (
        <DateTimePicker
          value={returnDate}
          mode="date"
          onChange={handleReturnDateChange}
        />
      )}

      <TextInput
        placeholder="Number of Passengers"
        value={passengers}
        onChangeText={setPassengers}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
      />

      <Picker
        selectedValue={selectedClass}
        onValueChange={(itemValue) => setSelectedClass(itemValue)}
        style={{ width: 200 }}
      >
        <Picker.Item label="Economy" value="Economy" />
        <Picker.Item label="Business" value="Business" />
        <Picker.Item label="First Class" value="First Class" />
      </Picker>

      <Button title="Cancel" onPress={handleCancelPress} />
      <Button title="Payment" onPress={handlePaymentPress} />
    </View>
  );
}
