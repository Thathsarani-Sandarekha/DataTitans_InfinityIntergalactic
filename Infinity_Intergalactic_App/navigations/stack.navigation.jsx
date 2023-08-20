import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PlanetDescription, Planets, BookingPage, PaymentPage, TicketPrintPage, BookingHistory, Home, Login, Register} from '../screens';

const Stack = createStackNavigator();

const stackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Planets" component={Planets} />
      <Stack.Screen name="PlanetDescription" component={PlanetDescription} />
      <Stack.Screen name="BookingPage" component={BookingPage} />
      <Stack.Screen name="PaymentPage" component={PaymentPage} />
      <Stack.Screen name="TicketPrintPage" component={TicketPrintPage} />
      <Stack.Screen name="BookingHistory" component={BookingHistory} />
    </Stack.Navigator>
  );
};

export default stackNavigation;
