import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'expo-router';

export default function Information() {
  const { information } = useAuth();
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [university, setUniversity] = useState('');

  const handleInformation = async () => {
    const parsedPhone = Number(phone);

    if (isNaN(parsedPhone)) {
      console.log('Le numéro de téléphone doit être un nombre valide');
      return;
    }

    try {
      await information(parsedPhone, university);
      router.replace("/(tabs)");  
    } catch (err) {
      console.log('Erreur des informations', err);
    }
  };

  return (
    <View>
      <Text>Complète mon profil</Text>

      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="University"
        value={university}
        onChangeText={setUniversity}
      />

      <Button title="Valider" onPress={handleInformation} />
    </View>
  );
}
