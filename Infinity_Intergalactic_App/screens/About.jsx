import React from 'react';
import { View, Text } from 'react-native';

export default function About() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>About Us</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        Welcome to our About Us page! We are dedicated to providing high-quality products and excellent customer service.
      </Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        Our mission is to deliver innovative solutions that meet the needs of our customers and exceed their expectations.
      </Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        Thank you for choosing us. If you have any questions or feedback, please don't hesitate to reach out to us.
      </Text>
    </View>
  );
}
