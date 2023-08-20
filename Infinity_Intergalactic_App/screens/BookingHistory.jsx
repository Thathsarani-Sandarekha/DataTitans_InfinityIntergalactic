// BookingHistory.jsx
import React from 'react';
import { View, Text } from 'react-native';

export default function BookingHistory({ bookedTickets }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Booking History</Text>
      {/* Display the list of booked tickets */}
      {bookedTickets.map((ticket, index) => (
        <View key={index}>
          <Text>Planet: {ticket.planetName}</Text>
          {/* Display other ticket details */}
        </View>
      ))}
    </View>
  );
}
