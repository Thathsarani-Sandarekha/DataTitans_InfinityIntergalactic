import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
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
    navigation.navigate('BookingHistory');
  };

  const handleBackToFlyButtonPress = () => {
    navigation.navigate('Planets');
  };

  return (
    <ImageBackground
      source={require('../assets/images/mainbg.jpg')} // Replace with your background image path
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 20 }}>
        <Text style={{textAlign:"center", color:"#FFFFFF", fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>
          E-Ticket
        </Text>

        <Text style={{fontSize:18,marginBottom:15,fontWeight: 'bold'}}>From              : {fromLocation}</Text>
        <Text style={{fontSize:18,marginBottom:15,fontWeight: 'bold'}}>To                    : {toLocation}</Text>
        <Text style={{fontSize:18,marginBottom:15,fontWeight: 'bold'}}>Trip Date      : {tripDate.toDateString()}</Text>
        <Text style={{fontSize:18,marginBottom:15,fontWeight: 'bold'}}>Return Date : {returnDate.toDateString()}</Text>
        <Text style={{fontSize:18,marginBottom:15,fontWeight: 'bold'}}>Passengers  : {passengers}</Text>
        <Text style={{fontSize:18,marginBottom:15,fontWeight: 'bold'}}>Class               : {selectedClass}</Text>
        
        <Button title="Book History" onPress={handleBookHistoryButtonPress}
                  style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 5,
                  }}
                  color="#0A6E73" />
        <Button title="Back to Fly" onPress={handleBackToFlyButtonPress} 
                  style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 5,
                  }}
                  color="#0A6E73"/>
      </View>
    </ImageBackground>
  );
}