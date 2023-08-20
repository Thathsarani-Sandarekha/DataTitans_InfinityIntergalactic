import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import * as MailComposer from 'expo-mail-composer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    try {
      await MailComposer.composeAsync({
        recipients: ['thathsaranisandarekha@gmail.com'],
        subject: subject,
        body: emailBody,
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Us</Text>
      <Text>We'll get back to you as soon as possible.</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        style={{ borderBottomWidth: 1, marginBottom: 10, height: 100 }}
      />
      <Button title="Send message" onPress={handleSendMessage} />
    </View>
  );
}