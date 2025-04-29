import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function ForgotScreen() {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    // Ici tu peux appeler une API de réinitialisation de mot de passe
    Alert.alert('Réinitialisation envoyée', `Un lien a été envoyé à ${email}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Mot de passe oublié</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Réinitialiser le mot de passe" onPress={handleReset} />
    </View>
  );
}
