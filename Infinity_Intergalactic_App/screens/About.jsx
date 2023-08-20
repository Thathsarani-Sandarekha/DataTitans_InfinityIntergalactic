import React from 'react';
import { View, Text } from 'react-native';

export default function About() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>About Us</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
      Infinity Intergalactic is a trailblazing space travel enterprise driven by exploration and innovation, aiming to make space accessible to all. With cutting-edge technology and a resolute commitment to safety, we're turning the dream of space travel into an attainable adventure for everyone.
      </Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>Mission</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
      To democratize space travel and make the cosmos accessible to all.
      </Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>Vision</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
      A world where space exploration is as commonplace as air travel.
      </Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>Objective</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
      To create safe, innovative, and transformative space travel experiences for adventurers and scientists alike.
      </Text>
    </View>
  );
}
