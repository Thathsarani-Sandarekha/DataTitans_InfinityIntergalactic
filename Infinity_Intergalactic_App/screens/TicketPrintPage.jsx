import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TicketPrintPage({ route }) {
  const {
    planetName,
    fromLocation,
    toLocation,
    tripDate,
    returnDate,
    passengers,
    selectedClass,
  } = route.params;

  const navigation = useNavigation();

  const handleBookHistoryButtonPress = () => {
    navigation.navigate('BookingHistory'); // Navigate to Booking History page
  };

  const handleBackToFlyButtonPress = () => {
    navigation.navigate('Planets'); // Navigate back to Planets page
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ticket Print Page for {planetName}</Text>
      
      <Text>From: {fromLocation}</Text>
      <Text>To: {toLocation}</Text>
      <Text>Trip Date: {tripDate.toDateString()}</Text>
      <Text>Return Date: {returnDate.toDateString()}</Text>
      <Text>Passengers: {passengers}</Text>
      <Text>Class: {selectedClass}</Text>
      
      <Button title="Book History" onPress={handleBookHistoryButtonPress} />
      <Button title="Back to Fly" onPress={handleBackToFlyButtonPress} />
    </View>
  );
}

